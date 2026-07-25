// Module ID: 4634
// Function ID: 40328
// Name: BookCheckIcon
// Dependencies: [31, 33, 689, 3834, 4623, 2]
// Exports: BookCheckIcon

// Module 4634 (BookCheckIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/BookCheckIcon.tsx");

export const BookCheckIcon = function BookCheckIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(4623) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(4623) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
