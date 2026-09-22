// Module ID: 15986
// Function ID: 15987
// Name: ParentalControlsMessageRequests
// Dependencies: [7640, 8079, 8770, 14915, 15972, 8529, 8531, 14914, 11605, 1114, 2396, 2]

// Module 15986 (ParentalControlsMessageRequests)
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8529 */;
import useSelectedTeen from "useSelectedTeen" /* 8770 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14914 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14915 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 15972 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;

require = fn;
const SettingBuilders = fn(11605);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2396["7aYkh1"]);
  },
  parent: fn(8079).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
          const obj3 = { entryPoint: tmp2(8531).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
