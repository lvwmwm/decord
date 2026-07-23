// Module ID: 14576
// Function ID: 111125
// Name: useHighlightSettingItem
// Dependencies: [13552, 2]
// Exports: useHighlightSettingItem

// Module 14576 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
