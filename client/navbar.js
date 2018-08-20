Vue.component('navbar', {
    props:['shops','islogin','count'],
    data: function () {
      return {
        // count: 0
      }
    },
    methods:{
      category:function(input){
        this.$emit('category',input)
      },
      logout: function(){
        this.$emit('logout')
      }
    },
    template: `
        
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">shopyshop</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Category
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" v-on:click="category('sepatu')" >Sepatu</a>
              <a class="dropdown-item" v-on:click="category('tas')" >Tas</a>
              <a class="dropdown-item" v-on:click="category('jaket')" >Jaket</a>
            </div>
          </li>
        </ul>
          <div style='padding-right:5px'>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-add" >
              add
            </button>
          </div>
          <div v-if="!islogin">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-register" style="pading-right=5px">
              register
            </button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-login" style="pading-right=5px">
              login
            </button>
          </div>
          <div v-else>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-logout" v-on:click='logout'>
              logout
            </button>
          </div>
          <button id="itemCount">{{count}}</button>
          <img src="cart-icon.png" width="30" height="30" class= "icon-cart" alt="" data-toggle="modal" data-target="#modal-cart">


      </div>
    </nav>

    
    `
  })