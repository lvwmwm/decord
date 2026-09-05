// Module ID: 15740
// Function ID: 15741
// Dependencies: [14394, 14842, 11468, 15559, 2]

// Module 15740
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14842 */;
import closure_2 from "checkForNewerBuild" /* 14394 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
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
    const obj = useStaffOrDeveloperSettingPredicate;
    return hasUpdatesConfigured.hasUpdatesConfigured && useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
};
createToggle = createToggle.createStatic(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createToggle;
