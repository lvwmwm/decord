// Module ID: 12391
// Function ID: 96345
// Name: useBuyNitroPlanLabelRenderer
// Dependencies: [31, 27, 1921, 1851, 33, 4130, 689, 3834, 1212, 1827, 4126, 3776, 2]
// Exports: useBuyNitroPlanLabelRenderer

// Module 12391 (useBuyNitroPlanLabelRenderer)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
({ DISCOUNTS: closure_6, SubscriptionPlans: closure_7 } = GuildFeatures);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.labelRow = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.discountBadge = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.discountBadgeText = { textTransform: "uppercase" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanLabelRenderer.tsx");

export const useBuyNitroPlanLabelRenderer = function useBuyNitroPlanLabelRenderer() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  token = require(token1[7]).useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj = require(token1[7]);
  token1 = require(token1[7]).useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let items = [tmp, token, token1];
  return React.useCallback((hasDiscountOffer, productId) => {
    let bogoEligible;
    let discounted;
    let trialTier;
    ({ bogoEligible, trialTier, discounted } = hasDiscountOffer);
    let tmp2 = productId.productId === discounted.id;
    if (tmp2) {
      tmp2 = null != discounted.priceString;
    }
    let tmp5 = null == tmp || hasDiscountOffer.hasDiscountOffer || null != trialTier && productId.premiumTier === trialTier;
    if (!tmp5) {
      let tmp6 = bogoEligible;
      if (bogoEligible) {
        tmp6 = productId.basePlanId === outer1_7.PREMIUM_YEAR_TIER_2;
      }
      tmp5 = tmp6;
    }
    if (bogoEligible) {
      if (productId.basePlanId === outer1_7.PREMIUM_MONTH_TIER_2) {
        const intl3 = tmp(token1[8]).intl;
        let stringResult = intl3.string(tmp(token1[8]).t.iQTfWx);
      }
      let obj = { style: tmp.labelRow };
      obj = { variant: token, color: token1, children: tmp(token1[11]).getIntervalString(productId.interval, false) };
      const items = [outer1_8(tmp(token1[10]).Text, obj), ];
      let tmp27 = null != stringResult;
      if (tmp27) {
        let obj1 = { style: tmp.discountBadge };
        const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.discountBadgeText, children: stringResult };
        obj1.children = outer1_8(tmp(token1[10]).Text, obj2);
        tmp27 = outer1_8(outer1_4, obj1);
      }
      items[1] = tmp27;
      obj.children = items;
      return outer1_9(outer1_4, obj);
    }
    if (tmp2) {
      if (null != discounted.percentOff) {
        const intl2 = tmp(token1[8]).intl;
        let obj3 = {};
        obj3 = tmp(token1[9]);
        obj3.discount = obj3.formatPercent(outer1_5.locale, discounted.percentOff / 100);
        stringResult = intl2.format(tmp(token1[8]).t.IAybsG, obj3);
      }
    }
    stringResult = null;
    if (tmp8) {
      const intl = tmp(token1[8]).intl;
      obj = {};
      obj1 = tmp(token1[9]);
      obj.discount = obj1.formatPercent(outer1_5.locale, tmp / 100);
      stringResult = intl.format(tmp(token1[8]).t.IAybsG, obj);
    }
  }, items);
};
