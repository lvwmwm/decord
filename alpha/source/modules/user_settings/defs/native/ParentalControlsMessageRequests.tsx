// Module ID: 16100
// Function ID: 16101
// Name: ParentalControlsMessageRequests
// Dependencies: [7247, 7966, 558, 7713, 14903, 16086, 7492, 5915, 14902, 11262, 1126, 2565, 2]

// Module 16100 (ParentalControlsMessageRequests)
import intl2 from "intl" /* 1126 */;
import _modDef2565 from "module_2565" /* 2565 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import useSelectedTeen from "useSelectedTeen" /* 7713 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14902 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14903 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16086 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
  if (typeof useIsDisabled === "function") {
    const obj = useParentalControlSettings;
    const defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
    const obj2 = useSelectedTeen;
    const selectedTeenId = obj2.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    const useControlledSetting = ParentalControlledDefaultMessageRequestRestricted.useControlledSetting;
    const tmp6 = !defaultGuildsRestricted && !useControlledSetting(selectedTeenId);
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function useValue() {
  if (typeof useIsDisabled === "function") {
    const obj = useParentalControlSettings;
    const defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
    const obj2 = useSelectedTeen;
    const selectedTeenId = obj2.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    const useControlledSetting = ParentalControlledDefaultMessageRequestRestricted.useControlledSetting;
    const tmp6 = !defaultGuildsRestricted && !useControlledSetting(selectedTeenId);
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
function useIsDisabled() {
  const obj = useParentalControlSettings;
  return obj.useDefaultGuildsRestricted();
}
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2565["7aYkh1"]);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const tmp10 = arg0;
      if (!tmp10) {
        const obj = DefaultDMSettingsExperiment;
        const tmp2 = require;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj2 = { entryPoint: tmp2(5915).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
          AgeVerificationActionCreatorsDefault;
          const result = showAgeVerificationGetStartedModal(obj2);
        }
      }
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
let result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
