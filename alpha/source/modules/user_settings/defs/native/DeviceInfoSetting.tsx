// Module ID: 16854
// Function ID: 16855
// Name: DeviceInfoSetting
// Dependencies: [16853, 4751, 11817, 1112, 16855, 4619, 2]

// Module 16854 (DeviceInfoSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4619 */;
import DeviceUtils from "DeviceUtils" /* 4751 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16853 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16855 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
