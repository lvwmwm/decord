// Module ID: 18288
// Function ID: 18289
// Name: SafetyPrivacyPolicySetting
// Dependencies: [8536, 1072, 5866, 11717, 1113, 2]

// Module 18288 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import LinkingDefault from "Linking" /* 5866 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
