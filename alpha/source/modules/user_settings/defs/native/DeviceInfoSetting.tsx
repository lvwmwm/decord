// Module ID: 16745
// Function ID: 16746
// Name: DeviceInfoSetting
// Dependencies: [16744, 4923, 11155, 1128, 16746, 4797, 2]

// Module 16745 (DeviceInfoSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import DeviceUtils from "DeviceUtils" /* 4923 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16744 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16746 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
