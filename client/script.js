var app = new Vue({
  el: '#app',
  data: {
    items:[],
    shops:[],
    total:0,
    categorishop:[],
    seen:true,
    name:'',
    brand:'',
    price:'',
    url:'',
    category:'',
    img:'',
    islogin:false,
    warning:'',
    email:'',
    token: '',
    access:false,
    count:0,
    tokencust:'',
    idPro:'',
    dataForEdit: ''
  },
  created(){
    this.token = localStorage.getItem('token')
    this.tokencust = localStorage.getItem('customer')
    if(this.token||this.tokencust){
      this.islogin = true
    }
    this.products()
    console.log('disini sih jalan')
  },
  methods:{
    products : function(){
      console.log('harusnya masuk sini dong')
      axios.get('http://localhost:3000/')
      .then(result=>{
        console.log(result);
        
        this.items=result.data
      })
      .catch(err=>{
        console.log(err);
        
      })
    },
    addcart : function(item){
      if(this.tokencust || this.token){
        this.count += 1
        // this.shops.push(item)
        this.total += Number(item.price)
        var status = false
        for(var i = 0; i < this.shops.length; i++){
        //   console.log(this.shops[i]._id);
        //   console.log(item._id);
          if(this.shops[i]._id==item._id){
            this.shops[i].qty += 1
            status = true;
          }
  
        }
        if(!status){
          // this.shops
          item.qty = 1
          // console.log(this.shops);
          
          this.shops.push(item)
        }
        else{
          // console.log(this.shops);
        }
      }
      else{
        swal({
          title: "You must login to add this product to cart",
          icon: "warning"
        })
      }
    },
    categories : function(item){
      // this.items = this.temp
      this.seen = false
      this.categorishop = []
      for(var i = 0; i < this.items.length; i++){
        if(this.items[i].category==item){
          this.categorishop.push(this.items[i])
        }
      }
      // this.items = categorishop
      console.log(this.categorishop);
      
    },
    selectedImage : function(e){
      this.img = e.target.files[0]
    },
    addItems : function(){
      if(this.token){
        let formData = new FormData()
        formData.append('image',this.img)
        // console.log("ini form data",formData);
        var self = this
        // let token = localStorage.getItem('token')
        axios.post('http://localhost:3000/upload',formData)
        .then(result=>{
            // console.log(result);
            console.log("berhasil")
            axios({
                method: 'post',
                url: 'http://localhost:3000/addPro',
                data: {
                    name:self.name,
                    url:result.data.link,
                    brand: self.brand,
                    price: self.price,
                    category: self.category
                }
            })
            .then(items=>{
              // console.log(items);
              window.location = '/'
            })
            .catch(err=>{
                console.log(err);
                
            })
        })
        .catch(err=>{
          console.log(err);
        })
      }
      else{
        swal({
          title: "You dont have an access to add product",
          icon: "warning"
        })
      }
    },
    checkout : function(){
      localStorage.setItem('shops',JSON.stringify(this.shops))
      localStorage.setItem('total',this.total)
      window.location = 'checkout.html'
    },
    login : function(param){
      // this.warning = param.email
      var self = this
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/login',
        data: {
          email:param.email,
          password:param.password
        }
      })
      .then(token=>{
        if(token.data=='failed'){
          self.warning = "warning your password/email invalid !!"
          console.log("ini token",token.data);        
        }
        else{
          self.islogin = true
          if(token.data.role=='admin'){
            // console.log("ini token",token.data);
            // console.log("dia admin nih");
            self.warning = "success login"
            localStorage.setItem('token',token.data.token)
            window.location = '/'
          }
          else{
            // console.log("ini token",token.data);
            // console.log("dia cust nih");
            self.warning = "success login"
            // self.islogin = true
            localStorage.setItem('customer',token.data.token)
            window.location = '/'
          }
        }
      })
      .catch(err=>{
        console.log(err);
        
      })
    },
    logout : function(){
      localStorage.removeItem('token')
      localStorage.removeItem('customer')
      window.location = '/'
    },
    deletecart : function(item){
      this.count -= 1
      this.total -= Number(item.price)
      var status = false
      for(var i = 0; i < this.shops.length; i++){
        if(this.shops[i]._id==item._id){
          if(this.shops[i].qty<=1){
            this.shops.splice(i,1)
            status = true;
          }
          else{
            this.shops[i].qty -= 1
            status = true;
          }
        }
      }
      if(!status){
        // this.shops
        item.qty = 0
        console.log(this.shops);
        
        this.shops.push(item)
      }
      else{
        console.log(this.shops);
      }
    },
    register : function(customer){
      if(customer.email.length>0 && customer.password.length>0){
        axios({
          method: 'post',
          url: 'http://localhost:3000/customers',
          data: {
            fname:customer.fname,
            lname:customer.lname,
            email:customer.email,
            address:customer.email,
            city:customer.city,
            password:customer.password
          }
        })
        .then(cust=>{
          console.log(cust);
          swal("Success!", "", "success");
          // window.location = '/'
        })
        .catch(err=>{
          console.log(err);
          
        })
      }
      else{
        swal("Failed!", "you must complete the form registers", "warning");
      }
    },
    Delete(id){
      axios.delete(`http://localhost:3000/delete/${id}`)
      .then( delpro =>{
          // console.log(delpro);
          // this.product()     
          window.location = '/'
      })
      .catch( err =>{
          console.log(err);
      })
    },
    valueEdit(product){
      this.dataForEdit = product
      this.idPro = product._id
    },
    Edit(item){
      // console.log(item);
      
      if(this.img){
        let formData = new FormData()
        formData.append('image',this.img)
        axios.post('http://localhost:3000/upload',formData)
        .then(result=>{
          console.log("success upload to bucket");
          this.url = result.data.link
        })
        .catch(err=>{
          console.log(err);
          
        })
      }
      axios.put(`http://localhost:3000/edit/${this.idPro}`,{
        name : item.name,
        brand : item.brand,
        price : item.price,
        category : item.category,
        url : this.url
      })
      .then(product=>{
          this.name = ''
          this.brand = ''
          this.price = 0
          this.category = ''
          this.img = ''
          swal("", "You success edit a product!", "success")
          .then(value=>{
            this.getProduct()                   
          })
          .catch(err=>{
              console.log(err);
          }) 
        console.log('success add to database');
      })
      .catch(err=>{
        console.log(err);
      }) 
    }
  }
})
