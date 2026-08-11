// Module ID: 8499
// Function ID: 8500
// Name: SplitTextInput
// Dependencies: [19, 21, 7793, 8500, 2]

// Module 8499 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(8500) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(7793) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
