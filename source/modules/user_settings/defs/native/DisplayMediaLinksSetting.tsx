// Module ID: 14416
// Function ID: 14417
// Name: toggle
// Dependencies: [7753, 10116, 1236, 3862, 2]

// Module 14416 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.U47N1p);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineEmbedMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineEmbedMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.U47N1p);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineEmbedMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineEmbedMedia.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaLinksSetting.tsx");

export default toggle;
