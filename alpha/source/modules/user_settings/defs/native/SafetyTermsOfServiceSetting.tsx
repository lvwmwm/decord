// Module ID: 17245
// Function ID: 17246
// Name: SafetyTermsOfServiceSetting
// Dependencies: [8592, 1071, 5473, 11817, 1112, 2]

// Module 17245 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import LinkingDefault from "Linking" /* 5473 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
