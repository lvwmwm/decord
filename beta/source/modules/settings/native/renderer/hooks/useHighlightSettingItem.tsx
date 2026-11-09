// Module ID: 16911
// Function ID: 16912
// Name: useHighlightSettingItem
// Dependencies: [16907, 2]
// Exports: useHighlightSettingItem

// Module 16911 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16907 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
