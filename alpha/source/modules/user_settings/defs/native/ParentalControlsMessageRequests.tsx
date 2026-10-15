// Module ID: 16891
// Function ID: 16892
// Name: ParentalControlsMessageRequests
// Dependencies: [7475, 8210, 558, 7957, 15751, 16877, 7714, 6134, 15750, 10991, 1126, 2568, 2]

// Module 16891 (ParentalControlsMessageRequests)
import intl2 from "intl" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7714 */;
import useSelectedTeen from "useSelectedTeen" /* 7957 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15750 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15751 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16877 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7475 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
    return intl.string(_modDef2568["7aYkh1"]);
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
          const obj2 = { entryPoint: tmp2(6134).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
