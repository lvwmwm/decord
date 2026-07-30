// Module ID: 14649
// Function ID: 14650
// Name: toggle
// Dependencies: [7753, 3862, 10116, 1236, 2]

// Module 14649 (toggle)
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
    const DisableStreamPreviews = require(3862) /* explicitContentFromProto */.DisableStreamPreviews;
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
    const DisableStreamPreviews = require(3862) /* explicitContentFromProto */.DisableStreamPreviews;
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
