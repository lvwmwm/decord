// Module ID: 7707
// Function ID: 7708
// Name: useRecentlyActiveChannelsEnabled
// Dependencies: [6995, 6994, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 7707 (useRecentlyActiveChannelsEnabled)
import useDesignToggleDefault from "useDesignToggle" /* 6994 */;
import DesignTogglesStore from "DesignTogglesStore" /* 6995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export function isRecentlyActiveChannelsEnabled() {
  return DesignTogglesStore.get("enable_recently_active");
}
export function useRecentlyActiveChannelsEnabled() {
  return useDesignToggleDefault("enable_recently_active");
}
