// Module ID: 14557
// Function ID: 14558
// Name: toggle
// Dependencies: [8082, 10447, 1236, 3974, 2]

// Module 14557 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.cSb1ub);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").HappeningNowCardsDisabled.useSetting,
  onValueChange: require("explicitContentFromProto").HappeningNowCardsDisabled.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.cSb1ub);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").HappeningNowCardsDisabled.useSetting,
  onValueChange: require("explicitContentFromProto").HappeningNowCardsDisabled.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;
