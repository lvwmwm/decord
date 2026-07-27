// Module ID: 11565
// Function ID: 89970
// Name: useGuildBoostPurchaseHandler
// Dependencies: [5, 31, 653, 3, 6497, 6238, 6496, 675, 4472, 1212, 4967, 2]
// Exports: default

// Module 11565 (useGuildBoostPurchaseHandler)
import getBaseAnalyticsFields from "getBaseAnalyticsFields";
import result from "result";
import { AnalyticEvents } from "ME";
import importDefaultResult from "timestamp";

const require = arg1;
importDefaultResult = new importDefaultResult("useGuildBoostPurchaseHandler");
let result = require("ME").fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default function useGuildBoostPurchaseHandler(arg0) {
  const _require = arg0;
  let obj = _require(6497);
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
