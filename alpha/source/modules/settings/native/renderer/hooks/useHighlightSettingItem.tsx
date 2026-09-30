// Module ID: 14460
// Function ID: 14461
// Name: useHighlightSettingItem
// Dependencies: [14456, 2]
// Exports: useHighlightSettingItem

// Module 14460 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14456 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
