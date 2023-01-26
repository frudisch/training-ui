type Game = {
    date: string;
    start: string;
    end: string;
    enemy: string;
}

export const isGame = (game: unknown): game is Game  => {
    return (game as Game).enemy !== undefined;
};

export default Game;