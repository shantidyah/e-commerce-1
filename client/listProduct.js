Vue.component('products', {
    props:['listproduct','dataforedit'],
    methods:{
        addcart(item){
            this.$emit('add',item)
        },
        Delete(id){
            this.$emit('delete',id)
        },
        valueEdit(product){
            this.$emit('valedit',product)
        },
        selectedImage(e){
            this.$emit('select',e)
        },
        Edit(product){
            this.$emit('edit',product)
        }
    },
    template: `
    <div class="row">
    <div class="col-md-3" id="item" v-for = "item in listproduct">
        <div class="content-img">
        <img v-bind:src="item.url">
        <h4>Rp {{item.price}}</h4>
        <h5>{{item.brand}}</h5>
        <h6>{{item.name}}</h6>
        <button class="add" v-on:click="addcart(item)">Add to cart</button>
        <div align="center">
        <br>
        <button class="btn btn-info" style="margin-right:10px" data-toggle="modal" data-target="#modal-edit" @click="valueEdit(item)">edit</button>
        <button class="btn btn-danger" @click="Delete(item._id)">delete</button>
        </div>
        </div>
    </div>


        <div class="modal fade" id="modal-edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        type product:
                        <input type="text" class="form-control" id="name" name="name" v-model="dataforedit.name">
                        brand:
                        <input type="text" class="form-control" id="brand" name="brand" v-model="dataforedit.brand">
                        price:
                        <input type="number" class="form-control" id="price" name="price" v-model="dataforedit.price">
                        category:
                        <input type="text" class="form-control" id="category" name="category" v-model="dataforedit.category">
                        upload image :
                        <input type="file" v-on:change="selectedImage">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="Edit({name:dataforedit.name,brand:dataforedit.brand,price:dataforedit.price,category:dataforedit.category})" data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `
})
