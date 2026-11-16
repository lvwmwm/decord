// Module ID: 17842
// Function ID: 17843
// Name: IOSNativePhoneIntegrationSetting
// Dependencies: [8536, 17843, 1377, 1113, 4995, 11717, 16625, 17838, 2]

// Module 17842 (IOSNativePhoneIntegrationSetting)
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16625 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17838 */;
import CallKitMetricCollectionExperimentDefault from "CallKitMetricCollectionExperiment" /* 17843 */;
import SettingBuilders_mod from "SettingBuilders" /* 11717 */;
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
