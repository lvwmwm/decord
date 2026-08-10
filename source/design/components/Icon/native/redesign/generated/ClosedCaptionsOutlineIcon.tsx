// Module ID: 14271
// Function ID: 14272
// Name: ClosedCaptionsOutlineIcon
// Dependencies: [19, 21, 712, 4004, 14272, 2]
// Exports: ClosedCaptionsOutlineIcon

// Module 14271 (ClosedCaptionsOutlineIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ClosedCaptionsOutlineIcon.tsx");

export const ClosedCaptionsOutlineIcon = function ClosedCaptionsOutlineIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(14272) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4004) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
