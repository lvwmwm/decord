// Module ID: 15822
// Function ID: 15823
// Name: SafetyPrivacyPolicySetting
// Dependencies: [7645, 1085, 4571, 11142, 1126, 2]

// Module 15822 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import LinkingDefault from "Linking" /* 4571 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
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
