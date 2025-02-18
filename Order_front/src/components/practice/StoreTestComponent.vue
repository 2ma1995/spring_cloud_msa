<template>
<h1>store test</h1>
  <StoreTestComponentA/>
  <br><br>
  <StoreTestComponentB/>
</template>

<script >
import StoreTestComponentA from "@/components/practice/StoreTestComponentA.vue";
import StoreTestComponentB from "@/components/practice/StoreTestComponentB.vue";

export default {
  components: {
    StoreTestComponentA,StoreTestComponentB
  }
}
</script>
