// Module ID: 14243
// Function ID: 14244
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [19, 1071, 1388, 7520, 9110, 2]
// Exports: default

// Module 14243 (useOpenNitroSubscribeActionSheet)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 9110 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
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
