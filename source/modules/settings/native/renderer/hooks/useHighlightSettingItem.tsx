// Module ID: 14857
// Function ID: 14858
// Name: useHighlightSettingItem
// Dependencies: [13818, 2]
// Exports: useHighlightSettingItem

// Module 14857 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
