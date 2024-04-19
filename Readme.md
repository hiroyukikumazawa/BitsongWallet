# BitSong Wallet App

This project is a React Native application developed for the BitSong network. It uses the Expo framework to bootstrap and manage the app lifecycle easily. The app allows users to create a new wallet, view their BitSong (BTSG) token balance, and interact with the BitSong blockchain powered by the Cosmos SDK.

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- Expo CLI
- Android Studio or Xcode (for local testing on simulators)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hiroyukikumazawa/BitsongWallet.git
   cd BitsongWallet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Development Task List

- [ ] Bootstrap the React Native application using Expo.
- [ ] Deploy the bootstrap configuration.
- [ ] Create a Welcome screen with the BitSong branding.
- [ ] Develop a wallet creation flow:
  - [ ] Generate a new wallet
  - [ ] Allow users to save or backup their private key securely
- [ ] Set up a Home screen displaying only the BTSG balance.

## Features

- **Welcome Screen**: A simple and welcoming entry point for new users.
- **Wallet Creation**: Users can generate a new wallet and securely store their private key.
- **BTSG Balance**: Users can view their BitSong token balance directly on the home screen.
