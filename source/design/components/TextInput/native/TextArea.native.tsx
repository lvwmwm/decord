// Module ID: 7774
// Function ID: 7775
// Name: TextArea
// Dependencies: [19, 21, 7702, 7775, 2]

// Module 7774 (TextArea)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(7775) /* TextAreaField */.TextAreaField, { ref });
  return jsx(require(7702) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
