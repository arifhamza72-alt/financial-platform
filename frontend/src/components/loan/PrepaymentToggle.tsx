type PrepaymentToggleProps = {
    value : boolean,
    onChange : (value : boolean) => void
}

function PrepaymentToggle({
    value,
    onChange,
} : PrepaymentToggleProps){
    return (
        <div>
            <label>Prepayment: </label>
            <input
                type="checkbox"
                checked = {value}
                onChange={(event) => onChange(event.target.checked)}
            />
            <p>Current value: {value.toString()}</p>
        </div>
    )
}

export default PrepaymentToggle