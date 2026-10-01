// Module ID: 15111
// Function ID: 15112
// Name: DeviceInfoSetting
// Dependencies: [15110, 4812, 11006, 1115, 15112, 2021, 2]

// Module 15111 (DeviceInfoSetting)
import intl2 from "intl" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import DeviceUtils from "DeviceUtils" /* 4812 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 15110 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15112 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
