// Module ID: 10615
// Function ID: 82798
// Name: useLeadingEdgeDebounce
// Dependencies: [57, 31, 2]
// Exports: useLeadingEdgeDebounce

// Module 10615 (useLeadingEdgeDebounce)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("set").fileFinishedImporting("hooks/useLeadingEdgeDebounce.tsx");

export const useLeadingEdgeDebounce = (arg0, arg1) => {
  const callback = arg0;
  const React = arg1;
  let closure_2 = React.useRef(true);
  const tmp = callback(React.useState(arg0), 2);
  let closure_3 = tmp[1];
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_3(_slicedToArray);
      outer1_2.current = true;
    }, result);
    if (ref.current) {
      callback(timeout);
    }
    ref.current = false;
    return () => {
      clearTimeout(_slicedToArray);
    };
  }, items);
  return tmp[0];
};
