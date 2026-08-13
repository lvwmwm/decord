// Module ID: 14997
// Function ID: 14998
// Name: useHighlightSettingItem
// Dependencies: [13949, 2]
// Exports: useHighlightSettingItem

// Module 14997 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
