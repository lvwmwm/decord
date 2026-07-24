// Module ID: 12433
// Function ID: 96516
// Name: useDebounce
// Dependencies: [57, 31, 2]
// Exports: default

// Module 12433 (useDebounce)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("set").fileFinishedImporting("hooks/useDebounce.tsx");

export default function useDebounce(arg0, arg1) {
  const callback = arg0;
  const React = arg1;
  const tmp = callback(React.useState(arg0), 2);
  let closure_2 = tmp[1];
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_2(_slicedToArray);
    }, result);
    return () => {
      clearTimeout(_slicedToArray);
    };
  }, items);
  return tmp[0];
};
