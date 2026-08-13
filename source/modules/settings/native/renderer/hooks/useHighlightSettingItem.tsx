// Module ID: 15006
// Function ID: 15007
// Name: useHighlightSettingItem
// Dependencies: [13958, 2]
// Exports: useHighlightSettingItem

// Module 15006 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
