// Module ID: 9106
// Function ID: 71363
// Name: PhoneHangUpIcon
// Dependencies: [31, 33, 689, 3868, 9107, 2]
// Exports: PhoneHangUpIcon

// Module 9106 (PhoneHangUpIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/PhoneHangUpIcon.tsx");

export const PhoneHangUpIcon = function PhoneHangUpIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(9107) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(9107) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
