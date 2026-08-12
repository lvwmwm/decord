// Module ID: 9733
// Function ID: 9734
// Name: ArrowSmallRightIcon
// Dependencies: [19, 21, 712, 4064, 9734, 2]
// Exports: ArrowSmallRightIcon

// Module 9733 (ArrowSmallRightIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ArrowSmallRightIcon.tsx");

export const ArrowSmallRightIcon = function ArrowSmallRightIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(9734) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4064) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
