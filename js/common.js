
const navArr = ["Home", "About", "Destination", "Search"];
const navLink = document.getElementById("navLink");
navLink.classList.add("flex", "gap-12", "text-xl", "font-medium")
for(let item of navArr){
    let li = document.createElement("li");

    li.innerText = item;
    navLink.appendChild(li);
};