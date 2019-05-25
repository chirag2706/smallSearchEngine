import Axios from 'axios';
const KEY = 'AIzaSyCdY6ho-rCJrYlPnP6kqRsemTsxcg8bp20';

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        key:KEY,
        maxResults:50
    }
});