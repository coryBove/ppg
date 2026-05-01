var announcementItems = 
{   
    item1 : {
        name : "Welcome Home",
        description : 
        `
        Free Food, Raffle Baskets
        <br/>
        Doors at 5PM, Speaker at 8PM
        `,
        date: "<br/><em>Founder's Day</em><br/>Thursday, June 11",
        location: "LOCATION - <br/> Community Vineyard Church <br/> 2543 State Road Cuyahoga Falls OH 44221",
        shareFlier: "announcements/PPG-Welcome-Home-2026.jpg",
        upcoming: "YES"
    },
    item2 : {
        name : "Primary Purpose Group Poker Run 2026",
        description : 
        `
        Ride the Freedom and Feel the Adventure
        `,
        date: "<br/><em>Saturday, August 22, 2026</em><br/>9:00 AM",
        location: "LOCATION - <br/> Octogon Shelter <br/> 801 Truxell Rd, Peninsula OH 44264",
        shareFlier: "announcements/PPG-Poker-Run-2026.jpg",
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
