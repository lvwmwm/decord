// Module ID: 13769
// Function ID: 104075
// Name: SubscriptionIcon
// Dependencies: [31, 27, 5246, 653, 655, 33]
// Exports: SubscriptionIcon

// Module 13769 (SubscriptionIcon)
import "module_31";
import { jsx } from "get ActivityIndicator";
import module_33 from "module_33";

const result = module_33.fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export const SubscriptionIcon = function SubscriptionIcon(color) {
  let ICON_OVERLAY_LIGHT = color.color;
  if (ICON_OVERLAY_LIGHT === undefined) {
    ICON_OVERLAY_LIGHT = importDefault(dependencyMap[2]).colors.ICON_OVERLAY_LIGHT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: arg1(dependencyMap[4]), color: ICON_OVERLAY_LIGHT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[3]).BaseIconImage, obj);
};
