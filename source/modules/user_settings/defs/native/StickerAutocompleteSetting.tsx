// Module ID: 14352
// Function ID: 109882
// Name: toggle
// Dependencies: [7751, 10127, 1212, 3803, 14345, 2]

// Module 14352 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["29xPVZ"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").IncludeStickersInAutocomplete.useSetting,
  onValueChange: require("trackSettingsUpdated").setStickerAutocomplete
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["29xPVZ"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").IncludeStickersInAutocomplete.useSetting,
  onValueChange: require("trackSettingsUpdated").setStickerAutocomplete
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/StickerAutocompleteSetting.tsx");

export default toggle;
