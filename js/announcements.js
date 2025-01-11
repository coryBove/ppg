var announcementItems = 
{   
    item1 : {
        name : "Primary Purpose Group 12 Step Workshop",
        description : 
        `        
        Come learn the fundamentals of the 12 steps of Alcoholics Anonymous - Hosted by Mike B.
        `,
        date: "Begins Sunday January 12th at 7:00PM",
        location: "Community Vineyard Church - 2543 State Rd. Cuyahoga Falls, OH 44223",
        shareFlier: "announcements/12-step-workshop-2025.jpg",
        upcoming: "YES"
    },
    item2 : {
        name : "PPG Monday Night 12&12 1 Year Anniversary",
        description : 
        `        
        Doors 5:30pm, Food at 6:00pm, Speakers at 7:00pm, Main Dish Provided. Covered Dishes welcome.
        `,
        date: "Monday March 3, 2025",
        location: "Church of God - 2106 4th St Cuyahoga Falls, OH 44221",
        shareFlier: "announcements/12n12-1-year-anniversary.jpg",
        upcoming: "YES"
    },
    item3 : {
        name : "Big Book Conference Banquet",
        description : 
        `        
        Doors 6:00pm, Dinner at 7:00pm, Speaker (Chris C.) at 8:00pm. Tickets are $25 in support of the 1st annual Big Book Conference. 
        `,
        date: "Saturday, Febuary 15th 2025",
        location: "Community Vineyard Church - 2543 State Rd. Cuyahoga Falls, OH 44223",
        shareFlier: "announcements/big-book-conference-banquet.jpg",
        upcoming: "YES"
    },
    item4 : {
        name : "Big Book Conference",
        description : 
        `        
        Weekend conference event featuring John P, Bob D, Kent C, Paul Mc. Tickets $35.
        `,
        date: "Friday March 21 5:00pm-9:00pm, Saturday March 22 10:00am-8:00pm, Sunday March 23 10:00am-12:30pm",
        location: "The Windam - 6200 Quarry Ln, Independence, OH 44131",
        shareFlier: "announcements/big-book-conference.jpg",
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
