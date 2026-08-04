// Module ID: 14546
// Function ID: 14547
// Name: toggle
// Dependencies: [7892, 10361, 1236, 3958, 2]

// Module 14546 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["5bK9vw"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").RenderEmbeds.useSetting,
  onValueChange: require("explicitContentFromProto").RenderEmbeds.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["5bK9vw"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").RenderEmbeds.useSetting,
  onValueChange: require("explicitContentFromProto").RenderEmbeds.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx");

export default toggle;
