// Module ID: 7474
// Function ID: 7475
// Name: useRecentlyActiveChannelsEnabled
// Dependencies: [6424, 558, 6423, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 7474 (useRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 6423 */;
import DesignTogglesStore from "DesignTogglesStore" /* 6424 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return DesignTogglesStore.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
};
