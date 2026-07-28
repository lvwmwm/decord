// Module ID: 13997
// Function ID: 106893
// Name: SubscriptionIcon
// Dependencies: [31, 33, 689, 3868, 13998, 2]
// Exports: SubscriptionIcon

// Module 13997 (SubscriptionIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export const SubscriptionIcon = function SubscriptionIcon(color) {
  let ICON_STRONG = color.color;
  if (ICON_STRONG === undefined) {
    ICON_STRONG = importDefault(689).colors.ICON_STRONG;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(13998) /* registerAsset */, color: ICON_STRONG, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(13998) /* registerAsset */, color: ICON_STRONG, style: color.style });
};
