// Module ID: 14929
// Function ID: 14930
// Name: useHighlightSettingItem
// Dependencies: [13890, 2]
// Exports: useHighlightSettingItem

// Module 14929 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
