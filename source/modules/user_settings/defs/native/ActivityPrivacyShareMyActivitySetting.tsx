// Module ID: 14691
// Function ID: 14692
// Name: toggle
// Dependencies: [7753, 10116, 1236, 2357, 3862, 2]

// Module 14691 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2357).WhdCGP);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2357).UQ9RHJ);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").ShowCurrentGame.useSetting,
  onValueChange: require("explicitContentFromProto").ShowCurrentGame.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2357).WhdCGP);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2357).UQ9RHJ);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").ShowCurrentGame.useSetting,
  onValueChange: require("explicitContentFromProto").ShowCurrentGame.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
