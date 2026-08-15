// Module ID: 15060
// Function ID: 15061
// Name: useHighlightSettingItem
// Dependencies: [13993, 2]
// Exports: useHighlightSettingItem

// Module 15060 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
