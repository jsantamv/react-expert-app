
export const getGifts = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IrJwy71enEpDaAVanUv2AWa7QamoITgN&q=${encodeURI(category)}&limit=5`

    const resp = await fetch(url)
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //console.log(gifs);
    
    return gifs
}