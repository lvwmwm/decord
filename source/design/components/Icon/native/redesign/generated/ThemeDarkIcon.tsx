// Module ID: 10120
// Function ID: 10121
// Name: ThemeDarkIcon
// Dependencies: [19, 21, 712, 3988, 10121, 2]
// Exports: ThemeDarkIcon

// Module 10120 (ThemeDarkIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ThemeDarkIcon.tsx");

export const ThemeDarkIcon = function ThemeDarkIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(10121) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3988) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
