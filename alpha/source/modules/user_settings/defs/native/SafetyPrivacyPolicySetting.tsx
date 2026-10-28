// Module ID: 17553
// Function ID: 17554
// Name: SafetyPrivacyPolicySetting
// Dependencies: [8365, 1084, 5696, 11248, 1125, 2]

// Module 17553 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import LinkingDefault from "Linking" /* 5696 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const MarketingURLs = Constants.MarketingURLs;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.KGFTww);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    const obj = LinkingDefault;
    obj.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;
