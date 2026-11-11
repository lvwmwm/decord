// Module ID: 17101
// Function ID: 17102
// Name: useHighlightSettingItem
// Dependencies: [17097, 2]
// Exports: useHighlightSettingItem

// Module 17101 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 17097 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
