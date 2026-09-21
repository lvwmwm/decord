// Module ID: 16201
// Function ID: 16202
// Name: SafetyPrivacyPolicySetting
// Dependencies: [8233, 1074, 4451, 11725, 1115, 2]

// Module 16201 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import LinkingDefault from "Linking" /* 4451 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.KGFTww);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    LinkingDefault.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;
