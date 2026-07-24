// Module ID: 14299
// Function ID: 109763
// Name: toggle
// Dependencies: [7751, 10127, 1212, 3803, 2]

// Module 14299 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["9ptHSs"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").GifAutoPlay.useSetting,
  onValueChange: require("explicitContentFromProto").GifAutoPlay.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["9ptHSs"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").GifAutoPlay.useSetting,
  onValueChange: require("explicitContentFromProto").GifAutoPlay.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;
