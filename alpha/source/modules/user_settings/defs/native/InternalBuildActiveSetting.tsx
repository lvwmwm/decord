// Module ID: 16705
// Function ID: 16706
// Name: InternalBuildActiveSetting
// Dependencies: [15303, 558, 15775, 10991, 16507, 2]

// Module 16705 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15775 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16507 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15303 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
