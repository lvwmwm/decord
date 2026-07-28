// Module ID: 9586
// Function ID: 74621
// Name: ChevronLargeLeftIcon
// Dependencies: [31, 33, 689, 3868, 9587, 2]
// Exports: ChevronLargeLeftIcon

// Module 9586 (ChevronLargeLeftIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ChevronLargeLeftIcon.tsx");

export const ChevronLargeLeftIcon = function ChevronLargeLeftIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(9587) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(9587) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
