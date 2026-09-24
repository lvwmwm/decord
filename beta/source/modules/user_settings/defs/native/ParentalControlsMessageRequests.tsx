// Module ID: 16219
// Function ID: 16220
// Name: ParentalControlsMessageRequests
// Dependencies: [7816, 8270, 558, 8955, 15095, 16205, 8719, 8721, 15094, 11630, 1119, 2486, 2]

// Module 16219 (ParentalControlsMessageRequests)
import util from "util" /* 1119 */;
import _modDef2486 from "module_2486" /* 2486 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import useSelectedTeen from "useSelectedTeen" /* 8955 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15094 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15095 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16205 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7816 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const useIsDisabled = () => useParentalControlSettings.useDefaultGuildsRestricted();
const SettingBuilders = fn(11630);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  if (typeof fn === "function") {
    const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    let tmp6 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (() => {
  if (typeof fn === "function") {
    const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    let tmp6 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2486["7aYkh1"]);
  },
  parent: fn(8270).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    if (typeof fn === "function") {
      const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
      const selectedTeenId = useSelectedTeen.useSelectedTeenId();
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      let tmp6 = !defaultGuildsRestricted;
      if (!defaultGuildsRestricted) {
        tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
      }
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }) : (() => {
    if (typeof fn === "function") {
      const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
      const selectedTeenId = useSelectedTeen.useSelectedTeenId();
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      let tmp6 = !defaultGuildsRestricted;
      if (!defaultGuildsRestricted) {
        tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
      }
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }),
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj3 = { entryPoint: tmp2(8721).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
        }
        obj = DefaultDMSettingsExperiment;
        tmp2 = require;
      }
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
