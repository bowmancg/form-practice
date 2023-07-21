import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== ''

const isEmail = value => value.includes('@')

const BasicForm = (props) => {

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput
    } = useInput(isNotEmpty)

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(isNotEmpty)

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail)

    let formIsValid = false

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubHandler = event => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        console.log(enteredFirstName, enteredLastName)
        console.log(enteredEmail)

        resetFirstNameInput()
        resetLastNameInput()
        resetEmailInput()
    }

    const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control'
    const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control'

    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={firstNameChangedHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstName}
                    />
                    {firstNameInputHasError && <p className='error-text'>Field cannot be empty.</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameInputHasError && <p className='error-text'>Field cannot be empty.</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input
                    type='text'
                    id='name'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && <p className="error-text">Enter valid E-mail.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;