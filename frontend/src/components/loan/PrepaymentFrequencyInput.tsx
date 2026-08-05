type PrepaymentFrequencyInputProps = {
  value: string
  onChange: (value: string) => void
}

function PrepaymentFrequencyInput({
  value,
  onChange,
}: PrepaymentFrequencyInputProps) {
  return (
    <div>
      <label>Prepayment Frequency</label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Select Frequency</option>
        <option value="MONTHLY">Monthly</option>
        <option value="QUARTERLY">Quarterly</option>
        <option value="HALF_YEARLY">Half-Yearly</option>
        <option value="YEARLY">Yearly</option>
        <option value="ONE_TIME">One-Time</option>
      </select>

      <p>Current value: {value}</p>
    </div>
  )
}

export default PrepaymentFrequencyInput