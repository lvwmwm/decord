// Module ID: 14997
// Function ID: 14998
// Name: useIsDisabled
// Dependencies: [8198, 14998, 14181, 4066, 10669, 1236, 14999, 2]

// Module 14997 (useIsDisabled)
import { MobileUserSettings } from "MobileUserSettings";
import createToggle from "createToggle";
import createToggle from "createToggle";

function useIsDisabled() {
  let adPersonalizationTogglesDisabled = require(14998) /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
  const obj = require(14998) /* useAdPersonalizationTogglesDisabled */;
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
  }
  return adPersonalizationTogglesDisabled;
}
function useDataToSupportQuestsSettingValue() {
  const DropsOptedOut = require(4066) /* explicitContentFromProto */.DropsOptedOut;
  return !DropsOptedOut.useSetting();
}
function onDataToSupportQuestsSettingValueChange(arg0) {
  const DropsOptedOut = require(4066) /* explicitContentFromProto */.DropsOptedOut;
  DropsOptedOut.updateSetting(!arg0);
}
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.sJYh5t);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return !require(14999) /* apexExperiment */.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle = createToggle.createToggle(obj);
obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.sJYh5t);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: require("apexExperiment").useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle1 = createToggle.createToggle(obj);
const result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
export const UseDataForQuestsSponsoredContentSetting = toggle1;
