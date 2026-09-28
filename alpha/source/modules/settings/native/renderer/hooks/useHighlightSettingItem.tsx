// Module ID: 14253
// Function ID: 14254
// Name: useHighlightSettingItem
// Dependencies: [14249, 2]
// Exports: useHighlightSettingItem

// Module 14253 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14249 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
