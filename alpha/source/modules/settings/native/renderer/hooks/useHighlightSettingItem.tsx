// Module ID: 16841
// Function ID: 16842
// Name: useHighlightSettingItem
// Dependencies: [16837, 2]
// Exports: useHighlightSettingItem

// Module 16841 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 16837 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export function useHighlightSettingItem(setting) {
  let closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
}
