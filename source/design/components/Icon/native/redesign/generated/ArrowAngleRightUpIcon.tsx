// Module ID: 9899
// Function ID: 9900
// Name: ArrowAngleRightUpIcon
// Dependencies: [19, 21, 712, 3892, 9900, 2]
// Exports: ArrowAngleRightUpIcon

// Module 9899 (ArrowAngleRightUpIcon)
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
  obj[0] = require(9900) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3892) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
