// Module ID: 15242
// Function ID: 15243
// Name: OverridePremiumTypeActions
// Dependencies: [1372, 573, 7171, 2]
// Exports: updateClientCreatedAtOverride, updateClientPremiumTypeOverride

// Module 15242 (OverridePremiumTypeActions)
import DispatcherDefault from "Dispatcher" /* 573 */;
import createMessage from "createMessage" /* 7171 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, currentUser) {
  DispatcherDefault.dispatch({ type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType });
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  if (null != currentUser) {
    const obj3 = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: currentUser };
    tmp2(573).dispatch(obj3);
    const tmp2Result = tmp2(573);
    const obj4 = { type: "CURRENT_USER_UPDATE", user: null };
    const tmp2Result2 = tmp2(573);
    obj4.user = createMessage.userRecordToServer(currentUser);
    tmp2Result2.dispatch(obj4);
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  DispatcherDefault.dispatch({ type: "SET_CREATED_AT_OVERRIDE", createdAt });
};
