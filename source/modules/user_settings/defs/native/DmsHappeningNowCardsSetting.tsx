// Module ID: 14884
// Function ID: 14885
// Name: toggle
// Dependencies: [7852, 11031, 1236, 4136, 2]

// Module 14884 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import MobileUserSettings from "MobileUserSettings" /* 7852 */;
import createToggle from "createToggle" /* 11031 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cSb1ub);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.HappeningNowCardsDisabled.useSetting,
  onValueChange: explicitContentFromProto.HappeningNowCardsDisabled.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cSb1ub);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.HappeningNowCardsDisabled.useSetting,
  onValueChange: explicitContentFromProto.HappeningNowCardsDisabled.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;
