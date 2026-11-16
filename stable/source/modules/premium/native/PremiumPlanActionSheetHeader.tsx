// Module ID: 7725
// Function ID: 7726
// Name: PremiumPlanActionSheetHeader
// Dependencies: [19, 17, 1387, 7726, 21, 5170, 7727, 7728, 2171, 5747, 1092, 5874, 7729, 7730, 7731, 7732, 10085, 10737, 10090, 2]
// Exports: default

// Module 7725 (PremiumPlanActionSheetHeader)
import react_native from "react-native" /* 17 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import PremiumUtils from "PremiumUtils" /* 2171 */;
import LinearGradientDefault from "LinearGradient" /* 5747 */;
import FastImageDefault from "FastImage" /* 5874 */;
import ColorConstants from "ColorConstants" /* 7726 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;

let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = ColorConstants.getPremiumGradientColor;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { header: { height: 112, justifyContent: "center", alignItems: "center" }, logoContainer: { position: "absolute", top: 16, left: 16 }, imgWumpus: { position: "absolute", height: 90 }, imgWumpusRight: obj2, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } };
obj2 = { transform: items };
items = [{ scaleX: -1 }];
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default function PremiumPlanActionSheetHeader(arg0) {
  let discountOffer;
  let items1;
  let premiumType;
  let tmp13Result10;
  let tmp13Result12;
  let tmp17Result;
  let tmp6Result;
  let trialOffer;
  ({ premiumType, trialOffer, discountOffer } = arg0);
  const tmp = closure_9();
  let tmp2 = null != trialOffer;
  if (tmp2) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const obj = PremiumUtilsDefault;
    tmp2 = skuId === obj.getSkuIdForPremiumType(premiumType);
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
  const obj2 = { style: tmp.header, colors: getPremiumGradientColor(premiumType), start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, accessible: true, accessibilityRole: "header", accessibilityLabel: tmp6Result.getPremiumTypeDisplayName(premiumType), children: null };
  const tmp14 = LinearGradientDefault;
  tmp6Result = PremiumUtils;
  if (TIER_0.TIER_0 === premiumType) {
    tmp17Result = tmp13(7727);
  } else {
    tmp17Result = null;
    if (TIER_0.TIER_1 !== premiumType) {
      if (TIER_0.TIER_2 === premiumType) {
        tmp17Result = tmp13(7728);
      }
    }
  }
  if (tmp17Result) {
    let tmp13Result8;
    const tmp13Result7 = FastImageDefault;
    const tmp17 = metroImportDefault;
    if (TIER_0.TIER_0 === premiumType) {
      tmp13Result8 = tmp13(7727);
    } else {
      tmp13Result8 = null;
      if (TIER_0.TIER_1 !== premiumType) {
        if (TIER_0.TIER_2 === premiumType) {
          tmp13Result8 = tmp13(7728);
        }
      }
    }
    const obj3 = { source: tmp13Result8 };
    tmp17Result = tmp17(tmp13Result7, obj3);
  }
  const items = [tmp17Result, , ];
  const obj4 = { style: tmp.logoContainer, children: items1 };
  const tmp13Result9 = FastImageDefault;
  const tmp20 = View;
  if (TIER_0.TIER_0 === premiumType) {
    tmp13Result10 = tmp13(7729);
  } else if (TIER_0.TIER_1 === premiumType) {
    tmp13Result10 = tmp13(7730);
  } else if (TIER_0.TIER_2 === premiumType) {
    tmp13Result10 = tmp13(7731);
  }
  items1 = [metroImportDefault(tmp13Result9, { source: tmp13Result10, resizeMode: "contain" }), , ];
  let tmp21Result = null;
  if (tmp2) {
    const obj5 = { style: tmp.discountPill, trialOffer, premiumType, useWhiteBackground: true, hideTrialCountdown: true };
    tmp21Result = tmp21(tmp6(7732).PremiumPill, obj5);
  }
  items1[1] = tmp21Result;
  let tmp21Result2 = null;
  if (tmp10) {
    const obj6 = { style: tmp.discountPill, discountOffer, premiumType, shouldShowDiscountUpsell: true, useWhiteBackground: true };
    tmp21Result2 = tmp21(tmp6(7732).PremiumPill, obj6);
  }
  items1[2] = tmp21Result2;
  items[1] = metroImportAll(tmp20, obj4);
  const tmp13Result11 = FastImageDefault;
  if (TIER_0.TIER_0 === premiumType) {
    tmp13Result12 = tmp13(10085);
  } else if (TIER_0.TIER_1 === premiumType) {
    tmp13Result12 = tmp13(10737);
  } else if (TIER_0.TIER_2 === premiumType) {
    tmp13Result12 = tmp13(10090);
  }
  const obj7 = { source: tmp13Result12, style: null, resizeMode: "contain" };
  const items2 = [tmp.imgWumpus, ];
  if (TIER_0.TIER_0 !== premiumType) {
    let imgWumpusBottom;
    if (TIER_0.TIER_1 !== premiumType) {
      if (TIER_0.TIER_2 === premiumType) {
        imgWumpusBottom = tmp.imgWumpusRight;
      }
    }
    items2[1] = imgWumpusBottom;
    obj7.style = items2;
    items[2] = metroImportDefault(tmp13Result11, obj7);
    obj2.children = items;
    return metroImportAll(tmp14, obj2);
  }
  imgWumpusBottom = tmp.imgWumpusBottom;
};
