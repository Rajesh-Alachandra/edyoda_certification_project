console.log("Player Details Script Loaded");

var teamId = window.location.search.split("=")[1];
console.log("Team Id --> " + teamId);

var playerId = window.location.search.split("=")[2];
console.log("Player Id --> " + playerId);

const teamNames = ["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"];
var selectedTeam = teamNames[teamId - 1];

const teamInfo = [
  {
    id: 1,
    key: "CSK",
    logoURL: "../images/csk.png",
    title: "Chennai Super Kings",
    topBatsman: "Suresh Raina",
    topBowler: "Dwayne Bravo",
    championCount: 3,
  },

  {
    id: 2,
    key: "RCB",
    logoURL: "../images/RCB.png",
    title: "Royal Challengers Bangalore",
    topBatsman: "Virat Kohli",
    topBowler: "Harshal Patel",
    championCount: 0,
  },

  {
    id: 3,
    key: "MI",
    logoURL: "../images/MI.png",
    title: "Mumbai Indians",
    topBatsman: "Rohit Sharma",
    topBowler: "Jasprit Bumrah",
    championCount: 5,
  },

  {
    id: 4,
    key: "RR",
    logoURL: "../images/RR.png",
    title: "Rajastan Royals",
    topBatsman: "Sanju Samson",
    topBowler: "Jayadev Unadkat",
    championCount: 1,
  },

  {
    id: 5,
    key: "KKR",
    logoURL: "../images/KKR.png",
    title: "Kolkata Knight Riders",
    topBatsman: "Andre Russel",
    topBowler: "Sunil Narine",
    championCount: 2,
  },

  {
    id: 6,
    key: "SRH",
    logoURL: "../images/SRH.png",
    title: "Sun Risers Hyderabad",
    topBatsman: "David Warner",
    topBowler: "Bhuvaneshwar Kumar",
    championCount: 1,
  },

  {
    id: 7,
    key: "PK",
    logoURL: "../images/PK.png",
    title: "Punjab Kings",
    topBatsman: "KL Rahul",
    topBowler: "Mohammad Shami",
    championCount: 0,
  },

  {
    id: 8,
    key: "DC",
    logoURL: "../images/DC.png",
    title: "Delhi Capitals",
    topBatsman: "Shikar Dhawan",
    topBowler: "Avesh Khan",
    championCount: 0,
  },
];

var playerListLocal = JSON.parse(localStorage.getItem("player-list"));

// =====Function to create player details=====>

function createPlayerDetails(obj) {
  var playerInfo = document.getElementById("player-info");

  var imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image");

  var playerPic = document.createElement("img");
  playerPic.innerHTML = obj.photoURL;

  imageWrapper.appendChild(playerPic);
  playerPic.innerHTML = obj.photoURL;

  playerInfo.appendChild(imageWrapper);

  var detailsWrapper = document.createElement("div");
  detailsWrapper.classList.add("description");

  var plName = document.createElement("h2");
  plName.innerHTML = obj.fullName;
  detailsWrapper.appendChild(plName);

  var tName = document.createElement("h3");
  tName.innerHTML = "Team: <span>" + teamInfo[teamId - 1].title + "</span>";
  detailsWrapper.appendChild(tName);

  var plRole = document.createElement("h4");
  plRole.innerHTML = "Role: <span>" + obj.role + "</span>";
  detailsWrapper.appendChild(plRole);

  var plPrice = document.createElement("h4");
  plPrice.innerHTML = "Price : <span> " + obj.price + "</span>";
  detailsWrapper.appendChild(plPrice);

  var plStatus = document.createElement("h4");
  var check;
  if (obj.isPlaying === true) {
    check = "Playing";
  } else {
    check = "On-Bench";
  }

  plStatus.innerHTML = "Status : <span>" + check + "</span>";
  detailsWrapper.appendChild(plStatus);

  playerInfo.appendChild(detailsWrapper);
}

createPlayerDetails(playerListLocal[selectedTeam][playerId]);
