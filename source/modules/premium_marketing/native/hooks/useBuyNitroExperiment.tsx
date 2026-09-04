// Module ID: 13235
// Function ID: 13236
// Name: useBuyNitroExperiment
// Dependencies: [32, 19, 7355, 5553, 13236, 2]
// Exports: useBuyNitroExperiment

// Module 13235 (useBuyNitroExperiment)
import useInitialValueDefault from "useInitialValue" /* 5553 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { usePremiumPlanPurchasedStore as closure_5 } from "usePremiumPlanPurchasedStore" /* 7355 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroExperiment.tsx");

export const useBuyNitroExperiment = function useBuyNitroExperiment(isNitroHomeSurface) {
  isNitroHomeSurface = isNitroHomeSurface.isNitroHomeSurface;
  ({ userHasSubscription, isConfirmedNonSubscriber } = isNitroHomeSurface);
  let canRenderRedesignUpsellEarly = useInitialValueDefault(() => callback(table[4]).getMobileNitroMarketingRedesignExperiment({ location: "PremiumMarketingPage" }));
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  let showRedesignUpsell = canRenderRedesignUpsellEarly;
  if (canRenderRedesignUpsellEarly) {
    showRedesignUpsell = !userHasSubscription;
  }
  if (showRedesignUpsell) {
    showRedesignUpsell = !isNitroHomeSurface;
  }
  if (!showRedesignUpsell) {
    let tmp6 = first;
    if (first) {
      tmp6 = tmp2;
    }
    showRedesignUpsell = tmp6;
  }
  if (first !== showRedesignUpsell) {
    tmp3[1](showRedesignUpsell);
  }
  if (canRenderRedesignUpsellEarly) {
    canRenderRedesignUpsellEarly = !isNitroHomeSurface;
  }
  if (canRenderRedesignUpsellEarly) {
    canRenderRedesignUpsellEarly = isConfirmedNonSubscriber;
  }
  return { canRenderRedesignUpsellEarly, showRedesignUpsell };
};
