// Module ID: 14345
// Function ID: 14346
// Name: ClosedCaptionsOutlineIcon
// Dependencies: [19, 21, 712, 4064, 14346, 2]
// Exports: ClosedCaptionsOutlineIcon

// Module 14345 (ClosedCaptionsOutlineIcon)
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
  obj[0] = require(14346) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4064) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
