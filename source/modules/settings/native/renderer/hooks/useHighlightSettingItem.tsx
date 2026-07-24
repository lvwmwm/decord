// Module ID: 14625
// Function ID: 111444
// Name: useHighlightSettingItem
// Dependencies: [13603, 2]
// Exports: useHighlightSettingItem

// Module 14625 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
