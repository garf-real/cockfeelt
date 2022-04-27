<script>
export default {
  props: ["data"],
};
</script>

<style>
.profile {
  display: inline-block;
  border: solid black 1px;
  margin: 1rem;
  padding: 1rem;
}
</style>

<template>
  <div class="profile">
    {{ data.name }} is {{ data.age }} years old<br />
    This is what he looks like:
    <img :src="data.img" style="display: block" width="200" />
  </div>
</template>
