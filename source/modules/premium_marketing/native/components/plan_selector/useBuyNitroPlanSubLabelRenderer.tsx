// Module ID: 12392
// Function ID: 96348
// Name: useBuyNitroPlanSubLabelRenderer
// Dependencies: [31, 1851, 33, 7518, 2]
// Exports: useBuyNitroPlanSubLabelRenderer

// Module 12392 (useBuyNitroPlanSubLabelRenderer)
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
