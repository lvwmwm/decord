// Module ID: 10601
// Function ID: 10602
// Name: usePremiumProductPricingString
// Dependencies: [7590, 1386, 2048, 7586, 504, 2]
// Exports: default

// Module 10601 (usePremiumProductPricingString)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import IAPStore from "IAPStore" /* 7590 */;
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
