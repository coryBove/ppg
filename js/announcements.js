var announcementItems = 
{   
    item1 : {
        name : "Mens Conference",
        description : 
        `
        Please join us for the Primary Purpose Group's Annual Mens Conference.
        <br/>
        <ul>
        <li>
        Coffee
        </li>
        <li>
        Lunch
        </li>
        <li>
        Snacks
        </li>
        <li>
        Free
        </li>
        <li>
        Speakers on a variety of topics
        </li>
        </ul>
        `,
        date: "October 18th, 2025 10:30am",
        location: "LOCATION - <br/> Community Vineyard Church <br/> 2543 State Road Cuyahoga Falls OH 44221",
        shareFlier: "announcements/PPG-Mens-Conference-2025.jpg",
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
