const app = Vue.createApp({
  data() {
    return {
      charactors: [
        { name: "rufy", src: "./img/rufy.png" },
        { name: "zoro", src: "./img/zoro.png" },
        { name: "nami", src: "./img/nami.png" },
      ],
    };
  },
  methods: {
    changeshow() {
      this.canShow = !this.canShow;
    },
  },
});
app.mount("#app");
