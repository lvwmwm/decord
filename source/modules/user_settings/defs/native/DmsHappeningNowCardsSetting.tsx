// Module ID: 14271
// Function ID: 109641
// Name: toggle
// Dependencies: [7697, 10059, 1212, 3804, 2]

// Module 14271 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.cSb1ub);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").HappeningNowCardsDisabled.useSetting,
  onValueChange: require("explicitContentFromProto").HappeningNowCardsDisabled.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.cSb1ub);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").HappeningNowCardsDisabled.useSetting,
  onValueChange: require("explicitContentFromProto").HappeningNowCardsDisabled.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;
