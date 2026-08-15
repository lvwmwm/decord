// Module ID: 15000
// Function ID: 15001
// Name: useDataToSupportQuests3PSettingValue
// Dependencies: [8198, 4066, 14998, 14181, 10669, 1236, 14999, 2]

// Module 15000 (useDataToSupportQuests3PSettingValue)
import { MobileUserSettings } from "MobileUserSettings";
import createToggle from "createToggle";
import createToggle from "createToggle";

function useDataToSupportQuests3PSettingValue() {
  const Quests3PDataOptedOut = require(4066) /* explicitContentFromProto */.Quests3PDataOptedOut;
  return !Quests3PDataOptedOut.useSetting();
}
function useDataToSupportQuests3PSettingIsDisabled() {
  let adPersonalizationTogglesDisabled = require(14998) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
  const DropsOptedOut = require(4066) /* explicitContentFromProto */.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const obj = require(14998) /* useAdPersonalizationTogglesDisabled */;
  const isParentallyControlled = require(14181) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = setting;
  }
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = isParentallyControlled;
  }
  return adPersonalizationTogglesDisabled;
}
function onDataToSupportQuests3PSettingValueChange(arg0) {
  const Quests3PDataOptedOut = require(4066) /* explicitContentFromProto */.Quests3PDataOptedOut;
  Quests3PDataOptedOut.updateSetting(!arg0);
}
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.CyLYKZ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return !require(14999) /* apexExperiment */.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled
};
const toggle = createToggle.createToggle(obj);
obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.CyLYKZ);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: require("apexExperiment").useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled
};
const toggle1 = createToggle.createToggle(obj);
const result = require("useAdPersonalizationTogglesDisabled").fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
export const UseDataForQuests3PSponsoredContentSetting = toggle1;
