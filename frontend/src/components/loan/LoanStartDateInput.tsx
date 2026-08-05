type LoanStartDateInputProps = {
    value: string,
    onChange: (value : string) => void
}

function LoanStartDateInput({
    value,
    onChange,
}: LoanStartDateInputProps){
    return(
        <div>
            <label>Loan Start Date: </label>
            <input
                type="Date"
                value = {value}
                onChange = {(event) => onChange(event.target.value)}
            />
            <p>Current value: {value}</p>
        </div>
    )
}

export default LoanStartDateInput