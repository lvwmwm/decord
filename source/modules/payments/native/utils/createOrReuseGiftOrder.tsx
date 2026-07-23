// Module ID: 9683
// Function ID: 75385
// Name: useCreateOrReuseGiftOrder
// Dependencies: [5, 31, 4113, 1851, 482, 3, 8740, 6668, 477, 3712, 3791, 2]
// Exports: useCreateOrReuseGiftOrder

// Module 9683 (useCreateOrReuseGiftOrder)
import timestamp from "timestamp";
import result from "result";
import { ItemPurchaseType } from "CustomCheckoutFlow";
import { SubscriptionPlanInfo } from "GuildFeatures";
import { PaymentGateways } from "sum";
import importDefaultResult from "GuildFeatures";

const require = arg1;
importDefaultResult = new importDefaultResult("createOrReuseGiftOrder");
const result = require("CustomCheckoutFlow").fileFinishedImporting("modules/payments/native/utils/createOrReuseGiftOrder.tsx");

export const useCreateOrReuseGiftOrder = function useCreateOrReuseGiftOrder(GiftPurchaseButton) {
  const _require = GiftPurchaseButton;
  let obj = _require(8740);
  obj = { location: GiftPurchaseButton };
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled(obj);
  const items = [GiftPurchaseButton, androidShopOrdersEnabled];
  return React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
};
