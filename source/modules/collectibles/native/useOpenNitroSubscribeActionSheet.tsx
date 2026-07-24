// Module ID: 8804
// Function ID: 69515
// Name: useOpenNitroSubscribeActionSheet
// Dependencies: [31, 653, 1851, 5462, 6661, 2]
// Exports: default

// Module 8804 (useOpenNitroSubscribeActionSheet)
import result from "result";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";

let closure_3;
let closure_4;
({ AnalyticsPages: closure_3, AnalyticsSections: closure_4 } = ME);
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
