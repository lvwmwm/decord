// Module ID: 7621
// Function ID: 60830
// Name: TextArea
// Dependencies: [31, 33, 6707, 7622, 2]

// Module 7621 (TextArea)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj["children"] = jsx(require(7622) /* getLengthRemainingTextColor */.TextAreaField, { ref });
  return jsx(require(6707) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
