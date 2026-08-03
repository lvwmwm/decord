// Module ID: 14790
// Function ID: 14791
// Name: useHighlightSettingItem
// Dependencies: [13762, 2]
// Exports: useHighlightSettingItem

// Module 14790 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
