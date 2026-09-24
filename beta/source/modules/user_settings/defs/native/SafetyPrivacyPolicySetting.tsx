// Module ID: 16200
// Function ID: 16201
// Name: SafetyPrivacyPolicySetting
// Dependencies: [8270, 1078, 4487, 11630, 1119, 2]

// Module 16200 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import LinkingDefault from "Linking" /* 4487 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
