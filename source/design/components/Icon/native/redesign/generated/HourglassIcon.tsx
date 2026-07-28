// Module ID: 11973
// Function ID: 92503
// Name: HourglassIcon
// Dependencies: [31, 33, 689, 3868, 11974, 2]
// Exports: HourglassIcon

// Module 11973 (HourglassIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/HourglassIcon.tsx");

export const HourglassIcon = function HourglassIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(11974) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(11974) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
