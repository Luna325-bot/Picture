import axios from "axios";

const searchImages = async(term) => {
    const url ="https://api.unplash.com/search/photos/?cliente_id=DkFbDG3qknm48GL0-RXgleaeSmPndvaD2tOu9kj8t_U"
    
    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages
