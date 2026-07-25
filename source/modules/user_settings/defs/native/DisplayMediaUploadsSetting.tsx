// Module ID: 14354
// Function ID: 109963
// Name: toggle
// Dependencies: [7697, 10059, 1212, 3804, 2]

// Module 14354 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.VP11No);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineAttachmentMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineAttachmentMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.VP11No);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineAttachmentMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineAttachmentMedia.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;
