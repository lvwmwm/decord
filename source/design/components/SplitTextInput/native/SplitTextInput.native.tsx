// Module ID: 9221
// Function ID: 9222
// Name: SplitTextInput
// Dependencies: [19, 21, 6731, 9222, 2]

// Module 9221 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(9222) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(6731) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
