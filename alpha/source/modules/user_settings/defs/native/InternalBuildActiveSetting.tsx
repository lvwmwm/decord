// Module ID: 17035
// Function ID: 17036
// Name: InternalBuildActiveSetting
// Dependencies: [15596, 558, 16072, 11181, 16837, 2]

// Module 17035 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16072 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16837 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15596 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
