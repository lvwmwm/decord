// Module ID: 8485
// Function ID: 67455
// Name: XboxNeutralIcon
// Dependencies: [31, 33, 689, 3868, 8486, 2]
// Exports: XboxNeutralIcon

// Module 8485 (XboxNeutralIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/XboxNeutralIcon.tsx");

export const XboxNeutralIcon = function XboxNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8486) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(8486) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
