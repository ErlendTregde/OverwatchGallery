
# Overwatch Character Gallery

A modern web application showcasing a gallery of Overwatch characters, built using **Nuxt 3** and **Vuetify**. Each character card links to a detailed page with additional information about the character.

[Live Demo](https://ErlendTregde.github.io/OverwatchGallery/)

Live demo not working currently, problems with how the images, and other overwatch data are displayed

---

## Features

- **Responsive Design**: Optimized for both desktop and mobile users.
- **Character Gallery**: View a grid of Overwatch characters with portraits and names.
- **Dynamic Details**: Click on a character to view more detailed information on a dedicated page.
- **Modern Frameworks**:
  - **Nuxt 3**: Static site generation for fast and SEO-friendly deployment.
  - **Vuetify**: Beautiful Material Design components.

---

## Technologies Used

- **Nuxt 3**: A modern Vue.js framework for static site generation.
- **Vuetify**: Material Design component framework.
- **Overwatch API**: API to fetch Overwatch character data.
- **GitHub Pages**: Hosting platform for the static site.

---

## Installation

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ErlendTregde/OverwatchGallery.git
   cd OverwatchGallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build the static site:
   ```bash
   npm run generate
   ```

5. Serve the static site locally for testing:
   ```bash
   npx serve .output/public
   ```

---

## Deployment to GitHub Pages

To deploy the project to GitHub Pages:

1. Generate the static site:
   ```bash
   npm run generate
   ```

2. Copy the contents of `.output/public` to the repository root:
   ```bash
   cp -r .output/public/* .
   ```

3. Commit and push the changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy Overwatch Gallery"
   git push origin main
   ```

4. Configure GitHub Pages:
   - Go to **Settings** > **Pages** in your repository.
   - Set the source to `main` and folder to `/ (root)`.

---

## Directory Structure

```plaintext
OverwatchGallery/
├── .output/         # Build output (generated after running `npm run generate`)
├── pages/           # Nuxt pages for gallery and hero details
│   ├── index.vue    # Main gallery page
│   └── hero/[id].vue # Dynamic hero detail page
├── public/          # Public assets (e.g., favicon)
├── nuxt.config.ts   # Nuxt configuration
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

---

## Contributing

Contributions are welcome! If you’d like to improve this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **Overwatch API** by [TimoMak](https://timomak.github.io/Overwatch-API/) for providing the character data.
- **Vuetify** for the beautiful UI components.
- **Nuxt 3** for the framework powering this project.
```

---

### Key Highlights
- **Professional and Clean**: Includes all necessary sections for a modern project.
- **Helpful Instructions**: Guides users on installation, running, and deploying the project.
- **Acknowledgements**: Credits the tools and libraries used.

Let me know if you need further tweaks! 😊
