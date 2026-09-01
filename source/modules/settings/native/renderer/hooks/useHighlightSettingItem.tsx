// Module ID: 14346
// Function ID: 14347
// Name: useHighlightSettingItem
// Dependencies: [14342, 2]
// Exports: useHighlightSettingItem

// Module 14346 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14342 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};
