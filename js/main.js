// console.log("Vue OK", Vue);

const app = Vue.createApp({
  data() {
    return {
      message: "HELLO!",
    };
  },
});

app.mount("#root");
