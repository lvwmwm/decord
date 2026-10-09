// Module ID: 15157
// Function ID: 15158
// Name: ConnectionsTracking
// Dependencies: [1085, 1265, 2]
// Exports: trackEmptyStateCardClicked

// Module 15157 (ConnectionsTracking)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export const trackEmptyStateCardClicked = function trackEmptyStateCardClicked(platformType) {
  platformType = platformType.platformType;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platformType });
};
