const wordCategories = {
    nature: [
        { word: "fog", hint: "Thick vapor in the atmosphere that reduces visibility." },
        { word: "volcano", hint: "A mountain that erupts with lava and gas." },
        { word: "current", hint: "Continuous movement of water in a river or ocean." },
        { word: "shower", hint: "A brief period of rain." },
        { word: "landslide", hint: "Earth or rock sliding down a mountain slope." },
        { word: "glacier", hint: "A huge mass of ice moving slowly over land." },
        { word: "hurricane", hint: "A severe tropical storm with high winds." },
        { word: "drought", hint: "A long period with no rain leading to water shortage." },
        { word: "canyon", hint: "A deep gorge, typically one with a river flowing through it." },
        { word: "rainbow", hint: "An arch of colors in the sky caused by rain and sun." }
    ],
    food: [
        { word: "cardamom", hint: "An aromatic oriental spice." },
        { word: "ginger", hint: "A spicy root used in cooking and teas." },
        { word: "sorrel", hint: "A sour green herb used in soups." },
        { word: "burrata", hint: "Italian cheese with a creamy center." },
        { word: "saffron", hint: "The world's most expensive orange-colored spice." },
        { word: "cinnamon", hint: "A sweet spice made from the bark of a tree." },
        { word: "avocado", hint: "A green fruit often used to make guacamole." },
        { word: "truffle", hint: "An expensive fungus that grows underground." },
        { word: "pancake", hint: "A flat cake made of thin batter and fried." },
        { word: "lasagna", hint: "Italian dish made of layers of pasta and sauce." }
    ],
    music: [
        { word: "melody", hint: "A sequence of musical notes." },
        { word: "orchestra", hint: "A large group of musicians playing together." },
        { word: "symphony", hint: "An elaborate musical composition for an orchestra." },
        { word: "harmony", hint: "The combination of different musical notes played together." },
        { word: "rhythm", hint: "A strong, regular, repeated pattern of sound." },
        { word: "trumpet", hint: "A brass musical instrument with a flared bell." },
        { word: "violin", hint: "A string instrument played with a bow." },
        { word: "guitar", hint: "A stringed instrument usually with six strings." },
        { word: "opera", hint: "A theatrical work set to music for singers." },
        { word: "concert", hint: "A live musical performance." }
    ],
    technology: [
        { word: "cryptography", hint: "The art of writing or solving codes." },
        { word: "automation", hint: "The use of machines to perform tasks automatically." },
        { word: "processor", hint: "The main part of a computer that processes data." },
        { word: "software", hint: "The programs and data used by a computer." },
        { word: "database", hint: "A structured set of data held in a computer." },
        { word: "internet", hint: "The global network connecting millions of computers." },
        { word: "robotics", hint: "The branch of tech dealing with design of robots." },
        { word: "circuit", hint: "A complete path around which electricity flows." },
        { word: "keyboard", hint: "A panel of keys used to input text into a computer." },
        { word: "monitor", hint: "The screen used to display visual output." }
    ],
    animals: [
        { word: "vulture", hint: "A bird that eats dead animals." },
        { word: "panda", hint: "A black and white bear that eats bamboo." },
        { word: "zebra", hint: "A wild horse with black and white stripes." },
        { word: "kangaroo", hint: "An Australian animal that moves by jumping." },
        { word: "dolphin", hint: "A very intelligent sea mammal." },
        { word: "elephant", hint: "The largest living land animal with a trunk." },
        { word: "giraffe", hint: "An animal with a very long neck." },
        { word: "penguin", hint: "A flightless bird that lives in Antarctica." },
        { word: "leopard", hint: "A large cat with a spotted coat." },
        { word: "hamster", hint: "A small rodent often kept as a pet." }
    ],
    sports: [
        { word: "marathon", hint: "A long-distance running race." },
        { word: "stadium", hint: "A large building for sports events." },
        { word: "athlete", hint: "A person who competes in sports." },
        { word: "football", hint: "The most popular sport in the world." },
        { word: "swimming", hint: "Moving through water using arms and legs." },
        { word: "baseball", hint: "A game played with a bat and ball on a diamond." },
        { word: "tennis", hint: "A game played with rackets and a small ball." },
        { word: "cycling", hint: "The sport of riding a bicycle." },
        { word: "fencing", hint: "The sport of fighting with swords." },
        { word: "archery", hint: "The sport of shooting with a bow and arrows." }
    ],
    culture: [
        { word: "statue", hint: "A carved figure of a person or animal." },
        { word: "heritage", hint: "Traditions and qualities passed down through history." },
        { word: "museum", hint: "A place where historical objects are displayed." },
        { word: "theatre", hint: "A building where plays are performed." },
        { word: "festival", hint: "A day or period of celebration." },
        { word: "sculpture", hint: "The art of making three-dimensional forms." },
        { word: "literature", hint: "Written works like books and poems." },
        { word: "painting", hint: "The art of using paint to create images." },
        { word: "cinema", hint: "A place where films are shown." },
        { word: "costume", hint: "A set of clothes worn by an actor." }
    ],
    matem: [
        { word: "equation", hint: "A math statement that two things are equal." },
        { word: "geometry", hint: "The study of points, lines, and shapes." },
        { word: "fraction", hint: "A part of a whole number." },
        { word: "algebra", hint: "Math using letters to represent numbers." },
        { word: "triangle", hint: "A shape with three sides and three angles." },
        { word: "diameter", hint: "The width of a circle through its center." },
        { word: "pyramid", hint: "A shape with a square base and four triangular sides." },
        { word: "integral", hint: "A core concept in calculus." },
        { word: "division", hint: "The process of splitting into equal parts." },
        { word: "multiply", hint: "To add a number to itself multiple times." }
    ],
    gitnakanner: [
        { word: "einstein", hint: "Physicist who developed the theory of relativity." },
        { word: "newton", hint: "Scientist who discovered gravity." },
        { word: "tesla", hint: "Inventor known for alternating current (AC)." },
        { word: "curie", hint: "Scientist who studied radioactivity." },
        { word: "darwin", hint: "Scientist who proposed the theory of evolution." },
        { word: "galileo", hint: "Astronomer who used the first telescope." },
        { word: "edison", hint: "Inventor of the light bulb." },
        { word: "hawking", hint: "Physicist famous for his work on black holes." },
        { word: "pasteur", hint: "Scientist who discovered pasteurization." },
        { word: "mendel", hint: "The father of genetics." }
    ],
    trch: [
        { word: "falcon", hint: "A fast bird of prey." },
        { word: "ostrich", hint: "The largest bird, but it cannot fly." },
        { word: "eagle", hint: "A large bird of prey with keen eyesight." },
        { word: "parrot", hint: "A colorful bird that can mimic speech." },
        { word: "owl", hint: "A bird that is active at night." },
        { word: "sparrow", hint: "A small, common brown bird." },
        { word: "peacock", hint: "A bird famous for its beautiful tail feathers." },
        { word: "swan", hint: "A large white water bird with a long neck." },
        { word: "hummingbird", hint: "A tiny bird that can hover in the air." },
        { word: "pigeon", hint: "A common bird found in cities." }
    ],
    auto: [
        { word: "engine", hint: "The part of a car that produces power." },
        { word: "transmission", hint: "The gears that transmit power to the wheels." },
        { word: "clutch", hint: "A pedal used to change gears." },
        { word: "radiator", hint: "The part that cools the car engine." },
        { word: "battery", hint: "The part that provides electricity to start the car." },
        { word: "exhaust", hint: "The pipe that carries waste gases away." },
        { word: "steering", hint: "The wheel used to control direction." },
        { word: "braking", hint: "The system used to stop the vehicle." },
        { word: "chassis", hint: "The base frame of a motor vehicle." },
        { word: "piston", hint: "A part inside the engine that moves up and down." }
    ]
};

