const sideNav = document.querySelector("#sidenav");
const toggleBtn = document.querySelector("span.toggle-btn");
const closeBtn = document.querySelector(".closeBtn");

toggleBtn.addEventListener("click", openSideNav);
closeBtn.addEventListener("click", closeSideNav);

function openSideNav() {
    sideNav.style = `left: 0px; transition: .2s ease-in-out; width: 242px; `;
};

function closeSideNav() {
    sideNav.style = `left: -1000px; transition: .2s ease-in-out; width: 0`;
}
