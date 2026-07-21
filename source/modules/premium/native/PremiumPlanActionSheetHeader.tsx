// Module ID: 6665
// Function ID: 51359
// Name: PremiumPlanActionSheetHeader
// Dependencies: []
// Exports: default

// Module 6665 (PremiumPlanActionSheetHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: closure_5 } = arg1(dependencyMap[2]));
const getPremiumGradientColor = arg1(dependencyMap[3]).getPremiumGradientColor;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
const items = [{ scaleX: -1 }];
let closure_9 = arg1(dependencyMap[5]).createStyles({ header: {}, logoContainer: {}, imgWumpus: {}, imgWumpusRight: { transform: items }, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default function PremiumPlanActionSheetHeader(premiumType) {
  let discountOffer;
  let trialOffer;
  premiumType = premiumType.premiumType;
  const arg1 = premiumType;
  ({ trialOffer, discountOffer } = premiumType);
  function getClouds() {
    if (closure_4.TIER_0 === premiumType) {
      return callback(closure_2[6]);
    } else if (closure_4.TIER_1 === tmp) {
      return null;
    } else if (closure_4.TIER_2 === tmp) {
      return callback(closure_2[7]);
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
    let obj = importDefault(dependencyMap[8]);
    tmp2 = sku_id === obj.getSkuIdForPremiumType(premiumType);
  }
  arg1(dependencyMap[8]);
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
  obj = { style: tmp.header, colors: getPremiumGradientColor(premiumType), start: arg1(dependencyMap[10]).HorizontalGradient.START, end: arg1(dependencyMap[10]).HorizontalGradient.END, accessible: true, accessibilityRole: "header" };
  let obj2 = arg1(dependencyMap[8]);
  obj.accessibilityLabel = obj2.getPremiumTypeDisplayName(premiumType);
  let clouds = getClouds();
  if (clouds) {
    obj = { source: getClouds() };
    clouds = callback(importDefault(dependencyMap[11]), obj);
    const tmp16 = importDefault(dependencyMap[11]);
  }
  const items = [clouds, , ];
  const obj1 = { style: tmp.logoContainer };
  obj2 = {};
  const tmp10 = closure_8;
  const tmp11 = importDefault(dependencyMap[9]);
  const tmp17 = closure_8;
  const tmp18 = View;
  const tmp19 = callback;
  if (closure_4.TIER_0 === premiumType) {
    let tmp23 = importDefault(dependencyMap[12]);
  } else if (closure_4.TIER_1 === premiumType) {
    tmp23 = importDefault(dependencyMap[13]);
  } else if (closure_4.TIER_2 === premiumType) {
    tmp23 = importDefault(dependencyMap[14]);
  }
  obj2.source = tmp23;
  obj2.resizeMode = "contain";
  const items1 = [tmp19(importDefault(dependencyMap[11]), obj2), , ];
  let tmp30 = null;
  if (tmp2) {
    const obj3 = { style: tmp.discountPill, trialOffer, premiumType, useWhiteBackground: true, hideTrialCountdown: true };
    tmp30 = callback(arg1(dependencyMap[15]).PremiumPill, obj3);
  }
  items1[1] = tmp30;
  let tmp34 = null;
  if (tmp8) {
    const obj4 = { style: tmp.discountPill, discountOffer, premiumType, shouldShowDiscountUpsell: true, useWhiteBackground: true };
    tmp34 = callback(arg1(dependencyMap[15]).PremiumPill, obj4);
  }
  items1[2] = tmp34;
  obj1.children = items1;
  items[1] = tmp17(tmp18, obj1);
  const obj5 = {};
  const tmp20 = importDefault(dependencyMap[11]);
  const tmp38 = callback;
  if (closure_4.TIER_0 === premiumType) {
    let tmp42 = importDefault(dependencyMap[16]);
  } else if (closure_4.TIER_1 === premiumType) {
    tmp42 = importDefault(dependencyMap[17]);
  } else if (closure_4.TIER_2 === premiumType) {
    tmp42 = importDefault(dependencyMap[18]);
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
