// Module ID: 17428
// Function ID: 17429
// Name: DeviceInfoSetting
// Dependencies: [17427, 4962, 11302, 1125, 17429, 4833, 2]

// Module 17428 (DeviceInfoSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4833 */;
import DeviceUtils from "DeviceUtils" /* 4962 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 17427 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 17429 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
