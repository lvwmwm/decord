// Module ID: 16024
// Function ID: 16025
// Name: useHighlightSettingItem
// Dependencies: [16020, 2]
// Exports: useHighlightSettingItem

// Module 16024 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16020 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
