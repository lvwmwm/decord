// Module ID: 15796
// Function ID: 15797
// Name: OverridePremiumTypeActions
// Dependencies: [1389, 584, 9763, 2]
// Exports: updateClientCreatedAtOverride, updateClientPremiumTypeOverride

// Module 15796 (OverridePremiumTypeActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import createMessage from "createMessage" /* 9763 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, stateFromStores) {
  let obj6;
  let currentUser = stateFromStores;
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj2);
  if (stateFromStores == null) {
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
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj2);
};
