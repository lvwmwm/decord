// Module ID: 14431
// Function ID: 108813
// Name: toggle
// Dependencies: [0, 4294967295, 0, 4294967295, 0]

// Module 14431 (toggle)
import closure_2 from "result";
import result from "result";

result = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.RAQUSN);
  },
  useDescription() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.wbYDfT);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    return !arg1(dependencyMap[2]).useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledDefaultGuildsRestrictedV2 = arg1(dependencyMap[3]).ParentalControlledDefaultGuildsRestrictedV2;
      const result = ParentalControlledDefaultGuildsRestrictedV2.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
result = result.createToggle(result);
result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx");

export default result;
export const ParentalControlsDirectMessages = result;
