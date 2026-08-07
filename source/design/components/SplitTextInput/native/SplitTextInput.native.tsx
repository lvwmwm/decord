// Module ID: 8433
// Function ID: 8434
// Name: SplitTextInput
// Dependencies: [19, 21, 7731, 8434, 2]

// Module 8433 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(8434) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(7731) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
