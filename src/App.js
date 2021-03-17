import { Row, Col, Container } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Navbar from "./components/NavigationBar";

function App() {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.count);
  const authState = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Navbar />
      <Container fluid>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center p-3 pb-4 m-3 border">
            <div>
              <h1 className="font-italic">{countState.count}</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <input
                className="mr-3"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_COLOR", payload: e.target.value })
                }
              ></input>
              <button
                className="m-1 btn btn-secondary btn-block"
                onClick={() => dispatch({ type: "INCREMENT" })}
              >
                Increment
              </button>
              <button
                className="m-1 btn btn-secondary btn-block"
                onClick={() => dispatch({ type: "DECREMENT" })}
              >
                Decrement
              </button>
            </div>
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
                  className="d-flex justify-content-around rounded my-2 p-3 box-border"
                  style={{ backgroundColor: boxColor }}
                >
                  <div className="w-100">
                    <h1 className="font-weight-bold">Box {idx + 1}</h1>
                    {email}
                  </div>
                  <div className="w-100 d-flex align-items-center">
                    <input
                      className="form-control"
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
