// Module ID: 14824
// Function ID: 14825
// Name: useHighlightSettingItem
// Dependencies: [13796, 2]
// Exports: useHighlightSettingItem

// Module 14824 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
