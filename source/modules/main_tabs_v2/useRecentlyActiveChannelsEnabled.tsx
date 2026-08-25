// Module ID: 7142
// Function ID: 7143
// Name: isRecentlyActiveChannelsEnabled
// Dependencies: [5379, 5378, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 7142 (isRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 5378 */;
import closure_2 from "getUserAgnosticState" /* 5379 */;

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return closure_2.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
};
