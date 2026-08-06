// Module ID: 14508
// Function ID: 14509
// Name: useShowLinkDecorationsSettingValue
// Dependencies: [4277, 8005, 589, 13626, 10364, 1236, 2]
// Exports: onShowLinkDecorationsValueChange, useShowLinkDecorationsSettingValue

// Module 14508 (useShowLinkDecorationsSettingValue)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useShowLinkDecorationsSettingValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require(589) /* initialize */.useStateFromStores(items, () => obj.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = require(13626) /* setFontSize */.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.OLZFB8);
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
