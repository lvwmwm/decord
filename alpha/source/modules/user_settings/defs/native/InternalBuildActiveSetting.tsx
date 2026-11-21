// Module ID: 17189
// Function ID: 17190
// Name: InternalBuildActiveSetting
// Dependencies: [15635, 16144, 11937, 16978, 2]

// Module 17189 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16144 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16978 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15635 */;
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
