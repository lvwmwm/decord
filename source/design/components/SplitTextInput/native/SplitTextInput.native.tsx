// Module ID: 9212
// Function ID: 9213
// Name: SplitTextInput
// Dependencies: [19, 21, 6728, 9213, 2]

// Module 9212 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(9213) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(6728) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
