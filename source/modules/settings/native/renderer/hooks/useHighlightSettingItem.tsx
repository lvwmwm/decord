// Module ID: 14803
// Function ID: 14804
// Name: useHighlightSettingItem
// Dependencies: [13767, 2]
// Exports: useHighlightSettingItem

// Module 14803 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
