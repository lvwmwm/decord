// Module ID: 14623
// Function ID: 14624
// Name: toggle
// Dependencies: [8123, 1236, 10493, 4034, 2]

// Module 14623 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.aP91Ud);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").SearchResultExactCountEnabled.useSetting,
  onValueChange: require("explicitContentFromProto").SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.qx4cha);
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.aP91Ud);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").SearchResultExactCountEnabled.useSetting,
  onValueChange: require("explicitContentFromProto").SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.qx4cha);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ExactSearchResultCountsSetting.tsx");

export default toggle;
