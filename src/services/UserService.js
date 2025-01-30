const BASE_URL = "http://127.0.0.1:5000/";

export async function getAllUsers(){
    try {
        const response  = await fetch(BASE_URL+'users');
        if(!response){
            throw new Error(`Err or: ${response.status}`)
        }
    } catch (error) {
        return null
    }
}

