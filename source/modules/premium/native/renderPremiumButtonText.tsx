// Module ID: 12387
// Function ID: 94692
// Name: PremiumText
// Dependencies: []
// Exports: default

// Module 12387 (PremiumText)
function PremiumText(basePlanId) {
  let isCurrentPlan;
  let isGift;
  let product;
  let style;
  let text;
  ({ style, isCurrentPlan, isGift, product, text } = basePlanId);
  const tmp = callback2();
  let obj = importDefault(dependencyMap[7]);
  const intervalType = obj.getInterval(basePlanId.basePlanId).intervalType;
  let combined = null;
  if (intervalType === constants.YEAR) {
    combined = null;
    if (!isCurrentPlan) {
      const _HermesInternal = HermesInternal;
      combined = "-" + closure_4 + "%";
    }
  }
  if (null != text) {
    obj = { style: tmp.premiumText };
    obj = { style, numberOfLines: 1 };
    const intl2 = arg1(dependencyMap[8]).intl;
    const obj1 = {};
    let title;
    if (null != product) {
      title = product.title;
    }
    obj1.product = title;
    obj1.description = text;
    obj.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[8]).t.E0lS2r, obj1);
    obj.children = text;
    const items = [callback(arg1(dependencyMap[9]).LegacyText, obj), ];
    let tmp22 = null;
    if (null != combined) {
      const obj2 = { style: tmp.discount };
      const obj3 = { style, numberOfLines: 1, children: combined };
      obj2.children = callback(arg1(dependencyMap[9]).LegacyText, obj3);
      tmp22 = callback(View, obj2);
    }
    items[1] = tmp22;
    obj.children = items;
    return closure_7(View, obj);
  } else {
    let priceString;
    if (null != product) {
      priceString = product.priceString;
    }
    let str3 = "$...";
    if (null != priceString) {
      str3 = priceString;
    }
    if (intervalType !== constants.MONTH) {
      const intl3 = arg1(dependencyMap[8]).intl;
      const formatToPlainString2 = intl3.formatToPlainString;
      if (isGift) {
        const obj4 = { price: str3 };
        let formatToPlainString2Result = formatToPlainString2(tmp28(tmp29[8]).t.rm53bV, obj4);
      } else {
        const t = arg1(dependencyMap[8]).t;
        const obj5 = { price: str3 };
        formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t.dFbQCa : t.rS8FA+, obj5);
      }
      const tmp28 = arg1;
      const tmp29 = dependencyMap;
    }
    let FIjgMp = arg1;
    let obj6 = 8;
    const intl = arg1(dependencyMap[8]).intl;
    const formatToPlainString = intl.formatToPlainString;
    if (isGift) {
      FIjgMp = FIjgMp(tmp10[obj6]).t.FIjgMp;
      obj6 = { price: str3 };
      let formatToPlainStringResult = formatToPlainString(FIjgMp, obj6);
    } else {
      const t2 = arg1(dependencyMap[obj6]).t;
      const obj7 = { price: str3 };
      formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t2.V6iX43 : t2.AbOLNu, obj7);
    }
    const tmp10 = dependencyMap;
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, SubscriptionIntervalTypes: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = {};
const tmp4 = arg1(dependencyMap[3]);
obj.borderColor = arg1(dependencyMap[5]).hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.WHITE, 0.3);
obj.discount = obj;
obj.premiumText = { flexDirection: "row" };
let closure_8 = obj.createStyles(obj);
const obj4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/native/renderPremiumButtonText.tsx");

export default function renderPremiumText(arg0) {
  const merged = Object.assign(arg0);
  return callback(PremiumText, {});
};
