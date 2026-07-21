// Module ID: 14531
// Function ID: 109436
// Name: updateClientPremiumTypeOverride
// Dependencies: []
// Exports: updateClientCreatedAtOverride, updateClientPremiumTypeOverride

// Module 14531 (updateClientPremiumTypeOverride)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/OverridePremiumTypeActions.tsx");

export const updateClientPremiumTypeOverride = function updateClientPremiumTypeOverride(premiumType, closure_2) {
  let currentUser = closure_2;
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType };
  obj.dispatch(obj);
  if (null == closure_2) {
    currentUser = currentUser.getCurrentUser();
  }
  if (null != currentUser) {
    obj = { type: "UPDATE_CLIENT_PREMIUM_TYPE", user: currentUser };
    importDefault(dependencyMap[1]).dispatch(obj);
    const obj3 = importDefault(dependencyMap[1]);
    const obj1 = { type: "CURRENT_USER_UPDATE" };
    const obj5 = importDefault(dependencyMap[1]);
    obj1.user = closure_2(dependencyMap[2]).userRecordToServer(currentUser);
    obj5.dispatch(obj1);
    const obj7 = closure_2(dependencyMap[2]);
  }
};
export const updateClientCreatedAtOverride = function updateClientCreatedAtOverride(createdAt) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "SET_CREATED_AT_OVERRIDE", createdAt };
  obj.dispatch(obj);
};
