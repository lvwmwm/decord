// Module ID: 14569
// Function ID: 14570
// Name: useHighlightSettingItem
// Dependencies: [14565, 2]
// Exports: useHighlightSettingItem

// Module 14569 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14565 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};
