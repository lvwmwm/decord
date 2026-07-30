// Module ID: 14646
// Function ID: 14647
// Name: toggle
// Dependencies: [7753, 14647, 13850, 3862, 10116, 1236, 2]

// Module 14646 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.sJYh5t);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuestsSettingValue() {
    const DropsOptedOut = require(3862) /* explicitContentFromProto */.DropsOptedOut;
    return !DropsOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const DropsOptedOut = require(3862) /* explicitContentFromProto */.DropsOptedOut;
    DropsOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    let adPersonalizationTogglesDisabled = require(14647) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const obj = require(14647) /* useAdPersonalizationTogglesDisabled */;
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
    }
    return adPersonalizationTogglesDisabled;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.sJYh5t);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuestsSettingValue() {
    const DropsOptedOut = require(3862) /* explicitContentFromProto */.DropsOptedOut;
    return !DropsOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const DropsOptedOut = require(3862) /* explicitContentFromProto */.DropsOptedOut;
    DropsOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    let adPersonalizationTogglesDisabled = require(14647) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const obj = require(14647) /* useAdPersonalizationTogglesDisabled */;
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
    }
    return adPersonalizationTogglesDisabled;
  }
};
const result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
