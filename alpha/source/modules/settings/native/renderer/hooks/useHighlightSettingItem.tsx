// Module ID: 16938
// Function ID: 16939
// Name: useHighlightSettingItem
// Dependencies: [16934, 2]
// Exports: useHighlightSettingItem

// Module 16938 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
