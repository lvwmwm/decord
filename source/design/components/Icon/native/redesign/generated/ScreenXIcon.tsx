// Module ID: 16010
// Function ID: 16011
// Name: ScreenXIcon
// Dependencies: [19, 21, 712, 3892, 10753, 2]
// Exports: ScreenXIcon

// Module 16010 (ScreenXIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ScreenXIcon.tsx");

export const ScreenXIcon = function ScreenXIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(10753) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3892) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
