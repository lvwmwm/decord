// Module ID: 10103
// Function ID: 10104
// Name: KeyboardIcon
// Dependencies: [19, 21, 712, 3988, 10104, 2]
// Exports: KeyboardIcon

// Module 10103 (KeyboardIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/KeyboardIcon.tsx");

export const KeyboardIcon = function KeyboardIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(10104) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3988) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
