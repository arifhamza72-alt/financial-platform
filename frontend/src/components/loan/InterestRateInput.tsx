type InterestRateInputProps = {
    value: number
    onChange: (value: number) => void
}

function InterestRateInput({
    value,
    onChange,
}: InterestRateInputProps ) {
    return (
        <div>
            <label>Interest Rate p.a.</label>
            <input
                type="number"
                step="0.01"
                value={value}
                onChange={(event) => onChange(Number(event.target.value))}
            />
            <p>Current value: {value}</p>
        </div>
    )
}
export default InterestRateInput