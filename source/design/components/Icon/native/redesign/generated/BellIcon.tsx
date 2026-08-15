// Module ID: 10003
// Function ID: 10004
// Name: BellIcon
// Dependencies: [19, 21, 712, 4096, 8174, 2]
// Exports: BellIcon

// Module 10003 (BellIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/BellIcon.tsx");

export const BellIcon = function BellIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(8174) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4096) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
