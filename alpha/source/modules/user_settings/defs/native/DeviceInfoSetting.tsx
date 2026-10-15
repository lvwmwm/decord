// Module ID: 16506
// Function ID: 16507
// Name: DeviceInfoSetting
// Dependencies: [16505, 5127, 10991, 1126, 16507, 2041, 2]

// Module 16506 (DeviceInfoSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import DeviceUtils from "DeviceUtils" /* 5127 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16505 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16507 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
