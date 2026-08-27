// Module ID: 14865
// Function ID: 14866
// Name: toggle
// Dependencies: [7816, 10988, 1236, 4134, 2]

// Module 14865 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

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
