// Module ID: 16904
// Function ID: 16905
// Name: SafetyTermsOfServiceSetting
// Dependencies: [8213, 1087, 4865, 11006, 1128, 2]

// Module 16904 (SafetyTermsOfServiceSetting)
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
