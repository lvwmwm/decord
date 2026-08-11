// Module ID: 10248
// Function ID: 10249
// Name: ArrowAngleRightUpIcon
// Dependencies: [19, 21, 712, 4023, 10249, 2]
// Exports: ArrowAngleRightUpIcon

// Module 10248 (ArrowAngleRightUpIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ArrowAngleRightUpIcon.tsx");

export const ArrowAngleRightUpIcon = function ArrowAngleRightUpIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(10249) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4023) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
