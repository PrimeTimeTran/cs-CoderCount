import { Row, Col, Container } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Navbar from "./components/NavigationBar";

function App() {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.count);
  const authState = useSelector((state) => state.auth);
  console.log({ authState });

  return (
    <div className="App">
      <Navbar />
      <Container fluid>
        <Row>
          <Col className="bg-success d-flex justify-content-center p-3">
            <input
              className="mr-3"
              onChange={(e) =>
                dispatch({ type: "CHANGE_COLOR", payload: e.target.value })
              }
            ></input>
            <button
              className="mr-3"
              onClick={() => dispatch({ type: "INCREMENT" })}
            >
              Increment
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
              Decrement
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            {Array.from(Array(countState.count)).map((c, idx) => {
              const boxColor =
                (countState.indexColors[idx] &&
                  countState.indexColors[idx].color) ||
                countState.defaultColor;
              const email =
                countState.indexColors[idx] &&
                countState.indexColors[idx].email;
              return (
                <div
                  key={idx}
                  className="d-flex justify-content-around rounded my-1 p-4"
                  style={{ backgroundColor: boxColor }}
                >
                  <div className="mb-3">
                    <h1>Box {idx}</h1>
                    {email}
                  </div>
                  <input
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_SPECIFIC_BOX",
                        payload: {
                          index: idx,
                          color: e.target.value,
                          email: authState.email,
                        },
                      })
                    }
                  ></input>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
