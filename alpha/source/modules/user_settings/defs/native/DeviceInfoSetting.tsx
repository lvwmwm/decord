// Module ID: 16836
// Function ID: 16837
// Name: DeviceInfoSetting
// Dependencies: [16835, 4926, 11181, 1128, 16837, 4797, 2]

// Module 16836 (DeviceInfoSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import DeviceUtils from "DeviceUtils" /* 4926 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16835 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16837 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
