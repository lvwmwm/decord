// Module ID: 9607
// Function ID: 9608
// Name: BackspaceIcon
// Dependencies: [19, 21, 712, 3958, 9608, 2]
// Exports: BackspaceIcon

// Module 9607 (BackspaceIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/BackspaceIcon.tsx");

export const BackspaceIcon = function BackspaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(9608) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3958) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
