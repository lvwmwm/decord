// Module ID: 14515
// Function ID: 14516
// Name: toggle
// Dependencies: [8005, 10364, 1236, 3957, 2]

// Module 14515 (toggle)
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
