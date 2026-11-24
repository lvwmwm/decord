// Module ID: 16898
// Function ID: 16899
// Name: IOSNativePhoneIntegrationSetting
// Dependencies: [8712, 16899, 1378, 1112, 4738, 11937, 15658, 16894, 2]

// Module 16898 (IOSNativePhoneIntegrationSetting)
import intl2 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15658 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16894 */;
import CallKitMetricCollectionExperimentDefault from "CallKitMetricCollectionExperiment" /* 16899 */;
import SettingBuilders_mod from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.V6D0wU);
  },
  useValue: UserSettings.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: UserSettings.NativePhoneIntegrationEnabled.updateSetting
};
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
let obj2 = {
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
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
  }
};
const createToggle = SettingBuilders.createToggle;
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
let obj3 = {
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
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
  }
};
const createToggle2 = SettingBuilders.createToggle;
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
export const RedesignIOSNativePhoneIntegrationSetting = toggle2;
