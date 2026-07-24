// Module ID: 12554
// Function ID: 97172
// Name: PremiumText
// Dependencies: [31, 27, 1851, 33, 4130, 3974, 689, 3776, 1212, 1273, 2]
// Exports: default

// Module 12554 (PremiumText)
import "result";
import { View } from "get ActivityIndicator";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function PremiumText(basePlanId) {
  let isCurrentPlan;
  let isGift;
  let product;
  let style;
  let text;
  ({ style, isCurrentPlan, isGift, product, text } = basePlanId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importDefault(3776);
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
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = {};
    let title;
    if (null != product) {
      title = product.title;
    }
    obj1.product = title;
    obj1.description = text;
    obj.accessibilityLabel = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.E0lS2r, obj1);
    obj.children = text;
    const items = [callback(require(1273) /* Button */.LegacyText, obj), ];
    let tmp22 = null;
    if (null != combined) {
      const obj2 = { style: tmp.discount };
      const obj3 = { style, numberOfLines: 1, children: combined };
      obj2.children = callback(require(1273) /* Button */.LegacyText, obj3);
      tmp22 = callback(View, obj2);
    }
    items[1] = tmp22;
    obj.children = items;
    return closure_8(View, obj);
  } else {
    let priceString;
    if (null != product) {
      priceString = product.priceString;
    }
    if (null == priceString) {
      priceString = closure_5;
    }
    if (intervalType !== constants.MONTH) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const formatToPlainString2 = intl3.formatToPlainString;
      if (isGift) {
        const obj4 = { price: priceString };
        let formatToPlainString2Result = formatToPlainString2(tmp28(1212).t.rm53bV, obj4);
      } else {
        const t = require(1212) /* getSystemLocale */.t;
        const obj5 = { price: priceString };
        formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj5);
      }
      tmp28 = require;
    }
    let FIjgMp = require;
    let obj6 = 8;
    const intl = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString = intl.formatToPlainString;
    if (isGift) {
      FIjgMp = FIjgMp(tmp10[obj6]).t.FIjgMp;
      obj6 = { price: priceString };
      let formatToPlainStringResult = formatToPlainString(FIjgMp, obj6);
    } else {
      const t2 = require(dependencyMap[obj6]).t;
      const obj7 = { price: priceString };
      formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t2.V6iX43 : t2.AbOLNu, obj7);
    }
    tmp10 = dependencyMap;
  }
}
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, PRICE_PLACEHOLDER: closure_5, SubscriptionIntervalTypes: closure_6 } = GuildFeatures);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderWidth: 1, borderColor: null, borderRadius: 2, marginLeft: 4, paddingHorizontal: 2 };
_createForOfIteratorHelperLoose.borderColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 0.3);
_createForOfIteratorHelperLoose.discount = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.premiumText = { flexDirection: "row" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/renderPremiumButtonText.tsx");

export default function renderPremiumText(arg0) {
  const merged = Object.assign(arg0);
  return callback(PremiumText, {});
};
