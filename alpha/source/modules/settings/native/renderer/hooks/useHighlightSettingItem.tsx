// Module ID: 16829
// Function ID: 16830
// Name: useHighlightSettingItem
// Dependencies: [16825, 2]
// Exports: useHighlightSettingItem

// Module 16829 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16825 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
