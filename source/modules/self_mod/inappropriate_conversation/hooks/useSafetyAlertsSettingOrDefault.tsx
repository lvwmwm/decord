// Module ID: 10127
// Function ID: 10128
// Name: useSafetyAlertsSettingOrDefault
// Dependencies: [1340, 1874, 589, 7705, 10128, 2]
// Exports: useSafetyAlertsSettingOrDefault

// Module 10127 (useSafetyAlertsSettingOrDefault)
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx");

export const useSafetyAlertsSettingOrDefault = function useSafetyAlertsSettingOrDefault() {
  currentUser = currentUser.getCurrentUser();
  const items = [handleConnectionClosedOrResumed];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    const privacy = settings.settings.privacy;
    let flag;
    if (privacy != null) {
      if (privacy.inappropriateConversationWarnings != null) {
        flag = iter.value;
      }
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  });
  const obj2 = require(589) /* initialize */;
  let userIsTeen = require(7705) /* useUserIsTeen */.useUserIsTeen();
  const obj3 = require(7705) /* useUserIsTeen */;
  let tmp3 = !userIsTeen;
  if (userIsTeen) {
    tmp3 = !obj4.useIsEligibleForInappropriateConversationDefaultOn({ location: "useSafetyAlertsSettingOrDefault" });
  }
  let tmp4 = !tmp3;
  if (tmp3) {
    if (!userIsTeen) {
      let isStaffResult;
      if (currentUser != null) {
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
