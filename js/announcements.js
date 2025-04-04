var announcementItems = 
{   
    item1 : {
        name : "Primary Purpose Group 12 Step Workshop",
        description : 
        `        
        <s>Come learn the fundamentals of the 12 steps of Alcoholics Anonymous - Hosted by Mike B.</s>
        <br/>Listen to the 2025 workshop on <a href="https://youtu.be/zb7OW29KDwQ">YouTube</a>
        `,
        date: "Ended Sunday, March 30th 2025 7:00PM",
        location: "Community Vineyard Church - 2543 State Rd. Cuyahoga Falls, OH 44223",
        shareFlier: "announcements/12-step-workshop-2025.jpg",
        upcoming: "YES"
    },
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
