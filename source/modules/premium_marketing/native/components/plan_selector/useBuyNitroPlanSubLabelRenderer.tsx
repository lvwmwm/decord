// Module ID: 12557
// Function ID: 12558
// Name: useBuyNitroPlanSubLabelRenderer
// Dependencies: [19, 1876, 21, 7629, 2]
// Exports: useBuyNitroPlanSubLabelRenderer

// Module 12557 (useBuyNitroPlanSubLabelRenderer)
import noop from "noop";
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
        if (value == null) {
          value = closure_3;
        }
      }
      return value;
    }
    value = callback2(callback(table[3]), { planSelection, item });
  }, []);
};
