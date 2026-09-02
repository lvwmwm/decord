// Module ID: 15702
// Function ID: 15703
// Name: pressable
// Dependencies: [7893, 673, 4190, 11288, 1233, 2]

// Module 15702 (pressable)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _modDef4190 from "module_4190" /* 4190 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KGFTww);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    _modDef4190.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KGFTww);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    _modDef4190.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;
