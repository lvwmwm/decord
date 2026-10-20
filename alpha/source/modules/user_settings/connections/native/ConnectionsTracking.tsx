// Module ID: 16057
// Function ID: 16058
// Name: ConnectionsTracking
// Dependencies: [1087, 1267, 2]
// Exports: trackEmptyStateCardClicked

// Module 16057 (ConnectionsTracking)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export const trackEmptyStateCardClicked = function trackEmptyStateCardClicked(platformType) {
  platformType = platformType.platformType;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platformType });
};
