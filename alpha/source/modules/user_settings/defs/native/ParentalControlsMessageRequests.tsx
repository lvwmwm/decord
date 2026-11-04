// Module ID: 18189
// Function ID: 18190
// Name: ParentalControlsMessageRequests
// Dependencies: [7855, 8573, 8512, 16969, 18175, 8095, 6864, 16968, 11729, 1113, 2667, 2]

// Module 18189 (ParentalControlsMessageRequests)
import intl2 from "intl" /* 1113 */;
import _modDef2667 from "module_2667" /* 2667 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8095 */;
import useSelectedTeen from "useSelectedTeen" /* 8512 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16968 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16969 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 18175 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2667["7aYkh1"]);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const obj = useParentalControlSettings;
    const defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
    const obj2 = useSelectedTeen;
    const selectedTeenId = obj2.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    const useControlledSetting = ParentalControlledDefaultMessageRequestRestricted.useControlledSetting;
    const tmp3 = !defaultGuildsRestricted && !useControlledSetting(selectedTeenId);
    return tmp3;
  },
  useIsDisabled() {
    const obj = useParentalControlSettings;
    return obj.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const tmp10 = arg0;
      if (!tmp10) {
        const obj = DefaultDMSettingsExperiment;
        const tmp2 = require;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj2 = { entryPoint: tmp2(6864).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
