// Module ID: 8931
// Function ID: 70444
// Name: ShieldLockIcon
// Dependencies: [31, 33, 689, 3833, 8932, 2]
// Exports: ShieldLockIcon

// Module 8931 (ShieldLockIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ShieldLockIcon.tsx");

export const ShieldLockIcon = function ShieldLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8932) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(8932) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
