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
                    <td>{{ p.id }}</td>
                   
                    <td>{{ p.category }}</td>
                
                   
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>


import { mapGetters, mapActions } from "vuex";

export default {
    components: { },
    computed: {
        ...mapGetters({
                products: "processedProduct"
            })
    },
    methods: {
        ...mapActions(["removeProduct"]),
       
    }
}

</script>