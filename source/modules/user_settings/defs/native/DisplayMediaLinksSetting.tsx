// Module ID: 14558
// Function ID: 14559
// Name: toggle
// Dependencies: [8005, 10364, 1236, 3957, 2]

// Module 14558 (toggle)
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
