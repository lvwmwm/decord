// Module ID: 14555
// Function ID: 14556
// Name: toggle
// Dependencies: [9664, 7864, 10333, 1236, 1577, 2]

// Module 14555 (toggle)
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
