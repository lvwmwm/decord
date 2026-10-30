// Module ID: 17697
// Function ID: 17698
// Name: InternalBuildActiveSetting
// Dependencies: [16180, 16691, 11505, 17483, 2]

// Module 17697 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16691 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 17483 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16180 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
