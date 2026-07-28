// Module ID: 11604
// Function ID: 90121
// Name: useGuildBoostPurchaseHandler
// Dependencies: [5, 31, 653, 3, 6533, 6274, 6532, 675, 4506, 1212, 5001, 2]
// Exports: default

// Module 11604 (useGuildBoostPurchaseHandler)
import getBaseAnalyticsFields from "getBaseAnalyticsFields";
import result from "result";
import { AnalyticEvents } from "ME";
import importDefaultResult from "timestamp";

const require = arg1;
importDefaultResult = new importDefaultResult("useGuildBoostPurchaseHandler");
let result = require("ME").fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default function useGuildBoostPurchaseHandler(arg0) {
  const _require = arg0;
  let obj = _require(6533);
  const result = obj.isMobileWebRedirectCheckoutEnabled();
  const items = [arg0];
  obj = {
    shouldUseMobileWebRedirectCheckout: result,
    handleMobileWebRedirectCheckout: React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_3(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items)
  };
  return obj;
};
