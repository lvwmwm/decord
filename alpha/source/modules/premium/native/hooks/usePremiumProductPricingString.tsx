// Module ID: 9395
// Function ID: 9396
// Name: usePremiumProductPricingString
// Dependencies: [1390, 9396, 2174, 2]
// Exports: default

// Module 9395 (usePremiumProductPricingString)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import usePremiumPlanPriceDefault from "usePremiumPlanPrice" /* 9396 */;
import size from "module_2" /* 2 */;

const PRICE_PLACEHOLDER = PremiumConstants.PRICE_PLACEHOLDER;
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(premiumType, YEAR) {
  const tmp = usePremiumPlanPriceDefault;
  const obj = PremiumUtils;
  const tmpResult = tmp(obj.getPlanIdForPremiumType(premiumType, YEAR), { isGift: true });
  let priceString;
  if (tmpResult != null) {
    priceString = tmpResult.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
