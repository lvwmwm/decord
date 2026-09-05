// Module ID: 15410
// Function ID: 15411
// Name: useShowLinkDecorationsSettingValue
// Dependencies: [4552, 7975, 504, 14437, 11468, 1114, 2]
// Exports: onShowLinkDecorationsValueChange, useShowLinkDecorationsSettingValue

// Module 15410 (useShowLinkDecorationsSettingValue)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import setFontSize from "setFontSize" /* 14437 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
function useShowLinkDecorationsSettingValue() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => obj.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = setFontSize.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OLZFB8);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default createToggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };
