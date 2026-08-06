// Module ID: 14148
// Function ID: 14149
// Name: SubscriptionIcon
// Dependencies: [19, 21, 712, 3987, 14149, 2]
// Exports: SubscriptionIcon

// Module 14148 (SubscriptionIcon)
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
  obj[0] = require(14149) /* registerAsset */;
  obj[1] = ICON_STRONG;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3987) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
