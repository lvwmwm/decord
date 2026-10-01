// Module ID: 12722
// Function ID: 12723
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [19, 1074, 1374, 6583, 6842, 2]
// Exports: default

// Module 12722 (useOpenNitroSubscribeActionSheet)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6842 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AnalyticsPages: c3, AnalyticsSections: closure_4 } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = COLLECTIBLES_SHOP(analyticsLocations[3])().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    obj2 = { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items);
};
