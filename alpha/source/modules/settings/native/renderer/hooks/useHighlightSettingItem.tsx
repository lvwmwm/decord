// Module ID: 15063
// Function ID: 15064
// Name: useHighlightSettingItem
// Dependencies: [15059, 2]
// Exports: useHighlightSettingItem

// Module 15063 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 15059 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
