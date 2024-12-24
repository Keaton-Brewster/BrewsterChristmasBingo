import { CSSProperties } from "preact/compat";
import { JSX } from "preact/jsx-runtime";

export default function Button(props: {
    text: string,
    handler: (e: Event) => void,
    style?: CSSProperties,
    className?: string
}
): JSX.Element {
    const { text, handler, style, className } = props

    return (
        <button className={className} style={style}
            onClick={handler}>{text}</button>
    )
}
