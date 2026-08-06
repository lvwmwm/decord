// Module ID: 14841
// Function ID: 14842
// Name: useHighlightSettingItem
// Dependencies: [13804, 2]
// Exports: useHighlightSettingItem

// Module 14841 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
