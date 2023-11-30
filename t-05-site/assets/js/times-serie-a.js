var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "78b347a494mshc4f8986182b3754p1030eajsn836d495118e0");
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://api-football-v1.p.rapidapi.com/v3/teams?league=71&season=2023", requestOptions)
    .then(response => response.json())
    .then(data => {
        var container = document.getElementById("times-serie-a");

        data.response.forEach(teamData => {
            var team = teamData.team;

            var div = document.createElement("article");
            div.classList.add("time");

            var img = document.createElement("img");
            img.src = team.logo;

            var teamName = document.createElement("p");
            teamName.textContent = team.name;

            div.appendChild(img);
            div.appendChild(teamName);
            container.appendChild(div);
        });
    })
    .catch(error => console.log('error', error));