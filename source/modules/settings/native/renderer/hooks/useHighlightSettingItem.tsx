// Module ID: 14695
// Function ID: 14696
// Name: useHighlightSettingItem
// Dependencies: [14691, 2]
// Exports: useHighlightSettingItem

// Module 14695 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14691 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};
