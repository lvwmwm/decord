// Module ID: 14706
// Function ID: 14707
// Name: useHighlightSettingItem
// Dependencies: [13680, 2]
// Exports: useHighlightSettingItem

// Module 14706 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
