import useInput from "../../hooks/use-input";

function Info() {
  const {
    name: nameValue,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    name: addressValue,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    name: mobNoValue,
    hasError: mobNoHasError,
    valueChangeHandler: mobNoChangeHandler,
    inputBlurHandler: mobNoBlurHandler,
  } = useInput((value) => value.trim() !== "" && String(value).length === 10);

  console.log(nameValue);
  return (
    <center>
      <form>
        <br />
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Name"
          required
          id="name"
          className={nameHasError ? "error" : ""}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Address"
          required
          id="address"
          className={addressHasError ? "error" : ""}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          value={addressValue}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Mobile Number"
          required
          id="mobNo"
          className={mobNoHasError ? "error" : ""}
          onChange={mobNoChangeHandler}
          onBlur={mobNoBlurHandler}
          value={mobNoValue}
        />
        <br />
        <br />
        <button className="button"> Place Order </button>
      </form>
    </center>
  );
}

export default Info;
