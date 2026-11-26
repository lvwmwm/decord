// Module ID: 16003
// Function ID: 16004
// Name: useHighlightSettingItem
// Dependencies: [15999, 2]
// Exports: useHighlightSettingItem

// Module 16003 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 15999 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
