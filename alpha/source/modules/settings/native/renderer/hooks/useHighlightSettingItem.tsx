// Module ID: 16539
// Function ID: 16540
// Name: useHighlightSettingItem
// Dependencies: [16535, 2]
// Exports: useHighlightSettingItem

// Module 16539 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16535 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
