// Credit: Matan (hidden)

// Matan was here (hidden credit)

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

  // Block disabled move for player
  if (playerDisabledMove && playerDisabledTurns > 0 && currentPlayerPokemon.moves[playerMoveIndex] === playerDisabledMove) {
    addMessage(currentPlayerPokemon.name + "'s " + playerDisabledMove + " is disabled! Choose another move.");
    setMessage("What should " + currentPlayerPokemon.name + " do?");
    return;
  }

  var playerGoesFirst = determineTurnOrder();
  var playerMoveName = currentPlayerPokemon.moves[playerMoveIndex];
  var opponentMoveIndex = Math.floor(Math.random() * 4);
  var opponentMoveName = currentOpponentPokemon.moves[opponentMoveIndex];

  // Block disabled move for opponent
  if (opponentDisabledMove && opponentDisabledTurns > 0 && opponentMoveName === opponentDisabledMove) {
    // Pick a different move if possible
    var availableMoves = currentOpponentPokemon.moves.filter(m => m !== opponentDisabledMove);
    if (availableMoves.length > 0) {
      opponentMoveName = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }
  }

  function queuePrompt() {
    setMessage("What should " + currentPlayerPokemon.name + " do?");
  }

  function afterPlayerMove() {
    if (opHP > 0 && checkStatusEffects(true)) {
      executeMove(opponentMoveName, currentOpponentPokemon, true);
      if (messageQueue.length === 0) {
        queuePrompt();
      } else {
        messageQueueCallback = queuePrompt;
      }
    } else {
      if (messageQueue.length === 0) {
        queuePrompt();
      } else {
        messageQueueCallback = queuePrompt;
      }
    }
  }

  function afterOpponentMove() {
    if (userHP > 0 && checkStatusEffects(false)) {
      executeMove(playerMoveName, currentPlayerPokemon, false);
      if (messageQueue.length === 0) {
        queuePrompt();
      } else {
        messageQueueCallback = queuePrompt;
      }
    } else {
      if (messageQueue.length === 0) {
        queuePrompt();
      } else {
        messageQueueCallback = queuePrompt;
      }
    }
  }

  if (playerGoesFirst) {
    if (checkStatusEffects(false)) {
      executeMove(playerMoveName, currentPlayerPokemon, false);
      if (messageQueue.length === 0) {
        afterPlayerMove();
      } else {
        messageQueueCallback = afterPlayerMove;
      }
    } else {
      if (opHP > 0 && checkStatusEffects(true)) {
        executeMove(opponentMoveName, currentOpponentPokemon, true);
        if (messageQueue.length === 0) {
          queuePrompt();
        } else {
          messageQueueCallback = queuePrompt;
        }
      } else {
        if (messageQueue.length === 0) {
          queuePrompt();
        } else {
          messageQueueCallback = queuePrompt;
        }
      }
    }
  } else {
    if (checkStatusEffects(true)) {
      executeMove(opponentMoveName, currentOpponentPokemon, true);
      if (messageQueue.length === 0) {
        afterOpponentMove();
      } else {
        messageQueueCallback = afterOpponentMove;
      }
    } else {
      if (userHP > 0 && checkStatusEffects(false)) {
        executeMove(playerMoveName, currentPlayerPokemon, false);
        if (messageQueue.length === 0) {
          queuePrompt();
        } else {
          messageQueueCallback = queuePrompt;
        }
      } else {
        if (messageQueue.length === 0) {
          queuePrompt();
        } else {
          messageQueueCallback = queuePrompt;
        }
      }
    }
  }
  decrementDisableCounters();
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
var messageQueueCallback = null;

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

  // Assign moves to Pokemon based on their types
  currentPlayerPokemon.moves = assignMovesToPokemon(currentPlayerPokemon);
  currentOpponentPokemon.moves = assignMovesToPokemon(currentOpponentPokemon);
  
  // Update status displays
  updateStatusDisplay();
  
  // Set opponent moves
  opAttacks = currentOpponentPokemon.moves.map(function (moveName) {
    return function () { executeMove(moveName, currentOpponentPokemon, true); };
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
  updatePlayerStatMods();
  updateOpponentStatMods();
}

// Helper to format stat mod value as xN (e.g., x2, x1.5)
function formatStatMod(val) {
  return 'x' + (Math.round(val * 100) / 100).toFixed(2).replace(/\.00$/, '');
}

// Update player stat mod boxes
function updatePlayerStatMods() {
  var container = document.getElementById('playerStatMods');
  container.innerHTML = '';
  var stats = [
    { key: 'userAttack', label: 'atk', val: window.userAttack },
    { key: 'userDefense', label: 'def', val: window.userDefense },
    { key: 'userSpeed', label: 'spd', val: window.userSpeed },
    { key: 'userAccuracy', label: 'acc', val: window.userAccuracy }
  ];
  stats.forEach(stat => {
    if (stat.val && stat.val !== 1) {
      var div = document.createElement('div');
      div.className = 'statmod-box';
      div.textContent = stat.label + ' ' + formatStatMod(stat.val);
      container.appendChild(div);
    }
  });
}

// Update opponent stat mod boxes
function updateOpponentStatMods() {
  var container = document.getElementById('opponentStatMods');
  container.innerHTML = '';
  var stats = [
    { key: 'opAttack', label: 'atk', val: window.opAttack },
    { key: 'opDefense', label: 'def', val: window.opDefense },
    { key: 'opSpeed', label: 'spd', val: window.opSpeed },
    { key: 'opAccuracy', label: 'acc', val: window.opAccuracy }
  ];
  stats.forEach(stat => {
    if (stat.val && stat.val !== 1) {
      var div = document.createElement('div');
      div.className = 'statmod-box';
      div.textContent = stat.label + ' ' + formatStatMod(stat.val);
      container.appendChild(div);
    }
  });
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
      switch (status) {
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
      switch (status) {
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
function addMessage(message, callback) {
  // If a Pokemon is fainted, always show the faint message
  if ((userHP === 0 || opHP === 0) && currentFaintMessage) {
    setMessage(currentFaintMessage);
    if (callback) callback();
    return;
  }
  
  // If no message but callback provided, execute callback immediately
  if (!message && callback) {
    callback();
    return;
  }
  
  // If no message and no callback, do nothing
  if (!message) {
    return;
  }
  
  messageQueue.push(message);
  if (callback) messageQueueCallback = callback;
  if (!isDisplayingMessage) {
    displayNextMessage();
  }
}

// Function to display next message in queue
function displayNextMessage() {
  if (messageQueue.length === 0) {
    isDisplayingMessage = false;
    enableMoveButtons();
    if (messageQueueCallback) {
      var cb = messageQueueCallback;
      messageQueueCallback = null;
      cb();
    }
    return;
  }
  isDisplayingMessage = true;
  disableMoveButtons();
  var message = messageQueue.shift();
  document.getElementById('message').innerHTML = message;
  // Wait 1 second before showing next message
  setTimeout(function () {
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
  // Track last used move
  if (isOpponent) {
    opponentLastMove = moveName;
  } else {
    playerLastMove = moveName;
  }

  var targetHP = isOpponent ? userHP : opHP;
  var targetMaxHP = isOpponent ? calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level) : calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level);
  var attackerName = pokemon.name;
  var targetName = isOpponent ? currentPlayerPokemon.name : currentOpponentPokemon.name;
  var attackerStatus = isOpponent ? opponentStatus : playerStatus;
  var targetStatus = isOpponent ? playerStatus : opponentStatus;
  var attackerStatusTurns = isOpponent ? opponentStatusTurns : playerStatusTurns;
  var targetStatusTurns = isOpponent ? playerStatusTurns : opponentStatusTurns;

  // Check if it's a status move
  if (isStatusMove(moveName)) {
    executeStatusMove(moveName, pokemon, isOpponent);
    return;
  }

  // Regular damage move - check accuracy first
  var moveAccuracy = getMoveAccuracy(moveName);
  var attackerAccuracy = isOpponent ? opAccuracy : userAccuracy;

  // Calculate final accuracy (move accuracy * attacker's accuracy modifier)
  var finalAccuracy = moveAccuracy * attackerAccuracy;

  // Check if move hits
  if (Math.random() * 100 > finalAccuracy) {
    addMessage(attackerName + "'s " + moveName + " missed!");
    return;
  }

  // Multi-hit moves
  var effect = getMoveEffect(moveName);
  var hits = 1;
  if (effect && effect.match(/Hits (\d)-(\d) times/)) {
    var match = effect.match(/Hits (\d)-(\d) times/);
    var minHits = parseInt(match[1]);
    var maxHits = parseInt(match[2]);
    hits = Math.floor(Math.random() * (maxHits - minHits + 1)) + minHits;
  } else if (effect && effect.match(/Hits twice/)) {
    hits = 2;
  }

  var totalDamage = 0;
  var fainted = false;

  function processHit(i) {
    if (i >= hits || fainted) {
      // After all hits, show move summary and process effects
      addMessage(attackerName + " used " + moveName + "!", function() {
        processMoveEffect(moveName, pokemon, isOpponent, totalDamage);
      });
      return;
    }
    var baseDmg = getMoveDamage(moveName) * (isOpponent ? opAttack : userAttack);
    var critical = Math.floor((Math.random() * 10) + 1);
    if (effect && effect.includes("High critical hit ratio")) {
      if (Math.random() < 0.25) {
        baseDmg *= 2;
        addMessage("A critical hit!");
      }
    } else if (critical == 4) {
      baseDmg *= 2;
      addMessage("A critical hit!");
    }
    // Apply defense reduction
    var targetDefense = isOpponent ? userDefense : opDefense;
    baseDmg = Math.floor(baseDmg / targetDefense);
    baseDmg = Math.max(1, baseDmg); // Always at least 1
    targetHP -= baseDmg * 0.5;
    totalDamage += baseDmg * 0.5;
    if (targetHP < 0) targetHP = 0;
    if (isOpponent) {
      userHP = targetHP;
      updateHP('myHPBar', 'myHPCounter', userHP, targetMaxHP);
      if (userHP == 0) {
        showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
        showResetButton();
        fainted = true;
        return;
      }
    } else {
      opHP = targetHP;
      updateHP('apHPBar', 'apHPCounter', opHP, targetMaxHP);
      if (opHP == 0) {
        showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
        showResetButton();
        fainted = true;
        return;
      }
    }
    if (hits > 1) {
      addMessage(attackerName + " hit " + targetName + "! (" + (i+1) + "/" + hits + ")", function() {
        processHit(i+1);
      });
    } else {
      processHit(i+1);
    }
  }

  processHit(0);
}

// Helper to process move effects for damaging moves
function processMoveEffect(moveName, pokemon, isOpponent, totalDamage) {
  var effect = getMoveEffect(moveName);
  var attackerName = pokemon.name;
  var targetName = isOpponent ? currentPlayerPokemon.name : currentOpponentPokemon.name;
  var attackerStatus = isOpponent ? opponentStatus : playerStatus;
  var targetStatus = isOpponent ? playerStatus : opponentStatus;
  var attackerStatusTurns = isOpponent ? opponentStatusTurns : playerStatusTurns;
  var targetStatusTurns = isOpponent ? playerStatusTurns : opponentStatusTurns;
  var isMajorStatus = s => ["sleep","paralysis","poison","burn","freeze","toxic"].includes(s);

  // Helper for inflicting status
  function tryInflictStatus(status, chance = 1.0) {
    if (!targetStatus.includes(status) && Math.random() < chance && canInflictMajorStatus(targetStatus)) {
      targetStatus.push(status);
      updateStatusDisplay();
      addMessage(targetName + " was " + status + "ed!");
      return true;
    }
    return false;
  }

  if (!effect || effect === "None") return;

  // Status infliction (secondary effects)
  if (effect.includes("May burn")) {
    tryInflictStatus("burn", 0.1); // 10% chance
  }
  if (effect.includes("May paralyze")) {
    tryInflictStatus("paralysis", 0.1);
  }
  if (effect.includes("May freeze")) {
    tryInflictStatus("freeze", 0.1);
  }
  if (effect.includes("May confuse")) {
    if (!targetStatus.includes("confusion") && Math.random() < 0.1) {
      targetStatus.push("confusion");
      targetStatusTurns["confusion"] = Math.floor(Math.random() * 4) + 2;
      updateStatusDisplay();
      addMessage(targetName + " became confused!");
    }
  }
  if (effect.includes("May flinch")) {
    if (Math.random() < 0.3) {
      addMessage(targetName + " flinched and couldn't move!");
      // Could implement flinch logic for next turn
    }
  }
  if (effect.includes("May lower Special Defense")) {
    if (Math.random() < 0.1) {
      // No special defense stat, so skip or add message
      addMessage(targetName + "'s Special Defense fell!");
    }
  }
  if (effect.includes("May lower Speed")) {
    if (Math.random() < 0.1) {
      if (isOpponent) {
        opSpeed = Math.max(0.5, opSpeed - 0.5);
      } else {
        userSpeed = Math.max(0.5, userSpeed - 0.5);
      }
      addMessage(targetName + "'s Speed fell!");
    }
  }
  if (effect.includes("May lower Attack")) {
    if (Math.random() < 0.1) {
      if (isOpponent) {
        opAttack = Math.max(0.5, opAttack - 0.5);
      } else {
        userAttack = Math.max(0.5, userAttack - 0.5);
      }
      addMessage(targetName + "'s Attack fell!");
    }
  }
  if (effect.includes("May lower Defense")) {
    if (Math.random() < 0.1) {
      if (isOpponent) {
        opDefense = Math.max(0.5, opDefense - 0.5);
      } else {
        userDefense = Math.max(0.5, userDefense - 0.5);
      }
      addMessage(targetName + "'s Defense fell!");
    }
  }
  if (effect.includes("May damage adjacent Pokémon")) {
    // Not implemented (single battle only)
  }
  if (effect.includes("May cause flinch")) {
    if (Math.random() < 0.3) {
      addMessage(targetName + " flinched and couldn't move!");
      // Could implement flinch logic for next turn
    }
  }
  if (effect.includes("User recovers half the damage dealt")) {
    var heal = Math.floor(totalDamage / 2);
    if (isOpponent) {
      opHP = Math.min(opHP + heal, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
      updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
      addMessage(attackerName + " regained health!");
    } else {
      userHP = Math.min(userHP + heal, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
      updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
      addMessage(attackerName + " regained health!");
    }
  }
  if (effect.includes("User takes recoil damage")) {
    var recoil = Math.floor(totalDamage / 4);
    if (isOpponent) {
      opHP -= recoil;
      if (opHP < 0) opHP = 0;
      updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
      addMessage(attackerName + " was hurt by recoil!");
      if (opHP == 0) {
        showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
        showResetButton();
      }
    } else {
      userHP -= recoil;
      if (userHP < 0) userHP = 0;
      updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
      addMessage(attackerName + " was hurt by recoil!");
      if (userHP == 0) {
        showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
        showResetButton();
      }
    }
  }
  if (effect.includes("User becomes confused")) {
    if (!attackerStatus.includes("confusion")) {
      attackerStatus.push("confusion");
      attackerStatusTurns["confusion"] = Math.floor(Math.random() * 4) + 2;
      updateStatusDisplay();
      addMessage(attackerName + " became confused!");
    }
  }
  if (effect.includes("Always deals 20 damage")) {
    // Already handled by move power in getMoveDamage
  }
  if (effect.includes("Always deals 40 damage")) {
    // Already handled by move power in getMoveDamage
  }
  if (effect.includes("Never misses")) {
    // Already handled by accuracy 0 = never miss
  }
  if (effect.includes("User must recharge")) {
    // Not implemented: recharge turn
    addMessage(attackerName + " must recharge next turn!");
  }
  if (effect.includes("User faints")) {
    if (isOpponent) {
      opHP = 0;
      updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
      showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
      showResetButton();
    } else {
      userHP = 0;
      updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
      showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
      showResetButton();
    }
  }
  if (effect.includes("Reduces opponent's HP to half")) {
    if (isOpponent) {
      userHP = Math.floor(userHP / 2);
      updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
      addMessage(targetName + "'s HP was halved!");
      if (userHP == 0) {
        showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
        showResetButton();
      }
    } else {
      opHP = Math.floor(opHP / 2);
      updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
      addMessage(targetName + "'s HP was halved!");
      if (opHP == 0) {
        showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
        showResetButton();
      }
    }
  }
  // Remove Whirlwind/Roar effect handling (no-op)
  if (effect && effect.includes("Forces opponent to switch")) {
    addMessage("But nothing happened!");
    return;
  }
  
  // One-hit KO moves
  if (effect && effect.includes("One-hit KO")) {
    if (isOpponent) {
      userHP = 0;
      updateHP('myHPBar', 'myHPCounter', userHP, calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level));
      showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
      showResetButton();
    } else {
      opHP = 0;
      updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
      showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
      showResetButton();
    }
    return;
  }
}

// Function to check if a move is a status move
function isStatusMove(moveName) {
  if (movesDatabase[moveName]) {
    return movesDatabase[moveName].category === "Status";
  }
  // Fallback for moves not in database
  var statusMoves = [
    "Growl", "Growth", "Agility", "Defense Curl", "Leer", 
    "Sing", "Double Slap", "Fire Spin", "Sleep Powder", "String Shot", 
    "Scary Face", "Glare", "Thunder Wave", "Poison Powder", "Spore", 
    "Supersonic", "Tail Whip", "Hypnosis", "Kinesis", 
    "Calm Mind", "Sand Attack", "Thrash", "Petal Dance", "Confusion"
  ];
  return statusMoves.includes(moveName);
}

// === Status Effect Helpers ===
function canInflictMajorStatus(targetStatusArr) {
  // Only one major status at a time (sleep, paralysis, poison, burn, freeze, toxic)
  const majorStatuses = ["sleep", "paralysis", "poison", "burn", "freeze", "toxic"];
  return !targetStatusArr.some(s => majorStatuses.includes(s));
}

// === Update executeStatusMove for all status moves ===
function executeStatusMove(moveName, pokemon, isOpponent) {
  var attackerName = pokemon.name;
  var targetName = isOpponent ? currentPlayerPokemon.name : currentOpponentPokemon.name;
  var attackerStatus = isOpponent ? opponentStatus : playerStatus;
  var targetStatus = isOpponent ? playerStatus : opponentStatus;
  var attackerStatusTurns = isOpponent ? opponentStatusTurns : playerStatusTurns;
  var targetStatusTurns = isOpponent ? playerStatusTurns : opponentStatusTurns;
  var isMajorStatus = s => ["sleep","paralysis","poison","burn","freeze","toxic"].includes(s);

  addMessage(attackerName + " used " + moveName + "!");
  processStatusMoveEffect(moveName, pokemon, isOpponent);
}

// Helper to process status move effects
function processStatusMoveEffect(moveName, pokemon, isOpponent) {
  var effect = getMoveEffect(moveName);
  var attackerName = pokemon.name;
  var targetName = isOpponent ? currentPlayerPokemon.name : currentOpponentPokemon.name;
  var attackerStatus = isOpponent ? opponentStatus : playerStatus;
  var targetStatus = isOpponent ? playerStatus : opponentStatus;
  var attackerStatusTurns = isOpponent ? opponentStatusTurns : playerStatusTurns;
  var targetStatusTurns = isOpponent ? playerStatusTurns : opponentStatusTurns;

  // Helper for inflicting status
  function tryInflictStatus(status, turns = undefined) {
    if (!targetStatus.includes(status) && canInflictMajorStatus(targetStatus)) {
      targetStatus.push(status);
      if (turns) targetStatusTurns[status] = turns;
      updateStatusDisplay();
      addMessage(targetName + " was " + status + (status === "sleep" ? "!" : "ed!"));
      return true;
    }
    addMessage(attackerName + "'s move had no effect!");
    return false;
  }

  if (!effect || effect === "None") return;

  // Status infliction
  if (effect.includes("Paralyzes opponent")) {
    tryInflictStatus("paralysis");
    return;
  }
  if (effect.includes("Poisons opponent")) {
    tryInflictStatus("poison");
    return;
  }
  if (effect.includes("Badly poisons opponent")) {
    if (!targetStatus.includes("toxic") && canInflictMajorStatus(targetStatus)) {
      targetStatus.push("toxic");
      targetStatusTurns["toxicCounter"] = 1;
      updateStatusDisplay();
      addMessage(targetName + " was badly poisoned!");
    } else {
      addMessage(attackerName + "'s move had no effect!");
    }
    return;
  }
  if (effect.includes("Puts opponent to sleep")) {
    var turns = Math.floor(Math.random() * 3) + 2;
    tryInflictStatus("sleep", turns);
    return;
  }
  if (effect.includes("Confuses opponent")) {
    if (!targetStatus.includes("confusion")) {
      targetStatus.push("confusion");
      targetStatusTurns["confusion"] = Math.floor(Math.random() * 4) + 2;
      updateStatusDisplay();
      addMessage(targetName + " became confused!");
    } else {
      addMessage(attackerName + "'s move had no effect!");
    }
    return;
  }
  if (effect.includes("Raises Attack by 2 stages")) {
    if (isOpponent) {
      opAttack += 1;
    } else {
      userAttack += 1;
    }
    addMessage(attackerName + "'s Attack rose sharply!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Raises Attack by 1 stage")) {
    if (isOpponent) {
      opAttack += 0.5;
    } else {
      userAttack += 0.5;
    }
    addMessage(attackerName + "'s Attack rose!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Raises Defense by 2 stages")) {
    if (isOpponent) {
      opDefense += 1;
    } else {
      userDefense += 1;
    }
    addMessage(attackerName + "'s Defense rose sharply!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Raises Defense by 1 stage")) {
    if (isOpponent) {
      opDefense += 0.5;
    } else {
      userDefense += 0.5;
    }
    addMessage(attackerName + "'s Defense rose!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Lowers Defense by 1 stage")) {
    if (isOpponent) {
      userDefense = Math.max(0.5, userDefense - 0.5);
    } else {
      opDefense = Math.max(0.5, opDefense - 0.5);
    }
    addMessage(targetName + "'s Defense fell!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Lowers Attack by 1 stage")) {
    if (isOpponent) {
      userAttack = Math.max(0.5, userAttack - 0.5);
    } else {
      opAttack = Math.max(0.5, opAttack - 0.5);
    }
    addMessage(targetName + "'s Attack fell!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Raises Speed by 2 stages")) {
    if (isOpponent) {
      opSpeed += 1;
    } else {
      userSpeed += 1;
    }
    addMessage(attackerName + "'s Speed rose sharply!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Raises Speed by 1 stage")) {
    if (isOpponent) {
      opSpeed += 0.5;
    } else {
      userSpeed += 0.5;
    }
    addMessage(attackerName + "'s Speed rose!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Lowers Speed by 2 stages")) {
    if (isOpponent) {
      userSpeed = Math.max(0.5, userSpeed - 1);
    } else {
      opSpeed = Math.max(0.5, opSpeed - 1);
    }
    addMessage(targetName + "'s Speed harshly fell!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Lowers Speed by 1 stage")) {
    if (isOpponent) {
      userSpeed = Math.max(0.5, userSpeed - 0.5);
    } else {
      opSpeed = Math.max(0.5, opSpeed - 0.5);
    }
    addMessage(targetName + "'s Speed fell!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Lowers accuracy by 1 stage")) {
    if (isOpponent) {
      userAccuracy = Math.max(0.5, userAccuracy - 0.5);
    } else {
      opAccuracy = Math.max(0.5, opAccuracy - 0.5);
    }
    addMessage(targetName + "'s accuracy fell!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Raises evasion by 1 stage")) {
    // Not implemented: evasion stat
    addMessage(attackerName + "'s evasion rose!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Raises evasion by 2 stages")) {
    // Not implemented: evasion stat
    addMessage(attackerName + "'s evasion rose sharply!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Restores half max HP")) {
    var maxHP = isOpponent ? calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level) : calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level);
    if (isOpponent) {
      opHP = Math.min(opHP + Math.floor(maxHP / 2), maxHP);
      updateHP('apHPBar', 'apHPCounter', opHP, maxHP);
      addMessage(attackerName + " regained health!");
    } else {
      userHP = Math.min(userHP + Math.floor(maxHP / 2), maxHP);
      updateHP('myHPBar', 'myHPCounter', userHP, maxHP);
      addMessage(attackerName + " regained health!");
    }
    updateStatusDisplay();
    return;
  }
  if (effect.includes("User sleeps for 2 turns and fully recovers")) {
    var maxHP = isOpponent ? calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level) : calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level);
    if (isOpponent) {
      opHP = maxHP;
      updateHP('apHPBar', 'apHPCounter', opHP, maxHP);
      if (!attackerStatus.includes("sleep")) {
        attackerStatus.push("sleep");
        attackerStatusTurns["sleep"] = 2;
      }
      addMessage(attackerName + " fell asleep and fully recovered!");
    } else {
      userHP = maxHP;
      updateHP('myHPBar', 'myHPCounter', userHP, maxHP);
      if (!attackerStatus.includes("sleep")) {
        attackerStatus.push("sleep");
        attackerStatusTurns["sleep"] = 2;
      }
      addMessage(attackerName + " fell asleep and fully recovered!");
    }
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Does nothing")) {
    addMessage("But nothing happened!");
    return;
  }
  // Add more effect parsing as needed
  // In processStatusMoveEffect, add special handling for Growth
  if (moveName === "Growth") {
    if (isOpponent) {
      opAttack += 0.5;
      opDefense += 0.5;
    } else {
      userAttack += 0.5;
      userDefense += 0.5;
    }
    addMessage(attackerName + "'s Attack and Defense rose!");
    updateStatusDisplay();
    return;
  }
  if (effect.includes("Disables last used move")) {
    // Only disable if target has used a move
    var lastMove = isOpponent ? playerLastMove : opponentLastMove;
    if (!lastMove) {
      addMessage(attackerName + " tried to disable, but it failed!");
      return;
    }
    var turns = Math.floor(Math.random() * 3) + 3; // 3-5 turns
    if (isOpponent) {
      playerDisabledMove = lastMove;
      playerDisabledTurns = turns;
      addMessage(targetName + "'s " + lastMove + " was disabled!");
    } else {
      opponentDisabledMove = lastMove;
      opponentDisabledTurns = turns;
      addMessage(targetName + "'s " + lastMove + " was disabled!");
    }
    return;
  }
}

// Function to check and apply status effects at the start of a turn
function checkStatusEffects(isOpponent) {
  var statusArr = isOpponent ? opponentStatus : playerStatus;
  var statusTurns = isOpponent ? opponentStatusTurns : playerStatusTurns;
  var toxicCounter = isOpponent ? (opponentStatusTurns["toxicCounter"] || 1) : (playerStatusTurns["toxicCounter"] || 1);
  var pokemonName = isOpponent ? currentOpponentPokemon.name : currentPlayerPokemon.name;
  var canMove = true;
  let toRemove = [];
  for (let status of statusArr) {
    switch (status) {
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
        var poisonDamage = Math.floor(maxHP / 8); // Gen 5/6: 1/8
        if (isOpponent) {
          opHP -= poisonDamage * 0.5;
          if (opHP < 0) opHP = 0;
          updateHP('apHPBar', 'apHPCounter', opHP, maxHP);
          if (opHP == 0) {
            showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
            showResetButton();
            return false;
          }
        } else {
          userHP -= poisonDamage * 0.5;
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
      case "toxic":
        var maxHP = isOpponent ? calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level) : calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level);
        var toxicDmg = Math.floor(maxHP / 16) * toxicCounter;
        if (isOpponent) {
          opHP -= toxicDmg * 0.5;
          if (opHP < 0) opHP = 0;
          updateHP('apHPBar', 'apHPCounter', opHP, maxHP);
          if (opHP == 0) {
            showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
            showResetButton();
            return false;
          }
          opponentStatusTurns["toxicCounter"] = toxicCounter + 1;
        } else {
          userHP -= toxicDmg * 0.5;
          if (userHP < 0) userHP = 0;
          updateHP('myHPBar', 'myHPCounter', userHP, maxHP);
          if (userHP == 0) {
            showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
            showResetButton();
            return false;
          }
          playerStatusTurns["toxicCounter"] = toxicCounter + 1;
        }
        addMessage(pokemonName + " is hurt by poison!");
        break;
      case "burn":
        var maxHP = isOpponent ? calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level) : calculateHP(currentPlayerPokemon.hp, currentPlayerPokemon.level);
        var burnDamage = Math.floor(maxHP / 8); // Gen 5/6: 1/8
        if (isOpponent) {
          opHP -= burnDamage * 0.5;
          if (opHP < 0) opHP = 0;
          updateHP('apHPBar', 'apHPCounter', opHP, maxHP);
          if (opHP == 0) {
            showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
            showResetButton();
            return false;
          }
        } else {
          userHP -= burnDamage * 0.5;
          if (userHP < 0) userHP = 0;
          updateHP('myHPBar', 'myHPCounter', userHP, maxHP);
          if (userHP == 0) {
            showOnlyFaintMessage(currentPlayerPokemon.name + " has fainted, You lost!");
            showResetButton();
            return false;
          }
        }
        addMessage(pokemonName + " is hurt by its burn!");
        break;
      case "freeze":
        if (Math.random() < 0.2) {
          toRemove.push(status);
          addMessage(pokemonName + " thawed out!");
        } else {
          addMessage(pokemonName + " is frozen solid!");
          canMove = false;
        }
        break;
      case "confusion":
        if (statusTurns[status] > 0) {
          statusTurns[status]--;
          if (Math.random() < 0.33) {
            var confusionDamage = 20 * (isOpponent ? opAttack : userAttack);
            addMessage(pokemonName + " is confused! It hurt itself in its confusion!");
            if (isOpponent) {
              opHP -= confusionDamage * 0.5;
              if (opHP < 0) opHP = 0;
              updateHP('apHPBar', 'apHPCounter', opHP, calculateHP(currentOpponentPokemon.hp, currentOpponentPokemon.level));
              if (opHP == 0) {
                showOnlyFaintMessage(currentOpponentPokemon.name + " has fainted, Enemy lost!");
                showResetButton();
                return false;
              }
            } else {
              userHP -= confusionDamage * 0.5;
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
    if (status === "toxic") delete turns["toxicCounter"];
  }
  updateStatusDisplay();
  return canMove;
}

// Function to get move damage from the comprehensive moves database
function getMoveDamage(moveName) {
  if (movesDatabase[moveName]) {
    return movesDatabase[moveName].power;
  }
  // Fallback for any moves not in the database
  return 40;
}

// Function to get move accuracy
function getMoveAccuracy(moveName) {
  if (movesDatabase[moveName]) {
    return Math.max(movesDatabase[moveName].accuracy, 70);
  }
  return 100; // Default accuracy
}

// Function to get move type
function getMoveType(moveName) {
  if (movesDatabase[moveName]) {
    return movesDatabase[moveName].type;
  }
  return "Normal"; // Default type
}

// Function to get move category
function getMoveCategory(moveName) {
  if (movesDatabase[moveName]) {
    return movesDatabase[moveName].category;
  }
  return "Physical"; // Default category
}

// Function to get move effect
function getMoveEffect(moveName) {
  if (movesDatabase[moveName]) {
    return movesDatabase[moveName].effect;
  }
  return "None"; // Default effect
}

// Function to get moves by type
function getMovesByType(type) {
  var moves = [];
  for (var moveName in movesDatabase) {
    if (movesDatabase[moveName].type === type) {
      moves.push(moveName);
    }
  }
  return moves;
}

// Function to get moves by category
function getMovesByCategory(category) {
  var moves = [];
  for (var moveName in movesDatabase) {
    if (movesDatabase[moveName].category === category) {
      moves.push(moveName);
    }
  }
  return moves;
}

// Function to assign appropriate moves to a Pokemon based on its type
function assignMovesToPokemon(pokemon) {
  var moves = [];
  var pokemonType = pokemon.type;

  // Get type-specific moves
  var typeMoves = getMovesByType(pokemonType.split('/')[0]); // Use primary type
  if (pokemonType.includes('/')) {
    var secondaryTypeMoves = getMovesByType(pokemonType.split('/')[1]);
    typeMoves = typeMoves.concat(secondaryTypeMoves);
  }

  // Add some normal moves for variety
  var normalMoves = getMovesByType("Normal");

  // Combine and shuffle
  var allMoves = typeMoves.concat(normalMoves);
  allMoves = allMoves.sort(() => Math.random() - 0.5);

  // Only keep moves that exist in movesDatabase
  allMoves = allMoves.filter(m => movesDatabase[m]);

  // Select 4 unique moves
  for (var i = 0; i < allMoves.length && moves.length < 4; i++) {
    if (!moves.includes(allMoves[i])) {
      moves.push(allMoves[i]);
    }
  }

  // If we don't have enough moves, add some generic ones
  var genericMoves = ["Tackle", "Scratch", "Pound", "Growl"];
  for (var j = 0; j < genericMoves.length && moves.length < 4; j++) {
    if (!moves.includes(genericMoves[j]) && movesDatabase[genericMoves[j]]) {
      moves.push(genericMoves[j]);
    }
  }

  // As a last resort, fill with any available move
  if (moves.length < 4) {
    for (var moveName in movesDatabase) {
      if (!moves.includes(moveName)) {
        moves.push(moveName);
        if (moves.length === 4) break;
      }
    }
  }

  return moves.slice(0, 4);
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
      setTimeout(function () {
        explosion.style.display = 'none';
      }, 2000);
      
      showResetButton();
      cheatSequence = []; // Reset sequence
    }
  }
}

// Add event listener for key presses
document.addEventListener('keydown', function (event) {
  checkCheatCode(event.code);
});

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // Start the background animation
  squaresBackground();

  // Initialize the first battle
  initializeBattle();
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
  if (userHP != 0 && !isDisplayingMessage && !document.getElementById('move1').disabled) {
    setMoveButtonsEnabled(false);
    executeTurn(0);
  }
}
function move2() {
  if (userHP != 0 && !isDisplayingMessage && !document.getElementById('move2').disabled) {
    setMoveButtonsEnabled(false);
    executeTurn(1);
  }
}
function move3() {
  if (userHP != 0 && !isDisplayingMessage && !document.getElementById('move3').disabled) {
    setMoveButtonsEnabled(false);
    executeTurn(2);
  }
}
function move4() {
  if (userHP != 0 && !isDisplayingMessage && !document.getElementById('move4').disabled) {
    setMoveButtonsEnabled(false);
    executeTurn(3);
  }
}



