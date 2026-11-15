// Module ID: 16943
// Function ID: 16944
// Name: useHighlightSettingItem
// Dependencies: [16939, 2]
// Exports: useHighlightSettingItem

// Module 16943 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
