// Module ID: 14870
// Function ID: 112036
// Name: useGuildPowerupsBoostAction
// Dependencies: []
// Exports: default

// Module 14870 (useGuildPowerupsBoostAction)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ BoostPurchaseIntent: closure_6, GuildPowerupType: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticsObjects: closure_8, AnalyticsObjectTypes: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx");

export default function useGuildPowerupsBoostAction(arg0, arg1, arg2, arg3, arg4) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const callback = arg4;
  const tmp2 = importDefault(dependencyMap[5])(arg3);
  const shouldUseMobileWebRedirectCheckout = tmp2.shouldUseMobileWebRedirectCheckout;
  const React = shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp2.handleMobileWebRedirectCheckout;
  let closure_5 = handleMobileWebRedirectCheckout;
  const analyticsLocations = importDefault(dependencyMap[6])().analyticsLocations;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [arg1, arg2, arg0, arg4, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, analyticsLocations];
  return React.useCallback(callback(tmp), items);
};
