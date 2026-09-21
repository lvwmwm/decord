// Module ID: 16172
// Function ID: 16173
// Name: UseDataForQuests3PSetting
// Dependencies: [8238, 558, 2023, 16170, 15091, 11594, 1119, 16171, 2]

// Module 16172 (UseDataForQuests3PSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15091 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 16170 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16171 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled.useAdPersonalizationTogglesDisabled();
  const DropsOptedOut = UserSettings.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = setting;
  }
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = isParentallyControlled;
  }
  return adPersonalizationTogglesDisabled;
}) : (() => {
  let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled.useAdPersonalizationTogglesDisabled();
  const DropsOptedOut = UserSettings.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = setting;
  }
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = isParentallyControlled;
  }
  return adPersonalizationTogglesDisabled;
});
function onDataToSupportQuests3PSettingValueChange(arg0) {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  Quests3PDataOptedOut.updateSetting(!arg0);
}
const fn = () => {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  return !Quests3PDataOptedOut.useSetting();
};
let SettingBuilders = SettingBuilders_mod;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return !AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled();
  },
  useValue: fn,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: tmp3
});
let SettingBuilders = SettingBuilders_mod;
const toggle1 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: fn,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: tmp3
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
export const UseDataForQuests3PSponsoredContentSetting = toggle1;
