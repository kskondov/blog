<template>
  <h1>User {{$route.params.id}}</h1>
</template>
<script>
export default {
  validate(data) {
    console.log(data.params)
    return /^\d+$/.test(data.params.id)
  }
}
</script>
