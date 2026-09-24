// Module ID: 16287
// Function ID: 16288
// Name: SafetyPrivacyPolicySetting
// Dependencies: [8323, 1074, 4520, 11811, 1115, 2]

// Module 16287 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import LinkingDefault from "Linking" /* 4520 */;
import SettingsConstants from "SettingsConstants" /* 8323 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
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
