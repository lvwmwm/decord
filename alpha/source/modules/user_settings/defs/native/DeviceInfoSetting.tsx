// Module ID: 17189
// Function ID: 17190
// Name: DeviceInfoSetting
// Dependencies: [17188, 4961, 11248, 1125, 17190, 4832, 2]

// Module 17189 (DeviceInfoSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4832 */;
import DeviceUtils from "DeviceUtils" /* 4961 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 17188 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 17190 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
