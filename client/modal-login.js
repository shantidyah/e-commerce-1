Vue.component('modal-login', {
    props:['warning'],
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      login:function(){
          this.$emit('login',{email:this.email,password:this.password})
      }
    },
    template: `
        <div>
        <div class="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              email:
              <input type="text" class="form-control" id="usr" name="email" v-model="email">
              password:
              <input type="password" class="form-control"  name="password" v-model="password">
              </div>
              <h5 style='color:red'>{{warning}}</h5>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" v-on:click='login'>Login</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
        </div>
        </div>
    `
  })
