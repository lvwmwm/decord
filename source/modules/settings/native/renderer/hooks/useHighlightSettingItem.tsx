// Module ID: 14823
// Function ID: 14824
// Name: useHighlightSettingItem
// Dependencies: [13795, 2]
// Exports: useHighlightSettingItem

// Module 14823 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
