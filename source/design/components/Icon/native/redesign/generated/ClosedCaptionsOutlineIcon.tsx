// Module ID: 14381
// Function ID: 14382
// Name: ClosedCaptionsOutlineIcon
// Dependencies: [19, 21, 712, 4096, 14382, 2]
// Exports: ClosedCaptionsOutlineIcon

// Module 14381 (ClosedCaptionsOutlineIcon)
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
  obj[0] = require(14382) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4096) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
