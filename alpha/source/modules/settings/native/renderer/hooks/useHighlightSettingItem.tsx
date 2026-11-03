// Module ID: 16737
// Function ID: 16738
// Name: useHighlightSettingItem
// Dependencies: [16733, 2]
// Exports: useHighlightSettingItem

// Module 16737 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16733 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
