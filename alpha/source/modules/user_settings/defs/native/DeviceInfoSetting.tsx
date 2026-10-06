// Module ID: 15400
// Function ID: 15401
// Name: DeviceInfoSetting
// Dependencies: [15399, 4872, 11142, 1126, 15401, 2028, 2]

// Module 15400 (DeviceInfoSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 15399 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15401 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
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
