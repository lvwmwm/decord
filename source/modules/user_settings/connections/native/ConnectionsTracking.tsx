// Module ID: 14804
// Function ID: 14805
// Name: trackEmptyStateCardClicked
// Dependencies: [673, 695, 2]
// Exports: trackEmptyStateCardClicked

// Module 14804 (trackEmptyStateCardClicked)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export const trackEmptyStateCardClicked = function trackEmptyStateCardClicked(platform_type) {
  expandEventPropertiesDefault.track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platform_type.platformType });
};
