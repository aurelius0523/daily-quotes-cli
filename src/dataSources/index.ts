
import axios from "axios";

export const getQuote = async () => {
    const result = await axios.get('https://api.adviceslip.com/advice', {
        headers: {
            'accept': 'application/json'
        }
    })

    return result.data.slip.advice;
}

