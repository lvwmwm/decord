// Module ID: 14516
// Function ID: 14517
// Name: toggle
// Dependencies: [7880, 10272, 1236, 3928, 14509, 2]

// Module 14516 (toggle)
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
