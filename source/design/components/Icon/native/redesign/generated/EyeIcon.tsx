// Module ID: 8437
// Function ID: 8438
// Name: EyeIcon
// Dependencies: [19, 21, 712, 4004, 8438, 2]
// Exports: EyeIcon

// Module 8437 (EyeIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/EyeIcon.tsx");

export const EyeIcon = function EyeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(8438) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4004) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
