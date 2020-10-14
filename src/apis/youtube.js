import axios from "axios";
const KEY = "AIzaSyDBtRz7ws7uvZRctZJB8jUtQ26uoHcvE7w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
