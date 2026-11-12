// Module ID: 16945
// Function ID: 16946
// Name: useHighlightSettingItem
// Dependencies: [16941, 2]
// Exports: useHighlightSettingItem

// Module 16945 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
