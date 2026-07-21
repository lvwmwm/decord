// Module ID: 9681
// Function ID: 75355
// Name: usePremiumProductPricingString
// Dependencies: []
// Exports: default

// Module 9681 (usePremiumProductPricingString)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(first, first1) {
  let priceString;
  const planIdForPremiumType = callback(dependencyMap[1]).getPlanIdForPremiumType(first, first1);
  const obj = callback(dependencyMap[1]);
  const callback = callback(dependencyMap[2]).getProductIdForGift(planIdForPremiumType);
  const obj2 = callback(dependencyMap[2]);
  const items = [closure_2];
  const stateFromStores = callback(dependencyMap[3]).useStateFromStores(items, () => product.getProduct(closure_0));
  if (null != stateFromStores) {
    priceString = stateFromStores.priceString;
  }
  let str = "$...";
  if (null != priceString) {
    str = priceString;
  }
  return str;
};
