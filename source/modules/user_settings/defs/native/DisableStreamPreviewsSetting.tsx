// Module ID: 14574
// Function ID: 111176
// Name: toggle
// Dependencies: [7751, 3803, 10127, 1212, 2]

// Module 14574 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1CzWUK"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jTNPHM);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    const DisableStreamPreviews = require(3803) /* explicitContentFromProto */.DisableStreamPreviews;
    const setting = DisableStreamPreviews.useSetting();
    return null != setting && setting;
  },
  onValueChange: require("explicitContentFromProto").DisableStreamPreviews.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1CzWUK"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jTNPHM);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    const DisableStreamPreviews = require(3803) /* explicitContentFromProto */.DisableStreamPreviews;
    const setting = DisableStreamPreviews.useSetting();
    return null != setting && setting;
  },
  onValueChange: require("explicitContentFromProto").DisableStreamPreviews.updateSetting
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;
