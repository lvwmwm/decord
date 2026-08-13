// Module ID: 14794
// Function ID: 14795
// Name: toggle
// Dependencies: [8127, 10407, 1236, 4034, 2]

// Module 14794 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ObIb1Q);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("explicitContentFromProto").DeveloperMode.useSetting,
  onValueChange: require("explicitContentFromProto").DeveloperMode.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ObIb1Q);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("explicitContentFromProto").DeveloperMode.useSetting,
  onValueChange: require("explicitContentFromProto").DeveloperMode.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DeveloperModeSetting.tsx");

export default toggle;
