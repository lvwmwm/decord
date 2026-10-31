// Module ID: 16842
// Function ID: 16843
// Name: ConnectionsTracking
// Dependencies: [1072, 1252, 2]
// Exports: trackEmptyStateCardClicked

// Module 16842 (ConnectionsTracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export function trackEmptyStateCardClicked(platformType) {
  platformType = platformType.platformType;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platformType });
}
