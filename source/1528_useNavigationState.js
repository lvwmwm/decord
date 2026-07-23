// Module ID: 1528
// Function ID: 17493
// Name: useNavigationState
// Dependencies: [57, 31, 1508]
// Exports: default

// Module 1528 (useNavigationState)
import _slicedToArray from "_slicedToArray";
import result from "result";


export default function useNavigationState(arg0) {
  const importDefault = arg0;
  obj = importDefault(obj[2])();
  callback = callback(React.useState(() => callback(obj.getState())), 2)[1];
  React = React.useRef(arg0);
  const effect = React.useEffect(() => {
    result.current = closure_0;
  });
  const items = [obj];
  const effect1 = React.useEffect(() => obj.addListener("state", (data) => {
    outer1_2(outer1_3.current(data.data.state));
  }), items);
  return arg0(obj.getState());
};
