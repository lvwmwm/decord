// Module ID: 16594
// Function ID: 16595
// Name: useHighlightSettingItem
// Dependencies: [16590, 2]
// Exports: useHighlightSettingItem

// Module 16594 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16590 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
