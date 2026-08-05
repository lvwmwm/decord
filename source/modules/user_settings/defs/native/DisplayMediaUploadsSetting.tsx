// Module ID: 14521
// Function ID: 14522
// Name: toggle
// Dependencies: [7864, 10333, 1236, 3928, 2]

// Module 14521 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.VP11No);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineAttachmentMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineAttachmentMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.VP11No);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineAttachmentMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineAttachmentMedia.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;
