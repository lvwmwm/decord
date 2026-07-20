// Module ID: 14110
// Function ID: 107152
// Name: useShowLinkDecorationsSettingValue
// Dependencies: []
// Exports: onShowLinkDecorationsValueChange, useShowLinkDecorationsSettingValue

// Module 14110 (useShowLinkDecorationsSettingValue)
function useShowLinkDecorationsSettingValue() {
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => obj.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = arg1(dependencyMap[3]).setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.OLZFB8);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default toggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };
