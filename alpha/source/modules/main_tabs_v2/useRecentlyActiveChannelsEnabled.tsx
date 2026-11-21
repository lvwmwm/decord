// Module ID: 8329
// Function ID: 8330
// Name: useRecentlyActiveChannelsEnabled
// Dependencies: [7098, 7097, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 8329 (useRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 7097 */;
import DesignTogglesStore from "DesignTogglesStore" /* 7098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export function isRecentlyActiveChannelsEnabled() {
  return DesignTogglesStore.get("enable_recently_active");
}
export function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
}
