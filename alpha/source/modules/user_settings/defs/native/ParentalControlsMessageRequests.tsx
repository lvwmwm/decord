// Module ID: 18269
// Function ID: 18270
// Name: ParentalControlsMessageRequests
// Dependencies: [7791, 8503, 8442, 17039, 18255, 8024, 6784, 17043, 17038, 11685, 1113, 2664, 2]

// Module 18269 (ParentalControlsMessageRequests)
import intl2 from "intl" /* 1113 */;
import _modDef2664 from "module_2664" /* 2664 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8024 */;
import useSelectedTeen from "useSelectedTeen" /* 8442 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17038 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17039 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17043 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 18255 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7791 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2664["7aYkh1"]);
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
          const obj2 = { entryPoint: tmp2(6784).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
