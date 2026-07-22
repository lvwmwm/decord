// Module ID: 9676
// Function ID: 75344
// Name: useCreateOrReuseGiftOrder
// Dependencies: []
// Exports: useCreateOrReuseGiftOrder

// Module 9676 (useCreateOrReuseGiftOrder)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ItemPurchaseType = arg1(dependencyMap[2]).ItemPurchaseType;
const SubscriptionPlanInfo = arg1(dependencyMap[3]).SubscriptionPlanInfo;
const PaymentGateways = arg1(dependencyMap[4]).PaymentGateways;
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("createOrReuseGiftOrder");
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/payments/native/utils/createOrReuseGiftOrder.tsx");

export const useCreateOrReuseGiftOrder = function useCreateOrReuseGiftOrder(GiftPurchaseButton) {
  const arg1 = GiftPurchaseButton;
  let obj = arg1(dependencyMap[6]);
  obj = { location: GiftPurchaseButton };
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled(obj);
  const importDefault = androidShopOrdersEnabled;
  const items = [GiftPurchaseButton, androidShopOrdersEnabled];
  return React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
};
