// Module ID: 6763
// Function ID: 52976
// Name: isRecentlyActiveChannelsEnabled
// Dependencies: []
// Exports: isRecentlyActiveChannelsEnabled, useRecentlyActiveChannelsEnabled

// Module 6763 (isRecentlyActiveChannelsEnabled)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx");

export const isRecentlyActiveChannelsEnabled = function isRecentlyActiveChannelsEnabled() {
  return closure_2.get("enable_recently_active");
};
export const useRecentlyActiveChannelsEnabled = function useRecentlyActiveChannelsEnabled() {
  return importDefault(dependencyMap[1])("enable_recently_active");
};
