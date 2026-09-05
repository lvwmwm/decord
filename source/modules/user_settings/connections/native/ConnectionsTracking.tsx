// Module ID: 14960
// Function ID: 14961
// Name: trackEmptyStateCardClicked
// Dependencies: [1074, 1242, 2]
// Exports: trackEmptyStateCardClicked

// Module 14960 (trackEmptyStateCardClicked)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export const trackEmptyStateCardClicked = function trackEmptyStateCardClicked(platform_type) {
  expandEventPropertiesDefault.track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platform_type.platformType });
};
