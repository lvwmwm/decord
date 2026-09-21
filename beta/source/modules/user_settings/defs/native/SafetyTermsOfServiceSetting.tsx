// Module ID: 16189
// Function ID: 16190
// Name: SafetyTermsOfServiceSetting
// Dependencies: [8238, 1078, 4455, 11594, 1119, 2]

// Module 16189 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import LinkingDefault from "Linking" /* 4455 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
