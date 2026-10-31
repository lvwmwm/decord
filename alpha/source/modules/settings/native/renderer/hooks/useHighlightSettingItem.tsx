// Module ID: 16581
// Function ID: 16582
// Name: useHighlightSettingItem
// Dependencies: [16577, 2]
// Exports: useHighlightSettingItem

// Module 16581 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
