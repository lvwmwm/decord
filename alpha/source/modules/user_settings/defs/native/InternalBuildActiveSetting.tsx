// Module ID: 18005
// Function ID: 18006
// Name: InternalBuildActiveSetting
// Dependencies: [16470, 16993, 11729, 17807, 2]

// Module 18005 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16993 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 17807 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16470 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
