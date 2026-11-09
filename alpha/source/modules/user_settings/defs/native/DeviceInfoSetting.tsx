// Module ID: 17882
// Function ID: 17883
// Name: DeviceInfoSetting
// Dependencies: [17881, 5097, 11685, 1113, 17883, 4965, 2]

// Module 17882 (DeviceInfoSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4965 */;
import DeviceUtils from "DeviceUtils" /* 5097 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 17881 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 17883 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
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
