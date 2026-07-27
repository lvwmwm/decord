// Module ID: 6607
// Function ID: 58474
// Name: getActivatedBody
// Dependencies: [31, 6171, 1852, 33, 1212, 4473, 4476, 2]
// Exports: presentBuyNitroPurchaseSuccess

// Module 6607 (getActivatedBody)
import "result";
import { reset } from "usePremiumPlanPurchasedStore";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
function getActivatedBody(premiumTier) {
  if (PremiumTypes.TIER_0 === premiumTier) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["6WWrVM"]);
  } else if (PremiumTypes.TIER_1 === premiumTier) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.LAAgsy);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.I7xNzI);
  }
}
const result = require("GuildFeatures").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseSuccess.tsx");

export const presentBuyNitroPurchaseSuccess = function presentBuyNitroPurchaseSuccess(premiumTier) {
  let obj = require(4473) /* useAlertStore */;
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["Q+BB2w"]);
  obj.content = getActivatedBody(premiumTier);
  obj = { variant: "primary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl2.string(require(1212) /* getSystemLocale */.t.TkTvBz);
  obj.actions = jsx(require(4476) /* getAlertModalItemKey */.AlertActionButton, { variant: "primary" });
  obj.openAlert("BuyNitroPurchaseSuccess", jsx(require(4476) /* getAlertModalItemKey */.AlertModal, { variant: "primary" }), reset);
};
