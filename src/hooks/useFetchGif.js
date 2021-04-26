//Hooks
import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    //para que se renderize una unica vez
    useEffect(() => {

        getGifts(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [category])

    return state
}