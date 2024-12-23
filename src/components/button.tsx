import { CSSProperties } from "preact/compat";
import { JSX } from "preact/jsx-runtime";

export default function Button(props: {
    text: string,
    handler: (e: Event) => void,
    style?: CSSProperties
}
): JSX.Element {
    const { text, handler, style } = props

    return (
        <button style={style ?? undefined}
            onClick={handler}>{text}</button>
    )
}
