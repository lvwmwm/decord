// Module ID: 13742
// Function ID: 103939
// Name: trackEmptyStateCardClicked
// Dependencies: [670, 2, 6]
// Exports: trackEmptyStateCardClicked

// Module 13742 (trackEmptyStateCardClicked)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsTracking.tsx");

export const trackEmptyStateCardClicked = function trackEmptyStateCardClicked(platform_type) {
  importDefault(dependencyMap[1]).track(AnalyticEvents.CONNECTIONS_EMPTY_STATE_CARD_CLICKED, { platform_type: platform_type.platformType });
};
