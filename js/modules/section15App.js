export const App = async () => {
    try {
        const url = "https://alidhuniya.github.io/linguisticCenter/lang.json";
        const data = await fetch (url);
        const res = await data.json();
        const result = res;
        // console.log(result.scheduleList[0].heading)

        document.querySelector(".container15__h1").innerHTML = `
        ${result.appHeading}
        `;

       document.querySelector(".container15__p").innerHTML = `
       ${result.appDesc}
       `
        document.querySelector(".container15__img").src = `${result.appIcon}`;
       

    }


    catch(error) {
        console.log("Failed", error);
    }
}



