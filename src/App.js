import { Container, Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className="bg-success pt-3">
            <h1>{state.count}</h1>
            <div className="d-flex justify-content-center p-3">
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
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {Array.from(Array(state.count)).map((c, idx) => {
              const boxColor = state.indexColors[idx] || state.defaultColor;
              return (
                <div
                  key={idx}
                  className="d-flex justify-content-around rounded my-1 p-4"
                  style={{ backgroundColor: boxColor }}
                >
                  <div className="w-100">
                    <h1>Box {idx + 1}</h1>
                  </div>
                  <div className="w-100 d-flex align-items-center">
                  <input
                    className="form-control"
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_SPECIFIC_BOX",
                        payload: { color: e.target.value, index: idx },
                      })
                    }
                  ></input>
                  </div>
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
