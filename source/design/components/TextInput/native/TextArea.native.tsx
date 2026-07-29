// Module ID: 7644
// Function ID: 7645
// Name: TextArea
// Dependencies: [19, 21, 6728, 7645, 2]

// Module 7644 (TextArea)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(7645) /* TextAreaField */.TextAreaField, { ref });
  return jsx(require(6728) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
