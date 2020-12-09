import axios from 'axios';


export const Fetch = async (level,callback) =>{

    await axios.get("https://opentdb.com/api.php",{
        params:{
            amount:5,
            difficulty:level,
            type:"multiple"
        }
    }
    ).then((res) => {
        callback(res.data.results);
    })
    
}
