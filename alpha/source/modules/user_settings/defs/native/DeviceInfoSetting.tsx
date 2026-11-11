// Module ID: 18075
// Function ID: 18076
// Name: DeviceInfoSetting
// Dependencies: [18074, 5200, 12317, 1113, 18076, 5068, 2]

// Module 18075 (DeviceInfoSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5068 */;
import DeviceUtils from "DeviceUtils" /* 5200 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 18074 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 18076 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
