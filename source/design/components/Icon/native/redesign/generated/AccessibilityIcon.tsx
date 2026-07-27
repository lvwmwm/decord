// Module ID: 14277
// Function ID: 109667
// Name: AccessibilityIcon
// Dependencies: [31, 33, 689, 3834, 14278, 2]
// Exports: AccessibilityIcon

// Module 14277 (AccessibilityIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/AccessibilityIcon.tsx");

export const AccessibilityIcon = function AccessibilityIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(14278) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(14278) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
