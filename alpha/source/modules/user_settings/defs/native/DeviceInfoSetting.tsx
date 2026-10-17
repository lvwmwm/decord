// Module ID: 16617
// Function ID: 16618
// Name: DeviceInfoSetting
// Dependencies: [16616, 5167, 11065, 1128, 16618, 2044, 2]

// Module 16617 (DeviceInfoSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import DeviceUtils from "DeviceUtils" /* 5167 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16616 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16618 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
