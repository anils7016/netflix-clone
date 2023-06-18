import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

//db28ecad2cf1389021777eb7860359a5

export default instance;