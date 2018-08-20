Vue.component('modal-cart', {
    props:['shops','total'],
    methods:{
        checkout:function(){
            this.$emit('checkout')
        },
        deletecart:function(shop){
            this.$emit('deletecart',shop)
        }
    },
    template: `
        <div>
        <div class="modal fade" id="modal-cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Cart</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row" v-for = "shop in shops">
                    <div class="col">
                        <h4><img v-bind:src="shop.url"></h4>
                    </div>
                    <div class="col align-self-center">
                        <div class="row">
                            <h4>{{shop.brand}}</h4>
                        </div>
                        <div class="row">
                            <h4>{{shop.name}}</h4>
                        </div>
                        <div class="row">
                            <h4>Rp {{shop.price}}</h4>
                        </div>
                        <div class="row">
                            <button v-on:click='deletecart(shop)'>min</button> <h4 class="col">qty: {{shop.qty}}</h4> 
                        </div>

                    </div>
                </div>
                <h4 id="total">total : Rp {{total}}</h4>
                </div>
                <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                  <button type="button" class="btn btn-primary" v-on:click="checkout">Checkout</button>
                </div>
              </div>
            </div>
        </div>
        </div>

    `
  })





