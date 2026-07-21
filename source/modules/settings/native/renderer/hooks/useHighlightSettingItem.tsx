// Module ID: 14451
// Function ID: 108897
// Name: useHighlightSettingItem
// Dependencies: []
// Exports: useHighlightSettingItem

// Module 14451 (useHighlightSettingItem)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === selected);
};
