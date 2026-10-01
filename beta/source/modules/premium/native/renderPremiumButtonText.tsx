// Module ID: 13110
// Function ID: 13111
// Name: renderPremiumButtonText
// Dependencies: [19, 17, 1374, 21, 4836, 4683, 576, 4488, 1115, 1177, 2]
// Exports: default

// Module 13110 (renderPremiumButtonText)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function PremiumText(basePlanId) {
  let E0lS2r;
  let formatToPlainString3;
  let isCurrentPlan;
  let isGift;
  let items;
  let obj9;
  let product;
  let style;
  let text;
  let title;
  ({ style, isCurrentPlan, isGift, product, text } = basePlanId);
  basePlanId = basePlanId.basePlanId;
  const tmp = closure_9();
  const obj = PremiumUtilsDefault;
  const intervalType = obj.getInterval(basePlanId).intervalType;
  let combined = null;
  const tmp3 = metroRequire;
  if (intervalType === metroRequire.YEAR) {
    combined = null;
    if (!isCurrentPlan) {
      const _HermesInternal = HermesInternal;
      combined = "-" + React3 + "%";
    }
  }
  if (text == null) {
    let formatToPlainStringResult;
    let priceString;
    if (product != null) {
      priceString = product.priceString;
    }
    if (priceString == null) {
      priceString = hasOwnProperty;
    }
    if (intervalType === tmp3.MONTH) {
      let formatToPlainString2Result;
      const intl2 = intl4.intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      const t2 = intl4.t;
      if (isGift) {
        const obj2 = { price: priceString };
        formatToPlainString2Result = formatToPlainString2(t2.FIjgMp, obj2);
      } else {
        const obj3 = { price: priceString };
        formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t2.V6iX43 : t2.AbOLNu, obj3);
      }
      formatToPlainStringResult = formatToPlainString2Result;
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = intl4.t;
      if (isGift) {
        const obj4 = { price: priceString };
        formatToPlainStringResult = formatToPlainString(t.rm53bV, obj4);
      } else {
        const obj5 = { price: priceString };
        formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj5);
      }
    }
    text = formatToPlainStringResult;
  }
  const obj6 = { style: tmp.premiumText, children: items };
  const obj7 = { style, numberOfLines: 1, accessibilityLabel: formatToPlainString3(E0lS2r, { product: title, description: text }), children: text };
  const LegacyText = native.LegacyText;
  const intl3 = intl4.intl;
  formatToPlainString3 = intl3.formatToPlainString;
  title = undefined;
  E0lS2r = intl4.t.E0lS2r;
  const tmp12 = metroImportAll;
  if (product != null) {
    title = product.title;
  }
  items = [metroImportDefault(LegacyText, obj7), ];
  let tmp14Result = null;
  if (null != combined) {
    const obj8 = { style: tmp.discount, children: metroImportDefault(native.LegacyText, obj9) };
    obj9 = { style, numberOfLines: 1, children: combined };
    tmp14Result = tmp14(tmp13, obj8);
  }
  items[1] = tmp14Result;
  return tmp12(View, obj6);
}
const View = react_native.View;
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, PRICE_PLACEHOLDER: hasOwnProperty, SubscriptionIntervalTypes: metroRequire } = PremiumConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { discount: obj2, premiumText: { flexDirection: "row" } };
obj2 = { borderWidth: 1, borderColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.3), borderRadius: 2, marginLeft: 4, paddingHorizontal: 2 };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/renderPremiumButtonText.tsx");

export default function renderPremiumText(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroImportDefault(PremiumText, obj);
};
