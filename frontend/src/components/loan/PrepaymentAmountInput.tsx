type PrepaymentAmountInputProps = {
    value : number,
    onChange : (value : number) => void
}

function PrepaymentAmountInput({
    value,
    onChange,
} : PrepaymentAmountInputProps){
    return (
        <div>
            <label>Prepayment Amount: </label>
            <input
            type="number"
            step="1"
            value = {value}
            onChange={(event) => onChange(Number(event.target.value))}
            />

            <p>Current value: {value}</p>
        </div>
    )
}

export default PrepaymentAmountInput