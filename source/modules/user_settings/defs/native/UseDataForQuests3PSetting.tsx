// Module ID: 14629
// Function ID: 111476
// Name: toggle
// Dependencies: [7733, 3838, 14628, 13834, 10099, 1212, 2]

// Module 14629 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const Quests3PDataOptedOut = require(3838) /* explicitContentFromProto */.Quests3PDataOptedOut;
    return !Quests3PDataOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const Quests3PDataOptedOut = require(3838) /* explicitContentFromProto */.Quests3PDataOptedOut;
    Quests3PDataOptedOut.updateSetting(!arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let adPersonalizationTogglesDisabled = require(14628) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const DropsOptedOut = require(3838) /* explicitContentFromProto */.DropsOptedOut;
    const setting = DropsOptedOut.useSetting();
    const obj = require(14628) /* useAdPersonalizationTogglesDisabled */;
    const isParentallyControlled = require(13834) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
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
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const Quests3PDataOptedOut = require(3838) /* explicitContentFromProto */.Quests3PDataOptedOut;
    return !Quests3PDataOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const Quests3PDataOptedOut = require(3838) /* explicitContentFromProto */.Quests3PDataOptedOut;
    Quests3PDataOptedOut.updateSetting(!arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let adPersonalizationTogglesDisabled = require(14628) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const DropsOptedOut = require(3838) /* explicitContentFromProto */.DropsOptedOut;
    const setting = DropsOptedOut.useSetting();
    const obj = require(14628) /* useAdPersonalizationTogglesDisabled */;
    const isParentallyControlled = require(13834) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
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
