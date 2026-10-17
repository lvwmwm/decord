// Module ID: 16549
// Function ID: 16550
// Name: IOSNativePhoneIntegrationSetting
// Dependencies: [8260, 558, 16550, 1384, 1128, 2044, 11065, 15473, 16545, 2]

// Module 16549 (IOSNativePhoneIntegrationSetting)
import intl2 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15473 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16545 */;
import CallKitMetricCollectionExperimentDefault from "CallKitMetricCollectionExperiment" /* 16550 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
function useHasIOSNativePhoneIntegrationSetting(arg0) {

}
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.V6D0wU);
  },
  useValue: UserSettings.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: UserSettings.NativePhoneIntegrationEnabled.updateSetting
};
let SettingBuilders = SettingBuilders_mod;
let obj2 = {
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    if (typeof useHasIOSNativePhoneIntegrationSetting === "function") {
      const obj = CallKitMetricCollectionExperimentDefault;
      let enabled = obj.useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
      if (enabled) {
        const obj2 = PlatformUtils;
        enabled = obj2.isIOS();
      }
      const obj3 = notifications_NotificationSettingsUtils;
      if (enabled) {
        enabled = !obj3.useIsDeclarativeSettingsUIAvailable("IOSNativePhoneIntegrationSetting");
      }
      return enabled;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
const createToggle = SettingBuilders.createToggle;
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
let obj3 = {
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    if (typeof useHasIOSNativePhoneIntegrationSetting === "function") {
      const obj = CallKitMetricCollectionExperimentDefault;
      let enabled = obj.useConfig({ location: "RedesignIOSNativePhoneIntegrationSetting" }).enabled;
      if (enabled) {
        const obj2 = PlatformUtils;
        enabled = obj2.isIOS();
      }
      const obj3 = notifications_NotificationSettingsUtils;
      if (enabled) {
        enabled = obj3.useIsDeclarativeSettingsUIAvailable("RedesignIOSNativePhoneIntegrationSetting");
      }
      return enabled;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
const createToggle2 = SettingBuilders.createToggle;
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
export const RedesignIOSNativePhoneIntegrationSetting = toggle2;
