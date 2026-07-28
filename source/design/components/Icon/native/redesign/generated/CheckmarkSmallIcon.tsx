// Module ID: 5187
// Function ID: 45051
// Name: CheckmarkSmallIcon
// Dependencies: [31, 33, 689, 3868, 5188, 2]
// Exports: CheckmarkSmallIcon

// Module 5187 (CheckmarkSmallIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx");

export const CheckmarkSmallIcon = function CheckmarkSmallIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(5188) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(5188) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
