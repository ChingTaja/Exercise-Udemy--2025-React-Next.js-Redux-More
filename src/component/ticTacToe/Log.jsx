export default function Log({ turns }) {
    return (
        <ol id="log">
            {
                turns.map((turn) => <li key={`${turn.square.col}${turn.square.row}`}>{turn.player} Select row:{ turn.square.row } col: { turn.square.col }</li>)
            }
        </ol>
    )
}