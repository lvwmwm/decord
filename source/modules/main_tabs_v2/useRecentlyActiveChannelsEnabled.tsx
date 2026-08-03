// Module ID: 6892
// Function ID: 6893
// Name: isRecentlyActiveChannelsEnabled
// Dependencies: [5212, 5211, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 6892 (isRecentlyActiveChannelsEnabled)
import getUserAgnosticState from "getUserAgnosticState";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return getUserAgnosticState.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return importDefault(5211)("enable_recently_active");
};
