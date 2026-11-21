// Module ID: 15991
// Function ID: 15992
// Name: useHighlightSettingItem
// Dependencies: [15987, 2]
// Exports: useHighlightSettingItem

// Module 15991 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 15987 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
