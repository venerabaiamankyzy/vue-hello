// console.log("Vue OK", Vue);

const app = Vue.createApp({
  data() {
    return {
      message: "Hello, My Friend!",

      image: "./img/_.jpeg",
    };
  },
});
app.mount("#root");
