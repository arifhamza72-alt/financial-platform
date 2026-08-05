type LoanAmountInputProps = {
  value: number
  onChange: (value: number) => void
}

function LoanAmountInput({
  value,
  onChange,
}: LoanAmountInputProps) {
  return (
    <div>
      <label>Loan Amount</label>

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

export default LoanAmountInput