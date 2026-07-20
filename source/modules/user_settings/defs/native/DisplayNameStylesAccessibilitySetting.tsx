// Module ID: 14109
// Function ID: 107146
// Name: useValue
// Dependencies: []
// Exports: onValueChange, useValue

// Module 14109 (useValue)
function useValue() {
  const items = [closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => obj.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = arg1(dependencyMap[3]).setDisplayNameStylesEnabled(enabled);
}
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(importDefault(dependencyMap[6]).2gFUEw);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCESSIBILITY,
  useValue,
  onValueChange,
  usePredicate() {
    return true;
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };
