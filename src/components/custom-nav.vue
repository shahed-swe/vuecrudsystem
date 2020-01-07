<template>
    <div class="custom-nav">
        <ul class="nav justify-content-center py-3 bg-secondary">
        <li class="nav-item px-2 mx-2">
            <router-link to="/">Timeline</router-link>
        </li>
        <li class="nav-item px-2 mx-2">
            <router-link to="/profile">Profile</router-link>
        </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'custom-nav'
}
</script>
<style>
.custom-nav a{
    color: #ffffff;
}
</style>

      