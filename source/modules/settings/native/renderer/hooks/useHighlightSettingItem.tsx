// Module ID: 14636
// Function ID: 111571
// Name: useHighlightSettingItem
// Dependencies: [13614, 2]
// Exports: useHighlightSettingItem

// Module 14636 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
