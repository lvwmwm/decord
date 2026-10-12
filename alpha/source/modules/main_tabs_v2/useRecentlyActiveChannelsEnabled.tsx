// Module ID: 7258
// Function ID: 7259
// Name: useRecentlyActiveChannelsEnabled
// Dependencies: [6204, 558, 6203, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 7258 (useRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 6203 */;
import DesignTogglesStore from "DesignTogglesStore" /* 6204 */;
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
