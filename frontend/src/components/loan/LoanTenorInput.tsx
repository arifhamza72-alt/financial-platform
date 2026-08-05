type LoanTenorInputProps = {
    value: number,
    onChange: (value: number) => void
}

function LoanTenorInput({
    value,
    onChange,
}: LoanTenorInputProps ){
    return(
        <div>
            <input
                type="number"
                step="1"
                value={value}
                onChange={(event) => onChange(Number(event.target.value))}
            />
            
            <p>Current value: {value}</p>
        </div>
    )
}

export default LoanTenorInput