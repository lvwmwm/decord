// Module ID: 16900
// Function ID: 16901
// Name: useHighlightSettingItem
// Dependencies: [16896, 2]
// Exports: useHighlightSettingItem

// Module 16900 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16896 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
