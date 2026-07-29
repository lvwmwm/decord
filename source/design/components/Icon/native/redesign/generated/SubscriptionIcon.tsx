// Module ID: 14018
// Function ID: 14019
// Name: SubscriptionIcon
// Dependencies: [19, 21, 712, 3892, 14019, 2]
// Exports: SubscriptionIcon

// Module 14018 (SubscriptionIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export const SubscriptionIcon = function SubscriptionIcon(color) {
  let ICON_STRONG = color.color;
  if (ICON_STRONG === undefined) {
    ICON_STRONG = importDefault(712).colors.ICON_STRONG;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(14019) /* registerAsset */;
  obj[1] = ICON_STRONG;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3892) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
