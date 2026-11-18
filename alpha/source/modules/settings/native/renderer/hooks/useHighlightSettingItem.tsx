// Module ID: 15913
// Function ID: 15914
// Name: useHighlightSettingItem
// Dependencies: [15909, 2]
// Exports: useHighlightSettingItem

// Module 15913 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 15909 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
