// Module ID: 15999
// Function ID: 16000
// Name: useHighlightSettingItem
// Dependencies: [15995, 2]
// Exports: useHighlightSettingItem

// Module 15999 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 15995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
