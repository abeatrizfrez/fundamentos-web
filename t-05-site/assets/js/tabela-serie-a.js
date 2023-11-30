var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "78b347a494mshc4f8986182b3754p1030eajsn836d495118e0");
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=71", requestOptions)
    .then(response => response.json())
    .then(data => {
        var container = document.getElementById("tabela");

        var table = document.createElement("table");
        table.classList.add("tabela"); 

        var thead = document.createElement("thead");
        var headerRow = document.createElement("tr");

        var headers = ["", "Clube", "", "Pts", "PJ", "VIT", "E", "DER", "GM", "GC", "SG"];
        headers.forEach(headerText => {
            var th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        var tbody = document.createElement("tbody");

        data.response[0].league.standings[0].forEach(teamStanding => {
            var row = document.createElement("tr");

            var rowData = [
                teamStanding.rank,
                teamStanding.team.logo,
                teamStanding.team.name,
                teamStanding.points,
                teamStanding.all.played,
                teamStanding.all.win,
                teamStanding.all.draw,
                teamStanding.all.lose,
                teamStanding.all.goals.for,
                teamStanding.all.goals.against,
                teamStanding.goalsDiff,
            ];

            rowData.forEach((text, index) => {
                var cell = document.createElement("td");

                if (index === 1) {
                    var logoImg = document.createElement("img");
                    logoImg.src = text;
                    logoImg.alt = teamStanding.team.name;
                    logoImg.height = 25;
                    logoImg.width = 25;
                    cell.appendChild(logoImg);
                } else {
                    cell.textContent = text;
                }
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        container.appendChild(table);
    })
    .catch(error => console.log('error', error));
