// Module ID: 14783
// Function ID: 14784
// Name: useEnableSwitchIconsSettingValue
// Dependencies: [4669, 8238, 589, 1367, 10708, 1236, 13871, 2]
// Exports: useEnableSwitchIconsSettingValue

// Module 14783 (useEnableSwitchIconsSettingValue)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4669 */;
import createToggle from "createToggle" /* 10708 */;

require = arg1;
function useEnableSwitchIconsSettingValue() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["S3z+pV"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: require("setFontSize").setSwitchIconsEnabled,
  usePredicate: function useShowSwitchIconsSetting() {
    return useIsMobileVisualRefreshExperimentEnabledDefault("SettingsAccessibilityScreen");
  },
  hasIcon: true
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default createToggle;
export { useEnableSwitchIconsSettingValue };
