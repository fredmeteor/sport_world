<template>
    <div>
        <div class="btn btn-primary my-2">
            Create Categories
        </div>
        <table class="table table-sm table-bordered">
            <thead>
                <th>ID</th>
                <th>Category</th>
               
            </thead>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ id }}</td>
                   
                    <td>{{ category }}</td>
                
                   
                </tr>
            </tbody>
        </table>
       // <page-controls />
    </div>
</template>

<script>

//import PageControls from "../PageControls";
import { mapGetters, mapActions } from "vuex";

export default {
    components: { },
    computed: {
        ...mapGetters({
                products: "productById"
            })
    },
    methods: {
        ...mapActions(["removeProduct"]),
       
    }
}

</script>