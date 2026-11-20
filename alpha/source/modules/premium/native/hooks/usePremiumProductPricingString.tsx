// Module ID: 9373
// Function ID: 9374
// Name: usePremiumProductPricingString
// Dependencies: [1388, 9374, 2172, 2]
// Exports: default

// Module 9373 (usePremiumProductPricingString)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumUtils from "PremiumUtils" /* 2172 */;
import usePremiumPlanPriceDefault from "usePremiumPlanPrice" /* 9374 */;
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
