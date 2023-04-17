
function getImgUrl(imgName){
    return new URL(`../img/${imgName}`, import.meta.url).href;
}

export {getImgUrl};