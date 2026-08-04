// Module ID: 8396
// Function ID: 8397
// Name: DenyIcon
// Dependencies: [19, 21, 712, 3988, 8397, 2]
// Exports: DenyIcon

// Module 8396 (DenyIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/DenyIcon.tsx");

export const DenyIcon = function DenyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(8397) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3988) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
