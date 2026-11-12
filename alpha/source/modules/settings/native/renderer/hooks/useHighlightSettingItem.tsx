// Module ID: 17096
// Function ID: 17097
// Name: useHighlightSettingItem
// Dependencies: [17092, 2]
// Exports: useHighlightSettingItem

// Module 17096 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 17092 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
