// Module ID: 8564
// Function ID: 8565
// Name: SplitTextInput
// Dependencies: [19, 21, 7857, 8565, 2]

// Module 8564 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(8565) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(7857) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
