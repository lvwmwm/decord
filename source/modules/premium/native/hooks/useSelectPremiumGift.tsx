// Module ID: 9640
// Function ID: 75187
// Name: useSelectPremiumGift
// Dependencies: [5, 31, 1456, 8736, 9641, 3777, 5622, 4472, 1212, 9638, 2]
// Exports: useSelectPremiumGift

// Module 9640 (useSelectPremiumGift)
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
