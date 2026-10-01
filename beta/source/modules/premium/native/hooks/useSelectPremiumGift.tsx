// Module ID: 10206
// Function ID: 10207
// Name: useSelectPremiumGift
// Dependencies: [5, 19, 1485, 10162, 10207, 4488, 6661, 5204, 1115, 10125, 2]
// Exports: useSelectPremiumGift

// Module 10206 (useSelectPremiumGift)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_1, navigation;

const result = size.fileFinishedImporting("modules/premium/native/hooks/useSelectPremiumGift.tsx");

export const useSelectPremiumGift = function useSelectPremiumGift(PremiumGiftPlanSelect) {
  let recipientUserId;
  const obj = navigation(recipientUserId[2]);
  navigation = obj.useNavigation();
  const obj2 = navigation(recipientUserId[3]);
  const nativeGiftContext = obj2.useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  recipientUserId = nativeGiftContext.recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  const setOrder = nativeGiftContext.setOrder;
  const obj3 = navigation(recipientUserId[4]);
  const createOrReuseGiftOrder = obj3.useCreateOrReuseGiftOrder(PremiumGiftPlanSelect);
  const useCallback = setOrder.useCallback;
  let closure_0 = planInterval((arg0) => {
    let v1;
    let v3;
    navigation = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let intl;
      let intl2;
      let obj8;
      recipientUserId = tmp;
      closure_1 = tmp4;
      v1(undefined);
      closure_1(navigation);
      const obj7 = navigation(closure_2_2[5]);
      const planIdForPremiumType = obj7.getPlanIdForPremiumType(navigation, c3);
      const obj4 = { planId: planIdForPremiumType, recipientUserId, productId: obj8.getProductIdForGift(planIdForPremiumType) };
      obj8 = navigation(closure_2_2[6]);
      navigation = yield c5(obj4);
      v1(navigation);
      navigation.navigate(navigation(closure_2_2[9]).PremiumGiftScreens.CUSTOMIZATION);
      yield "HermesInternal";
      const obj6 = { title: intl.string(navigation(closure_2_2[8]).t.R0RpRX), body: intl2.string(navigation(closure_2_2[8]).t.CKsXk3) };
      const show = setPremiumType(closure_2_2[7]).show;
      setPremiumType(closure_2_2[7]);
      intl = navigation(closure_2_2[8]).intl;
      intl2 = navigation(closure_2_2[8]).intl;
      show(obj6);
    })();
  });
  const items = [setPremiumType, planInterval, createOrReuseGiftOrder, recipientUserId, setOrder, navigation];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
};
