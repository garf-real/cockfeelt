import { createApp } from "vue";

let app = createApp({
  methods: {
    increment() {
      this.version++;
    },
  },
  data() {
    return {
      appName: "cockfeelt",
      version: 0,
      styleObject: {
        color: "red",
        fontSize: "20px",
      },
      styleObject2: {
        color: "blue",
        fontSize: "20px",
      },
      array: [
        {
          name: "Joe Mama",
          img: "https://i1.sndcdn.com/avatars-miHKENJ2qMb2UlmE-OUtNlA-t240x240.jpg",
          age: 69,
        },
        {
          name: "Joe Daddy",
          img: "https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg",
          age: 420,
        },
        {
          name: "Mike Oxlong",
          img: "https://miro.medium.com/max/680/0*xKPZugCRjQv9rFQc.jpg",
          age: 696969,
        },
        {
          name: "Sea Kyle",
          img: "https://pbs.twimg.com/profile_images/1313579240051412992/mkHGgIOZ_400x400.jpg",
          age: 691337,
        },
        {
          name: "Nick Gurr",
          img: "https://i1.sndcdn.com/artworks-A4o7nThhZjXnQtOD-vnPtYg-t500x500.jpg",
          age: 123,
        },
        {
          name: "Jonathan Joestar",
          img: "https://i.ytimg.com/vi/li0AIdHY6pQ/maxresdefault.jpg",
          age: 69420,
        },
      ],
      message: "",
      checked: false,
      selected: [],
    };
  },
});

app.mount("#app");
