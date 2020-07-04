export const Tour = async () => {
    try {
        const url = "https://alidhuniya.github.io/linguisticCenter/lang.json";
        const data = await fetch (url);
        const res = await data.json();
        const result = res;
        // console.log(result.tourImg)

        const bgImgURL = `${result.tourImg}`
        
        const bgImg = document.querySelector(".container4__img").style.backgroundImage = `url(${bgImgURL})`;

    }

    catch(error) {
        console.log("Failed", error);
    }
}