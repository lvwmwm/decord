// Module ID: 7376
// Function ID: 59511
// Name: useBuyNitroExperiment
// Dependencies: [57, 31, 6660, 5450, 7377, 2]
// Exports: useBuyNitroExperiment

// Module 7376 (useBuyNitroExperiment)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { usePremiumPlanPurchasedStore as closure_5 } from "usePremiumPlanPurchasedStore";

const require = arg1;
const result = require("usePremiumPlanPurchasedStore").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroExperiment.tsx");

export const useBuyNitroExperiment = function useBuyNitroExperiment(isNitroHomeSurface) {
  let isConfirmedNonSubscriber;
  let userHasSubscription;
  isNitroHomeSurface = isNitroHomeSurface.isNitroHomeSurface;
  ({ userHasSubscription, isConfirmedNonSubscriber } = isNitroHomeSurface);
  let tmp = importDefault(5450)(() => outer1_0(outer1_2[4]).getMobileNitroMarketingRedesignExperiment({ location: "PremiumMarketingPage" }));
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  let tmp5 = tmp;
  if (tmp) {
    tmp5 = !userHasSubscription;
  }
  if (tmp5) {
    tmp5 = !isNitroHomeSurface;
  }
  if (!tmp5) {
    let tmp6 = first;
    if (first) {
      tmp6 = tmp2;
    }
    tmp5 = tmp6;
  }
  if (first !== tmp5) {
    tmp3[1](tmp5);
  }
  const obj = {};
  if (tmp) {
    tmp = !isNitroHomeSurface;
  }
  if (tmp) {
    tmp = isConfirmedNonSubscriber;
  }
  obj.canRenderRedesignUpsellEarly = tmp;
  obj.showRedesignUpsell = tmp5;
  return obj;
};
