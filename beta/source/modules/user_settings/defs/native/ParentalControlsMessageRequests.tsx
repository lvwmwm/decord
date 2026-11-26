// Module ID: 17403
// Function ID: 17404
// Name: ParentalControlsMessageRequests
// Dependencies: [8335, 8712, 9138, 16131, 17389, 7793, 6414, 16135, 16130, 11942, 1112, 2824, 2]

// Module 17403 (ParentalControlsMessageRequests)
import intl2 from "intl" /* 1112 */;
import _modDef2824 from "module_2824" /* 2824 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7793 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useSelectedTeen from "useSelectedTeen" /* 9138 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16130 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16131 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16135 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 17389 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2824["7aYkh1"]);
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
          const obj2 = { entryPoint: tmp2(6414).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
