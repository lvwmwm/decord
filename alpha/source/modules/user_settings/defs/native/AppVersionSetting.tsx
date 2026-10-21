// Module ID: 16743
// Function ID: 16744
// Name: AppVersionSetting
// Dependencies: [1383, 1128, 16744, 11155, 10529, 4797, 2]

// Module 16743 (AppVersionSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import ClydeIcon from "ClydeIcon" /* 10529 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16744 */;
import react_native from "react-native" /* 1383 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
