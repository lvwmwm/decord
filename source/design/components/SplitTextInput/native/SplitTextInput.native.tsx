// Module ID: 9208
// Function ID: 9209
// Name: SplitTextInput
// Dependencies: [19, 21, 6725, 9209, 2]

// Module 9208 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(9209) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(6725) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
