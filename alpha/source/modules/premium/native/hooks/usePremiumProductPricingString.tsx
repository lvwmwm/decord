// Module ID: 10204
// Function ID: 10205
// Name: usePremiumProductPricingString
// Dependencies: [6653, 1374, 4485, 6656, 504, 2]
// Exports: default

// Module 10204 (usePremiumProductPricingString)
import IAPStore from "IAPStore" /* 6653 */;

const require = globalThis.__r;

const require = fn;
const PRICE_PLACEHOLDER = fn(1374).PRICE_PLACEHOLDER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(premiumType, YEAR) {
  const planIdForPremiumType = require("PremiumUtils").getPlanIdForPremiumType(premiumType, YEAR);
  const obj = require("PremiumUtils");
  _require = require("ProductIds").getProductIdForGift(planIdForPremiumType);
  const obj2 = require("ProductIds");
  const items = [IAPStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => IAPStore.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
