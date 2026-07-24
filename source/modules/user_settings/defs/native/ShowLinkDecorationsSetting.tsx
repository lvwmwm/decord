// Module ID: 14292
// Function ID: 109729
// Name: useShowLinkDecorationsSettingValue
// Dependencies: [4122, 7751, 566, 13423, 10127, 1212, 2]
// Exports: onShowLinkDecorationsValueChange, useShowLinkDecorationsSettingValue

// Module 14292 (useShowLinkDecorationsSettingValue)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useShowLinkDecorationsSettingValue() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = require(13423) /* setFontSize */.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.OLZFB8);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default createToggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };
