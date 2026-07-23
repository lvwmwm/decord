// Module ID: 11323
// Function ID: 88096
// Name: useRequest
// Dependencies: [5, 57, 31, 1212, 4030, 2]
// Exports: default

// Module 11323 (useRequest)
import set from "set";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("result").fileFinishedImporting("hooks/useRequest.tsx");

export default function useRequest(arg0) {
  let closure_0 = arg0;
  const tmp2 = callback2(React.useState(false), 2);
  let closure_1 = tmp2[1];
  const tmp3 = callback2(React.useState(null), 2);
  let closure_2 = tmp3[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [arg0];
  const items1 = [React.useCallback(callback(tmp), items), { loading: tmp2[0], error: tmp3[0] }];
  return items1;
};
