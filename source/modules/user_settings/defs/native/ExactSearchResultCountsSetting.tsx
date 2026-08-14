// Module ID: 14636
// Function ID: 14637
// Name: toggle
// Dependencies: [8148, 1236, 10421, 4034, 2]

// Module 14636 (toggle)
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
