# Gemini Clone

This project is a clone of Google Gemini, built using **Vite** and **React**, which interacts with Google's AI API to generate responses to user prompts. It emulates the functionality of Google Gemini by making API calls and displaying the results to users.

## Features

- **User Prompt Input**: Users can enter a prompt, and the app will send the input to the Google Gemini API.
- **AI-Generated Responses**: The app retrieves and displays responses similar to those of Google Gemini.
- **Real-time Interaction**: API calls are handled asynchronously, ensuring a smooth user experience.
- **Google AI API Integration**: Uses the official Google AI API to process and generate accurate answers.

## Tech Stack

- **Frontend**: Vite + React
- **Backend**: Interacts with Google AI API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gemini-clone.git
   cd gemini-clone

2. Install dependencies:
   ```bash
   npm install

3. Set up environment variables: Create a .env file with your Google Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key

4. Start the development server:
   ```bash
   npm run dev

5. Open your browser at ```http://localhost:3000``` to view the app.

## Usage

- Enter a prompt in the text input field.
- The app will generate a response by making an API call to the Google AI API.
- The result will be displayed on the screen in real-time.
