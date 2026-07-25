// Module ID: 4637
// Function ID: 40334
// Name: TextLockIcon
// Dependencies: [31, 33, 689, 3834, 4619, 2]
// Exports: TextLockIcon

// Module 4637 (TextLockIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/TextLockIcon.tsx");

export const TextLockIcon = function TextLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(4619) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(4619) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
