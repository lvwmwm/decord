// Module ID: 14725
// Function ID: 14726
// Name: toggle
// Dependencies: [8198, 10669, 1236, 4066, 2]

// Module 14725 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["9ptHSs"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").GifAutoPlay.useSetting,
  onValueChange: require("explicitContentFromProto").GifAutoPlay.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["9ptHSs"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").GifAutoPlay.useSetting,
  onValueChange: require("explicitContentFromProto").GifAutoPlay.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;
