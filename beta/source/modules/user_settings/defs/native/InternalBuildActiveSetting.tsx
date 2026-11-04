// Module ID: 17754
// Function ID: 17755
// Name: InternalBuildActiveSetting
// Dependencies: [16225, 16746, 11540, 17556, 2]

// Module 17754 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16746 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 17556 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16225 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
