// Module ID: 13284
// Function ID: 13285
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [19, 1074, 1373, 7265, 7525, 2]
// Exports: default

// Module 13284 (useOpenNitroSubscribeActionSheet)
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7525 */;
import noop from "module_19" /* 19 */;

const Constants = fn(1074);
({ AnalyticsPages: c3, AnalyticsSections: closure_4 } = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = COLLECTIBLES_SHOP(analyticsLocations[3])().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return noop.useCallback(() => {
    const obj = { analyticsLocation: { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP }, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items);
};
