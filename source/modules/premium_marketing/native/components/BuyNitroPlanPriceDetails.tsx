// Module ID: 7518
// Function ID: 59953
// Name: BuyNitroPlanPriceDetails
// Dependencies: [31, 27, 5619, 1851, 482, 33, 4130, 689, 566, 5616, 4126, 1212, 2]
// Exports: default

// Module 7518 (BuyNitroPlanPriceDetails)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import { CurrencyCodes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ SubscriptionIntervalTypes: closure_4, SubscriptionPlanInfo: closure_5 } = GuildFeatures);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.centeredText = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPlanPriceDetails.tsx");

export default function BuyNitroPlanPriceDetails(centered) {
  let discounted;
  let item;
  let planSelection;
  let priceStringByProductId;
  let trialTier;
  ({ planSelection, item } = centered);
  let flag = centered.centered;
  if (flag === undefined) {
    flag = false;
  }
  ({ priceStringByProductId, trialTier, discounted } = planSelection);
  const tmp = _createForOfIteratorHelperLoose();
  if (flag) {
    const centeredText = tmp.centeredText;
  }
  let obj = item(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const product = outer1_3.getProduct(item.productId);
    let formatted;
    if (null != product) {
      formatted = product.currencyCode.toLowerCase();
      const str = product.currencyCode;
    }
    if (null == formatted) {
      formatted = outer1_6.USD;
    }
    return formatted;
  });
  const value = priceStringByProductId.get(item.productId);
  if (null != trialTier) {
    if (item.premiumTier === trialTier) {
      let obj8 = item(5616);
      obj = { style: tmp.container };
      obj = { variant: "text-xs/semibold", color: "text-default", style: centeredText };
      const intl3 = item(1212).intl;
      let obj1 = { price: obj8.formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
      obj.children = intl3.formatToPlainString(item(1212).t.hXcaLT, obj1);
      const items1 = [callback(item(4126).Text, obj), ];
      if (null == value) {
        items1[1] = tmp27;
        obj.children = items1;
        return tmp24(tmp25, obj);
      } else {
        let obj2 = { variant: "text-xs/medium", color: "text-subtle", style: centeredText };
        const intl4 = item(1212).intl;
        if (item.interval === constants.YEAR) {
          let v9QeON = item(1212).t.ECT4A5;
        } else {
          v9QeON = item(1212).t.v9QeON;
        }
        const obj3 = { price: value };
        obj2.children = intl4.formatToPlainString(v9QeON, obj3);
        callback(item(4126).Text, obj2);
        const tmp28 = callback;
      }
      const formatPriceResult = obj8.formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      tmp24 = closure_8;
      tmp25 = View;
    }
  }
  if (item.productId === discounted.id) {
    if (null != discounted.priceString) {
      let intervalCount;
      if (null != table[item.basePlanId]) {
        intervalCount = tmp38.intervalCount;
      }
      let num = 1;
      if (null != intervalCount) {
        num = intervalCount;
      }
      obj1 = item(5616);
      let formatRateResult1 = null;
      if (null != value) {
        obj2 = item(5616);
        formatRateResult1 = obj2.formatRate(value, item.interval, num);
      }
      const obj4 = { style: tmp.container };
      const obj5 = { variant: "text-xs/semibold", color: "text-default", style: centeredText };
      const intl = item(1212).intl;
      const obj6 = { discountedPrice: obj1.formatRate(discounted.priceString, item.interval, num), numMonths: discounted.numMonths };
      obj5.children = intl.formatToPlainString(item(1212).t["02Gmgm"], obj6);
      const items2 = [callback(item(4126).Text, obj5), ];
      let tmp17 = null != formatRateResult1;
      if (tmp17) {
        const obj7 = { variant: "text-xs/medium", color: "text-subtle", style: centeredText };
        const intl2 = item(1212).intl;
        obj8 = { regularPrice: formatRateResult1, numMonths: discounted.numMonths };
        obj7.children = intl2.formatToPlainString(item(1212).t["vZk+c/"], obj8);
        tmp17 = callback(item(4126).Text, obj7);
      }
      items2[1] = tmp17;
      obj4.children = items2;
      return closure_8(View, obj4);
    }
  }
  return null;
};
