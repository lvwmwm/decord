// Module ID: 5184
// Function ID: 45018
// Name: RowCheckmark
// Dependencies: [31, 33, 5154, 689, 2]
// Exports: default

// Module 5184 (RowCheckmark)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("CheckmarkSmallIcon").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: importDefault(689).unsafe_rawColors.BRAND_500 };
    tmp = jsx(require(5154) /* CheckmarkSmallIcon */.CheckmarkSmallIcon, { color: importDefault(689).unsafe_rawColors.BRAND_500 });
  }
  return tmp;
};