/* opponent's moves */

function flameThrower() {
  var miss = Math.floor((Math.random() * 20) + 1); // miss rate
  if (miss == 1) {
    addMessage(" Charizard's attack missed! "); // attack missed
  }
  else {
    addMessage(" Charizard used flame thrower "); // attack
    var critical = Math.floor((Math.random() * 10) + 1); // critical
    var baseDmg = 30 * opAttack;
    if (critical == 4) {
      for (var x = 0; x < 2; x++) { // yes critical
        userHP = userHP - baseDmg * 0.5;
        }
      }
    else {
      userHP = userHP - baseDmg * 0.5; // no critical
      }
    if (userHP < 0) { userHP = 0 } // faint
  updateHP('myHPBar', 'myHPCounter', userHP, 160); // update hp
    if (userHP == 0) { // fainted
      addMessage(" Blastoise has fainted, You lost! "); // fainted
    showResetButton();
    }
  }
}

function dragonClaw() {
  var miss = Math.floor((Math.random() * 20) + 1);
  if (miss == 1) {
    addMessage(" Charizard's attack missed! ");
  }
  else {
    addMessage(" Charizard used dragon claw ");
  var critical = Math.floor((Math.random() * 10) + 1);
  var baseDmg = 20 * opAttack;
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - baseDmg * 0.5;
      }
    }
    else {
      userHP = userHP - baseDmg * 0.5;
    }
    if (userHP < 0) { userHP = 0 }
  updateHP('myHPBar', 'myHPCounter', userHP, 160);
    if (userHP == 0) {
      addMessage(" Blastoise has fainted, You lost! ");
      showResetButton();
    }
  }
}

