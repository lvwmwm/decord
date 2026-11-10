// Module ID: 16589
// Function ID: 16590
// Name: useHighlightSettingItem
// Dependencies: [16585, 2]
// Exports: useHighlightSettingItem

// Module 16589 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
