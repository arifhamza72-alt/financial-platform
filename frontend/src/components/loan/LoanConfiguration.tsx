import { useState } from 'react'
import LoanAmountInput from './LoanAmountInput'
import InterestRateInput from './InterestRateInput'
import LoanTenorInput from './LoanTenorInput'
import LoanStartDateInput from './LoanStartDateInput'
import PrepaymentToggle from './PrepaymentToggle'
import PrepaymentAmountInput from './PrepaymentAmountInput'
import PrepaymentFrequencyInput from './PrepaymentFrequencyInput'
import PrepaymentEmiModeInput from './PrepaymentEmiModeInput'

export type LoanConfiguration = {
    loanAmount: number
    interestRate: number
    tenorYears: number
    startDate: string
    prepaymentEnabled: boolean
    prepaymentAmount: number
    prepaymentFrequency: string
    prepaymentEmiMode: string
}

function LoanConfiguration() {
    const [loan, setLoan] = useState<LoanConfiguration>({
        loanAmount: 0,
        interestRate: 0,
        tenorYears: 0,
        startDate: '',
        prepaymentEnabled: false,
        prepaymentAmount: 0,
        prepaymentFrequency: '',
        prepaymentEmiMode: ''
    })
    const [errors, setErrors] = useState({
        loanAmount: '',
        interestRate: '',
        tenorYears: '',
        startDate: '',
        prepaymentAmount: '',
        prepaymentFrequency: '',
        prepaymentEmiMode: ''
    })

    function validateLoan() {
        const newErrors = {
            loanAmount: '',
            interestRate: '',
            tenorYears: '',
            startDate: '',
            prepaymentAmount: '',
            prepaymentFrequency: '',
            prepaymentEmiMode: '',
        }

        if (loan.loanAmount <= 0) {
            newErrors.loanAmount = 'Loan amount must be greater than zero.'
        }

        if (loan.interestRate <= 0) {
            newErrors.interestRate = 'Interest Rate must be greater than zero.'
        }

        if (loan.tenorYears <= 0) {
            newErrors.tenorYears = 'Tenor must be greater than zero.'
        }

        if (!loan.startDate) {
            newErrors.startDate = 'Select Start Date.'
        }

        if (loan.prepaymentEnabled) {
            if (loan.prepaymentAmount <= 0) {
                newErrors.prepaymentAmount =
                    'Prepayment amount must be greater than zero.'
            }

            if (!loan.prepaymentFrequency) {
                newErrors.prepaymentFrequency = 'Select Frequency.'
            }

            if (!loan.prepaymentEmiMode) {
                newErrors.prepaymentEmiMode = 'Select EMI Mode.'
            }
        }
        setErrors(newErrors)
    }

    return (
        <div>
            <h2>Loan Configuration</h2>

            <LoanAmountInput
                value={loan.loanAmount}
                onChange={(value) =>
                    setLoan({
                        ...loan,
                        loanAmount: value,
                    })
                }
            />

            <p>Loan amount from parent: {loan.loanAmount}</p>

            <InterestRateInput
                value={loan.interestRate}
                onChange={(value) =>
                    setLoan({
                        ...loan,
                        interestRate: value,
                    })
                }
            />

            <p>Interest rate from parent: {loan.interestRate}</p>

            <LoanTenorInput
                value={loan.tenorYears}
                onChange={(value) =>
                    setLoan({
                        ...loan,
                        tenorYears: value,
                    })
                }
            />

            <p>Loan Tenor Years from parent: {loan.tenorYears}</p>

            <LoanStartDateInput
                value={loan.startDate}
                onChange={(value) =>
                    setLoan({
                        ...loan,
                        startDate: value,
                    })
                }
            />

            <p>Start Date from parent: {loan.startDate}</p>

            <PrepaymentToggle
                value={loan.prepaymentEnabled}
                onChange={(value) =>
                    setLoan({
                        ...loan,
                        prepaymentEnabled: value,
                    })
                }
            />

            <p>Prepayment from parent: {loan.prepaymentEnabled.toString()}</p>

            {loan.prepaymentEnabled && (
                <div>
                    <h3>Prepayment Details</h3>

                    <PrepaymentAmountInput
                        value={loan.prepaymentAmount}
                        onChange={(value) =>
                            setLoan({
                                ...loan,
                                prepaymentAmount: value
                            })
                        }
                    />

                    <p>prepaymentAmount from parent: {loan.prepaymentAmount}</p>

                    <PrepaymentFrequencyInput
                        value={loan.prepaymentFrequency}
                        onChange={(value) =>
                            setLoan({
                                ...loan,
                                prepaymentFrequency: value,
                            })
                        }
                    />

                    <p>prepaymentFrequency from parent: {loan.prepaymentFrequency}</p>

                    <PrepaymentEmiModeInput
                        value={loan.prepaymentEmiMode}
                        onChange={(value) =>
                            setLoan({
                                ...loan,
                                prepaymentEmiMode: value,
                            })
                        }
                    />

                    <p>prepaymentEmiMode from parent: {loan.prepaymentEmiMode}</p>
                </div>
            )}

            <button onClick={validateLoan}>Validate Loan</button>
        </div>
    )
}

export default LoanConfiguration