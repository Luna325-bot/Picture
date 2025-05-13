import axios from "axios";

const searchImages = async(term) => {
    const url ="https://api.unplash.com/search/photos/?cliente_id=mea_wO4d5eX5iQlsz7myoczd1fxme_5y5jLJpA_Xy0o"
    
    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages
