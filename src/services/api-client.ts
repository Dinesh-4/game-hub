import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b819511060c1431facd6bf7ce83f5e52'
    }
})