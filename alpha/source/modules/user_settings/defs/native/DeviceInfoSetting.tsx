// Module ID: 15662
// Function ID: 15663
// Name: DeviceInfoSetting
// Dependencies: [15661, 5066, 11262, 1126, 15663, 2040, 2]

// Module 15662 (DeviceInfoSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import DeviceUtils from "DeviceUtils" /* 5066 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 15661 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15663 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
