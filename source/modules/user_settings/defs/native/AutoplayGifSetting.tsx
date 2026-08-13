// Module ID: 14680
// Function ID: 14681
// Name: toggle
// Dependencies: [8127, 10407, 1236, 4034, 2]

// Module 14680 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["9ptHSs"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").GifAutoPlay.useSetting,
  onValueChange: require("explicitContentFromProto").GifAutoPlay.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["9ptHSs"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").GifAutoPlay.useSetting,
  onValueChange: require("explicitContentFromProto").GifAutoPlay.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;
