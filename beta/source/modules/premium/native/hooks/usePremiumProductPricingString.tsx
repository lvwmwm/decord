// Module ID: 10621
// Function ID: 10622
// Name: usePremiumProductPricingString
// Dependencies: [7597, 1385, 2047, 7593, 504, 2]
// Exports: default

// Module 10621 (usePremiumProductPricingString)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import IAPStore from "IAPStore" /* 7597 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const PRICE_PLACEHOLDER = PremiumConstants.PRICE_PLACEHOLDER;
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(premiumType, YEAR) {
  let closure_0;
  const obj = require("PremiumUtils");
  const planIdForPremiumType = obj.getPlanIdForPremiumType(premiumType, YEAR);
  const obj2 = require("ProductIds");
  _require = obj2.getProductIdForGift(planIdForPremiumType);
  const items = [IAPStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => IAPStore.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
