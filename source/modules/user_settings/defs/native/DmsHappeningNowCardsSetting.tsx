// Module ID: 14917
// Function ID: 14918
// Name: toggle
// Dependencies: [7884, 11068, 1236, 4166, 2]

// Module 14917 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import createToggle from "createToggle" /* 11068 */;

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
