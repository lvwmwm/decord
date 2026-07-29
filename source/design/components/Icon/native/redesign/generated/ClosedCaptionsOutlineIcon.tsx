// Module ID: 14046
// Function ID: 14047
// Name: ClosedCaptionsOutlineIcon
// Dependencies: [19, 21, 712, 3892, 14047, 2]
// Exports: ClosedCaptionsOutlineIcon

// Module 14046 (ClosedCaptionsOutlineIcon)
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
  obj[0] = require(14047) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3892) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
