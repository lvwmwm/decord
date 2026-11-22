// Module ID: 17189
// Function ID: 17190
// Name: InternalBuildActiveSetting
// Dependencies: [15633, 16142, 11937, 16976, 2]

// Module 17189 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16142 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16976 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15633 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
