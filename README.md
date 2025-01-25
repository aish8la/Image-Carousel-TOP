# Image-Carousel-TOP

# Image Carousel

A simple and responsive image carousel built using HTML, CSS, and JavaScript, bundled with Webpack.

## Features

- Auto-sliding images with a 5-second interval
- Manual navigation through side buttons
- Slide indicators for easy navigation
- Responsive design with adaptable image sizes

## Technologies Used

- HTML
- CSS (processed with `style-loader` and `css-loader`)
- JavaScript (Vanilla)
- Webpack

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/aish8la/Image-Carousel-TOP.git
   cd Image-Carousel-TOP
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run in development mode:**
   ```sh
   npm start
   ```
   This will start the Webpack development server and automatically open the project in your browser.

4. **Build for production:**
   ```sh
   npm run build
   ```
   This will generate the optimized build files in the `dist` directory.

## File Structure

```
├── src/
│   ├── assets/                # Contains images used in the carousel
│   ├── styles.css             # CSS styles
│   ├── index.js               # Main JavaScript functionality
│   ├── template.html          # Main HTML structure
├── dist/                      # Generated output files (production build)
├── package.json               # Project metadata and dependencies
├── webpack.common.js          # Common Webpack configuration
├── webpack.dev.js             # Development Webpack configuration
├── webpack.prod.js            # Production Webpack configuration
```

## How It Works

- The carousel automatically cycles through images every 5 seconds.
- Users can manually navigate using the left (`←`) and right (`→`) buttons.
- Clicking on the slide indicators will jump directly to the selected image.

## Credits

Image by <a href="https://pixabay.com/users/iemlee-5726489/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5131967">myungho lee</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5131967">Pixabay</a>

Image by <a href="https://pixabay.com/users/erik_karits-15012370/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6807529">Erik Karits</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6807529">Pixabay</a>

Image by <a href="https://pixabay.com/users/lolame-37761/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7035308">Melanie</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7035308">Pixabay</a>

Image by <a href="https://pixabay.com/users/bea61-12517357/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7128531">B. Hochsprung</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7128531">Pixabay</a>

Image by <a href="https://pixabay.com/users/mr_worker-4277403/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364849">Mr_Worker</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364849">Pixabay</a>

Image by <a href="https://pixabay.com/users/titouhwayne-17841812/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6242237">FETHI BOUHAOUCHINE</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6242237">Pixabay</a>

## License

This project is licensed under the MIT License.

