// Module ID: 14769
// Function ID: 14770
// Name: toggle
// Dependencies: [8198, 10669, 1236, 4066, 2]

// Module 14769 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.VP11No);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: require("explicitContentFromProto").InlineAttachmentMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineAttachmentMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.VP11No);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: require("explicitContentFromProto").InlineAttachmentMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineAttachmentMedia.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;
