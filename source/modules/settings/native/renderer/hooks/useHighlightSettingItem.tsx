// Module ID: 14681
// Function ID: 111749
// Name: useHighlightSettingItem
// Dependencies: [13659, 2]
// Exports: useHighlightSettingItem

// Module 14681 (useHighlightSettingItem)
import zustandStore from "zustandStore";

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === zustandStore);
};
