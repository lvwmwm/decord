// Module ID: 10341
// Function ID: 10342
// Name: ArrowAngleLeftUpIcon
// Dependencies: [19, 21, 712, 4064, 10342, 2]
// Exports: ArrowAngleLeftUpIcon

// Module 10341 (ArrowAngleLeftUpIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ArrowAngleLeftUpIcon.tsx");

export const ArrowAngleLeftUpIcon = function ArrowAngleLeftUpIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(10342) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4064) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
