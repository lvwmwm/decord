// Module ID: 14715
// Function ID: 14716
// Name: toggle
// Dependencies: [8082, 10446, 1236, 3974, 2]

// Module 14715 (toggle)
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
