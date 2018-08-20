Vue.component('modal-register', {
    props:['warning'],
    data(){
      return{
        lname:'',
        fname:'',
        address:'',
        city:'',
        email:'',
        password:''
      }
    },
    methods:{
      register:function(){
          this.$emit('register',{
            lname:this.lname,
            fname:this.fname,
            address:this.address,
            city:this.city,
            email:this.email,
            password:this.password
          })
      }
    },
    template: `
        <div>
        <div class="modal fade" id="modal-register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Register</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              firstname:
              <input type="text" class="form-control" name="fname" v-model="fname">
              lastname:
              <input type="text" class="form-control" name="lname" v-model="lname">
              email:
              <input type="text" class="form-control" name="email" v-model="email">
              address:
              <input type="text" class="form-control" name="address" v-model="address">
              city:
              <input type="text" class="form-control" name="city" v-model="city">
              password:
              <input type="password" class="form-control" name="password" v-model="password">
              </div>
              <h5 style='color:red'>{{warning}}</h5>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" v-on:click='register'>Save</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
        </div>
        </div>
    `
  })
