// Module ID: 17219
// Function ID: 17220
// Name: useHighlightSettingItem
// Dependencies: [17215, 2]
// Exports: useHighlightSettingItem

// Module 17219 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 17215 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
