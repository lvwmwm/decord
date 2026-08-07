// Module ID: 15513
// Function ID: 15514
// Name: PaintbrushThinIcon
// Dependencies: [19, 21, 712, 4004, 15514, 2]
// Exports: PaintbrushThinIcon

// Module 15513 (PaintbrushThinIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/PaintbrushThinIcon.tsx");

export const PaintbrushThinIcon = function PaintbrushThinIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(15514) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4004) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
