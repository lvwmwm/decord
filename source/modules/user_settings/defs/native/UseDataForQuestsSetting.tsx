// Module ID: 14627
// Function ID: 111468
// Name: toggle
// Dependencies: [7733, 14628, 13834, 3838, 10099, 1212, 2]

// Module 14627 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.sJYh5t);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuestsSettingValue() {
    const DropsOptedOut = require(3838) /* explicitContentFromProto */.DropsOptedOut;
    return !DropsOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const DropsOptedOut = require(3838) /* explicitContentFromProto */.DropsOptedOut;
    DropsOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    let adPersonalizationTogglesDisabled = require(14628) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const obj = require(14628) /* useAdPersonalizationTogglesDisabled */;
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
    }
    return adPersonalizationTogglesDisabled;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.sJYh5t);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuestsSettingValue() {
    const DropsOptedOut = require(3838) /* explicitContentFromProto */.DropsOptedOut;
    return !DropsOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const DropsOptedOut = require(3838) /* explicitContentFromProto */.DropsOptedOut;
    DropsOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    let adPersonalizationTogglesDisabled = require(14628) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const obj = require(14628) /* useAdPersonalizationTogglesDisabled */;
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
    }
    return adPersonalizationTogglesDisabled;
  }
};
const result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
