// Module ID: 15953
// Function ID: 15954
// Name: OverridePremiumTypeActions
// Dependencies: [1376, 577, 7999, 2]
// Exports: updateClientCreatedAtOverride, updateClientPremiumTypeOverride

// Module 15953 (OverridePremiumTypeActions)
import DispatcherDefault from "Dispatcher" /* 577 */;
import createMessage from "createMessage" /* 7999 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, stateFromStores) {
  let currentUser = stateFromStores;
  DispatcherDefault.dispatch({ type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType });
  if (stateFromStores == null) {
    currentUser = UserStore.getCurrentUser();
  }
  if (null != currentUser) {
    const obj3 = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: currentUser };
    tmp2(577).dispatch(obj3);
    const tmp2Result = tmp2(577);
    const obj4 = { type: "CURRENT_USER_UPDATE", user: null };
    const tmp2Result2 = tmp2(577);
    obj4.user = createMessage.userRecordToServer(currentUser);
    tmp2Result2.dispatch(obj4);
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  DispatcherDefault.dispatch({ type: "SET_CREATED_AT_OVERRIDE", createdAt });
};
