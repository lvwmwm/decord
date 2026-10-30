// Module ID: 17881
// Function ID: 17882
// Name: ParentalControlsMessageRequests
// Dependencies: [7708, 8424, 8363, 16667, 17867, 7947, 6723, 16666, 11505, 1114, 2537, 2]

// Module 17881 (ParentalControlsMessageRequests)
import intl2 from "intl" /* 1114 */;
import _modDef2537 from "module_2537" /* 2537 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import useSelectedTeen from "useSelectedTeen" /* 8363 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16666 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16667 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 17867 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2537["7aYkh1"]);
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
          const obj2 = { entryPoint: tmp2(6723).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
