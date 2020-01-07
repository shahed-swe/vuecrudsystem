<template>
    <div>
    <myLoader v-if="loader"></myLoader>
        <div class="container mt-3 mt-lg-5">
            <div class="row">
                <div class="col-12 col-lg-6 m-auto">
                    <div class="card">
                        <div class="card-body" v-if="user">
                            <h4>{{user.name}}</h4>
                            <p>{{user.email}}</p>
                            <p>{{user.phone}}</p>
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
    name: 'profile',
    components: {
        myLoader
    },
    data() {
        return{
            userId: this.$route.params.id,
            user: '',
            loader: true
        }
    },
    mounted() {
        this.$axios.get(`${this.$url}/users/` + this.userId)
        .then(res => {
            this.user = res.data
            this.loader = false
        })
        .catch(err => {
            if(err) {
                console.log(err)
            }
        })
    }
}
</script>
<style>
    
</style>