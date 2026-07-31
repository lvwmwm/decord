// Module ID: 14723
// Function ID: 14724
// Name: useHighlightSettingItem
// Dependencies: [13699, 2]
// Exports: useHighlightSettingItem

// Module 14723 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
