// Credit: Suki (hidden)
// Pokemon Database - 150 randomly selected Pokemon from Pokédex
var pokemonDatabase = [
  {id: 1, name: "Bulbasaur", type: "Grass/Poison", hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif", moves: ["Vine Whip", "Razor Leaf", "Seed Bomb", "Growth"]},
  {id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif", moves: ["Ember", "Fire Fang", "Flame Burst", "Growl"]},
  {id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif", moves: ["Water Gun", "Bubble", "Aqua Jet", "Tackle"]},
  {id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif", moves: ["Thunder Shock", "Quick Attack", "Thunderbolt", "Agility"]},
  {id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif", moves: ["Tackle", "Quick Attack", "Bite", "Growl"]},
  {id: 6, name: "Charizard", type: "Fire/Flying", hp: 78, attack: 84, defense: 78, spAtk: 109, spDef: 85, speed: 100, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif", moves: ["Flame Thrower", "Dragon Claw", "Ember", "Growl"]},
  {id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83, defense: 100, spAtk: 85, spDef: 105, speed: 78, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif", moves: ["Water Cannon", "Water Pulse", "Surf", "Tackle"]},
  {id: 3, name: "Venusaur", type: "Grass/Poison", hp: 80, attack: 82, defense: 83, spAtk: 100, spDef: 100, speed: 80, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif", moves: ["Vine Whip", "Razor Leaf", "Solar Beam", "Growth"]},
  {id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110, defense: 90, spAtk: 154, spDef: 90, speed: 130, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif", moves: ["Psychic", "Shadow Ball", "Aura Sphere", "Calm Mind"]},
  {id: 149, name: "Dragonite", type: "Dragon/Flying", hp: 91, attack: 134, defense: 95, spAtk: 100, spDef: 100, speed: 80, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif", moves: ["Dragon Rush", "Thunder Wave", "Hyper Beam", "Agility"]},
  {id: 2, name: "Ivysaur", type: "Grass/Poison", hp: 60, attack: 62, defense: 63, spAtk: 80, spDef: 80, speed: 60, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif", moves: ["Vine Whip", "Razor Leaf", "Poison Powder", "Growth"]},
  {id: 5, name: "Charmeleon", type: "Fire", hp: 58, attack: 64, defense: 58, spAtk: 80, spDef: 65, speed: 80, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif", moves: ["Ember", "Fire Fang", "Slash", "Growl"]},
  {id: 8, name: "Wartortle", type: "Water", hp: 59, attack: 63, defense: 80, spAtk: 65, spDef: 80, speed: 58, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif", moves: ["Water Gun", "Bite", "Aqua Tail", "Slash"]},
  {id: 12, name: "Butterfree", type: "Bug/Flying", hp: 60, attack: 45, defense: 50, spAtk: 90, spDef: 80, speed: 70, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif", moves: ["Confusion", "Gust", "Sleep Powder", "String Shot"]},
  {id: 15, name: "Beedrill", type: "Bug/Poison", hp: 65, attack: 90, defense: 40, spAtk: 45, spDef: 80, speed: 75, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif", moves: ["Poison Sting", "Fury Attack", "Twineedle", "Agility"]},
  {id: 18, name: "Pidgeot", type: "Normal/Flying", hp: 83, attack: 80, defense: 75, spAtk: 70, spDef: 70, speed: 101, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif", moves: ["Gust", "Wing Attack", "Quick Attack", "Agility"]},
  {id: 20, name: "Raticate", type: "Normal", hp: 55, attack: 81, defense: 60, spAtk: 50, spDef: 70, speed: 97, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif", moves: ["Tackle", "Quick Attack", "Hyper Fang", "Scary Face"]},
  {id: 22, name: "Fearow", type: "Normal/Flying", hp: 65, attack: 90, defense: 65, spAtk: 61, spDef: 61, speed: 100, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif", moves: ["Peck", "Fury Attack", "Drill Peck", "Agility"]},
  {id: 24, name: "Arbok", type: "Poison", hp: 60, attack: 85, defense: 69, spAtk: 65, spDef: 79, speed: 80, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif", moves: ["Poison Sting", "Bite", "Acid", "Glare"]},
  {id: 26, name: "Raichu", type: "Electric", hp: 60, attack: 90, defense: 55, spAtk: 90, spDef: 80, speed: 110, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif", moves: ["Thunder Shock", "Quick Attack", "Thunderbolt", "Agility"]},
  {id: 28, name: "Sandslash", type: "Ground", hp: 75, attack: 100, defense: 110, spAtk: 45, spDef: 55, speed: 65, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif", moves: ["Scratch", "Sand Attack", "Slash", "Defense Curl"]},
  {id: 31, name: "Nidoqueen", type: "Poison/Ground", hp: 90, attack: 92, defense: 87, spAtk: 75, spDef: 85, speed: 76, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif", moves: ["Poison Sting", "Bite", "Body Slam", "Growl"]},
  {id: 34, name: "Nidoking", type: "Poison/Ground", hp: 81, attack: 102, defense: 77, spAtk: 85, spDef: 75, speed: 85, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif", moves: ["Poison Sting", "Horn Attack", "Thrash", "Leer"]},
  {id: 36, name: "Clefable", type: "Fairy", hp: 95, attack: 70, defense: 73, spAtk: 95, spDef: 90, speed: 60, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif", moves: ["Pound", "Sing", "Double Slap", "Growl"]},
  {id: 38, name: "Ninetales", type: "Fire", hp: 73, attack: 76, defense: 75, spAtk: 81, spDef: 100, speed: 100, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif", moves: ["Ember", "Quick Attack", "Fire Spin", "Growl"]},
  {id: 40, name: "Wigglytuff", type: "Normal/Fairy", hp: 140, attack: 70, defense: 45, spAtk: 85, spDef: 50, speed: 45, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif", moves: ["Pound", "Sing", "Double Slap", "Growl"]},
  {id: 45, name: "Vileplume", type: "Grass/Poison", hp: 75, attack: 80, defense: 85, spAtk: 110, spDef: 90, speed: 50, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif", moves: ["Vine Whip", "Poison Powder", "Petal Dance", "Growth"]},
  {id: 47, name: "Parasect", type: "Bug/Grass", hp: 60, attack: 95, defense: 80, spAtk: 60, spDef: 80, speed: 30, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif", moves: ["Scratch", "Poison Powder", "Slash", "Spore"]},
  {id: 49, name: "Venomoth", type: "Bug/Poison", hp: 70, attack: 65, defense: 60, spAtk: 90, spDef: 75, speed: 90, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif", moves: ["Confusion", "Poison Powder", "Psybeam", "Sleep Powder"]},
  {id: 51, name: "Dugtrio", type: "Ground", hp: 35, attack: 100, defense: 50, spAtk: 50, spDef: 70, speed: 120, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif", moves: ["Scratch", "Sand Attack", "Slash", "Growl"]},
  {id: 53, name: "Persian", type: "Normal", hp: 65, attack: 70, defense: 60, spAtk: 65, spDef: 65, speed: 115, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif", moves: ["Scratch", "Bite", "Slash", "Growl"]},
  {id: 55, name: "Golduck", type: "Water", hp: 80, attack: 82, defense: 78, spAtk: 95, spDef: 80, speed: 85, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif", moves: ["Scratch", "Water Gun", "Slash", "Tail Whip"]},
  {id: 57, name: "Primeape", type: "Fighting", hp: 65, attack: 105, defense: 60, spAtk: 60, spDef: 70, speed: 95, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif", moves: ["Scratch", "Karate Chop", "Low Kick", "Leer"]},
  {id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110, defense: 80, spAtk: 100, spDef: 80, speed: 95, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif", moves: ["Bite", "Ember", "Fire Fang", "Growl"]},
  {id: 62, name: "Poliwrath", type: "Water/Fighting", hp: 90, attack: 95, defense: 95, spAtk: 70, spDef: 90, speed: 70, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif", moves: ["Bubble", "Karate Chop", "Water Gun", "Hypnosis"]},
  {id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50, defense: 45, spAtk: 135, spDef: 95, speed: 120, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif", moves: ["Confusion", "Psychic", "Psybeam", "Kinesis"]},
  {id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130, defense: 80, spAtk: 65, spDef: 85, speed: 55, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif", moves: ["Karate Chop", "Low Kick", "Seismic Toss", "Leer"]},
  {id: 71, name: "Victreebel", type: "Grass/Poison", hp: 80, attack: 105, defense: 65, spAtk: 100, spDef: 70, speed: 70, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif", moves: ["Vine Whip", "Acid", "Razor Leaf", "Growth"]},
  {id: 73, name: "Tentacruel", type: "Water/Poison", hp: 80, attack: 70, defense: 65, spAtk: 80, spDef: 120, speed: 100, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif", moves: ["Poison Sting", "Bubble", "Acid", "Supersonic"]},
  {id: 76, name: "Golem", type: "Rock/Ground", hp: 80, attack: 120, defense: 130, spAtk: 55, spDef: 65, speed: 45, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif", moves: ["Tackle", "Rock Throw", "Rock Slide", "Defense Curl"]},
  {id: 78, name: "Rapidash", type: "Fire", hp: 65, attack: 100, defense: 70, spAtk: 80, spDef: 80, speed: 105, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif", moves: ["Tackle", "Ember", "Fire Spin", "Growl"]},
  {id: 80, name: "Slowbro", type: "Water/Psychic", hp: 95, attack: 75, defense: 110, spAtk: 100, spDef: 80, speed: 30, sprite: "http://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif", moves: ["Confusion", "Water Gun", "Psychic", "Growl"]}
];

// Suki was here (hidden credit)

// Status Effect Box Fade-in System (Vanilla JS version of React FadeContent)
function createStatusFadeIn(element, options = {}) {
  const {
    blur = true,
    duration = 1000,
    easing = 'ease-out',
    delay = 0,
    initialOpacity = 0
  } = options;
  
  if (!element) return;
  
  // Set initial state
  element.style.opacity = initialOpacity;
  element.style.filter = blur ? 'blur(10px)' : 'none';
  element.style.transition = `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`;
  
  // Add fade-in class for CSS compatibility
  element.classList.add('fade-in');
  
  // Trigger fade-in after delay
  setTimeout(() => {
    element.classList.add('visible');
    element.style.opacity = 1;
    element.style.filter = blur ? 'blur(0px)' : 'none';
  }, delay);
  
  // Clean up animation classes after completion
  setTimeout(() => {
    element.classList.remove('fade-in');
  }, delay + duration + 100);
}

// Function to fade in status effect boxes
function fadeInStatusBox(statusBox, delay = 0) {
  if (!statusBox || statusBox.innerHTML === '') return;
  
  createStatusFadeIn(statusBox, {
    blur: true,
    duration: 400,
    delay: delay,
    initialOpacity: 0
  });
}

// Function to determine turn order based on speed stats
function determineTurnOrder() {
  // Get base speed stats from Pokemon data
  var playerBaseSpeed = currentPlayerPokemon.speed;
  var opponentBaseSpeed = currentOpponentPokemon.speed;
  
  // Apply speed modifiers
  var playerFinalSpeed = playerBaseSpeed * userSpeed;
  var opponentFinalSpeed = opponentBaseSpeed * opSpeed;
  
  // Add some randomness (like in real Pokemon)
  var playerRandom = Math.random() * 0.1; // 10% randomness
  var opponentRandom = Math.random() * 0.1;
  
  playerFinalSpeed += playerRandom;
  opponentFinalSpeed += opponentRandom;
  
  // Return true if player goes first, false if opponent goes first
  return playerFinalSpeed >= opponentFinalSpeed;
}

// Function to execute a complete turn with speed-based order
function executeTurn(playerMoveIndex) {
  if (userHP <= 0 || opHP <= 0) return;
  
  var playerGoesFirst = determineTurnOrder();
  var playerMoveName = currentPlayerPokemon.moves[playerMoveIndex];
  var opponentMoveIndex = Math.floor(Math.random() * 4);
  var opponentMoveName = currentOpponentPokemon.moves[opponentMoveIndex];
  
  // Execute moves in speed order
  if (playerGoesFirst) {
    // Player goes first
    if (checkStatusEffects(false)) {
      executeMove(playerMoveName, currentPlayerPokemon, false);
    }
    
    // Check if opponent is still alive
    if (opHP > 0 && checkStatusEffects(true)) {
      setTimeout(() => {
        executeMove(opponentMoveName, currentOpponentPokemon, true);
        
        // Reset for next turn
        setTimeout(() => {
          if (userHP > 0 && opHP > 0) {
            setMessage("What should " + currentPlayerPokemon.name + " do?");
          }
        }, 1000);
      }, 1500);
    } else {
      // Opponent fainted or can't move, reset for next turn
      setTimeout(() => {
        if (userHP > 0 && opHP > 0) {
          setMessage("What should " + currentPlayerPokemon.name + " do?");
        }
      }, 1000);
    }
  } else {
    // Opponent goes first
    if (checkStatusEffects(true)) {
      executeMove(opponentMoveName, currentOpponentPokemon, true);
    }
    
    // Check if player is still alive
    if (userHP > 0 && checkStatusEffects(false)) {
      setTimeout(() => {
        executeMove(playerMoveName, currentPlayerPokemon, false);
        
        // Reset for next turn
        setTimeout(() => {
          if (userHP > 0 && opHP > 0) {
            setMessage("What should " + currentPlayerPokemon.name + " do?");
          }
        }, 1000);
      }, 1500);
    } else {
      // Player fainted or can't move, reset for next turn
      setTimeout(() => {
        if (userHP > 0 && opHP > 0) {
          setMessage("What should " + currentPlayerPokemon.name + " do?");
        }
      }, 1000);
    }
  }
}

// Game state variables
var currentPlayerPokemon = null;
var currentOpponentPokemon = null;
var userHP = 160;
var opHP = 150;
var userAttack = 1;
var opAttack = 1;
var userDefense = 1;
var opDefense = 1;
var userSpeed = 1;
var opSpeed = 1;
var userAccuracy = 1;
var opAccuracy = 1;
var opAttacks = [];
var playerMove = 0;

// Status condition variables
var playerStatus = [];
var opponentStatus = [];
var playerStatusTurns = {};
var opponentStatusTurns = {};

// Cheat code system
var cheatSequence = [];
var cheatCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

// Message queue system
var messageQueue = [];
var isDisplayingMessage = false;

// Track the current faint message (if any)
let currentFaintMessage = null;

// Helper to show only the faint message and clear the queue
function showOnlyFaintMessage(msg) {
  messageQueue = [];
  isDisplayingMessage = false;
  setMessage(msg, true);
}

// Function to randomly select Pokemon
function getRandomPokemon() {
  return pokemonDatabase[Math.floor(Math.random() * pokemonDatabase.length)];
}

// Function to generate random level between 50-100
function generateRandomLevel() {
  return Math.floor(Math.random() * 51) + 50; // 50-100 range
}

// Function to calculate HP at given level (reduce HP for faster battles)
function calculateHP(baseHP, level) {
  // Original: Math.floor(((2 * baseHP + 31 + Math.floor(252/4)) * level) / 100) + level + 10;
  // New: Lower base and bonus for less HP
  return Math.floor(((1.2 * baseHP + 10) * level) / 120) + level + 5;
}

// Function to initialize battle with random Pokemon
function initializeBattle() {
  currentPlayerPokemon = getRandomPokemon();
  currentOpponentPokemon = getRandomPokemon();
  
  // Generate random levels for both Pokemon (within fair range)
  var playerLevel = generateRandomLevel();
  var opponentLevel = generateRandomLevel();
  
  // Ensure levels are within 10 levels of each other for fairness
  var levelDiff = Math.abs(playerLevel - opponentLevel);
  if (levelDiff > 10) {
    if (playerLevel > opponentLevel) {
      opponentLevel = playerLevel - Math.floor(Math.random() * 11); // 0-10 levels lower
    } else {
      playerLevel = opponentLevel - Math.floor(Math.random() * 11); // 0-10 levels lower
    }
  }
  
  // Store levels for display
  currentPlayerPokemon.level = playerLevel;
  currentOpponentPokemon.level = opponentLevel;
  
  // Calculate HP at respective levels
  userHP = calculateHP(currentPlayerPokemon.hp, playerLevel);
  opHP = calculateHP(currentOpponentPokemon.hp, opponentLevel);
  
  // Reset all stats
  userAttack = 1;
  opAttack = 1;
  userDefense = 1;
  opDefense = 1;
  userSpeed = 1;
  opSpeed = 1;
  userAccuracy = 1;
  opAccuracy = 1;
  
  // Reset status conditions
  playerStatus = [];
  opponentStatus = [];
  playerStatusTurns = {};
  opponentStatusTurns = {};
  
  // Update status displays
  updateStatusDisplay();
  
  // Set opponent moves
  opAttacks = currentOpponentPokemon.moves.map(function(moveName) {
    return function() { executeMove(moveName, currentOpponentPokemon, true); };
  });
  
  // Update displays
  updatePokemonDisplay();
  updateHP('myHPBar', 'myHPCounter', userHP, userHP);
  updateHP('apHPBar', 'apHPCounter', opHP, opHP);
  
  // Update message
  setMessage("What should " + currentPlayerPokemon.name + " do?");
}

// Function to update Pokemon display
function updatePokemonDisplay() {
  // Update player Pokemon
  document.querySelector('.player .name').innerHTML = currentPlayerPokemon.name;
  document.querySelector('.player .level').innerHTML = currentPlayerPokemon.level;
  document.querySelector('.player .pokemon').src = getBackSpriteUrl(currentPlayerPokemon.name);
  
  // Update opponent Pokemon
  document.querySelector('.opponent .name').innerHTML = currentOpponentPokemon.name;
  document.querySelector('.opponent .level').innerHTML = currentOpponentPokemon.level;
  document.querySelector('.opponent .pokemon').src = currentOpponentPokemon.sprite;
  
  // Update move buttons
  updateMoveButtons();
  
  // Update status displays
  updateStatusDisplay();
}

// Function to update move buttons
function updateMoveButtons() {
  document.getElementById('move1').innerHTML = currentPlayerPokemon.moves[0];
  document.getElementById('move2').innerHTML = currentPlayerPokemon.moves[1];
  document.getElementById('move3').innerHTML = currentPlayerPokemon.moves[2];
  document.getElementById('move4').innerHTML = currentPlayerPokemon.moves[3];
}

// Function to update status displays
function updateStatusDisplay() {
  updatePlayerStatusDisplay();
  updateOpponentStatusDisplay();
}

// Function to update player status display
function updatePlayerStatusDisplay() {
  var statusContainer = document.getElementById('playerStatus');
  statusContainer.innerHTML = '';
  statusContainer.className = 'status-container';

  if (playerStatus.length > 0) {
    playerStatus.forEach(status => {
      var statusDiv = document.createElement('div');
      statusDiv.className = 'status-box visible';
      switch(status) {
        case 'sleep':
          statusDiv.classList.add('status-sleep');
          statusDiv.textContent = 'SLEEP';
          break;
        case 'paralysis':
          statusDiv.classList.add('status-paralysis');
          statusDiv.textContent = 'PARALYSIS';
          break;
        case 'poison':
          statusDiv.classList.add('status-poison');
          statusDiv.textContent = 'POISON';
          break;
        case 'confusion':
          statusDiv.classList.add('status-confusion');
          statusDiv.textContent = 'CONFUSION';
          break;
      }
      statusContainer.appendChild(statusDiv);
      createStatusFadeIn(statusDiv, { blur: true, duration: 400, delay: 200, initialOpacity: 0 });
    });
  }
}

// Function to update opponent status display
function updateOpponentStatusDisplay() {
  var statusContainer = document.getElementById('opponentStatus');
  statusContainer.innerHTML = '';
  statusContainer.className = 'status-container';

  if (opponentStatus.length > 0) {
    opponentStatus.forEach(status => {
      var statusDiv = document.createElement('div');
      statusDiv.className = 'status-box visible';
      switch(status) {
        case 'sleep':
          statusDiv.classList.add('status-sleep');
          statusDiv.textContent = 'SLEEP';
          break;
        case 'paralysis':
          statusDiv.classList.add('status-paralysis');
          statusDiv.textContent = 'PARALYSIS';
          break;
        case 'poison':
          statusDiv.classList.add('status-poison');
          statusDiv.textContent = 'POISON';
          break;
        case 'confusion':
          statusDiv.classList.add('status-confusion');
          statusDiv.textContent = 'CONFUSION';
          break;
      }
      statusContainer.appendChild(statusDiv);
      createStatusFadeIn(statusDiv, { blur: true, duration: 400, delay: 200, initialOpacity: 0 });
    });
  }
}

// Override setMessage to enforce faint message priority
function setMessage(message, isFaint = false) {
  // If a Pokemon is fainted, always show the faint message
  if ((userHP === 0 || opHP === 0) && currentFaintMessage && !isFaint) {
    document.getElementById('message').innerHTML = currentFaintMessage;
    setMoveButtonsEnabled(false);
    return;
  }
  if (isFaint) {
    currentFaintMessage = message;
  }
  document.getElementById('message').innerHTML = message;
  // Enable move buttons only if it's the player's turn and no one has fainted
  if (message && message.startsWith('What should') && userHP > 0 && opHP > 0) {
    setMoveButtonsEnabled(true);
  }
}

// Override addMessage to enforce faint message priority
function addMessage(message) {
  // If a Pokemon is fainted, always show the faint message
  if ((userHP === 0 || opHP === 0) && currentFaintMessage) {
    setMessage(currentFaintMessage);
    return;
  }
  messageQueue.push(message);
  if (!isDisplayingMessage) {
    displayNextMessage();
  }
}

// Function to display next message in queue
function displayNextMessage() {
  if (messageQueue.length === 0) {
    isDisplayingMessage = false;
    enableMoveButtons();
    return;
  }
  
  isDisplayingMessage = true;
  disableMoveButtons();
  var message = messageQueue.shift();
  document.getElementById('message').innerHTML = message;
  
  // Wait 1 second before showing next message
  setTimeout(function() {
    displayNextMessage();
  }, 1000);
}

// Function to clear message queue and display immediate message
function setMessage(message) {
  messageQueue = [];
  isDisplayingMessage = false;
  document.getElementById('message').innerHTML = message;
  enableMoveButtons();
}

// Function to disable move buttons
function disableMoveButtons() {
  document.getElementById('move1').disabled = true;
  document.getElementById('move2').disabled = true;
  document.getElementById('move3').disabled = true;
  document.getElementById('move4').disabled = true;
}

// Function to enable move buttons
function enableMoveButtons() {
  document.getElementById('move1').disabled = false;
  document.getElementById('move2').disabled = false;
  document.getElementById('move3').disabled = false;
  document.getElementById('move4').disabled = false;
}

// Function to execute moves
function executeMove(moveName, pokemon, isOpponent) {
  var targetHP = isOpponent ? userHP : opHP;
  var targetMaxHP = isOpponent ? calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level) : calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level);
  var attackerName = pokemon.name;
  var targetName = isOpponent ? currentPlayerPokemon.name : currentOpponentPokemon.name;
  
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1) {
    addMessage(attackerName + "'s attack missed!");
    return;
  }
  
  // Check if it's a status move
  if (isStatusMove(moveName)) {
    executeStatusMove(moveName, pokemon, isOpponent);
  } else {
      // Regular damage move
  var baseDmg = getMoveDamage(moveName) * (isOpponent ? opAttack : userAttack);
  var critical = Math.floor((Math.random() * 10) + 1);
  
  // Apply accuracy check
  var accuracy = isOpponent ? opAccuracy : userAccuracy;
  var missChance = Math.max(0.1, 1 - accuracy); // Higher accuracy = lower miss chance
  if (Math.random() < missChance) {
    addMessage(attackerName + "'s attack missed!");
    return;
  }
  
  if(critical == 4) {
    baseDmg *= 2;
  }
  
  // Apply defense reduction
  var targetDefense = isOpponent ? userDefense : opDefense;
  baseDmg = Math.floor(baseDmg / targetDefense);
  
  targetHP -= baseDmg;
    if(targetHP < 0) targetHP = 0;
    
    if(isOpponent) {
      userHP = targetHP;
      updateHP('myHPBar', 'myHPCounter', userHP, targetMaxHP);
      if(userHP == 0) {
        showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
        showResetButton();
        return;
      }
    } else {
      opHP = targetHP;
      updateHP('apHPBar', 'apHPCounter', opHP, targetMaxHP);
      if(opHP == 0) {
        showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
        showResetButton();
        return;
      }
    }
    
    addMessage(attackerName + " used " + moveName);
  }
}

// Function to check if a move is a status move
function isStatusMove(moveName) {
  var statusMoves = [
    "Growl", "Growth", "Agility", "Defense Curl", "Leer", 
    "Sing", "Double Slap", "Fire Spin", "Sleep Powder", "String Shot", 
    "Scary Face", "Glare", "Thunder Wave", "Poison Powder", "Spore", 
    "Supersonic", "Tail Whip", "Hypnosis", "Kinesis", 
    "Calm Mind", "Sand Attack", "Thrash", "Petal Dance", "Confusion"
  ];
  return statusMoves.includes(moveName);
}

// Function to execute status moves
function executeStatusMove(moveName, pokemon, isOpponent) {
  var attackerName = pokemon.name;
  var targetName = isOpponent ? currentPlayerPokemon.name : currentOpponentPokemon.name;
  
  switch(moveName) {
    case "Growl":
      if (isOpponent) {
        userAttack = Math.max(0.5, userAttack - 1);
        addMessage(attackerName + " used Growl!");
        addMessage(targetName + "'s attack fell!");
      } else {
        opAttack = Math.max(0.5, opAttack - 1);
        addMessage(attackerName + " used Growl!");
        addMessage(targetName + "'s attack fell!");
      }
      break;
      
    case "Growth":
      if (isOpponent) {
        opAttack = Math.min(2, opAttack + 1);
        addMessage(attackerName + " used Growth!");
        addMessage(attackerName + "'s attack rose!");
      } else {
        userAttack = Math.min(2, userAttack + 1);
        addMessage(attackerName + " used Growth!");
        addMessage(attackerName + "'s attack rose!");
      }
      break;
      

      
    case "Agility":
      if (isOpponent) {
        opSpeed = Math.min(2, opSpeed + 0.5);
        addMessage(attackerName + " used Agility!");
        addMessage(attackerName + "'s speed rose!");
      } else {
        userSpeed = Math.min(2, userSpeed + 0.5);
        addMessage(attackerName + " used Agility!");
        addMessage(attackerName + "'s speed rose!");
      }
      break;
      
    case "Defense Curl":
      if (isOpponent) {
        opDefense = Math.min(2, opDefense + 0.5);
        addMessage(attackerName + " used Defense Curl!");
        addMessage(attackerName + "'s defense rose!");
      } else {
        userDefense = Math.min(2, userDefense + 0.5);
        addMessage(attackerName + " used Defense Curl!");
        addMessage(attackerName + "'s defense rose!");
      }
      break;
      
    case "Leer":
      if (isOpponent) {
        // Lower player's defense (represented as attack reduction for simplicity)
        userAttack = Math.max(0.5, userAttack - 0.5);
        addMessage(attackerName + " used Leer!");
        addMessage(targetName + " became less confident!");
      } else {
        opAttack = Math.max(0.5, opAttack - 0.5);
        addMessage(attackerName + " used Leer!");
        addMessage(targetName + " became less confident!");
      }
      break;
      
    case "Sing":
      if (isOpponent) {
        if (!playerStatus.includes("sleep")) {
          playerStatus.push("sleep");
          playerStatusTurns["sleep"] = Math.floor(Math.random() * 3) + 2;
          updateStatusDisplay();
          addMessage(attackerName + " used Sing!");
          addMessage(targetName + " fell asleep!");
        } else {
          addMessage(attackerName + " used Sing! But it had no effect!");
        }
      } else {
        if (!opponentStatus.includes("sleep")) {
          opponentStatus.push("sleep");
          opponentStatusTurns["sleep"] = Math.floor(Math.random() * 3) + 2;
          updateStatusDisplay();
          addMessage(attackerName + " used Sing!");
          addMessage(targetName + " fell asleep!");
        } else {
          addMessage(attackerName + " used Sing! But it had no effect!");
        }
      }
      break;
      
    case "Sleep Powder":
      if (isOpponent) {
        if (!playerStatus.includes("sleep")) {
          playerStatus.push("sleep");
          playerStatusTurns["sleep"] = Math.floor(Math.random() * 3) + 2;
          updateStatusDisplay();
          addMessage(attackerName + " used Sleep Powder!");
          addMessage(targetName + " fell asleep!");
        } else {
          addMessage(attackerName + " used Sleep Powder! But it had no effect!");
        }
      } else {
        if (!opponentStatus.includes("sleep")) {
          opponentStatus.push("sleep");
          opponentStatusTurns["sleep"] = Math.floor(Math.random() * 3) + 2;
          updateStatusDisplay();
          addMessage(attackerName + " used Sleep Powder!");
          addMessage(targetName + " fell asleep!");
        } else {
          addMessage(attackerName + " used Sleep Powder! But it had no effect!");
        }
      }
      break;
      
    case "Spore":
      if (isOpponent) {
        if (!playerStatus.includes("sleep")) {
          playerStatus.push("sleep");
          playerStatusTurns["sleep"] = Math.floor(Math.random() * 3) + 2;
          updateStatusDisplay();
          addMessage(attackerName + " used Spore!");
          addMessage(targetName + " fell asleep!");
        } else {
          addMessage(attackerName + " used Spore! But it had no effect!");
        }
      } else {
        if (!opponentStatus.includes("sleep")) {
          opponentStatus.push("sleep");
          opponentStatusTurns["sleep"] = Math.floor(Math.random() * 3) + 2;
          updateStatusDisplay();
          addMessage(attackerName + " used Spore!");
          addMessage(targetName + " fell asleep!");
        } else {
          addMessage(attackerName + " used Spore! But it had no effect!");
        }
      }
      break;
      
    case "Thunder Wave":
      if (isOpponent) {
        if (!playerStatus.includes("paralysis")) {
          playerStatus.push("paralysis");
          updateStatusDisplay();
          addMessage(attackerName + " used Thunder Wave!");
          addMessage(targetName + " was paralyzed!");
        } else {
          addMessage(attackerName + " used Thunder Wave! But it had no effect!");
        }
      } else {
        if (!opponentStatus.includes("paralysis")) {
          opponentStatus.push("paralysis");
          updateStatusDisplay();
          addMessage(attackerName + " used Thunder Wave!");
          addMessage(targetName + " was paralyzed!");
        } else {
          addMessage(attackerName + " used Thunder Wave! But it had no effect!");
        }
      }
      break;
      
    case "Poison Powder":
      if (isOpponent) {
        if (!playerStatus.includes("poison")) {
          playerStatus.push("poison");
          updateStatusDisplay();
          addMessage(attackerName + " used Poison Powder!");
          addMessage(targetName + " was poisoned!");
        } else {
          addMessage(attackerName + " used Poison Powder! But it had no effect!");
        }
      } else {
        if (!opponentStatus.includes("poison")) {
          opponentStatus.push("poison");
          updateStatusDisplay();
          addMessage(attackerName + " used Poison Powder!");
          addMessage(targetName + " was poisoned!");
        } else {
          addMessage(attackerName + " used Poison Powder! But it had no effect!");
        }
      }
      break;
      
    case "Supersonic":
      if (isOpponent) {
        if (!playerStatus.includes("confusion")) {
          playerStatus.push("confusion");
          playerStatusTurns["confusion"] = Math.floor(Math.random() * 4) + 2; // 2-5 turns
          updateStatusDisplay();
          addMessage(attackerName + " used Supersonic!");
          addMessage(targetName + " became confused!");
        } else {
          addMessage(attackerName + " used Supersonic! But it had no effect!");
        }
      } else {
        if (!opponentStatus.includes("confusion")) {
          opponentStatus.push("confusion");
          opponentStatusTurns["confusion"] = Math.floor(Math.random() * 4) + 2; // 2-5 turns
          updateStatusDisplay();
          addMessage(attackerName + " used Supersonic!");
          addMessage(targetName + " became confused!");
        } else {
          addMessage(attackerName + " used Supersonic! But it had no effect!");
        }
      }
      break;
      
    case "Hypnosis":
      if (isOpponent) {
        if (!playerStatus.includes("sleep")) {
          playerStatus.push("sleep");
          playerStatusTurns["sleep"] = Math.floor(Math.random() * 3) + 2; // 2-4 turns
          updateStatusDisplay();
          addMessage(attackerName + " used Hypnosis!");
          addMessage(targetName + " fell asleep!");
        } else {
          addMessage(attackerName + " used Hypnosis! But it had no effect!");
        }
      } else {
        if (!opponentStatus.includes("sleep")) {
          opponentStatus.push("sleep");
          opponentStatusTurns["sleep"] = Math.floor(Math.random() * 3) + 2; // 2-4 turns
          updateStatusDisplay();
          addMessage(attackerName + " used Hypnosis!");
          addMessage(targetName + " fell asleep!");
        } else {
          addMessage(attackerName + " used Hypnosis! But it had no effect!");
        }
      }
      break;
      
    case "Calm Mind":
      if (isOpponent) {
        opAttack = Math.min(2, opAttack + 0.5);
        addMessage(attackerName + " used Calm Mind!");
        addMessage(attackerName + " became more focused!");
      } else {
        userAttack = Math.min(2, userAttack + 0.5);
        addMessage(attackerName + " used Calm Mind!");
        addMessage(attackerName + " became more focused!");
      }
      break;
      
    case "Sand Attack":
      if (isOpponent) {
        userAccuracy = Math.max(0.5, userAccuracy - 0.3);
        addMessage(attackerName + " used Sand Attack!");
        addMessage(targetName + "'s accuracy fell!");
      } else {
        opAccuracy = Math.max(0.5, opAccuracy - 0.3);
        addMessage(attackerName + " used Sand Attack!");
        addMessage(targetName + "'s accuracy fell!");
      }
      break;
      
    case "Tail Whip":
      if (isOpponent) {
        userDefense = Math.max(0.5, userDefense - 0.3);
        addMessage(attackerName + " used Tail Whip!");
        addMessage(targetName + "'s defense fell!");
      } else {
        opDefense = Math.max(0.5, opDefense - 0.3);
        addMessage(attackerName + " used Tail Whip!");
        addMessage(targetName + "'s defense fell!");
      }
      break;
      
    case "Kinesis":
      if (isOpponent) {
        userAccuracy = Math.max(0.5, userAccuracy - 0.3);
        addMessage(attackerName + " used Kinesis!");
        addMessage(targetName + "'s accuracy fell!");
      } else {
        opAccuracy = Math.max(0.5, opAccuracy - 0.3);
        addMessage(attackerName + " used Kinesis!");
        addMessage(targetName + "'s accuracy fell!");
      }
      break;
      
    case "String Shot":
      if (isOpponent) {
        userSpeed = Math.max(0.5, userSpeed - 0.3);
        addMessage(attackerName + " used String Shot!");
        addMessage(targetName + "'s speed fell!");
      } else {
        opSpeed = Math.max(0.5, opSpeed - 0.3);
        addMessage(attackerName + " used String Shot!");
        addMessage(targetName + "'s speed fell!");
      }
      break;
      
    case "Scary Face":
      if (isOpponent) {
        userSpeed = Math.max(0.5, userSpeed - 0.3);
        addMessage(attackerName + " used Scary Face!");
        addMessage(targetName + "'s speed fell!");
      } else {
        opSpeed = Math.max(0.5, opSpeed - 0.3);
        addMessage(attackerName + " used Scary Face!");
        addMessage(targetName + "'s speed fell!");
      }
      break;
      
    case "Glare":
      if (isOpponent) {
        if (!playerStatus.includes("paralysis")) {
          playerStatus.push("paralysis");
          updateStatusDisplay();
          addMessage(attackerName + " used Glare!");
          addMessage(targetName + " was paralyzed!");
        } else {
          addMessage(attackerName + " used Glare! But it had no effect!");
        }
      } else {
        if (!opponentStatus.includes("paralysis")) {
          opponentStatus.push("paralysis");
          updateStatusDisplay();
          addMessage(attackerName + " used Glare!");
          addMessage(targetName + " was paralyzed!");
        } else {
          addMessage(attackerName + " used Glare! But it had no effect!");
        }
      }
      break;
      
    case "Fire Spin":
      // Fire Spin does damage and has a chance to cause burn (simplified as damage over time)
      var baseDmg = 20 * (isOpponent ? opAttack : userAttack);
      if (isOpponent) {
        userHP -= baseDmg;
        if(userHP < 0) userHP = 0;
        updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
        if(userHP == 0) {
          showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
          showResetButton();
          return;
        }
      } else {
        opHP -= baseDmg;
        if(opHP < 0) opHP = 0;
        updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
        if(opHP == 0) {
          showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
          showResetButton();
          return;
        }
      }
      addMessage(attackerName + " used Fire Spin!");
      addMessage(targetName + " was trapped in a vortex!");
      break;
      
    case "Double Slap":
      // This is actually a damage move, not status
      var baseDmg = 15 * (isOpponent ? opAttack : userAttack);
      if (isOpponent) {
        userHP -= baseDmg;
        if(userHP < 0) userHP = 0;
        updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
        if(userHP == 0) {
          showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
          showResetButton();
          return;
        }
      } else {
        opHP -= baseDmg;
        if(opHP < 0) opHP = 0;
        updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
        if(opHP == 0) {
          showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
          showResetButton();
          return;
        }
      }
      document.getElementById('message').innerHTML = attackerName + " used " + moveName;
      break;
      
    case "Thrash":
      // This is actually a damage move, not status
      var baseDmg = 35 * (isOpponent ? opAttack : userAttack);
      if (isOpponent) {
        userHP -= baseDmg;
        if(userHP < 0) userHP = 0;
        updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
        if(userHP == 0) {
          showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
          showResetButton();
          return;
        }
      } else {
        opHP -= baseDmg;
        if(opHP < 0) opHP = 0;
        updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
        if(opHP == 0) {
          showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
          showResetButton();
          return;
        }
      }
      document.getElementById('message').innerHTML = attackerName + " used " + moveName;
      break;
      
    case "Petal Dance":
      // This is actually a damage move, not status
      var baseDmg = 30 * (isOpponent ? opAttack : userAttack);
      if (isOpponent) {
        userHP -= baseDmg;
        if(userHP < 0) userHP = 0;
        updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
        if(userHP == 0) {
          showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
          showResetButton();
          return;
        }
      } else {
        opHP -= baseDmg;
        if(opHP < 0) opHP = 0;
        updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
        if(opHP == 0) {
          showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
          showResetButton();
          return;
        }
      }
      document.getElementById('message').innerHTML = attackerName + " used " + moveName;
      break;
      
    case "Confusion":
      // This is actually a damage move, not status
      var baseDmg = 25 * (isOpponent ? opAttack : userAttack);
      if (isOpponent) {
        userHP -= baseDmg;
        if(userHP < 0) userHP = 0;
        updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
        if(userHP == 0) {
          showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
          showResetButton();
          return;
        }
      } else {
        opHP -= baseDmg;
        if(opHP < 0) opHP = 0;
        updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
        if(opHP == 0) {
          showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
          showResetButton();
          return;
        }
      }
      document.getElementById('message').innerHTML = attackerName + " used " + moveName;
      break;
      
    default:
      document.getElementById('message').innerHTML = attackerName + " used " + moveName + "!";
      break;
  }
}

// Function to check and apply status effects at the start of a turn
function checkStatusEffects(isOpponent) {
  var statusArr = isOpponent ? opponentStatus : playerStatus;
  var statusTurns = isOpponent ? opponentStatusTurns : playerStatusTurns;
  var pokemonName = isOpponent ? currentOpponentPokemon.name : currentPlayerPokemon.name;
  var canMove = true;
  let toRemove = [];
  for (let status of statusArr) {
    switch(status) {
      case "sleep":
        if (statusTurns[status] > 0) {
          statusTurns[status]--;
          addMessage(pokemonName + " is fast asleep!");
          canMove = false;
        } else {
          toRemove.push(status);
          addMessage(pokemonName + " woke up!");
        }
        break;
      case "paralysis":
        if (Math.random() < 0.25) {
          addMessage(pokemonName + " is paralyzed! It may be unable to move!");
          canMove = false;
        }
        break;
      case "poison":
        var maxHP = isOpponent ? calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level) : calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level);
        var poisonDamage = Math.floor(maxHP / 16);
        if (isOpponent) {
          opHP -= poisonDamage;
          if (opHP < 0) opHP = 0;
          updateHP('apHPBar', 'apHPCounter', opHP, maxHP);
          if (opHP == 0) {
            showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
            showResetButton();
            return false;
          }
        } else {
          userHP -= poisonDamage;
          if (userHP < 0) userHP = 0;
          updateHP('myHPBar', 'myHPCounter', userHP, maxHP);
          if (userHP == 0) {
            showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
            showResetButton();
            return false;
          }
        }
        addMessage(pokemonName + " is hurt by poison!");
        break;
      case "confusion":
        if (statusTurns[status] > 0) {
          statusTurns[status]--;
          // 33% chance to hurt itself in confusion
          if (Math.random() < 0.33) {
            var confusionDamage = 20 * (isOpponent ? opAttack : userAttack);
            addMessage(pokemonName + " is confused! It hurt itself in its confusion!");
            if (isOpponent) {
              opHP -= confusionDamage;
              if (opHP < 0) opHP = 0;
              updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
              if (opHP == 0) {
                showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
                showResetButton();
                return false;
              }
            } else {
              userHP -= confusionDamage;
              if (userHP < 0) userHP = 0;
              updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
              if (userHP == 0) {
                showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
                showResetButton();
                return false;
              }
            }
            canMove = false;
          }
        } else {
          toRemove.push(status);
          addMessage(pokemonName + " snapped out of confusion!");
        }
        break;
    }
  }
  // Remove expired effects
  for (let status of toRemove) {
    let arr = isOpponent ? opponentStatus : playerStatus;
    let turns = isOpponent ? opponentStatusTurns : playerStatusTurns;
    let idx = arr.indexOf(status);
    if (idx !== -1) arr.splice(idx, 1);
    delete turns[status];
  }
  updateStatusDisplay();
  return canMove;
}

// Function to get move damage (increase damage for faster battles)
function getMoveDamage(moveName) {
  var moveDamages = {
    "Water Cannon": 40, "Water Pulse": 28, "Surf": 18, "Tackle": 10,
    "Flame Thrower": 40, "Dragon Claw": 28, "Ember": 18,
    "Vine Whip": 32, "Razor Leaf": 28, "Seed Bomb": 22,
    "Fire Fang": 32, "Flame Burst": 28, "Water Gun": 32, "Bubble": 22,
    "Aqua Jet": 28, "Thunder Shock": 32, "Quick Attack": 28,
    "Thunderbolt": 40, "Bite": 28, "Psychic": 45,
    "Shadow Ball": 40, "Aura Sphere": 32, "Dragon Rush": 45,
    "Hyper Beam": 50, "Scratch": 22, "Slash": 32, "Poison Sting": 28, "Horn Attack": 32,
    "Body Slam": 40, "Pound": 28, "Gust": 28,
    "Fury Attack": 28, "Twineedle": 32, "Wing Attack": 32, "Hyper Fang": 40, "Peck": 22,
    "Drill Peck": 40, "Acid": 28, "Karate Chop": 32,
    "Low Kick": 28, "Seismic Toss": 32, "Psybeam": 40, "Rock Throw": 28,
    "Rock Slide": 40, "Solar Beam": 50
  };
  return moveDamages[moveName] || 22;
}

// Function to check cheat code
function checkCheatCode(key) {
  cheatSequence.push(key);
  
  // Keep only the last 10 keys
  if (cheatSequence.length > 10) {
    cheatSequence.shift();
  }
  
  // Check if the sequence matches the cheat code
  if (cheatSequence.length === 10) {
    var isMatch = true;
    for (var i = 0; i < 10; i++) {
      if (cheatSequence[i] !== cheatCode[i]) {
        isMatch = false;
        break;
      }
    }
    
    if (isMatch) {
      // Instant enemy faint
      opHP = 0;
      updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
      document.getElementById('message').innerHTML = currentOpponentPokemon.name + " has fainted, Enemy lost! ";
      
      // Trigger explosion animation
      var explosion = document.getElementById('explosionAnimation');
      explosion.style.display = 'flex';
      
      // Hide explosion after animation completes
      setTimeout(function() {
        explosion.style.display = 'none';
      }, 2000);
      
      showResetButton();
      cheatSequence = []; // Reset sequence
    }
  }
}

// Add event listener for key presses
document.addEventListener('keydown', function(event) {
  checkCheatCode(event.code);
});

// Function to update HP bars
function updateHPBar(barId, currentHP, maxHP) {
  var bar = document.getElementById(barId);
  var percentage = (currentHP / maxHP) * 100;
  bar.style.width = percentage + '%';
  
  // Change color based on HP percentage
  bar.className = 'hp-bar';
  if (percentage <= 20) {
    bar.classList.add('red');
  } else if (percentage <= 50) {
    bar.classList.add('yellow');
  }
}

// Function to update HP counter
function updateHPCounter(counterId, currentHP, maxHP) {
  var counter = document.getElementById(counterId);
  counter.innerHTML = Math.round(currentHP) + '/' + maxHP;
}

// Combined function to update both HP bar and counter
function updateHP(barId, counterId, currentHP, maxHP) {
  updateHPBar(barId, currentHP, maxHP);
  updateHPCounter(counterId, currentHP, maxHP);
}

// Function to show reset button when battle ends
function showResetButton() {
  document.getElementById('resetButton').style.display = 'block';
}

// Function to reset the game to beginning state
function resetGame() {
  // Clear message queue
  messageQueue = [];
  isDisplayingMessage = false;
  
  // Initialize new battle with random Pokemon
  initializeBattle();
  
  // Reset player move
  playerMove = 0;
  
  // Reset status conditions
  playerStatus = [];
  opponentStatus = [];
  playerStatusTurns = {};
  opponentStatusTurns = {};
  
  // Hide reset button
  document.getElementById('resetButton').style.display = 'none';
}

// Helper to enable/disable move buttons
function setMoveButtonsEnabled(enabled) {
  document.getElementById('move1').disabled = !enabled;
  document.getElementById('move2').disabled = !enabled;
  document.getElementById('move3').disabled = !enabled;
  document.getElementById('move4').disabled = !enabled;
  var actions = document.querySelector('.actions');
  if (enabled) {
    actions.classList.remove('actions-blocked');
    var overlay = actions.querySelector('.blocked-overlay');
    if (overlay) overlay.remove();
  } else {
    if (!actions.classList.contains('actions-blocked')) {
      actions.classList.add('actions-blocked');
    }
    if (!actions.querySelector('.blocked-overlay')) {
      var overlay = document.createElement('div');
      overlay.className = 'blocked-overlay';
      actions.appendChild(overlay);
    }
  }
}

// At the start of the player's turn, enable move buttons
function setMessage(message, isFaint = false) {
  // If a Pokemon is fainted, always show the faint message
  if ((userHP === 0 || opHP === 0) && currentFaintMessage && !isFaint) {
    document.getElementById('message').innerHTML = currentFaintMessage;
    setMoveButtonsEnabled(false);
    return;
  }
  if (isFaint) {
    currentFaintMessage = message;
  }
  document.getElementById('message').innerHTML = message;
  // Enable move buttons only if it's the player's turn and no one has fainted
  if (message && message.startsWith('What should') && userHP > 0 && opHP > 0) {
    setMoveButtonsEnabled(true);
  }
}

// When a move is selected, immediately disable move buttons
function move1() {
  if(userHP != 0 && !isDisplayingMessage && !document.getElementById('move1').disabled) {
    setMoveButtonsEnabled(false);
    executeTurn(0);
  }
}
function move2() {
  if(userHP != 0 && !isDisplayingMessage && !document.getElementById('move2').disabled) {
    setMoveButtonsEnabled(false);
    executeTurn(1);
  }
}
function move3() {
  if(userHP != 0 && !isDisplayingMessage && !document.getElementById('move3').disabled) {
    setMoveButtonsEnabled(false);
    executeTurn(2);
  }
}
function move4() {
  if(userHP != 0 && !isDisplayingMessage && !document.getElementById('move4').disabled) {
    setMoveButtonsEnabled(false);
    executeTurn(3);
  }
}



/* opponent's moves */

function flameThrower() {
  var miss = Math.floor((Math.random() * 10) + 1); // miss rate
  if(miss == 1 ) {
  document.getElementById('message').innerHTML = " Charizard's attack missed! " // attack missed
  }
  else {
  document.getElementById('message').innerHTML = " Charizard used flame thrower " // attack
    var critical = Math.floor((Math.random() * 10) + 1); // critical
    var baseDmg = 30 * opAttack;
      if(critical == 4){
        for(var x = 0; x < 2; x++){ // yes critical
          userHP = userHP - baseDmg;
        }
      }
      else{
        userHP = userHP - baseDmg; // no critical
      }
  if(userHP < 0) { userHP = 0} // faint
  updateHP('myHPBar', 'myHPCounter', userHP, 160); // update hp
    if(userHP == 0) { // fainted
    document.getElementById('message').innerHTML = " Blastoise has fainted, You lost! " // fainted
    showResetButton();
    }
  }
}

function dragonClaw() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Charizard's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Charizard used dragon claw "
  var critical = Math.floor((Math.random() * 10) + 1);
  var baseDmg = 20 * opAttack;
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - baseDmg;
      }
    }
    else{
      userHP = userHP - baseDmg;
    }
  if(userHP < 0) { userHP = 0}
  updateHP('myHPBar', 'myHPCounter', userHP, 160);
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Blastoise has fainted, You lost! "
      showResetButton();
    }
  }
}

function ember() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Charizard's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Charizard used ember "
  var critical = Math.floor((Math.random() * 10) + 1);
  var baseDmg = 10 * opAttack;
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - baseDmg;
      }
    }
    else{
      userHP = userHP - baseDmg;
    }
  if(userHP < 0) { userHP = 0}
  updateHP('myHPBar', 'myHPCounter', userHP, 160);
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Blastoise has fainted, You lost! "
      showResetButton();
    }
  }
}

function growl() {
  // If Charizard uses growl, lower Blastoise's attack
  if (typeof playerMove !== 'undefined' && playerMove === 1 && userHP !== 0) {
    userAttack = Math.max(0.5, userAttack - 1);
    document.getElementById('message').innerHTML = " Charizard used growl! Blastoise's attack fell! ";
  } else if (typeof playerMove !== 'undefined' && playerMove === 0 && opHP !== 0) {
    opAttack = Math.max(0.5, opAttack - 1);
    document.getElementById('message').innerHTML = " Blastoise used growl! Charizard's attack fell! ";
  }
}


// Note: compPokemon function is no longer needed as turn order is now handled by executeTurn()
// The old opponent move functions (flameThrower, dragonClaw, ember, growl) are also deprecated
// All turn logic is now centralized in the executeTurn() function

// Initialize the game immediately when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initializeBattle();
  });
} else {
  // DOM is already loaded
  initializeBattle();
}

// Function to get the back sprite URL for a given Pokemon name
function getBackSpriteUrl(pokemonName) {
  // Convert name to lowercase and replace spaces, dots, and special chars with dashes or remove
  let name = pokemonName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  // Handle special cases for Nidoran
  if (name === 'nidoran-m') name = 'nidoran-m';
  if (name === 'nidoran-f') name = 'nidoran-f';
  return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${name}.gif`;
}

// Animated grid background for the tab
document.addEventListener('DOMContentLoaded', function() {
  (function squaresBackground() {
    const canvas = document.getElementById('squares-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let gridOffset = { x: 0, y: 0 };
    let hoveredSquare = null;
    const direction = 'right';
    const speed = 1;
    // Harmonize grid colors with the new dark background
    const borderColor = '#292929'; // slightly lighter than bg, visible but subtle
    const squareSize = 40;
    const hoverFillColor = '#353535'; // a bit lighter for hover, still subtle
    const backgroundFill = '#181818'; // main background

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function drawGrid() {
      // Fill background with dark color
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const numSquaresX = Math.ceil(canvas.width / squareSize) + 1;
      const numSquaresY = Math.ceil(canvas.height / squareSize) + 1;
      const startX = Math.floor(gridOffset.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.x % squareSize);
          const squareY = y - (gridOffset.y % squareSize);

          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1.2;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // Subtle radial gradient overlay for depth
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, 'rgba(24, 24, 24, 0.5)'); // center, semi-transparent
      gradient.addColorStop(1, 'rgba(24, 24, 24, 0.85)'); // edge, more opaque
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function updateAnimation() {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'right':
          gridOffset.x = (gridOffset.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'left':
          gridOffset.x = (gridOffset.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'up':
          gridOffset.y = (gridOffset.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'down':
          gridOffset.y = (gridOffset.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'diagonal':
          gridOffset.x = (gridOffset.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.y = (gridOffset.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }
      drawGrid();
      requestAnimationFrame(updateAnimation);
    }

    canvas.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const startX = Math.floor(gridOffset.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.y / squareSize) * squareSize;
      const hoveredSquareX = Math.floor((mouseX + gridOffset.x - startX) / squareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.y - startY) / squareSize);
      hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
    });
    canvas.addEventListener('mouseleave', () => {
      hoveredSquare = null;
    });

    requestAnimationFrame(updateAnimation);
  })();
});
