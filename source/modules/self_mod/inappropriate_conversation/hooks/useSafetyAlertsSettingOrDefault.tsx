// Module ID: 10110
// Function ID: 78203
// Name: useSafetyAlertsSettingOrDefault
// Dependencies: [1316, 1850, 566, 7685, 10111, 2]
// Exports: useSafetyAlertsSettingOrDefault

// Module 10110 (useSafetyAlertsSettingOrDefault)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx");

export const useSafetyAlertsSettingOrDefault = function useSafetyAlertsSettingOrDefault() {
  currentUser = currentUser.getCurrentUser();
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => {
    const privacy = outer1_2.settings.privacy;
    let value;
    if (null != privacy) {
      if (null != privacy.inappropriateConversationWarnings) {
        value = iter.value;
      }
    }
    return null == value || value;
  });
  const obj2 = require(566) /* initialize */;
  let userIsTeen = require(7685) /* useUserIsTeen */.useUserIsTeen();
  const obj3 = require(7685) /* useUserIsTeen */;
  const tmp3 = !userIsTeen || !require(10111) /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "useSafetyAlertsSettingOrDefault" });
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
