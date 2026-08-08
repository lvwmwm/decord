// Module ID: 8493
// Function ID: 8494
// Name: SplitTextInput
// Dependencies: [19, 21, 7791, 8494, 2]

// Module 8493 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(8494) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(7791) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
