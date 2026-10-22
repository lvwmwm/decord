// Module ID: 17154
// Function ID: 17155
// Name: UseDataForQuestsSetting
// Dependencies: [8317, 558, 17155, 16029, 4797, 11172, 1128, 17156, 2]

// Module 17154 (UseDataForQuestsSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8317 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16029 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 17155 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17156 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11172 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsDisabled() {
  const obj = useAdPersonalizationTogglesDisabled;
  let adPersonalizationTogglesDisabled = obj.useAdPersonalizationTogglesDisabled();
  const obj2 = useParentalControlSettings;
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
  }
  return adPersonalizationTogglesDisabled;
}) : (function useIsDisabled() {
  const obj = useAdPersonalizationTogglesDisabled;
  let adPersonalizationTogglesDisabled = obj.useAdPersonalizationTogglesDisabled();
  const obj2 = useParentalControlSettings;
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
  }
  return adPersonalizationTogglesDisabled;
});
function onDataToSupportQuestsSettingValueChange(arg0) {
  const DropsOptedOut = UserSettings.DropsOptedOut;
  DropsOptedOut.updateSetting(!arg0);
}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
function useDataToSupportQuestsSettingValue() {
  const DropsOptedOut = UserSettings.DropsOptedOut;
  return !DropsOptedOut.useSetting();
}
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
  useIsDisabled: tmp2
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
  useIsDisabled: tmp2
};
const toggle1 = SettingBuilders.createToggle(obj2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
export const UseDataForQuestsSponsoredContentSetting = toggle1;
