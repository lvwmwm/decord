// Module ID: 14959
// Function ID: 14960
// Name: toggle
// Dependencies: [8148, 4034, 14958, 14149, 10421, 1236, 2]

// Module 14959 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const Quests3PDataOptedOut = require(4034) /* explicitContentFromProto */.Quests3PDataOptedOut;
    return !Quests3PDataOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const Quests3PDataOptedOut = require(4034) /* explicitContentFromProto */.Quests3PDataOptedOut;
    Quests3PDataOptedOut.updateSetting(!arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let adPersonalizationTogglesDisabled = require(14958) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const DropsOptedOut = require(4034) /* explicitContentFromProto */.DropsOptedOut;
    const setting = DropsOptedOut.useSetting();
    const obj = require(14958) /* useAdPersonalizationTogglesDisabled */;
    const isParentallyControlled = require(14149) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = setting;
    }
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = isParentallyControlled;
    }
    return adPersonalizationTogglesDisabled;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const Quests3PDataOptedOut = require(4034) /* explicitContentFromProto */.Quests3PDataOptedOut;
    return !Quests3PDataOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const Quests3PDataOptedOut = require(4034) /* explicitContentFromProto */.Quests3PDataOptedOut;
    Quests3PDataOptedOut.updateSetting(!arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let adPersonalizationTogglesDisabled = require(14958) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const DropsOptedOut = require(4034) /* explicitContentFromProto */.DropsOptedOut;
    const setting = DropsOptedOut.useSetting();
    const obj = require(14958) /* useAdPersonalizationTogglesDisabled */;
    const isParentallyControlled = require(14149) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = setting;
    }
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = isParentallyControlled;
    }
    return adPersonalizationTogglesDisabled;
  }
};
const result = require("useAdPersonalizationTogglesDisabled").fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
