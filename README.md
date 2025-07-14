# Pokéfart

A retro-style Pokémon battle game built with vanilla JavaScript, HTML, and CSS. Battle against AI opponents with authentic Pokémon mechanics including status effects, speed-based turn order, and classic battle animations.

## Features

### Core Gameplay
- Turn-based Pokémon battles with authentic mechanics
- 150+ Pokémon from the original Pokédex with accurate stats
- Speed-based turn order - faster Pokémon attack first
- 4 moves per Pokémon with unique damage calculations
- HP bars and counters with visual feedback
- Random level generation (1-100) for varied difficulty

### Battle Mechanics
- Status effects: Sleep, Paralysis, Poison, Confusion
- Stat modifications: Attack, Defense, Speed, Accuracy boosts/nerfs
- Move accuracy system with miss chances
- Critical hit system for extra damage
- Faint detection with game over/reset functionality

### Visual Features
- Retro pixel art style with authentic Pokémon sprites
- Animated background with moving squares
- Status effect animations with fade-in effects
- Explosion animation on game over
- Responsive UI with hover effects and button states

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
Pokéfart/
├── index.html          # Main game interface
├── pokemon.js          # Game logic and Pokémon database
├── pokemon.css         # Styling and animations
└── README.md           # This file
```

## Technical Details

### Technologies Used
- HTML5 - Game structure and interface
- CSS3 - Styling, animations, and responsive design
- Vanilla JavaScript - Game logic, battle mechanics, and UI interactions

### Key Components

#### Pokémon Database (pokemon.js)
- 150+ Pokémon with accurate stats from the original games
- Each Pokémon has: HP, Attack, Defense, Special Attack, Special Defense, Speed
- 4 unique moves per Pokémon with different damage types

#### Battle System
- Turn order calculation based on speed stats with randomness
- Damage calculation using Pokémon stats and move power
- Status effect management with turn counters
- Move accuracy and critical hit systems

#### Visual System
- Pixel art rendering with crisp edges
- Animated backgrounds using HTML5 Canvas
- Status effect animations with CSS transitions
- Responsive UI that adapts to different screen sizes

## Design Philosophy

This game captures the authentic feel of classic Pokémon battles with:
- Retro aesthetics using pixel art and classic fonts
- Authentic mechanics matching the original games
- Smooth animations that enhance the battle experience
- Responsive design that works across devices

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start battling! No installation or setup required

## Future Enhancements

Potential features for future versions:
- Sound effects and background music
- More Pokémon and moves
- Evolution mechanics
- Multiplayer battles
- Save/load game states
- Different battle formats (2v2, etc.)

## Credits

Created by Suki - A passion project bringing classic Pokémon battles to the web!