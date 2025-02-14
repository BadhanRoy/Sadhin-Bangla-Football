// Sample player data 
const players = {
    forwards: [
        { name: "Rakib", image: "club/player/rakib.png" },
        { name: "Solaiman Diabate", image: "club/player/diabate.png" },
        { name: "S. Boetang", image: "club/boetang.png" }
    ],
    midfielders: [
        { name: "Miguel Figrera", image: "club/player/miguel.png" },
        { name: "M. Muzaffar", image: "club/player/muzaffar.png" },
        { name: "R. Fernandes", image: "club/player/fernandes.png" }
    ],
    defenders: [
        { name: "Isa Faisal", image: "club/player/isa.png" },
        { name: "Kamrul Islam", image: "club/player/kamrul.png" },
        { name: "Topu Bormon", image: "club/player/topu.png" },
        { name: "Ridoy", image: "club/player/ridoy.png" }
    ],
    goalkeeper: [
        { name: "Mitul Marma", image: "club/mitul.png" }
    ]
};

// Function to populate a line with players
function populateLine(lineClass, playersArray) {
    const line = document.querySelector(`.${lineClass}`);
    playersArray.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        playerDiv.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <span>${player.name}</span>
        `;
        line.appendChild(playerDiv);
    });
}

// Populate each line
populateLine("forwards", players.forwards);
populateLine("midfielders", players.midfielders);
populateLine("defenders", players.defenders);
populateLine("goalkeeper", players.goalkeeper);