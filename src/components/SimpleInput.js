import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEneteredNameIsValid] = useState(true);

  const namInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEneteredNameIsValid(false)
      return;
    }
    setEneteredNameIsValid(true)

    console.log("with useState(): " + enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log("with useRef(): " + enteredValue);

    // nameInputRef.current.value = ''; // NOT IDEAL, DON'T MANIPULATE THE DOM

    setEnteredName("");
  };

  const nameInputClass = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={namInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
