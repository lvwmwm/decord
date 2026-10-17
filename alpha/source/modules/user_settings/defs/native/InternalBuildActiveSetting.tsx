// Module ID: 16816
// Function ID: 16817
// Name: InternalBuildActiveSetting
// Dependencies: [15417, 558, 15884, 11065, 16618, 2]

// Module 16816 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15884 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16618 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15417 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
