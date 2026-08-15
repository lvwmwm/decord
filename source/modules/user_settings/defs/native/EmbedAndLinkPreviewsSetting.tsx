// Module ID: 14775
// Function ID: 14776
// Name: toggle
// Dependencies: [8198, 10669, 1236, 4066, 2]

// Module 14775 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["5bK9vw"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: require("explicitContentFromProto").RenderEmbeds.useSetting,
  onValueChange: require("explicitContentFromProto").RenderEmbeds.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["5bK9vw"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: require("explicitContentFromProto").RenderEmbeds.useSetting,
  onValueChange: require("explicitContentFromProto").RenderEmbeds.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx");

export default toggle;
