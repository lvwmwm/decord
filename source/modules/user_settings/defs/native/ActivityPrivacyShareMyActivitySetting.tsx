// Module ID: 14815
// Function ID: 14816
// Name: toggle
// Dependencies: [7892, 10361, 1236, 2419, 3958, 2]

// Module 14815 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2419).WhdCGP);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2419).UQ9RHJ);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").ShowCurrentGame.useSetting,
  onValueChange: require("explicitContentFromProto").ShowCurrentGame.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2419).WhdCGP);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2419).UQ9RHJ);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").ShowCurrentGame.useSetting,
  onValueChange: require("explicitContentFromProto").ShowCurrentGame.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
