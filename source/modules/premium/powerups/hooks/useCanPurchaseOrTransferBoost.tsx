// Module ID: 11526
// Function ID: 89802
// Name: useCanPurchaseOrTransferBoost
// Dependencies: []
// Exports: default

// Module 11526 (useCanPurchaseOrTransferBoost)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FractionalPremiumStates = arg1(dependencyMap[2]).FractionalPremiumStates;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseOrTransferBoost.tsx");

export default function useCanPurchaseOrTransferBoost() {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (null != currentUser) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  let stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => {
    let tmp2 = !tmp;
    if (!!closure_4.hasFetched) {
      tmp2 = callback(closure_2[5]).getAvailableGuildBoostSlots(closure_4.boostSlots).length > 0;
      const obj = callback(closure_2[5]);
    }
    return tmp2;
  });
  if (!stateFromStores1) {
    stateFromStores1 = importDefault(dependencyMap[3])().fractionalState === FractionalPremiumStates.NONE && !stateFromStores;
    const tmp4 = importDefault(dependencyMap[3])().fractionalState === FractionalPremiumStates.NONE && !stateFromStores;
  }
  return stateFromStores1;
};
