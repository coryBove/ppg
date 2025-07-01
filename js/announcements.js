var announcementItems = 
{   
    item1 : {
        name : "Poker Run",
        description : 
        `
        Please join us for the Primary Purpose Group's Annual Poker Run.
        <br/>
        <ul>
        <li>
        Motorcycles & Cars Welcome
        </li>
        <li>
        Coffee & Snacks
        </li>
        <li>
        $25 Per Card
        </li>
        <li>
        Dinner Provided
        </li>
        <li>
        Prizes, Raffles, 50/50
        </li>
        </ul>
        `,
        date: "August 10th, 2025 9:00am Start, First Bike Out at 10:00am",
        location: "LOCATION - STARTING AT: <br/> Longwood Park Pavilion <br/> 1566 E Aurora Rd, Macedonia, OH 44056",
        shareFlier: "announcements/poker-run-2025.jpg",
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
