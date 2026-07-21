// Module ID: 7450
// Function ID: 59750
// Name: trackIfScrolledToBottom
// Dependencies: [670, 2, 6]
// Exports: trackIfScrolledToBottom

// Module 7450 (trackIfScrolledToBottom)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/user_settings/premium/native/utils/PremiumNitroHomeUtils.tsx");

export const trackIfScrolledToBottom = function trackIfScrolledToBottom(trackedType) {
  let hasTrackedScrolledToBottom;
  let nativeEvent;
  ({ nativeEvent, hasTrackedScrolledToBottom } = trackedType);
  let current = hasTrackedScrolledToBottom.current;
  if (!current) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.ceil(tmp.height);
    const _Math3 = Math;
    const sum = rounded + Math.ceil(tmp2.y);
    current = sum < Math.floor(tmp3.height);
  }
  if (!current) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: trackedType.trackedType };
    obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
    hasTrackedScrolledToBottom.current = true;
  }
};
