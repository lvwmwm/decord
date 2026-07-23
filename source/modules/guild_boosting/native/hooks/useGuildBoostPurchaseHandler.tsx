// Module ID: 11571
// Function ID: 90010
// Name: useGuildBoostPurchaseHandler
// Dependencies: [5, 31, 653, 3, 6644, 7156, 6643, 675, 4471, 1212, 4966, 2]
// Exports: default

// Module 11571 (useGuildBoostPurchaseHandler)
import getBaseAnalyticsFields from "getBaseAnalyticsFields";
import result from "result";
import { AnalyticEvents } from "ME";
import importDefaultResult from "timestamp";

const require = arg1;
importDefaultResult = new importDefaultResult("useGuildBoostPurchaseHandler");
let result = require("ME").fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default function useGuildBoostPurchaseHandler(arg0) {
  const _require = arg0;
  let obj = _require(6644);
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
