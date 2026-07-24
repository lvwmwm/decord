// Module ID: 9716
// Function ID: 75591
// Name: useSelectPremiumGift
// Dependencies: [5, 31, 1456, 8848, 9717, 3776, 5622, 4471, 1212, 9714, 2]
// Exports: useSelectPremiumGift

// Module 9716 (useSelectPremiumGift)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import result from "result";

const require = arg1;
const result = require("useNavigation").fileFinishedImporting("modules/premium/native/hooks/useSelectPremiumGift.tsx");

export const useSelectPremiumGift = function useSelectPremiumGift(PremiumGiftPlanSelect) {
  navigation = navigation(recipientUserId[2]).useNavigation();
  const obj = navigation(recipientUserId[2]);
  const nativeGiftContext = navigation(recipientUserId[3]).useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  recipientUserId = nativeGiftContext.recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  const setOrder = nativeGiftContext.setOrder;
  const obj2 = navigation(recipientUserId[3]);
  const createOrReuseGiftOrder = navigation(recipientUserId[4]).useCreateOrReuseGiftOrder(PremiumGiftPlanSelect);
  const items = [setPremiumType, planInterval, createOrReuseGiftOrder, recipientUserId, setOrder, navigation];
  return setOrder.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = planInterval(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
};
