// Module ID: 9252
// Function ID: 72333
// Name: SplitTextInput
// Dependencies: [31, 33, 7575, 9253, 2]

// Module 9252 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj["children"] = jsx(require(9253) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(7575) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
