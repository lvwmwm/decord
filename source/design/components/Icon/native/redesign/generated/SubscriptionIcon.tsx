// Module ID: 13953
// Function ID: 106720
// Name: SubscriptionIcon
// Dependencies: [31, 33, 689, 3834, 13954, 2]
// Exports: SubscriptionIcon

// Module 13953 (SubscriptionIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export const SubscriptionIcon = function SubscriptionIcon(color) {
  let ICON_OVERLAY_LIGHT = color.color;
  if (ICON_OVERLAY_LIGHT === undefined) {
    ICON_OVERLAY_LIGHT = importDefault(689).colors.ICON_OVERLAY_LIGHT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(13954) /* registerAsset */, color: ICON_OVERLAY_LIGHT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(13954) /* registerAsset */, color: ICON_OVERLAY_LIGHT, style: color.style });
};
