// Module ID: 17203
// Function ID: 17204
// Name: InternalBuildActiveSetting
// Dependencies: [15647, 16156, 11942, 16990, 2]

// Module 17203 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16156 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16990 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15647 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
