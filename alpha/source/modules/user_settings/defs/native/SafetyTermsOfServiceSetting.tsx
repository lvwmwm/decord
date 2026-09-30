// Module ID: 15700
// Function ID: 15701
// Name: SafetyTermsOfServiceSetting
// Dependencies: [7612, 1074, 4555, 11211, 1115, 2]

// Module 15700 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import LinkingDefault from "Linking" /* 4555 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.lfC1KR);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    LinkingDefault.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;
