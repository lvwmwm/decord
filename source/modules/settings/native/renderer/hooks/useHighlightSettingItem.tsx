// Module ID: 14620
// Function ID: 14621
// Name: useHighlightSettingItem
// Dependencies: [14616, 2]
// Exports: useHighlightSettingItem

// Module 14620 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14616 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};
