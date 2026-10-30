// Module ID: 17861
// Function ID: 17862
// Name: SafetyTermsOfServiceSetting
// Dependencies: [8424, 1072, 5704, 11505, 1114, 2]

// Module 17861 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import LinkingDefault from "Linking" /* 5704 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
