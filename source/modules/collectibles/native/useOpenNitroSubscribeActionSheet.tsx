// Module ID: 8758
// Function ID: 69259
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: []
// Exports: default

// Module 8758 (useOpenNitroSubscribeActionSheet)
let closure_2 = importAll(dependencyMap[0]);
({ AnalyticsPages: closure_3, AnalyticsSections: closure_4 } = arg1(dependencyMap[1]));
const PremiumTypes = arg1(dependencyMap[2]).PremiumTypes;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants.COLLECTIBLES_SHOP;
  }
  const importDefault = COLLECTIBLES_SHOP;
  let dependencyMap;
  const analyticsLocations = importDefault(dependencyMap[3])().analyticsLocations;
  dependencyMap = analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return React.useCallback(() => {
    let obj = { analyticsLocation: obj, analyticsLocations, premiumType: TIER_2.TIER_2 };
    obj = { page: constants.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    COLLECTIBLES_SHOP(analyticsLocations[4])(obj);
  }, items);
};
