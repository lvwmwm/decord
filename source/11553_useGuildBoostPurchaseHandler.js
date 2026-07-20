// Module ID: 11553
// Function ID: 89913
// Name: useGuildBoostPurchaseHandler
// Dependencies: []
// Exports: default

// Module 11553 (useGuildBoostPurchaseHandler)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("useGuildBoostPurchaseHandler");
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default function useGuildBoostPurchaseHandler(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[4]);
  const result = obj.isMobileWebRedirectCheckoutEnabled();
  const items = [arg0];
  obj = {
    shouldUseMobileWebRedirectCheckout: result,
    handleMobileWebRedirectCheckout: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items)
  };
  return obj;
};
