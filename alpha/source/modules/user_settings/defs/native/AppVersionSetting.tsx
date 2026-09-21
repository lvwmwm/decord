// Module ID: 15833
// Function ID: 15834
// Name: AppVersionSetting
// Dependencies: [1363, 1115, 15834, 11725, 11080, 2019, 2]

// Module 15833 (AppVersionSetting)
import util from "util" /* 1115 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 15834 */;
import ClientInfoUtils from "ClientInfoUtils" /* 1363 */;

require = fn;
const constants = ClientInfoUtils.getConstants();
const SettingBuilders = fn(11725);
let obj = {
  useTitle: function useAppVersionSettingTitle() {
    const intl = util.intl;
    return intl.string(util.t.H66MEk);
  },
  parent: null,
  IconComponent: fn(11080).ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = CopyClientInfoSetting.getClientInfoString(closure_3.ReleaseChannel);
    const obj2 = CopyClientInfoSetting;
    const clientInfoString1 = obj2.getClientInfoString(ClientInfoUtils.getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const clientInfoString2 = CopyClientInfoSetting.getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: fn(2019).DeveloperMode.useSetting
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppVersionSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle: function useAppVersionSettingTitle() {
    const intl = util.intl;
    return intl.string(util.t.H66MEk);
  },
  parent: null,
  IconComponent: fn(11080).ClydeIcon,
  useTrailing: function useAppVersionSettingTrailing() {
    const clientInfoString = CopyClientInfoSetting.getClientInfoString(closure_3.ReleaseChannel);
    const obj2 = CopyClientInfoSetting;
    const clientInfoString1 = obj2.getClientInfoString(ClientInfoUtils.getBuildNumberLabel());
    const hasItem = clientInfoString1.includes("dev");
    const clientInfoString2 = CopyClientInfoSetting.getClientInfoString(closure_3.Version);
    if (hasItem) {
      let combined = concat(clientInfoString2, " (", clientInfoString, ")");
    } else {
      combined = concat(clientInfoString2, " (", clientInfoString1, ") - ", clientInfoString);
    }
    return combined;
  },
  usePredicate: fn(2019).DeveloperMode.useSetting
});
