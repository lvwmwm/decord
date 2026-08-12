// Module ID: 7037
// Function ID: 7038
// Name: isRecentlyActiveChannelsEnabled
// Dependencies: [5312, 5311, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 7037 (isRecentlyActiveChannelsEnabled)
import getUserAgnosticState from "getUserAgnosticState";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return getUserAgnosticState.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return importDefault(5311)("enable_recently_active");
};
