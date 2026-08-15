// Module ID: 14667
// Function ID: 14668
// Name: toggle
// Dependencies: [8198, 10669, 1236, 4066, 2]

// Module 14667 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.cSb1ub);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useValue: require("explicitContentFromProto").HappeningNowCardsDisabled.useSetting,
  onValueChange: require("explicitContentFromProto").HappeningNowCardsDisabled.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.cSb1ub);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useValue: require("explicitContentFromProto").HappeningNowCardsDisabled.useSetting,
  onValueChange: require("explicitContentFromProto").HappeningNowCardsDisabled.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;
