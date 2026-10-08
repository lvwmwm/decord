// Module ID: 16081
// Function ID: 16082
// Name: SafetyPrivacyPolicySetting
// Dependencies: [7966, 1085, 4763, 11262, 1126, 2]

// Module 16081 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import LinkingDefault from "Linking" /* 4763 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
