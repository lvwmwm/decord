// Module ID: 16196
// Function ID: 16197
// Name: useHighlightSettingItem
// Dependencies: [16192, 2]
// Exports: useHighlightSettingItem

// Module 16196 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
