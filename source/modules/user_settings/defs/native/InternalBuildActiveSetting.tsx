// Module ID: 14776
// Function ID: 14777
// Dependencies: [13677, 14097, 10452, 14755, 2]

// Module 14776
import checkForNewerBuild from "checkForNewerBuild";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    const obj = require(14097) /* useStaffOrDeveloperSettingPredicate */;
    return hasUpdatesConfigured.hasUpdatesConfigured && require(14097) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  }
};
createToggle = createToggle.createStatic(createToggle);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createToggle;
