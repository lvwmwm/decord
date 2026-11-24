// Module ID: 15989
// Function ID: 15990
// Name: useHighlightSettingItem
// Dependencies: [15985, 2]
// Exports: useHighlightSettingItem

// Module 15989 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 15985 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
