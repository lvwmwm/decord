// Module ID: 17616
// Function ID: 17617
// Name: OverridePremiumTypeActions
// Dependencies: [1384, 572, 10299, 2]
// Exports: updateClientCreatedAtOverride, updateClientPremiumTypeOverride

// Module 17616 (OverridePremiumTypeActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import createMessage from "createMessage" /* 10299 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export function updateClientPremiumTypeOverride(premiumType, currentUser) {
  let obj6;
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj2);
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  if (null != currentUser) {
    const obj3 = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: currentUser };
    const tmp2Result = DispatcherDefault;
    tmp2Result.dispatch(obj3);
    const obj4 = { type: "CURRENT_USER_UPDATE", user: obj6.userRecordToServer(currentUser) };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    obj6 = createMessage;
    dispatch(obj4);
  }
}
export function updateClientCreatedAtOverride(createdAt) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj2);
}
