// Module ID: 14347
// Function ID: 110028
// Name: useValue
// Dependencies: [4157, 7733, 566, 13479, 10099, 1212, 2557, 2]
// Exports: onValueChange, useValue

// Module 14347 (useValue)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useValue() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = require(13479) /* setFontSize */.setDisplayNameStylesEnabled(enabled);
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2557)["2gFUEw"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue,
  onValueChange,
  usePredicate() {
    return true;
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default createToggle;
export { useValue };
export { onValueChange };
