# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static anniversary celebration webpage (一周年纪念日网页) with interactive falling stars. Despite the directory name "Snake_game", this is NOT a game - it's a romantic interactive webpage for celebrating a one-year anniversary.

## Tech Stack

- Pure HTML/CSS/JavaScript (no frameworks, no build tools)
- Static site - runs directly in browser by opening `index.html`
- No dependencies, no package manager, no build process

## Running the Project

Simply open `index.html` in a web browser. No build or compilation needed.

## Architecture

The project consists of three main interactive systems:

### 1. Video Player System
- Auto-plays `memory-video.mp4` on page load
- Loops continuously with muted audio
- Fallback handling for autoplay restrictions

### 2. Falling Stars System
- Stars are dynamically created at configurable intervals (default: 800ms)
- Each star has random horizontal position and fall duration (3-6s)
- Maximum concurrent stars limited by `starConfig.maxStars` (default: 20)
- Stars auto-remove after falling off screen
- Counter (`currentStarCount`) tracks active stars to enforce limit

### 3. Photo Modal System
- Clicking a star triggers `showRandomPhoto()`
- Randomly selects from `photos` array in `script.js`
- Modal displays with fade-in animation
- Close via: X button, clicking backdrop, or ESC key

## Key Configuration

**Photos Array** (`script.js` lines 2-6):
```javascript
const photos = [
    'images/photo1.jpeg',
    'images/photo2.jpeg',
    'images/photo3.jpeg',
];
```
Add or remove photo paths here to change the photo pool.

**Star Generation** (`script.js` lines 9-12):
```javascript
const starConfig = {
    interval: 800,  // milliseconds between star spawns
    maxStars: 20    // max concurrent stars
};
```

## File Structure

- `index.html` - Main page structure
- `style.css` - All styling including animations (fall, twinkle, fadeIn, zoomIn)
- `script.js` - All interaction logic
- `memory-video.mp4` - Background video (user-provided)
- `images/` - Photo directory (user-provided photos)

## Important Implementation Details

- Stars use CSS animations (`fall` + `twinkle`) with randomized durations
- Star cleanup happens via `setTimeout` matching fall duration to prevent memory leaks
- Modal uses `z-index: 1000` to overlay everything
- Responsive breakpoint at 768px adjusts title size and star size
- Video uses `playsinline` attribute for iOS compatibility
