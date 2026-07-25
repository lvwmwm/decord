// Module ID: 6590
// Function ID: 58408
// Name: LettersIcon
// Dependencies: [31, 33, 689, 3834, 6591, 2]
// Exports: LettersIcon

// Module 6590 (LettersIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/LettersIcon.tsx");

export const LettersIcon = function LettersIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(6591) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(6591) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
