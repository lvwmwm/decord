// Module ID: 15904
// Function ID: 15905
// Name: useHighlightSettingItem
// Dependencies: [15900, 2]
// Exports: useHighlightSettingItem

// Module 15904 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 15900 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
