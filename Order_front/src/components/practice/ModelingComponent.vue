<template>
  <h1>hello world{{ language }}</h1>
  <!--  v-model문법은 사용하면 양방향 데이터 바인딩-->
  <input type="text" v-model="value">
  <button @click="showValue()">변수변경사항 확인</button>
  <button @click="changeValue()">변수변경</button>
</template>
<script>
// import axios from "axios";

export default {
  data() {
    return {
      language: "java",
      value: "python",
    }
  },
  //created() 화면이 실행되기전 실행되는 hook함수(예시: axios.get(localhost:8080/member/list)같은걸 호출할때 사용)
  created() {
    alert("created 함수 호출 함수");
    //예시) const response = axios.get("localhost:8080/member/list");
    //예시) this.value = response.value;
  },
  methods: {
    showValue() {
      alert(this.value);
    },
    changeValue() {
      this.value = "C++"
    }
  },
}
</script>