// Module ID: 14303
// Function ID: 14304
// Name: LaptopPhoneIcon
// Dependencies: [19, 21, 712, 4096, 14304, 2]
// Exports: LaptopPhoneIcon

// Module 14303 (LaptopPhoneIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/LaptopPhoneIcon.tsx");

export const LaptopPhoneIcon = function LaptopPhoneIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(14304) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4096) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
