// Module ID: 15011
// Function ID: 15012
// Name: useHighlightSettingItem
// Dependencies: [13961, 2]
// Exports: useHighlightSettingItem

// Module 15011 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
