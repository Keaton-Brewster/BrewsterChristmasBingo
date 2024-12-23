import { CSSProperties } from "preact/compat";
import { JSX } from "preact/jsx-runtime";

export default function ImageWindow(): JSX.Element {
    const windowStyle: CSSProperties = {
        width: "50vw",
        height: "40vh",
        marginTop: "5vh"
    }
    return (
        <div style={windowStyle}>imageWindow</div>
    )
}
