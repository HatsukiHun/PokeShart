[![Game Screenshot](PokeShart/Example.png)](https://github.com/HatsukiHun/PokeShart/blob/main/Exmple.png?raw=true)

# Poké Shart

A retro-style Pokémon battle game built with vanilla JavaScript, HTML, and CSS. Battle against AI opponents with authentic Pokémon mechanics, status effects, and a polished, modern UI.

## Features

### Core Gameplay
- Turn-based Pokémon battles with authentic mechanics
- 600+ Pokémon from the original Pokédex with accurate stats
- 4 moves per Pokémon, always valid and type-appropriate
- Random level generation (50-100) for varied difficulty

### Battle Mechanics
- Status effects: Sleep, Paralysis, Poison, Burn, Freeze, Toxic, Confusion
- Stat modifications: Attack, Defense, Speed, Accuracy (with real-time UI feedback)
- Only one major status at a time (except confusion, which can stack)
- Move accuracy system (minimum 70%) and critical hits
- Battles are longer and more strategic (damage halved, pacing improved)

### Visual Features
- Retro pixel art style with authentic Pokémon sprites
- Animated background
- Status effect and stat mod animations with fade-in effects
- Responsive UI with hover effects and button states
- Stat feedback boxes that show current multipliers

## How to Play

1. Open `index.html` in any modern web browser
2. Wait for the battle to load - you'll see "Loading battle..."
3. Choose your move by clicking one of the four move buttons
4. Watch the battle unfold - turns are determined by Pokémon speed
5. Defeat your opponent or try again if you lose
6. Click "Play Again" to start a new battle with different Pokémon

## Game Controls

- Move 1-4 buttons: Select your Pokémon's attack
- Play Again button: Start a new battle (appears after game ends)

## Project Structure

```
PokeShart/
├── index.html          # Main game interface
├── pokemon.js          # Game logic and battle system
├── movesData.js        # Complete move database
├── pokemonData.js      # Pokémon stats and sprites
├── pokemon.css         # Styling and animations
└── README.md           # This file
```

## Technical Details

### Technologies Used
- HTML5 - Game structure and interface
- CSS3 - Styling, animations, and responsive design
- Vanilla JavaScript - Game logic, battle mechanics, and UI interactions

### Key Components

#### Pokémon Database (pokemonData.js)
- 649 Pokémon with accurate stats from the original games
- Each Pokémon has: HP, Attack, Defense, Special Attack, Special Defense, Speed
- 4 unique, valid moves per Pokémon

#### Move Database (movesData.js)
- All classic moves with accurate power, accuracy, type, and effects
- Moves like Whirlwind, Roar, and Self-Destruct have been removed for balance

#### Battle System (pokemon.js)
- Speed-based turn order with randomness
- Damage calculation using Pokémon stats and move power (halved for longer battles)
- Status effect management with turn counters and UI feedback
- Stat mod system with real-time feedback boxes
- Message queue ensures all messages and effects are shown in order
- Multi-hit and status moves process sequentially

#### Visual System
- Pixel art rendering with crisp edges
- Animated backgrounds using HTML5 Canvas
- Status and stat mod animations with CSS transitions
- Responsive UI that adapts to different screen sizes

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Opera
- Brave

## Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start battling! No installation or setup required

## Changelog

### Recent Additions & Fixes
- **Removed Moves:** Whirlwind, Roar, and Self-Destruct are no longer available
- **Disable Move:** Now disables the last used move for 3-5 turns, with clear UI feedback
- **Status & Stat Feedback:** All status effects and stat changes are shown in real-time with clear UI
- **Message Queue:** All battle messages and effects are shown one at a time, in the correct order
- **Multi-Hit & Status Moves:** Processed sequentially with proper timing and feedback
- **Major Status Rule:** Only one major status at a time (except confusion, which can stack)
- **Battle Pacing:** Damage halved, minimum move accuracy set to 70% for longer, more strategic battles
- **UI Improvements:** Play Again button is visually improved and repositioned for better balance
- **Bug Fixes:** Fixed turn system freezes, Growth stat logic, and stat feedback display

## Credits

Created by Matan - A passion project bringing classic Pokémon battles to the web!