import "./App.css";
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);

    if (userName && password) {
      alert("Form submitted successfully");
      setSubmittedUsername(userName);
      setSubmittedPassword(password);
      setUserName("");
      setPassword("");
      setFlag(false);
    }
  };

  return (
    <div className="App">
      <form className="form-row" onSubmit={handleSubmit}>
        <div className="form-group col-sm-6 mx-auto border p-3 bg-light rounded">
          <div className="w-75 mx-auto mb-3">
            <label className="form-label" htmlFor="user-name">
              Username
            </label>
            <input
              className={`form-control ${
                !userName && flag ? "is-invalid" : ""
              }`}
              type="text"
              value={userName}
              id="user-name"
              onChange={(e) => setUserName(e.target.value)}
            />
            {!userName && flag && (
              <div className="invalid-feedback">*Username must be filled</div>
            )}
          </div>
          <div className="w-75 mx-auto mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className={`form-control ${
                !password && flag ? "is-invalid" : ""
              }`}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!password && flag && (
              <div className="invalid-feedback">*Password must be filled</div>
            )}
          </div>
          <div className="d-block mx-auto w-75">
            <button className="btn btn-primary d-block w-25" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
      {submittedUsername && (
        <div className="text text-danger text-center">
          Entered Username is: {submittedUsername}
        </div>
      )}
      {submittedPassword && (
        <div className="text text-success text-center">
          Entered Password is: {submittedPassword}
        </div>
      )}
    </div>
  );
};

export default App;
