// Module ID: 14681
// Function ID: 14682
// Name: toggle
// Dependencies: [9778, 8082, 10447, 1236, 1605, 2]

// Module 14681 (toggle)
import isInAppMessageSoundsEnabled from "isInAppMessageSoundsEnabled";
import createToggle from "createToggle";

let setInAppMessageSoundsEnabled;
let useInAppMessageSoundsEnabled;
({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = isInAppMessageSoundsEnabled);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jLCRyj);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["wls+Ax"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: require("isMetaQuest").isMetaQuest
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jLCRyj);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["wls+Ax"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: require("isMetaQuest").isMetaQuest
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;
