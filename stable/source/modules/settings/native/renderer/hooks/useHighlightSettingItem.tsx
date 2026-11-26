// Module ID: 17221
// Function ID: 17222
// Name: useHighlightSettingItem
// Dependencies: [17217, 2]
// Exports: useHighlightSettingItem

// Module 17221 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 17217 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
