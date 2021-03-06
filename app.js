const app = Vue.createApp({
  // template: "<h1>[Tempalte]</h1>",
  //  data properties
  data() {
    return {
      url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/329050/8d00ef7786c46f24808aeb394c3c936443f671ea.jpg",
      url2: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/329050/5da78aa9fa51e0d7fd1dd4f836f2e924f63c68db.jpg",
      showBooks: true,
      filterFavBooks: false,
      books: [
        { title: "wind", author: "roofus", img: "assets/1.jpg", isFav: true },
        { title: "fire", author: "roofus", img: "assets/2.jpg", isFav: false },
        { title: "earth", author: "ted", img: "assets/3.jpg", isFav: true },
      ],
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  // methods
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
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
    toggleFavFilter(book) {
      this.filterFavBooks = !this.filterFavBooks;
    },
  },

  // computed properties
  computed: {
    getBooks() {
      if (this.filterFavBooks) return this.books.filter((book) => book.isFav);
      return this.books;
    },
  },
});

app.mount("#app");
