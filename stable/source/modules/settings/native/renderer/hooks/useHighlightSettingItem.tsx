// Module ID: 14782
// Function ID: 14783
// Name: useHighlightSettingItem
// Dependencies: [14778, 2]
// Exports: useHighlightSettingItem

// Module 14782 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14778 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
