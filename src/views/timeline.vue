<template>
<div>
<myLoader v-if="loader"></myLoader>
    <div class="container mt-3 mt-lg-5">
        <div class="row">
            <div class="col-12 col-lg-8 m-auto">
                <div class="card mb-3" v-for="(item, i) in myarray" :key="i" v-on:click="showProfile(item)">
                    <div class="card-body" v-if ='item.id % 2 == 0'>
                        <h5 class="text-success">{{item.name}}</h5>
                        <small class="text-muted">{{item.address.city}}, {{item.address.street}} ({{item.address.zipcode}})</small>
                       <!-- <p class="mb-0">{{item.username}}</p>
                        <p class="mb-0">{{item.phone}}</p>
                        <p class="mb-0">{{item.email}}</p>
                        <p class="mb-0">{{item.website}}</p>-->
                    </div>
                    <div class="card-body" v-if ='item.id % 2 != 0'>
                        <h5 class="text-danger">{{item.name}}</h5>
                        <small class="text-muted ">{{item.address.city}}, {{item.address.street}} ({{item.address.zipcode}})</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import myLoader from '../components/loader';
export default {
    name: 'timeline',
    components: {
        myLoader
    },
    data() {
        return{
            myarray: [],
            loader: true
        }
    },
    mounted() {
      this.$axios.get(`${this.$url}/users`)
      .then(res =>{
        this.myarray = res.data;
        this.loader = false
      })
      .catch(err =>{
          if(err) {
            //   console.log(err)
          }
      })
    },
    methods: {
        showProfile(item){
            this.$router.push({ path: '/profile/' +item.id })
        }
    }
}
</script>
<style scopped>
    .text-success{
        
    }
</style>