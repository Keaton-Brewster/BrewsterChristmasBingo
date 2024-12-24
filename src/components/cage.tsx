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
        const cycleDuration = 2000;
        const cycleInterval = 100;

        let cycleIndex = 0;
        intervalId = setInterval(() => {
            setTempBall(shuffledBalls[cycleIndex % shuffledBalls.length]);
            cycleIndex++;
        }, cycleInterval);

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
        <div style={style ?? undefined} className="flex flex-col items-center gap-2 sm:gap-4 p-2 sm:p-4 w-full max-w-lg mx-auto">
            <div className="text-center mb-2 sm:mb-4">
                <p className="text-gray-600 text-sm sm:text-base">
                    Remaining Balls: {remainingBalls.length} / {initialBalls.length}
                </p>
            </div>

            <div className="text-center mb-2 sm:mb-4 w-full">
                {isCycling && tempBall ? (
                    <div
                        style={{ fontSize: "clamp(80px, 15vw, 150px)" }}
                        className="animate-spin mb-2"
                        role="img"
                        aria-label={tempBall.description}
                    >
                        {tempBall.icon}
                    </div>
                ) : currentBall ? (
                    <div
                        style={{ fontSize: "clamp(80px, 15vw, 150px)" }}
                        className="mb-2"
                        role="img"
                        aria-label={currentBall.description}
                    >
                        {currentBall.icon}
                    </div>
                ) : (
                    <p className="text-gray-400 text-sm sm:text-base">Click "Draw Ball" to start!</p>
                )}
                {currentBall && <p className="text-base sm:text-xl break-words">{currentBall.description}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <button
                    onClick={drawBall}
                    disabled={remainingBalls.length === 0 || isCycling}
                    className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-400 text-sm sm:text-base"
                >
                    Draw Ball
                </button>
                <button
                    onClick={resetGame}
                    className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-400 text-sm sm:text-base"
                >
                    Reset Game
                </button>
            </div>

            <div className="mt-2 sm:mt-4 w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Drawn Balls:</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {drawnBalls.map((ball, index) => (
                        <span
                            style={{ fontSize: "clamp(30px, 8vw, 45px)" }}
                            key={index}
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