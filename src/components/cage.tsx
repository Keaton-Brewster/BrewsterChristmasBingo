import { useState } from "preact/hooks";
import bingoItems, { bingoItem } from "../utils/bingoItems";
import arrayShuffle from "array-shuffle";
import { CSSProperties, JSX } from "preact/compat";

export default function Cage(props: { style?: CSSProperties }): JSX.Element {
    const { style } = props;

    const initialBalls = bingoItems;
    const [remainingBalls, setRemainingBalls] = useState(initialBalls);
    const [drawnBalls, setDrawnBalls] = useState<bingoItem[]>([]);
    const [currentBall, setCurrentBall] = useState<bingoItem>();
    const [isCycling, setIsCycling] = useState(false);
    const [tempBall, setTempBall] = useState<bingoItem>();

    const drawBall = () => {
        if (remainingBalls.length === 0 || isCycling) {
            return;
        }

        setIsCycling(true);

        let intervalId: number;
        const shuffledBalls = arrayShuffle([...remainingBalls]);
        const cycleDuration = 2000; // Slot machine effect duration (in ms)
        const cycleInterval = 100; // Interval between cycles

        // Start cycling through items
        let cycleIndex = 0;
        intervalId = setInterval(() => {
            setTempBall(shuffledBalls[cycleIndex % shuffledBalls.length]);
            cycleIndex++;
        }, cycleInterval);

        // Stop cycling and pick the next ball
        setTimeout(() => {
            clearInterval(intervalId);
            const drawn = shuffledBalls[0];
            const remaining = shuffledBalls.slice(1);

            setRemainingBalls(remaining);
            setDrawnBalls([...drawnBalls, drawn]);
            setCurrentBall(drawn);
            setTempBall(undefined);
            setIsCycling(false);
        }, cycleDuration);
    };

    const resetGame = () => {
        setRemainingBalls(arrayShuffle(initialBalls));
        setDrawnBalls([]);
        setCurrentBall(undefined);
        setTempBall(undefined);
        setIsCycling(false);
    };

    return (
        <div style={style ?? undefined} className="flex flex-col items-center gap-4 p-4">
            <div className="text-center mb-4">
                <p className="text-gray-600">
                    Remaining Balls: {remainingBalls.length} / {initialBalls.length}
                </p>
            </div>

            <div className="text-center mb-4">
                {isCycling && tempBall ? (
                    <div
                        style={{ fontSize: "150px" }}
                        className="text-7xl mb-2 animate-spin"
                        role="img"
                        aria-label={tempBall.description}
                    >
                        {tempBall.icon}
                    </div>
                ) : currentBall ? (
                    <div
                        style={{ fontSize: "150px" }}
                        className="text-7xl mb-2"
                        role="img"
                        aria-label={currentBall.description}
                    >
                        {currentBall.icon}
                    </div>
                ) : (
                    <p className="text-gray-400">Click "Draw Ball" to start!</p>
                )}
                {currentBall && <p className="text-xl">{currentBall.description}</p>}
            </div>

            <div className="flex gap-4">
                <button
                    onClick={drawBall}
                    disabled={remainingBalls.length === 0 || isCycling}
                    className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-400"
                >
                    Draw Ball
                </button>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={resetGame}
                    className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-400"
                >
                    Reset Game
                </button>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Drawn Balls:</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {drawnBalls.map((ball, index) => (
                        <span
                            style={{ fontSize: "45px" }}
                            key={index}
                            className="text-2xl"
                            role="img"
                            aria-label={ball.description}
                        >
                            {ball.icon}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
