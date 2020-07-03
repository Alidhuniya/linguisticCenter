export const navBar = async () => {
    try {
    const url = "https://alidhuniya.github.io/linguisticCenter/lang.json";
    const data = await fetch (url);
    const res = await data.json();
    const result = res;
    console.log(result.navBar);

    document.querySelector(".header__logoSection").innerHTML = ` 
   <div class="header__logo"> 
    <div>
    <img class="header__logoImg" src="${result.navBar[0].logoImg}" alt=""> 
    </div>
   </div> 
    `;
 
    document.querySelector(".header__h1").innerHTML = ` ${result.navBar[0].logoHeading} `;

    let output = '';

    for (let i in result.navBar[1][0]) {
        output += `
        <li class="header__navLi "><a class="header__hrf header__navLIColor" href="">${result.navBar[1][0].home}</a></li>
        <li class="header__navLi"><a class="header__hrf" href="">${result.navBar[1][1].about}</a></li>
        <li class="header__navLi"><a class="header__hrf" href="">${result.navBar[1][2].whyUs}</a></li>
        <li class="header__navLi"><a class="header__hrf" href="">${result.navBar[1][3].programs}</a></li>
        <li class="header__navLi"><a class="header__hrf" href="">${result.navBar[1][4].upcoming}</a></li>
        <li class="header__navLi"><a class="header__hrf" href="">${result.navBar[1][5].schedule}</a></li>
        <li class="header__navLi"><a class="header__hrf" href="">${result.navBar[1][6].contact}</a></li>
        <li class="header__navLi"><a class="header__hrf" href="">${result.navBar[1][7].phoneNumber}</a></li>
        `
    }

    document.querySelector(".header__rightNav").innerHTML = output;
}

catch (error) {
    console.log("failed", error);
}
    
}