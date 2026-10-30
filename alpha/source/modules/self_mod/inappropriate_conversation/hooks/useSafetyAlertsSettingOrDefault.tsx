// Module ID: 11238
// Function ID: 11239
// Name: useSafetyAlertsSettingOrDefault
// Dependencies: [1232, 1384, 504, 8360, 11239, 2]
// Exports: useSafetyAlertsSettingOrDefault

// Module 11238 (useSafetyAlertsSettingOrDefault)
import get_initialized from "get initialized" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8360 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 11239 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx");

export function useSafetyAlertsSettingOrDefault() {
  let settings;
  const currentUser = UserStore.getCurrentUser();
  const items = [UserSettingsProtoStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => {
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
  const obj3 = useUserIsTeen;
  let userIsTeen = obj3.useUserIsTeen();
  let tmp3 = !userIsTeen;
  const obj4 = InappropriateConversationsDefaultOn;
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
      let flag = true;
      userIsTeen = true === isStaffResult;
    }
    if (userIsTeen) {
      userIsTeen = stateFromStores;
    }
    tmp4 = userIsTeen;
  }
  return tmp4;
}
