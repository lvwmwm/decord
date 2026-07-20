// Module ID: 9669
// Function ID: 75297
// Name: useSelectPremiumGift
// Dependencies: []
// Exports: useSelectPremiumGift

// Module 9669 (useSelectPremiumGift)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/native/hooks/useSelectPremiumGift.tsx");

export const useSelectPremiumGift = function useSelectPremiumGift(PremiumGiftPlanSelect) {
  const navigation = arg1(dependencyMap[2]).useNavigation();
  const arg1 = navigation;
  const obj = arg1(dependencyMap[2]);
  const nativeGiftContext = arg1(dependencyMap[3]).useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  const importDefault = setPremiumType;
  const recipientUserId = nativeGiftContext.recipientUserId;
  const dependencyMap = recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  let closure_3 = planInterval;
  const setOrder = nativeGiftContext.setOrder;
  const React = setOrder;
  const obj2 = arg1(dependencyMap[3]);
  const createOrReuseGiftOrder = arg1(dependencyMap[4]).useCreateOrReuseGiftOrder(PremiumGiftPlanSelect);
  const items = [setPremiumType, planInterval, createOrReuseGiftOrder, recipientUserId, setOrder, navigation];
  return React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = planInterval(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
};
