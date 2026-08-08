// Module ID: 5394
// Function ID: 5395
// Name: RowCheckmark
// Dependencies: [19, 21, 5363, 712, 2]
// Exports: default

// Module 5394 (RowCheckmark)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("CheckmarkSmallIcon").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: null };
    obj[0] = importDefault(712).unsafe_rawColors.BRAND_500;
    tmp = jsx(require(5363) /* CheckmarkSmallIcon */.CheckmarkSmallIcon, { color: null });
  }
  return tmp;
};
