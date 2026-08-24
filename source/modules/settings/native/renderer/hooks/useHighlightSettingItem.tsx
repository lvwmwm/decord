// Module ID: 15124
// Function ID: 15125
// Name: useHighlightSettingItem
// Dependencies: [14061, 2]
// Exports: useHighlightSettingItem

// Module 15124 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14061 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};
