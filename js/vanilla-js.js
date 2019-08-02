const sideNav = document.querySelector("#sidenav");
const toggleBtn = document.querySelector("span.toggle-btn");
const closeBtn = document.querySelector(".closeBtn");
const main  = document.querySelector("#main");

toggleBtn.addEventListener("click", openSideNav);
closeBtn.addEventListener("click", closeSideNav);

function openSideNav() {
    sideNav.style = `left: 0px; transition: .2s ease-in-out; width: 242px; `;
    main.style = `transition: all .21s linear; margin-left: 242px; opacity: .2`;
};

function closeSideNav() {
    sideNav.style = `left: -1000px; transition: .2s ease-in-out; width: 0`;
    main.style = `transition: all .21s linear; margin-left: 0px;`;
}