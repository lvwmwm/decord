// Module ID: 17079
// Function ID: 17080
// Name: InternalBuildActiveSetting
// Dependencies: [15617, 558, 16105, 11204, 16881, 2]

// Module 17079 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16105 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16881 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15617 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasCheckNativeUpdateSetting() {
  const obj = useIsStaffOrDeveloperSettingPredicate;
  const tmp = MobileNativeUpdateStore.hasUpdatesConfigured && obj.useStaffOrDeveloperSettingPredicate();
  return tmp;
}) : (function useHasCheckNativeUpdateSetting() {
  const obj = useIsStaffOrDeveloperSettingPredicate;
  const tmp = MobileNativeUpdateStore.hasUpdatesConfigured && obj.useStaffOrDeveloperSettingPredicate();
  return tmp;
});
let obj = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: tmp2
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createStaticResult;
