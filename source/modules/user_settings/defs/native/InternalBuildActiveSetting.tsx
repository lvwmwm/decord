// Module ID: 14537
// Function ID: 14538
// Dependencies: [13454, 13868, 10116, 14516, 2]

// Module 14537
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
    const obj = require(13868) /* useStaffOrDeveloperSettingPredicate */;
    return hasUpdatesConfigured.hasUpdatesConfigured && require(13868) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  }
};
createToggle = createToggle.createStatic(createToggle);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createToggle;
