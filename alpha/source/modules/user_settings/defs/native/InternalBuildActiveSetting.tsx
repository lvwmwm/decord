// Module ID: 16033
// Function ID: 16034
// Name: InternalBuildActiveSetting
// Dependencies: [14571, 558, 15039, 10629, 15776, 2]

// Module 16033 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15039 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15776 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14571 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
