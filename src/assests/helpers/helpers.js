
function getImgUrl(imgName){
    console.log(new URL(`./assests/img/${imgName}`, import.meta.url).href)
    return new URL(`./assests/img/${imgName}`, import.meta.url).href;
 }

export {getImgUrl};