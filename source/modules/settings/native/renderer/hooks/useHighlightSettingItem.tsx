// Module ID: 14637
// Function ID: 111576
// Name: useHighlightSettingItem
// Dependencies: [13615, 2]
// Exports: useHighlightSettingItem

// Module 14637 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
