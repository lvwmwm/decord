// Module ID: 18167
// Function ID: 18168
// Name: UseDataForQuestsSetting
// Dependencies: [8524, 18168, 16979, 4995, 11703, 1113, 18169, 2]

// Module 18167 (UseDataForQuestsSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16979 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 18168 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 18169 */;
import SettingBuilders_mod from "SettingBuilders" /* 11703 */;
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
