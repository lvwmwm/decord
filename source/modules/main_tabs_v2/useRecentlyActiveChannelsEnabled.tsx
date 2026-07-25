// Module ID: 5764
// Function ID: 50323
// Name: isRecentlyActiveChannelsEnabled
// Dependencies: [5090, 5089, 2]
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 5764 (isRecentlyActiveChannelsEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return _isNativeReflectConstruct.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return importDefault(5089)("enable_recently_active");
};
