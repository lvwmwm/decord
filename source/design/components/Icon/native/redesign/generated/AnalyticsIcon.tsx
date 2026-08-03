// Module ID: 9776
// Function ID: 9777
// Name: AnalyticsIcon
// Dependencies: [19, 21, 712, 3958, 9777, 2]
// Exports: AnalyticsIcon

// Module 9776 (AnalyticsIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/AnalyticsIcon.tsx");

export const AnalyticsIcon = function AnalyticsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(9777) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3958) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
