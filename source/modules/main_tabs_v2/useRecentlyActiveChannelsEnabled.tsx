// Module ID: 5774
// Function ID: 50180
// Name: isRecentlyActiveChannelsEnabled
// Dependencies: [5124, 5123, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 5774 (isRecentlyActiveChannelsEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return _isNativeReflectConstruct.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return importDefault(5123)("enable_recently_active");
};
