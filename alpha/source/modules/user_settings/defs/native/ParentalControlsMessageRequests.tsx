// Module ID: 16306
// Function ID: 16307
// Name: ParentalControlsMessageRequests
// Dependencies: [7867, 8323, 9005, 15164, 16292, 8761, 8763, 15163, 11811, 1115, 2486, 2]

// Module 16306 (ParentalControlsMessageRequests)
import util from "util" /* 1115 */;
import _modDef2486 from "module_2486" /* 2486 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8761 */;
import useSelectedTeen from "useSelectedTeen" /* 9005 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15163 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15164 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16292 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7867 */;

require = fn;
const SettingBuilders = fn(11811);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2486["7aYkh1"]);
  },
  parent: fn(8323).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return useParentalControlSettings.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj3 = { entryPoint: tmp2(8763).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
