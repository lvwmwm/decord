// Module ID: 14425
// Function ID: 110280
// Name: toggle
// Dependencies: [7697, 10059, 1212, 3804, 2]

// Module 14425 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ObIb1Q);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("explicitContentFromProto").DeveloperMode.useSetting,
  onValueChange: require("explicitContentFromProto").DeveloperMode.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ObIb1Q);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("explicitContentFromProto").DeveloperMode.useSetting,
  onValueChange: require("explicitContentFromProto").DeveloperMode.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DeveloperModeSetting.tsx");

export default toggle;
