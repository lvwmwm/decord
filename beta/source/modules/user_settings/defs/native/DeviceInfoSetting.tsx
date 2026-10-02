// Module ID: 15099
// Function ID: 15100
// Name: DeviceInfoSetting
// Dependencies: [15098, 4813, 10874, 1127, 15100, 2027, 2]

// Module 15099 (DeviceInfoSetting)
import intl2 from "intl" /* 1127 */;
import UserSettings from "UserSettings" /* 2027 */;
import DeviceUtils from "DeviceUtils" /* 4813 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 15098 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15100 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const getClientInfoString = CopyClientInfoSetting.getClientInfoString;
    CopyClientInfoSetting;
    const obj = DeviceUtils;
    const clientInfoString = getClientInfoString(obj.getDeviceInfo());
    const getClientInfoString2 = CopyClientInfoSetting.getClientInfoString;
    CopyClientInfoSetting;
    const obj2 = DeviceUtils;
    return "" + clientInfoString + " (" + getClientInfoString2(obj2.getSystemVersion()) + ")";
  },
  usePredicate: UserSettings.DeveloperMode.useSetting
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
