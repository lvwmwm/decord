// Module ID: 7534
// Function ID: 7535
// Name: PremiumPlanActionSheetHeader
// Dependencies: [19, 17, 1373, 7535, 21, 4636, 7536, 7537, 4294, 5068, 1093, 5668, 7538, 7539, 7540, 7541, 9515, 10844, 9520, 2]
// Exports: default

// Module 7534 (PremiumPlanActionSheetHeader)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import PremiumUtils from "PremiumUtils" /* 4294 */;
import LinearGradientDefault from "LinearGradient" /* 5068 */;
import noop from "module_19" /* 19 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = fn(7535).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { header: { height: 112, justifyContent: "center", alignItems: "center" }, logoContainer: { position: "absolute", top: 16, left: 16 }, imgWumpus: { position: "absolute", height: 90 }, imgWumpusRight: null, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } };
let obj3 = { transform: null };
let items = [{ scaleX: -1 }];
obj3.transform = items;
obj2.imgWumpusRight = obj3;
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default function PremiumPlanActionSheetHeader(arg0) {
  ({ premiumType, trialOffer, discountOffer } = arg0);
  const tmp = closure_9();
  let tmp2 = null != trialOffer;
  if (tmp2) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp2 = skuId === PremiumUtilsDefault.getSkuIdForPremiumType(premiumType);
  }
  PremiumUtils;
  let tmp10 = null != discountOffer;
  if (tmp10) {
    const discount = discountOffer.discount;
    let hasItem;
    if (discount != null) {
      const planIds = discount.planIds;
      hasItem = planIds.includes(tmp9);
    }
    tmp10 = hasItem;
  }
  const obj2 = { style: tmp.header, colors: getPremiumGradientColor(premiumType), start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, accessible: true, accessibilityRole: "header", accessibilityLabel: null, children: null };
  const tmp14 = LinearGradientDefault;
  obj2.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  if (TIER_0.TIER_0 === premiumType) {
    let tmp13Result = tmp13(7536);
  } else {
    tmp13Result = null;
    if (tmp15.TIER_1 !== premiumType) {
      if (tmp15.TIER_2 === premiumType) {
        tmp13Result = tmp13(7537);
      }
    }
  }
  if (!tmp13Result) {
    const items = [tmp13Result, , ];
    const obj3 = { style: tmp.logoContainer, children: null };
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result8 = tmp13(7538);
    } else if (tmp15.TIER_1 === premiumType) {
      tmp13Result8 = tmp13(7539);
    } else if (tmp15.TIER_2 === premiumType) {
      tmp13Result8 = tmp13(7540);
    }
    const obj4 = { source: tmp13Result8, resizeMode: "contain" };
    const items1 = [React5(tmp13(5668), obj4), , ];
    let tmp22Result = null;
    if (tmp2) {
      const obj5 = { style: tmp.discountPill, trialOffer, premiumType, useWhiteBackground: true, hideTrialCountdown: true };
      tmp22Result = tmp22(tmp6(7541).PremiumPill, obj5);
    }
    items1[1] = tmp22Result;
    let tmp22Result2 = null;
    if (tmp10) {
      const obj6 = { style: tmp.discountPill, discountOffer, premiumType, shouldShowDiscountUpsell: true, useWhiteBackground: true };
      tmp22Result2 = tmp22(tmp6(7541).PremiumPill, obj6);
    }
    items1[2] = tmp22Result2;
    obj3.children = items1;
    items[1] = tmp12(View, obj3);
    const tmp13Result7 = tmp13(5668);
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result10 = tmp13(9515);
    } else if (tmp15.TIER_1 === premiumType) {
      tmp13Result10 = tmp13(10844);
    } else if (tmp15.TIER_2 === premiumType) {
      tmp13Result10 = tmp13(9520);
    }
    const obj7 = { source: tmp13Result10, style: null, resizeMode: "contain" };
    const items2 = [tmp.imgWumpus, ];
    if (tmp15.TIER_0 !== premiumType) {
      if (tmp15.TIER_1 !== premiumType) {
        if (tmp15.TIER_2 === premiumType) {
          let imgWumpusBottom = tmp.imgWumpusRight;
        }
      }
      items2[1] = imgWumpusBottom;
      obj7.style = items2;
      items[2] = tmp22(tmp13Result9, obj7);
      obj2.children = items;
      return tmp12(tmp14, obj2);
    }
    imgWumpusBottom = tmp.imgWumpusBottom;
    tmp13Result9 = tmp13(5668);
  } else {
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result12 = tmp13(7536);
    } else {
      tmp13Result12 = null;
      if (tmp15.TIER_1 !== premiumType) {
        if (tmp15.TIER_2 === premiumType) {
          tmp13Result12 = tmp13(7537);
        }
      }
    }
    const obj8 = { source: tmp13Result12 };
    React5(tmp13(5668), obj8);
    const tmp13Result11 = tmp13(5668);
  }
};
