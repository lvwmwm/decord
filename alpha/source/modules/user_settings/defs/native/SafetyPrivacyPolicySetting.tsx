// Module ID: 17585
// Function ID: 17586
// Name: SafetyPrivacyPolicySetting
// Dependencies: [9556, 1071, 5722, 11970, 1112, 2]

// Module 17585 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import LinkingDefault from "Linking" /* 5722 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
