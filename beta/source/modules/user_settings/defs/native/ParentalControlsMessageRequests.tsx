// Module ID: 16223
// Function ID: 16224
// Name: ParentalControlsMessageRequests
// Dependencies: [7811, 8265, 8957, 15099, 16209, 8714, 8716, 15098, 11754, 1115, 2482, 2]

// Module 16223 (ParentalControlsMessageRequests)
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8714 */;
import useSelectedTeen from "useSelectedTeen" /* 8957 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15098 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15099 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16209 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7811 */;

require = fn;
const SettingBuilders = fn(11754);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2482["7aYkh1"]);
  },
  parent: fn(8265).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
          const obj3 = { entryPoint: tmp2(8716).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