function ember() {
  var miss = Math.floor((Math.random() * 20) + 1);
  if (miss == 1) {
    addMessage(" Charizard's attack missed! ");
  }
  else {
    addMessage(" Charizard used ember ");
  var critical = Math.floor((Math.random() * 10) + 1);
  var baseDmg = 10 * opAttack;
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - baseDmg * 0.5;
      }
    }
    else {
      userHP = userHP - baseDmg * 0.5;
    }
    if (userHP < 0) { userHP = 0 }
  updateHP('myHPBar', 'myHPCounter', userHP, 160);
    if (userHP == 0) {
      addMessage(" Blastoise has fainted, You lost! ");
      showResetButton();
    }
  }
}

function growl() {
  // If Charizard uses growl, lower Blastoise's attack
  if (typeof playerMove !== 'undefined' && playerMove === 1 && userHP !== 0) {
    userAttack = Math.max(0.5, userAttack - 1);
    addMessage(" Charizard used growl! Blastoise's attack fell! ");
  } else if (typeof playerMove !== 'undefined' && playerMove === 0 && opHP !== 0) {
    opAttack = Math.max(0.5, opAttack - 1);
    addMessage(" Blastoise used growl! Charizard's attack fell! ");
  }
}


// Note: compPokemon function is no longer needed as turn order is now handled by executeTurn()
// The old opponent move functions (flameThrower, dragonClaw, ember, growl) are also deprecated
// All turn logic is now centralized in the executeTurn() function

// Initialize the game immediately when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
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

   // --- Animated grid background for the tab ---
   function squaresBackground() {
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

    function animate() {
      gridOffset.x += speed;
      if (gridOffset.x > squareSize) gridOffset.x = 0;
      drawGrid();
      requestAnimationFrame(animate);
    }
    animate();
  }
  window.squaresBackground = squaresBackground;

  document.addEventListener('DOMContentLoaded', function () {
    squaresBackground();
    initializeBattle();
});

// --- Disable move tracking ---
var playerDisabledMove = null;
var playerDisabledTurns = 0;
var opponentDisabledMove = null;
var opponentDisabledTurns = 0;

// Decrement Disable counters at the end of each turn
function decrementDisableCounters() {
  if (playerDisabledTurns > 0) playerDisabledTurns--;
  if (playerDisabledTurns === 0) playerDisabledMove = null;
  if (opponentDisabledTurns > 0) opponentDisabledTurns--;
  if (opponentDisabledTurns === 0) opponentDisabledMove = null;
}