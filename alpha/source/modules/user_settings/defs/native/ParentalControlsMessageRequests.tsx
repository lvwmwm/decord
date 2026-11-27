// Module ID: 17604
// Function ID: 17605
// Name: ParentalControlsMessageRequests
// Dependencies: [8213, 9556, 8218, 16331, 17590, 7870, 6828, 16335, 16330, 11970, 1112, 2847, 2]

// Module 17604 (ParentalControlsMessageRequests)
import intl2 from "intl" /* 1112 */;
import _modDef2847 from "module_2847" /* 2847 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7870 */;
import useSelectedTeen from "useSelectedTeen" /* 8218 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16330 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16331 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16335 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 17590 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8213 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2847["7aYkh1"]);
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
          const obj2 = { entryPoint: tmp2(6828).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
