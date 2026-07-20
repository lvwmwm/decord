// Module ID: 10091
// Function ID: 78167
// Name: useSafetyAlertsSettingOrDefault
// Dependencies: [469762087, 3154116624, 33554436, 4026531840]
// Exports: useSafetyAlertsSettingOrDefault

// Module 10091 (useSafetyAlertsSettingOrDefault)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx");

export const useSafetyAlertsSettingOrDefault = function useSafetyAlertsSettingOrDefault() {
  const currentUser = currentUser.getCurrentUser();
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const privacy = settings.settings.privacy;
    let value;
    if (null != privacy) {
      if (null != privacy.inappropriateConversationWarnings) {
        value = iter.value;
      }
    }
    return null == value || value;
  });
  const obj2 = arg1(dependencyMap[2]);
  let userIsTeen = arg1(dependencyMap[3]).useUserIsTeen();
  const obj3 = arg1(dependencyMap[3]);
  const tmp3 = !userIsTeen || !arg1(dependencyMap[4]).useIsEligibleForInappropriateConversationDefaultOn({ location: "useSafetyAlertsSettingOrDefault" });
  let tmp4 = !tmp3;
  if (tmp3) {
    if (!userIsTeen) {
      let isStaffResult;
      if (null != currentUser) {
        isStaffResult = currentUser.isStaff();
      }
      userIsTeen = true === isStaffResult;
    }
    if (userIsTeen) {
      userIsTeen = stateFromStores;
    }
    tmp4 = userIsTeen;
  }
  return tmp4;
};
