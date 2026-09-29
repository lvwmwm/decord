// Module ID: 12892
// Function ID: 12893
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [19, 1074, 1374, 6749, 7008, 2]
// Exports: default

// Module 12892 (useOpenNitroSubscribeActionSheet)
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7008 */;
import noop from "module_19" /* 19 */;

const Constants = fn(1074);
({ AnalyticsPages: c3, AnalyticsSections: closure_4 } = Constants);
const PremiumTypes = fn(1374).PremiumTypes;
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
