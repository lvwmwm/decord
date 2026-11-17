// Module ID: 17256
// Function ID: 17257
// Name: useHighlightSettingItem
// Dependencies: [17252, 2]
// Exports: useHighlightSettingItem

// Module 17256 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 17252 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
