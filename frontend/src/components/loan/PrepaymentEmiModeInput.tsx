type PrepaymentEmiModeInputProps = {
    value: string,
    onChange: (value: string) => void
}

function PrepaymentEmiModeInput({
    value,
    onChange,
}: PrepaymentEmiModeInputProps) {
    return (
        <div>
            <label>EMI MODE</label>
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
            >  
                <option value="">Select EMI Mode</option>
                <option value="FIXED_EMI_REDUCE_TENOR">Fixed EMI - Reduce Tenor</option>
                <option value="RECALCULATE_EMI_KEEP_TENOR">Recalculate EMI - Keep Tenor</option>
            </select>
        </div>

    )
}
export default PrepaymentEmiModeInput