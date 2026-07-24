// Module ID: 14460
// Function ID: 110456
// Dependencies: [13380, 13796, 10127, 14439, 2]

// Module 14460
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
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
    const obj = require(13796) /* useStaffOrDeveloperSettingPredicate */;
    return hasUpdatesConfigured.hasUpdatesConfigured && require(13796) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  }
};
createToggle = createToggle.createStatic(createToggle);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createToggle;
