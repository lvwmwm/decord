// Module ID: 14229
// Function ID: 14230
// Name: useHighlightSettingItem
// Dependencies: [14225, 2]
// Exports: useHighlightSettingItem

// Module 14229 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14225 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
