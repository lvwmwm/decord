// Module ID: 14970
// Function ID: 14971
// Name: useHighlightSettingItem
// Dependencies: [14966, 2]
// Exports: useHighlightSettingItem

// Module 14970 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14966 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
