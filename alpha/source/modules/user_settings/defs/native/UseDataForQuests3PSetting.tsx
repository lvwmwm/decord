// Module ID: 18178
// Function ID: 18179
// Name: UseDataForQuests3PSetting
// Dependencies: [8578, 4968, 18176, 16991, 11737, 1113, 18177, 2]

// Module 18178 (UseDataForQuests3PSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4968 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16991 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 18176 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 18177 */;
import SettingBuilders_mod from "SettingBuilders" /* 11737 */;
import size from "module_2" /* 2 */;

function useDataToSupportQuests3PSettingValue() {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  return !Quests3PDataOptedOut.useSetting();
}
function useDataToSupportQuests3PSettingIsDisabled() {
  const obj = useAdPersonalizationTogglesDisabled;
  let adPersonalizationTogglesDisabled = obj.useAdPersonalizationTogglesDisabled();
  const DropsOptedOut = UserSettings.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const obj2 = useParentalControlSettings;
  const isParentallyControlled = obj2.useIsParentallyControlled();
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = setting;
  }
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = isParentallyControlled;
  }
  return adPersonalizationTogglesDisabled;
}
function onDataToSupportQuests3PSettingValueChange(arg0) {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  Quests3PDataOptedOut.updateSetting(!arg0);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.CyLYKZ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    const obj = AdTopicOptOutClientExperiment;
    return !obj.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled
};
const toggle = SettingBuilders.createToggle(obj);
SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.CyLYKZ);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled
};
const toggle1 = SettingBuilders.createToggle(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
export const UseDataForQuests3PSponsoredContentSetting = toggle1;
