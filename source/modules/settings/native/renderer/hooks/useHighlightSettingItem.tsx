// Module ID: 14313
// Function ID: 14314
// Name: useHighlightSettingItem
// Dependencies: [14309, 2]
// Exports: useHighlightSettingItem

// Module 14313 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14309 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};
