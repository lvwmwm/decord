// Module ID: 13925
// Function ID: 106579
// Name: trackEmptyStateCardClicked
// Dependencies: [653, 675, 2]
// Exports: trackEmptyStateCardClicked

// Module 13925 (trackEmptyStateCardClicked)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export const trackEmptyStateCardClicked = function trackEmptyStateCardClicked(platform_type) {
  importDefault(675).track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platform_type.platformType });
};
