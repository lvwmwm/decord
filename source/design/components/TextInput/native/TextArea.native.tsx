// Module ID: 7641
// Function ID: 7642
// Name: TextArea
// Dependencies: [19, 21, 6725, 7642, 2]

// Module 7641 (TextArea)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(7642) /* TextAreaField */.TextAreaField, { ref });
  return jsx(require(6725) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
