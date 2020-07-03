export const navBar = async () => {
    try {
    const url = "https://alidhuniya.github.io/linguisticCenter/lang.json";
    const data = await fetch (url);
    const res = await data.json();
    const result = res;
    console.log(result.navBar);

    document.querySelector(".header__logoImg").innerHTML = ` 
   <div class="header__logo"> 
    <div>
    <img class="header__logoImg" src="${result.navBar[0].logoImg}" alt=""> 
    </div>
   </div> 
    `;
 
    document.querySelector(".header__h1").innerHTML = ` ${result.navBar[0].logoHeading} `;

}

catch (error) {
    console.log("failed", error);
}
    
}