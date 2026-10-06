// Module ID: 12724
// Function ID: 12725
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [19, 1086, 1380, 558, 576, 6584, 6843, 2]

// Module 12724 (useOpenNitroSubscribeActionSheet)
import PremiumConstants from "PremiumConstants" /* 1380 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6843 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticsPages: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let COLLECTIBLES_SHOP = arg0;
  let obj = COLLECTIBLES_SHOP(576);
  const cResult = obj.c(3);
  if (undefined === arg0) {
    COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
  }
  analyticsLocations = analyticsLocations(6584)().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    let tmp4;
    if (cResult[1] === COLLECTIBLES_SHOP) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const fn = function n() {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    obj2 = { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    openPremiumPlanSelectionActionSheetDefault(obj);
  };
  cResult[0] = analyticsLocations;
  cResult[1] = COLLECTIBLES_SHOP;
  cResult[2] = fn;
  tmp4 = fn;
}) : (() => {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6584)().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    obj2 = { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items);
});
const result = size.fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default tmp3;