// --- Game Logic ---

const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let selectedWord = "", selectedHint = "", correctLetters = [], wrongLetters = [], gameOver = false;
let wins = 0, currentStep = 1;

function getRandomWord() {
    const category = document.getElementById("category").value;
    let pool = [];
    if (category === "all") {
        Object.values(wordCategories).forEach(arr => pool = pool.concat(arr));
    } else {
        pool = wordCategories[category] || [];
    }
    return pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : {word: "coding", hint: "Creating software."};
}

function updateDisplay() {
    document.getElementById("word").innerText = selectedWord
        .split("")
        .map(l => correctLetters.includes(l) ? l : "_")
        .join(" ");

    document.getElementById("hint-text").innerText = selectedHint;
    document.getElementById("wrong-letters").innerText = wrongLetters.join(", ");

    const parts = document.querySelectorAll(".figure-part");
    parts.forEach((p, i) => p.style.display = i < wrongLetters.length ? "block" : "none");

    if (wrongLetters.length >= parts.length) {
        document.getElementById("message").innerHTML = `<span style="color:#ff7675">Game Over! Word: ${selectedWord.toUpperCase()}</span>`;
        gameOver = true;
    }
}

function handleInput(letter, keyEl) {
    if (gameOver || correctLetters.includes(letter) || wrongLetters.includes(letter)) return;
    if (selectedWord.includes(letter)) {
        correctLetters.push(letter);
    } else {
        wrongLetters.push(letter);
    }
    if (keyEl) keyEl.classList.add("used");
    updateDisplay();
    checkWin();
}

function checkWin() {
    if (selectedWord.split("").every(l => correctLetters.includes(l))) {
        document.getElementById("message").innerHTML = `<span style="color:#55efc4">Victory! Well done!</span>`;
        gameOver = true;
        wins++;
        document.getElementById("wins").innerText = wins;
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        if (currentStep < 10) document.getElementById("next-word").classList.remove("hidden");
    }
}

function start() {
    const obj = getRandomWord();
    selectedWord = obj.word.toLowerCase();
    selectedHint = obj.hint;
    correctLetters = []; wrongLetters = []; gameOver = false;
    document.getElementById("category-selection").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    document.getElementById("next-word").classList.add("hidden");
    document.getElementById("message").innerText = "";
    
    const kb = document.getElementById("keyboard");
    kb.innerHTML = "";
    englishAlphabet.forEach(l => {
        const d = document.createElement("div");
        d.className = "key"; d.innerText = l;
        d.onclick = () => handleInput(l, d);
        kb.appendChild(d);
    });
    updateDisplay();
}

document.getElementById("start-game").onclick = start;
document.getElementById("next-word").onclick = () => { currentStep++; document.getElementById("step").innerText = currentStep; start(); };
document.getElementById("play-again").onclick = () => location.reload();

document.addEventListener("keydown", (e) => {
    const char = e.key.toLowerCase();
    if (englishAlphabet.includes(char)) {
        handleInput(char);
    }
});