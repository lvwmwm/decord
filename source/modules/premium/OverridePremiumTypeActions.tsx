// Module ID: 15072
// Function ID: 15073
// Name: updateClientPremiumTypeOverride
// Dependencies: [1922, 709, 7257, 2]
// Exports: updateClientCreatedAtOverride, updateClientPremiumTypeOverride

// Module 15072 (updateClientPremiumTypeOverride)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("createMessage").fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, outer1_2) {
  let currentUser = outer1_2;
  let obj = importDefault(709);
  obj = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj);
  if (outer1_2 == null) {
    currentUser = currentUser.getCurrentUser();
  }
  if (null != currentUser) {
    let tmp2Result = tmp2(709);
    obj = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: null };
    obj[1] = currentUser;
    tmp2Result.dispatch(obj);
    tmp2Result = tmp2(709);
    const obj1 = { type: "CURRENT_USER_UPDATE", user: null };
    obj1[1] = require(7257) /* createMessage */.userRecordToServer(currentUser);
    tmp2Result.dispatch(obj1);
    const obj7 = require(7257) /* createMessage */;
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  let obj = importDefault(709);
  obj = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj);
};
