# Quantum IQ 🌐

## Overview 📖

Quantum IQ is a state-of-the-art SaaS AI platform designed to streamline and enhance a variety of AI functionalities. This platform integrates features such as conversation analysis, image and video generation, music composition, and code generation, offering a comprehensive toolkit for developers and AI enthusiasts.

## Features 🌟

- **Dashboard**: Central hub for accessing all features.
- **Conversation Analysis**: Tools for analyzing and generating conversational data.
- **Image Generation**: AI-driven image creation and manipulation.
- **Video Generation**: Automated video creation capabilities.
- **Music Generation**: AI-powered music composition tools.
- **Code Generation**: Advanced code writing and suggestion tools.
- **Settings**: Customizable user settings for a personalized experience.

## Technologies Used 💻

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=Stripe&logoColor=white)
- ![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-4A4A55?style=for-the-badge&logo=Lucide&logoColor=white)

## Getting Started 🚀

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quantum-iq.git
   ```
2. Install dependencies:
   ```bash
   cd quantum-iq
   npm install
   ```

### Running the Application

Run the following command in the project directory:
```bash
npm run dev
```
This will start the development server on `http://localhost:3000`.

## Usage 📝

Quantum IQ is intuitive and user-friendly, with several AI functionalities accessible via a seamless interface.

### Dashboard 📊

Navigate through various modules like Conversation Analysis, Image/Video Generation, Music Composition, and Code Generation.

### Prisma Studio 🗃️

Interact with your database in a user-friendly GUI environment.

1. Run `npx prisma studio` in your terminal.
2. A new browser window will open for database management.

### Stripe Webhook 🛒

Set up Stripe webhooks for real-time event handling.

1. Execute `stripe listen --forward-to localhost:3000/api/webhook` in a terminal.
2. This sets up a local server to forward Stripe events to your webhook endpoint.

### Conversations 💬

Analyze and generate conversational data using AI in the Conversation module.

### Image and Video Generation 🎨

Create or modify images and videos with AI in the respective modules.

### Music Generation 🎵

Compose music using AI in the Music Generation module.

### Code Generation 👨‍💻

Get AI-driven code suggestions in the Code Generation module.

### Settings ⚙️

Add or manage your subscription with Quantum IQ

## Contributing 🤝

Contributions to Quantum IQ are welcome, including documentation improvements, bug fixes, or new features. Please read `CONTRIBUTING.md` for contribution guidelines.

## License 📄

This project is licensed under the [MIT License](LICENSE).
