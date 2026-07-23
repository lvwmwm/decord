// Module ID: 15004
// Function ID: 114305
// Name: useGuildPowerupsBoostAction
// Dependencies: [5, 31, 4023, 4018, 653, 11571, 5464, 6658, 4026, 4022, 4966, 6641, 2]
// Exports: default

// Module 15004 (useGuildPowerupsBoostAction)
import useGuildBoostPurchaseHandler from "useGuildBoostPurchaseHandler";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ BoostPurchaseIntent: closure_6, GuildPowerupType: closure_7 } = BoostedGuildTiers);
({ AnalyticsObjects: closure_8, AnalyticsObjectTypes: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx");

export default function useGuildPowerupsBoostAction(arg0, arg1, arg2, arg3, arg4) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const callback = arg4;
  const tmp2 = importDefault(11571)(arg3);
  const shouldUseMobileWebRedirectCheckout = tmp2.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp2.handleMobileWebRedirectCheckout;
  const analyticsLocations = importDefault(5464)().analyticsLocations;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [arg1, arg2, arg0, arg4, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, analyticsLocations];
  return shouldUseMobileWebRedirectCheckout.useCallback(callback(tmp), items);
};
