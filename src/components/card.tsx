import { useState } from "preact/hooks";
import bingoItems from "../utils/bingoItems";
import { CSSProperties, JSX } from "preact/compat";

export default function Card(props: { style?: CSSProperties }): JSX.Element {
    const { style } = props;

    // Generate random card layout
    const generateCardItems = () => {
        const shuffled = [...bingoItems]
            .sort(() => Math.random() - 0.5)
            .slice(0, 24);

        // Insert free space in the middle
        shuffled.splice(12, 0, { icon: '🎯', description: 'FREE', isFree: true });
        return shuffled;
    };

    const [cardItems, setCardItems] = useState(generateCardItems());
    const [selectedItems, setSelectedItems] = useState(new Set<number>());

    const toggleItem = (index: number) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(index)) {
            newSelected.delete(index);
        } else {
            newSelected.add(index);
        }
        setSelectedItems(newSelected);
    };

    const newCard = () => {
        setCardItems(generateCardItems());
        setSelectedItems(new Set());
    };

    const checkWin = () => {
        // Win patterns: rows, columns, diagonals
        const patterns = [
            // Rows
            [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24],
            // Columns
            [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24],
            // Diagonals
            [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]
        ];

        return patterns.some(pattern =>
            pattern.every(index => selectedItems.has(index) || cardItems[index].isFree)
        );
    };

    return (
        <div id="card" style={style} className="max-w-md mx-auto p-4">
            <div className="text-center mb-4">
                <button
                    id="new-card-button"
                    onClick={newCard}
                    className="bg-green-600 text-white px-4 py-2 rounded-md mb-4"
                >
                    New Card
                </button>
            </div>

            {/* Grid for Bingo Card */}
            <div
                className="grid grid-cols-5 gap-2"
                style={{
                    display: "grid",
                    gridTemplateRows: "repeat(5, 1fr)",
                    gridTemplateColumns: "repeat(5, 1fr)",
                }}
            >
                {cardItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => toggleItem(index)}
                        className={" flex flex-col items-center justify-center card-tile"}
                        style={{
                            backgroundColor: selectedItems.has(index) ? "#3a3" : item.isFree ? "#ed2" : "#fff",
                            maxWidth: "20vw"
                        }}
                    >
                        <span className="text-2xl" role="img" aria-label={item.description}>
                            {item.icon}
                        </span>
                        <br />
                        <span className="text-xs mt-1 text-center leading-tight">
                            {item.description}
                        </span>
                    </button>
                ))}
            </div>


            {checkWin() && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <h3 className="text-3xl font-bold mb-4">BINGO! 🎉</h3>
                        <button
                            onClick={newCard}
                            className="bg-green-600 text-white px-4 py-2 rounded-md"
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
