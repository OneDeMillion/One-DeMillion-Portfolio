const links = [
    {
        label: "Week 1",
        url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
    },
    {
        label: "Week 3",
        url: "week3/index.html"
    }
]

const myWeek = document.getElementById("moduleWeek");

for(let i=0; i < links.length; i++) {
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.setAttribute("href",links[i].url);
    link.innerText=links[i].label;
    li.appendChild(link);
    moduleWeek.appendChild(listItem);
}