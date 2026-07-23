// Module ID: 14653
// Function ID: 111639
// Name: updateClientPremiumTypeOverride
// Dependencies: [1849, 686, 6995, 2]
// Exports: updateClientCreatedAtOverride, updateClientPremiumTypeOverride

// Module 14653 (updateClientPremiumTypeOverride)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("userRecordToServer").fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, outer1_2) {
  let currentUser = outer1_2;
  let obj = importDefault(686);
  obj = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj);
  if (null == outer1_2) {
    currentUser = currentUser.getCurrentUser();
  }
  if (null != currentUser) {
    obj = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: currentUser };
    importDefault(686).dispatch(obj);
    const obj3 = importDefault(686);
    const obj1 = { type: "CURRENT_USER_UPDATE" };
    const obj5 = importDefault(686);
    obj1.user = require(6995) /* userRecordToServer */.userRecordToServer(currentUser);
    obj5.dispatch(obj1);
    const obj7 = require(6995) /* userRecordToServer */;
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  let obj = importDefault(686);
  obj = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj);
};
