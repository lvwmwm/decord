// Module ID: 16066
// Function ID: 16067
// Name: InternalBuildActiveSetting
// Dependencies: [14680, 15127, 11729, 15848, 2]

// Module 16066 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15127 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14680 */;

require = fn;
const SettingBuilders = fn(11729);
const obj2 = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15848).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15848).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
});
