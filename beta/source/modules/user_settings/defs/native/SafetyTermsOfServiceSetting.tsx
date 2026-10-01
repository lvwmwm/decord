// Module ID: 15492
// Function ID: 15493
// Name: SafetyTermsOfServiceSetting
// Dependencies: [7417, 1074, 4525, 11006, 1115, 2]

// Module 15492 (SafetyTermsOfServiceSetting)
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
