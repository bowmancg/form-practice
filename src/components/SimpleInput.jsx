import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'))

    let formIsValid = false

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubHandler = event => {
        event.preventDefault()

        if (!enteredNameIsValid) {
            return
        }

        console.log(enteredName)

        console.log(enteredEmail)

        resetNameInput()
        resetEmailInput()
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                type='text'
                id='name'
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
                />
                {nameInputHasError && <p className="error-text">Name cannot be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">E-mail</label>
                <input
                type="email"
                id="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                />
                {emailInputHasError && <p className="error-text">Enter valid E-mail.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;