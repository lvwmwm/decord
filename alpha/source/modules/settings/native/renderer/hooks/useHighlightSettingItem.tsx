// Module ID: 16145
// Function ID: 16146
// Name: useHighlightSettingItem
// Dependencies: [16141, 2]
// Exports: useHighlightSettingItem

// Module 16145 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16141 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
