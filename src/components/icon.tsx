
import { CSSProperties } from "preact/compat"
import { JSX } from "preact/jsx-runtime"

export default function icon(props: {
    style?: CSSProperties
}): JSX.Element {
    const { style } = props
    return (
        <div style={style ?? undefined}>icon</div>
    )
}
