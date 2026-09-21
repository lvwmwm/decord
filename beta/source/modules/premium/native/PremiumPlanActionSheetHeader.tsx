// Module ID: 7675
// Function ID: 7676
// Name: PremiumPlanActionSheetHeader
// Dependencies: [19, 17, 1378, 7676, 21, 4758, 558, 568, 7677, 7678, 7679, 7680, 7681, 7682, 7683, 7684, 4418, 5802, 7685, 5198, 1098, 2]

// Module 7675 (PremiumPlanActionSheetHeader)
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import PremiumUtils from "PremiumUtils" /* 4418 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import _modDef7677 from "module_7677" /* 7677 */;
import _modDef7678 from "module_7678" /* 7678 */;
import _modDef7679 from "module_7679" /* 7679 */;
import _modDef7680 from "module_7680" /* 7680 */;
import _modDef7681 from "module_7681" /* 7681 */;
import _modDef7682 from "module_7682" /* 7682 */;
import _modDef7683 from "module_7683" /* 7683 */;
import _modDef7684 from "module_7684" /* 7684 */;
import noop from "module_19" /* 19 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1378);
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = fn(7676).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { header: { height: 112, justifyContent: "center", alignItems: "center" }, logoContainer: { position: "absolute", top: 16, left: 16 }, imgWumpus: { position: "absolute", height: 90 }, imgWumpusRight: null, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } };
let obj3 = { transform: null };
let items = [{ scaleX: -1 }];
obj3.transform = items;
obj2.imgWumpusRight = obj3;
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  const cResult = premiumType(568).c(58);
  premiumType = premiumType.premiumType;
  ({ trialOffer, discountOffer } = premiumType);
  const tmp2 = closure_9();
  importDefault = tmp2;
  if (cResult[0] !== premiumType) {
    const fn = function o() {
      if (React4.TIER_0 === premiumType) {
        return _modDef7677;
      } else if (tmp2.TIER_1 === tmp) {
        return _modDef7678;
      } else if (tmp2.TIER_2 === tmp) {
        return _modDef7679;
      }
    };
    cResult[0] = premiumType;
    cResult[1] = fn;
  }
  if (cResult[2] !== premiumType) {
    class P {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[11]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[13]);
        } else {
          return;
        }
      }
    }
    cResult[2] = premiumType;
    cResult[3] = P;
  } else {
    class P {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[11]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[13]);
        } else {
          return;
        }
      }
    }
  }
  if (cResult[4] === premiumType) {
    class P {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[11]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[13]);
        } else {
          return;
        }
      }
    }
  }
  class E {
    constructor() {
      tmp = premiumType;
      tmp2 = PremiumTypes;
      if (PremiumTypes.TIER_0 !== premiumType) {
        if (tmp2.TIER_1 !== tmp) {
          if (tmp2.TIER_2 === tmp) {
            tmp3 = closure_1;
            return closure_1.imgWumpusRight;
          } else {
            return;
          }
        }
      }
      return closure_1.imgWumpusBottom;
    }
  }
  cResult[4] = premiumType;
  cResult[5] = tmp2.imgWumpusBottom;
  cResult[6] = tmp2.imgWumpusRight;
  cResult[7] = E;
}) : ((arg0) => {
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
  if (React4.TIER_0 === premiumType) {
    let tmp13Result = tmp13(7683);
  } else {
    tmp13Result = null;
    if (tmp15.TIER_1 !== premiumType) {
      if (tmp15.TIER_2 === premiumType) {
        tmp13Result = tmp13(7684);
      }
    }
  }
  if (!tmp13Result) {
    const items = [tmp13Result, , ];
    const obj3 = { style: tmp.logoContainer, children: null };
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result8 = tmp13(7677);
    } else if (tmp15.TIER_1 === premiumType) {
      tmp13Result8 = tmp13(7678);
    } else if (tmp15.TIER_2 === premiumType) {
      tmp13Result8 = tmp13(7679);
    }
    const obj4 = { source: tmp13Result8, resizeMode: "contain" };
    const items1 = [React5(tmp13(5802), obj4), , ];
    let tmp22Result = null;
    if (tmp2) {
      const obj5 = { style: tmp.discountPill, trialOffer, premiumType, useWhiteBackground: true, hideTrialCountdown: true };
      tmp22Result = tmp22(tmp6(7685).PremiumPill, obj5);
    }
    items1[1] = tmp22Result;
    let tmp22Result2 = null;
    if (tmp10) {
      const obj6 = { style: tmp.discountPill, discountOffer, premiumType, shouldShowDiscountUpsell: true, useWhiteBackground: true };
      tmp22Result2 = tmp22(tmp6(7685).PremiumPill, obj6);
    }
    items1[2] = tmp22Result2;
    obj3.children = items1;
    items[1] = tmp12(View, obj3);
    const tmp13Result7 = tmp13(5802);
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result10 = tmp13(7680);
    } else if (tmp15.TIER_1 === premiumType) {
      tmp13Result10 = tmp13(7681);
    } else if (tmp15.TIER_2 === premiumType) {
      tmp13Result10 = tmp13(7682);
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
    tmp13Result9 = tmp13(5802);
  } else {
    if (tmp15.TIER_0 === premiumType) {
      let tmp13Result12 = tmp13(7683);
    } else {
      tmp13Result12 = null;
      if (tmp15.TIER_1 !== premiumType) {
        if (tmp15.TIER_2 === premiumType) {
          tmp13Result12 = tmp13(7684);
        }
      }
    }
    const obj8 = { source: tmp13Result12 };
    React5(tmp13(5802), obj8);
    const tmp13Result11 = tmp13(5802);
  }
});
