// Module ID: 6916
// Function ID: 6917
// Name: isRecentlyActiveChannelsEnabled
// Dependencies: [5256, 5255, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 6916 (isRecentlyActiveChannelsEnabled)
import getUserAgnosticState from "getUserAgnosticState";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return getUserAgnosticState.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return importDefault(5255)("enable_recently_active");
};
