// Module ID: 5240
// Function ID: 5241
// Name: RowCheckmark
// Dependencies: [19, 21, 5209, 712, 2]
// Exports: default

// Module 5240 (RowCheckmark)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("CheckmarkSmallIcon").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: null };
    obj[0] = importDefault(712).unsafe_rawColors.BRAND_500;
    tmp = jsx(require(5209) /* CheckmarkSmallIcon */.CheckmarkSmallIcon, { color: null });
  }
  return tmp;
};
