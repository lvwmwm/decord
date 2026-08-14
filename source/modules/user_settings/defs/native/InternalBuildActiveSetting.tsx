// Module ID: 14848
// Function ID: 14849
// Dependencies: [13738, 14167, 10421, 14827, 2]

// Module 14848
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
    const obj = require(14167) /* useStaffOrDeveloperSettingPredicate */;
    return hasUpdatesConfigured.hasUpdatesConfigured && require(14167) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  }
};
createToggle = createToggle.createStatic(createToggle);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createToggle;
