// Module ID: 17357
// Function ID: 17358
// Name: UseDataForQuestsSetting
// Dependencies: [8712, 17358, 16126, 4738, 11942, 1112, 17359, 2]

// Module 17357 (UseDataForQuestsSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16126 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 17358 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17359 */;
import SettingBuilders_mod from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

function useIsDisabled() {
  const obj = useAdPersonalizationTogglesDisabled;
  let adPersonalizationTogglesDisabled = obj.useAdPersonalizationTogglesDisabled();
  const obj2 = useParentalControlSettings;
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
  }
  return adPersonalizationTogglesDisabled;
}
function useDataToSupportQuestsSettingValue() {
  const DropsOptedOut = UserSettings.DropsOptedOut;
  return !DropsOptedOut.useSetting();
}
function onDataToSupportQuestsSettingValueChange(arg0) {
  const DropsOptedOut = UserSettings.DropsOptedOut;
  DropsOptedOut.updateSetting(!arg0);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.sJYh5t);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    const obj = AdTopicOptOutClientExperiment;
    return !obj.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle = SettingBuilders.createToggle(obj);
SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.sJYh5t);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle1 = SettingBuilders.createToggle(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
export const UseDataForQuestsSponsoredContentSetting = toggle1;
