// Module ID: 16959
// Function ID: 16960
// Name: DeviceInfoSetting
// Dependencies: [16958, 4929, 11212, 1125, 16960, 4800, 2]

// Module 16959 (DeviceInfoSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4800 */;
import DeviceUtils from "DeviceUtils" /* 4929 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16958 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16960 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
