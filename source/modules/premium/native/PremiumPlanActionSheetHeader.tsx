// Module ID: 6670
// Function ID: 51410
// Name: PremiumPlanActionSheetHeader
// Dependencies: [31, 27, 1851, 6671, 33, 4130, 6672, 6673, 3776, 4554, 668, 5085, 6674, 6675, 6676, 6677, 7115, 7116, 7117, 2]
// Exports: default

// Module 6670 (PremiumPlanActionSheetHeader)
import "result";
import { View } from "get ActivityIndicator";
import GuildFeatures from "GuildFeatures";
import { getPremiumGradientColor } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: closure_5 } = GuildFeatures);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [{ scaleX: -1 }];
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ header: { height: 112, justifyContent: "center", alignItems: "center" }, logoContainer: { position: "absolute", top: 16, left: 16 }, imgWumpus: { position: "absolute", height: 90 }, imgWumpusRight: { transform: items }, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } });
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default function PremiumPlanActionSheetHeader(premiumType) {
  let discountOffer;
  let trialOffer;
  premiumType = premiumType.premiumType;
  ({ trialOffer, discountOffer } = premiumType);
  function getClouds() {
    if (outer1_4.TIER_0 === premiumType) {
      return outer1_1(outer1_2[6]);
    } else if (outer1_4.TIER_1 === tmp) {
      return null;
    } else if (outer1_4.TIER_2 === tmp) {
      return outer1_1(outer1_2[7]);
    }
  }
  const tmp = callback2();
  let tmp2 = null != trialOffer;
  if (tmp2) {
    const subscription_trial = trialOffer.subscription_trial;
    let sku_id;
    if (null != subscription_trial) {
      sku_id = subscription_trial.sku_id;
    }
    let obj = importDefault(3776);
    tmp2 = sku_id === obj.getSkuIdForPremiumType(premiumType);
  }
  premiumType(3776);
  let tmp8 = null != discountOffer;
  if (tmp8) {
    const discount = discountOffer.discount;
    let hasItem;
    if (null != discount) {
      const planIds = discount.planIds;
      hasItem = planIds.includes(tmp7);
    }
    tmp8 = hasItem;
  }
  obj = { style: tmp.header, colors: getPremiumGradientColor(premiumType), start: premiumType(668).HorizontalGradient.START, end: premiumType(668).HorizontalGradient.END, accessible: true, accessibilityRole: "header" };
  let obj2 = premiumType(3776);
  obj.accessibilityLabel = obj2.getPremiumTypeDisplayName(premiumType);
  let clouds = getClouds();
  if (clouds) {
    obj = { source: getClouds() };
    clouds = callback(importDefault(5085), obj);
    const tmp16 = importDefault(5085);
  }
  const items = [clouds, , ];
  const obj1 = { style: tmp.logoContainer };
  obj2 = {};
  const tmp10 = closure_8;
  const tmp11 = importDefault(4554);
  const tmp17 = closure_8;
  const tmp18 = View;
  const tmp19 = callback;
  if (closure_4.TIER_0 === premiumType) {
    let tmp23 = importDefault(6674);
  } else if (closure_4.TIER_1 === premiumType) {
    tmp23 = importDefault(6675);
  } else if (closure_4.TIER_2 === premiumType) {
    tmp23 = importDefault(6676);
  }
  obj2.source = tmp23;
  obj2.resizeMode = "contain";
  const items1 = [tmp19(importDefault(5085), obj2), , ];
  let tmp30 = null;
  if (tmp2) {
    const obj3 = { style: tmp.discountPill, trialOffer, premiumType, useWhiteBackground: true, hideTrialCountdown: true };
    tmp30 = callback(premiumType(6677).PremiumPill, obj3);
  }
  items1[1] = tmp30;
  let tmp34 = null;
  if (tmp8) {
    const obj4 = { style: tmp.discountPill, discountOffer, premiumType, shouldShowDiscountUpsell: true, useWhiteBackground: true };
    tmp34 = callback(premiumType(6677).PremiumPill, obj4);
  }
  items1[2] = tmp34;
  obj1.children = items1;
  items[1] = tmp17(tmp18, obj1);
  const obj5 = {};
  const tmp20 = importDefault(5085);
  const tmp38 = callback;
  if (closure_4.TIER_0 === premiumType) {
    let tmp42 = importDefault(7115);
  } else if (closure_4.TIER_1 === premiumType) {
    tmp42 = importDefault(7116);
  } else if (closure_4.TIER_2 === premiumType) {
    tmp42 = importDefault(7117);
  }
  obj5.source = tmp42;
  const items2 = [tmp.imgWumpus, ];
  if (closure_4.TIER_0 !== premiumType) {
    if (closure_4.TIER_1 !== premiumType) {
      if (closure_4.TIER_2 === premiumType) {
        let imgWumpusBottom = tmp.imgWumpusRight;
      }
    }
    items2[1] = imgWumpusBottom;
    obj5.style = items2;
    obj5.resizeMode = "contain";
    items[2] = tmp38(tmp39, obj5);
    obj.children = items;
    return tmp10(tmp11, obj);
  }
  imgWumpusBottom = tmp.imgWumpusBottom;
};
