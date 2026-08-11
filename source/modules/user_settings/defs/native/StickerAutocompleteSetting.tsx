// Module ID: 14666
// Function ID: 14667
// Name: toggle
// Dependencies: [8084, 10452, 1236, 3993, 14659, 2]

// Module 14666 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["29xPVZ"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").IncludeStickersInAutocomplete.useSetting,
  onValueChange: require("UserSettingsText").setStickerAutocomplete
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["29xPVZ"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").IncludeStickersInAutocomplete.useSetting,
  onValueChange: require("UserSettingsText").setStickerAutocomplete
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/StickerAutocompleteSetting.tsx");

export default toggle;
