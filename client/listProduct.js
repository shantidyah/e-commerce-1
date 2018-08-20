Vue.component('products', {
    props:['listproduct'],
    methods:{
        addcart(item){
            this.$emit('add',item)
        }
    },
    template: `
    <div class="row">
    <div class="col" id="item" v-for = "item in listproduct">
        <div class="content-img">
        <img v-bind:src="item.url">
        <h4>Rp {{item.price}}</h4>
        <h5>{{item.brand}}</h5>
        <h6>{{item.name}}</h6>
        <button class="add" v-on:click="addcart(item)">Add to cart</button>
        </div>
    </div>
    </div>
    `
})
