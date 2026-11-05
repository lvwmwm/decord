// Module ID: 16864
// Function ID: 16865
// Name: useHighlightSettingItem
// Dependencies: [16860, 2]
// Exports: useHighlightSettingItem

// Module 16864 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
