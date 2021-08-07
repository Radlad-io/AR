
// Grabs Screen resolution
const media = {
    screen: {
        height: window.innerHeight,
        width: window.innerWidth,
    },
    source: {
        height: 960,
        width: 1280
    }
}


const marker = document.querySelector("a-nft")
marker.addEventListener("markerFound", (e)=>{ console.log(`Marker Found: ${e}`)})