// Module ID: 14939
// Function ID: 14940
// Name: useHighlightSettingItem
// Dependencies: [13897, 2]
// Exports: useHighlightSettingItem

// Module 14939 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
