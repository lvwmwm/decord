// Module ID: 16171
// Function ID: 16172
// Name: AppVersionSetting
// Dependencies: [1381, 1126, 16172, 10663, 10172, 2041, 2]

// Module 16171 (AppVersionSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import ClydeIcon from "ClydeIcon" /* 10172 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16172 */;
import react_native from "react-native" /* 1381 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const constants = react_native.getConstants();
let obj = {
  useTitle: function useAppVersionSettingTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.H66MEk);
  },
  parent: null,
  IconComponent: ClydeIcon.ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    let combined;
    const obj = CopyClientInfoSetting;
    const clientInfoString = obj.getClientInfoString(closure_3.ReleaseChannel);
    const getClientInfoString = CopyClientInfoSetting.getClientInfoString;
    CopyClientInfoSetting;
    const obj2 = react_native;
    const clientInfoString1 = getClientInfoString(obj2.getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const obj4 = CopyClientInfoSetting;
    const clientInfoString2 = obj4.getClientInfoString(closure_3.Version);
    if (hasItem) {
      combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: UserSettings.DeveloperMode.useSetting
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppVersionSetting.tsx");

export default createStaticResult;
