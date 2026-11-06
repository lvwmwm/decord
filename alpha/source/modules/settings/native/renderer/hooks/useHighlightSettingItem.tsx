// Module ID: 16852
// Function ID: 16853
// Name: useHighlightSettingItem
// Dependencies: [16848, 2]
// Exports: useHighlightSettingItem

// Module 16852 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
