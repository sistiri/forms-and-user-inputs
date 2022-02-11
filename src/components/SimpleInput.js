import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEneteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name input is Valid')
  //   }
  // }, [enteredNameIsValid])

  const namInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
    
    if (enteredName.trim() === "") {
      setEneteredNameIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEneteredNameIsValid(false);
      return;
    }
    setEneteredNameIsValid(true);

    console.log("with useState(): " + enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log("with useRef(): " + enteredValue);

    // nameInputRef.current.value = ''; // NOT IDEAL, DON'T MANIPULATE THE DOM

    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={namInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
