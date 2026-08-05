// Module ID: 5320
// Function ID: 5321
// Name: RowCheckmark
// Dependencies: [19, 21, 5289, 712, 2]
// Exports: default

// Module 5320 (RowCheckmark)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("CheckmarkSmallIcon").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: null };
    obj[0] = importDefault(712).unsafe_rawColors.BRAND_500;
    tmp = jsx(require(5289) /* CheckmarkSmallIcon */.CheckmarkSmallIcon, { color: null });
  }
  return tmp;
};
