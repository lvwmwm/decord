// Module ID: 12778
// Function ID: 12779
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [19, 673, 1923, 5961, 7176, 2]
// Exports: default

// Module 12778 (useOpenNitroSubscribeActionSheet)
import closure_2 from "noop" /* 19 */;
import ME from "ME" /* 673 */;
import { PremiumTypes } from "GuildFeatures" /* 1923 */;

({ AnalyticsPages: c3, AnalyticsSections: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = COLLECTIBLES_SHOP(analyticsLocations[3])().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return React.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations, premiumType: closure_1_5.TIER_2 };
    obj = { page: closure_1_3.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    COLLECTIBLES_SHOP(analyticsLocations[4])(obj);
  }, items);
};
