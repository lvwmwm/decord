// Module ID: 5218
// Function ID: 45144
// Name: RowCheckmark
// Dependencies: [31, 33, 5187, 689, 2]
// Exports: default

// Module 5218 (RowCheckmark)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("CheckmarkSmallIcon").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: importDefault(689).unsafe_rawColors.BRAND_500 };
    tmp = jsx(require(5187) /* CheckmarkSmallIcon */.CheckmarkSmallIcon, { color: importDefault(689).unsafe_rawColors.BRAND_500 });
  }
  return tmp;
};
