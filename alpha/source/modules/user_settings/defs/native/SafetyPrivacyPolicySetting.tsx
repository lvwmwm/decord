// Module ID: 16979
// Function ID: 16980
// Name: SafetyPrivacyPolicySetting
// Dependencies: [8260, 1087, 4901, 11065, 1128, 2]

// Module 16979 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import LinkingDefault from "Linking" /* 4901 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
