// Module ID: 13991
// Function ID: 13992
// Name: trackEmptyStateCardClicked
// Dependencies: [676, 698, 2]
// Exports: trackEmptyStateCardClicked

// Module 13991 (trackEmptyStateCardClicked)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export const trackEmptyStateCardClicked = function trackEmptyStateCardClicked(platform_type) {
  importDefault(698).track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platform_type.platformType });
};
