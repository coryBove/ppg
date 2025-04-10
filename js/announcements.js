var announcementItems = 
{   
    item1 : {
        name : "Welcome Home",
        description : 
        `
        Please join us for the Primary Purpose Group's 4th Annual Welcome Home Meeting.
        <br/>
        Lead - Kent C. (Sandusky, Ohio)
        <br/>
        Free BBQ Dinner Provided. Games, Door Prizes, Raffles
        `,
        date: "Thursday June 5, 2025 - Doors 5pm, Food 6pm, Lead 8pm",
        location: "Community Vineyard Church - 2543 State Rd. Cuyahoga Falls, OH 44223",
        shareFlier: "announcements/welcome-home-2025.jpg",
        upcoming: "YES"
    }
};

function displayAnnouncements(announcementItems) {    
    for(x in announcementItems) {
        var mainDiv = document.getElementById('announcementDiv');
        var div = document.createElement("div");
        var divColumn =document.createElement("div");
        var name = document.createElement("p");
        var description = document.createElement("p");
        var date = document.createElement("p");
        var location = document.createElement("p");
        var shareFlier = document.createElement("a");
        
        name.className = "fw-bold";
        description.className = "lead";

        name.innerHTML = announcementItems[x].name;
        description.innerHTML =  announcementItems[x].description;                
        date.innerHTML = announcementItems[x].date;
        location.innerHTML =  announcementItems[x].location;                
        shareFlier.innerHTML = "See flier for more info"
        shareFlier.href = announcementItems[x].shareFlier;
        shareFlier.download = announcementItems[x].shareFlier;

        divColumn.appendChild(name);
        divColumn.appendChild(description);
        divColumn.appendChild(date);
        divColumn.appendChild(location);
        divColumn.appendChild(shareFlier);
        
        divColumn.className = "card";        

        div.appendChild(divColumn);

        mainDiv.appendChild(div);
    };
}

displayAnnouncements(announcementItems);
