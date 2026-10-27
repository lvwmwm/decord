// Module ID: 16621
// Function ID: 16622
// Name: DeviceInfoSetting
// Dependencies: [16620, 5167, 11084, 1128, 16622, 2044, 2]

// Module 16621 (DeviceInfoSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import DeviceUtils from "DeviceUtils" /* 5167 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16620 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16622 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
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
