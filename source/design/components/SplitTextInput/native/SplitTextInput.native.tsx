// Module ID: 9216
// Function ID: 72124
// Name: SplitTextInput
// Dependencies: [31, 33, 7505, 9217, 2]

// Module 9216 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj["children"] = jsx(require(9217) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(7505) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
