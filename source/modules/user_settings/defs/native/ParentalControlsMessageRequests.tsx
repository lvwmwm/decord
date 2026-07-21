// Module ID: 14429
// Function ID: 108786
// Name: useIsDisabled
// Dependencies: [0, 0, 0, 0, 4294967295]

// Module 14429 (useIsDisabled)
import __exportStarResult1 from "__exportStarResult1";

function useIsDisabled() {
  return arg1(dependencyMap[7]).useDefaultGuildsRestricted();
}
let obj = arg1(dependencyMap[8]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.3o2ojh);
  },
  useDescription() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(importDefault(dependencyMap[10]).7aYkh1);
  },
  parent: require("__exportStarResult1").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    let tmp;
    const tmp2 = useIsDisabled();
    const selectedTeenId = arg1(dependencyMap[2]).useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = arg1(dependencyMap[3]).ParentalControlledDefaultMessageRequestRestricted;
    if (null != selectedTeenId) {
      tmp = selectedTeenId;
    }
    const obj = arg1(dependencyMap[2]);
    return !tmp2 && !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(tmp);
  },
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = arg1(dependencyMap[4]);
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: arg1(dependencyMap[6]).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const result = importDefault(dependencyMap[5]).showAgeVerificationGetStartedModal(obj);
          const obj2 = importDefault(dependencyMap[5]);
        }
      }
      const ParentalControlledDefaultMessageRequestRestricted = arg1(dependencyMap[3]).ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
