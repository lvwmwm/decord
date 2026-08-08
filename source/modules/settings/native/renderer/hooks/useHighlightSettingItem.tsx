// Module ID: 14927
// Function ID: 14928
// Name: useHighlightSettingItem
// Dependencies: [13888, 2]
// Exports: useHighlightSettingItem

// Module 14927 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
