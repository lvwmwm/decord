// Module ID: 9456
// Function ID: 9457
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [19, 676, 1876, 5595, 6780, 2]
// Exports: default

// Module 9456 (useOpenNitroSubscribeActionSheet)
import noop from "noop";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";

let c3;
let c4;
({ AnalyticsPages: c3, AnalyticsSections: c4 } = ME);
const result = require("GuildFeatures").fileFinishedImporting("modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx");

export default function useOpenNitroSubscribeActionSheet() {
  let COLLECTIBLES_SHOP = arg0;
  if (arg0 === undefined) {
    COLLECTIBLES_SHOP = constants.COLLECTIBLES_SHOP;
  }
  let analyticsLocations;
  analyticsLocations = COLLECTIBLES_SHOP(analyticsLocations[3])().analyticsLocations;
  const items = [analyticsLocations, COLLECTIBLES_SHOP];
  return React.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations, premiumType: outer1_5.TIER_2 };
    obj = { page: outer1_3.COLLECTIBLES_SHOP, section: COLLECTIBLES_SHOP };
    COLLECTIBLES_SHOP(analyticsLocations[4])(obj);
  }, items);
};
