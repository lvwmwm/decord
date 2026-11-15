// Module ID: 18117
// Function ID: 18118
// Name: InternalBuildActiveSetting
// Dependencies: [16568, 17096, 11716, 17919, 2]

// Module 18117 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 17096 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 17919 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16568 */;
import SettingBuilders from "SettingBuilders" /* 11716 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    const obj = useIsStaffOrDeveloperSettingPredicate;
    const tmp = MobileNativeUpdateStore.hasUpdatesConfigured && obj.useStaffOrDeveloperSettingPredicate();
    return tmp;
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createStaticResult;
