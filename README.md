# Tic Tac Toe Game

This project is a simple Tic Tac Toe game built using React and TypeScript. It allows two players to play the game, track their moves, and determine the winner or if the game ends in a draw.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   Two-player Tic Tac Toe game
-   Editable player names
-   Highlights the active player
-   Displays the winner or a draw message
-   Logs all moves made during the game
-   Option to restart the game

## Installation

1. **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

## Usage

1. **Start the Development Server:**

    ```bash
    npm start
    ```

2. **Open the Application:**
   Open your browser and navigate to `http://localhost:3000` to see the Tic Tac Toe game in action.

### Key Components and Files

-   **`src/components/GameBoard.tsx`**: Renders the game board and handles square selection.
-   **`src/components/GameOver.tsx`**: Displays the game over message and restart button.
-   **`src/components/Player.tsx`**: Manages player names and highlights the active player.
-   **`src/components/Log.tsx`**: Logs the moves made by players.
-   **`src/gameTurns.model.ts`**: Defines the game turn model.
-   **`src/winning-combinations.ts`**: Contains the winning combinations for the game.
-   **`src/App.tsx`**: The main component that ties everything together.
-   **`src/main.tsx`**: Entry point of the application.
-   **`public/index.html`**: The HTML template for the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
