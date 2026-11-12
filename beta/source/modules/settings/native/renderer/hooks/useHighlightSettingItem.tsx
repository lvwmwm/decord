// Module ID: 16942
// Function ID: 16943
// Name: useHighlightSettingItem
// Dependencies: [16938, 2]
// Exports: useHighlightSettingItem

// Module 16942 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16938 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
