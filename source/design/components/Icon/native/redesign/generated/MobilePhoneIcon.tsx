// Module ID: 9140
// Function ID: 71799
// Name: MobilePhoneIcon
// Dependencies: [31, 33, 689, 3834, 9141, 2]
// Exports: MobilePhoneIcon

// Module 9140 (MobilePhoneIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx");

export const MobilePhoneIcon = function MobilePhoneIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(9141) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(9141) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
