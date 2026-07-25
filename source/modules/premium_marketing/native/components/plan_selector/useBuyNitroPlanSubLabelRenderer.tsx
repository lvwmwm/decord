// Module ID: 12368
// Function ID: 96157
// Name: useBuyNitroPlanSubLabelRenderer
// Dependencies: [31, 1852, 33, 6602, 2]
// Exports: useBuyNitroPlanSubLabelRenderer

// Module 12368 (useBuyNitroPlanSubLabelRenderer)
import result from "result";
import { PRICE_PLACEHOLDER } from "GuildFeatures";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanSubLabelRenderer.tsx");

export const useBuyNitroPlanSubLabelRenderer = function useBuyNitroPlanSubLabelRenderer() {
  return React.useCallback((planSelection, item) => {
    let discounted;
    let priceStringByProductId;
    let trialTier;
    ({ priceStringByProductId, trialTier, discounted } = planSelection);
    if (!tmp) {
      if (!tmp2) {
        let value = priceStringByProductId.get(item.productId);
        if (null == value) {
          value = outer1_3;
        }
      }
      return value;
    }
    value = outer1_4(outer1_0(outer1_1[3]), { planSelection, item });
  }, []);
};
