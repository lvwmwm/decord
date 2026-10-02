// Module ID: 12966
// Function ID: 12967
// Name: PremiumNitroHomeUtils
// Dependencies: [1086, 1253, 2]
// Exports: trackIfScrolledToBottom

// Module 12966 (PremiumNitroHomeUtils)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/premium/native/utils/PremiumNitroHomeUtils.tsx");

export const trackIfScrolledToBottom = function trackIfScrolledToBottom(trackedType) {
  let hasTrackedScrolledToBottom;
  let nativeEvent;
  ({ nativeEvent, hasTrackedScrolledToBottom } = trackedType);
  let current = hasTrackedScrolledToBottom.current;
  trackedType = trackedType.trackedType;
  if (!current) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.ceil(tmp.height);
    const _Math3 = Math;
    const sum = rounded + Math.ceil(tmp2.y);
    current = sum < Math.floor(tmp3.height);
  }
  if (!current) {
    const obj2 = { type: trackedType };
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
    hasTrackedScrolledToBottom.current = true;
  }
};
