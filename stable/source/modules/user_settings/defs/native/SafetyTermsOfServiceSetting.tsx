// Module ID: 15480
// Function ID: 15481
// Name: SafetyTermsOfServiceSetting
// Dependencies: [7421, 1086, 4528, 10874, 1127, 2]

// Module 15480 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import LinkingDefault from "Linking" /* 4528 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
