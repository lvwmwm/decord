// Module ID: 17438
// Function ID: 17439
// Name: ParentalControlsMessageRequests
// Dependencies: [8216, 8593, 9018, 16032, 17424, 7674, 6293, 16036, 16031, 11875, 1113, 2723, 2]

// Module 17438 (ParentalControlsMessageRequests)
import intl2 from "intl" /* 1113 */;
import _modDef2723 from "module_2723" /* 2723 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7674 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import useSelectedTeen from "useSelectedTeen" /* 9018 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16031 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16032 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16036 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 17424 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8216 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2723["7aYkh1"]);
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
      const tmp11 = arg0;
      if (!tmp11) {
        const obj = DefaultDMSettingsExperiment;
        const tmp2 = require;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj2 = { entryPoint: tmp2(6293).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
          AgeVerificationActionCreatorsDefault;
          const result = showAgeVerificationGetStartedModal(obj2);
        }
      }
      const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
      FamilyCenterSaveErrorUtils;
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      showToastIfSaveFails(ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0));
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
