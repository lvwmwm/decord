// Module ID: 14806
// Function ID: 14807
// Name: toggle
// Dependencies: [8022, 3974, 10380, 1236, 2]

// Module 14806 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["1CzWUK"]);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jTNPHM);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    const DisableStreamPreviews = require(3974) /* explicitContentFromProto */.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: require("explicitContentFromProto").DisableStreamPreviews.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["1CzWUK"]);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jTNPHM);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    const DisableStreamPreviews = require(3974) /* explicitContentFromProto */.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: require("explicitContentFromProto").DisableStreamPreviews.updateSetting
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;
