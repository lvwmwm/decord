// Module ID: 16196
// Function ID: 16197
// Name: SafetyTermsOfServiceSetting
// Dependencies: [7974, 1085, 4765, 10629, 1126, 2]

// Module 16196 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import LinkingDefault from "Linking" /* 4765 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const MarketingURLs = Constants.MarketingURLs;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.lfC1KR);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    const obj = LinkingDefault;
    obj.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;
