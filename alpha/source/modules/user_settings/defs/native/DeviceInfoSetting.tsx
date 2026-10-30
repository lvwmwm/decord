// Module ID: 17482
// Function ID: 17483
// Name: DeviceInfoSetting
// Dependencies: [17481, 4966, 11505, 1114, 17483, 4834, 2]

// Module 17482 (DeviceInfoSetting)
import intl2 from "intl" /* 1114 */;
import UserSettings from "UserSettings" /* 4834 */;
import DeviceUtils from "DeviceUtils" /* 4966 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 17481 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 17483 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
