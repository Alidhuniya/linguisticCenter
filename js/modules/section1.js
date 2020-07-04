export const Section1 = async () => {
    const url = "https://alidhuniya.github.io/linguisticCenter/lang.json";
    const data = await fetch (url);
    const res = await data.json();
    const result = res;
    // console.log(result.mainContainerImg);

    document.querySelector(".container__womenImage").innerHTML = `
 
    <img class="container__section1Img" src="${result.mainContainerImg}" alt = "women at book sleves" />
   
    `;

    document.querySelector(".container__h1").innerHTML = `${result.containerHeading}`;
    document.querySelector(".container__btn").innerHTML = `${result.containerBtn}`;

}