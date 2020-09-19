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
    let linkRef = document.createElement("a");
    linkRef.setAttribute("href",links[i].url);
    linkRef.innerText=links[i].label;
    listItem.appendChild(linkRef);
    moduleWeek.appendChild(listItem);
}

//week one exercises

function loadStory(){
    let storyName = document.getElementById("nameInput").value;
    let storyHTML = localStorage.getItem(storyName);
    document.getElementById("storyEditor").value = storyHTML;
}

function saveStory(){
    let storyName = document.getElementById("nameInput").value;
    let storyHTML = document.getElementById("storyEditor").value;
    localStorage.setItem(storyName, storyHTML);
}

function displayStory(){
    let storyHTML = document.getElementById("storyEditor").value;
    document.getElementById("storyDisplay").innerHTML = storyHTML;
}