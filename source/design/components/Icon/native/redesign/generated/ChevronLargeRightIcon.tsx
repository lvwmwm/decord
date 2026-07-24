// Module ID: 11441
// Function ID: 89021
// Name: ChevronLargeRightIcon
// Dependencies: [31, 33, 689, 3833, 11442, 2]
// Exports: ChevronLargeRightIcon

// Module 11441 (ChevronLargeRightIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ChevronLargeRightIcon.tsx");

export const ChevronLargeRightIcon = function ChevronLargeRightIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(11442) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(11442) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
