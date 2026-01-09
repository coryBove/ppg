var announcementItems = 
{   
    item1 : {
        name : "Connect the Dots",
        description : 
        `
        This hands-on 12-Step and Big Book workshop invites you to <b>Connect the Dots</b> between reading, doing, and living the 12 Steps of Alcoholics Anonymous.
        `,
        date: "WHEN - <br/><em>Beginning February 15th, 2026</em><br/>Every Sunday 7:00-8:30pm",
        location: "LOCATION - <br/> Community Vineyard Church <br/> 2543 State Road Cuyahoga Falls OH 44221",
        shareFlier: "announcements/PPG-Connect-the-Dots-AA-Workshop-2026.jpg",
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
