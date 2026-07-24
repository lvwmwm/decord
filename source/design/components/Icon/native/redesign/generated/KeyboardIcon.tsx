// Module ID: 9887
// Function ID: 76495
// Name: KeyboardIcon
// Dependencies: [31, 33, 689, 3833, 9888, 2]
// Exports: KeyboardIcon

// Module 9887 (KeyboardIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/KeyboardIcon.tsx");

export const KeyboardIcon = function KeyboardIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(9888) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(9888) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
