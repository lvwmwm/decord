// Module ID: 15493
// Function ID: 15494
// Name: SafetyPrivacyPolicySetting
// Dependencies: [7417, 1074, 4525, 11006, 1115, 2]

// Module 15493 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import LinkingDefault from "Linking" /* 4525 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
