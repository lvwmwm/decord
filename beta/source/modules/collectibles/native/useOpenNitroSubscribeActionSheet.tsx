// Module ID: 13493
// Function ID: 13494
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [19, 1078, 1378, 558, 568, 7441, 7698, 2]

// Module 13493 (useOpenNitroSubscribeActionSheet)
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7698 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Constants = fn(1078);
({ AnalyticsPages: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const PremiumTypes = fn(1378).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let COLLECTIBLES_SHOP = arg0;
  const cResult = COLLECTIBLES_SHOP(568).c(3);
  if (undefined === arg0) {
    COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
  }
  analyticsLocations = analyticsLocations(7441)().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === COLLECTIBLES_SHOP) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const fn = function n() {
    const obj = { analyticsLocation: { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP }, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
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
  analyticsLocations = analyticsLocations(7441)().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return noop.useCallback(() => {
    const obj = { analyticsLocation: { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP }, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items);
});
