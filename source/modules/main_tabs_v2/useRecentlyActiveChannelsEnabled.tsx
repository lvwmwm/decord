// Module ID: 6904
// Function ID: 6905
// Name: isRecentlyActiveChannelsEnabled
// Dependencies: [5241, 5240, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 6904 (isRecentlyActiveChannelsEnabled)
import getUserAgnosticState from "getUserAgnosticState";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return getUserAgnosticState.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return importDefault(5240)("enable_recently_active");
};
