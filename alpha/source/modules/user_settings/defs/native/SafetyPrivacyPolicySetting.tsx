// Module ID: 16905
// Function ID: 16906
// Name: SafetyPrivacyPolicySetting
// Dependencies: [8213, 1087, 4865, 11006, 1128, 2]

// Module 16905 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import LinkingDefault from "Linking" /* 4865 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
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
