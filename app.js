const app = Vue.createApp({
  // template: "<h1>[Tempalte]</h1>",
  //  data
  data() {
    return {
      url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/329050/8d00ef7786c46f24808aeb394c3c936443f671ea.jpg",
      url2: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/329050/5da78aa9fa51e0d7fd1dd4f836f2e924f63c68db.jpg",
      showBooks: true,
      books: [
        { title: "wind", author: "roofus", img: "assets/1.jpg" },
        { title: "fire", author: "roofus", img: "assets/2.jpg" },
        { title: "earth", author: "ted", img: "assets/3.jpg" },
      ],
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggle() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(A, B) {
      console.log("event:", A, B);
    },
    handleMouseMove(e, d) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      console.log(this.x, this.y);
    },
  },
});

app.mount("#app");
