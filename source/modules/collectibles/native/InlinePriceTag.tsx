// Module ID: 8803
// Function ID: 69506
// Name: PriceTag
// Dependencies: [31, 27, 5619, 655, 653, 33, 4130, 689, 4126, 1876, 6785, 6786, 8749, 1212, 8708, 3776, 8804, 8805, 8760, 8806, 566, 8744, 8769, 477, 7512, 7486, 2]
// Exports: default

// Module 8803 (PriceTag)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ShopCtaEnum } from "items";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_3;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function PriceTag(color) {
  let icon;
  let priceFormatted;
  let style;
  let variant;
  let str = color.color;
  ({ priceFormatted, style } = color);
  if (str === undefined) {
    str = "interactive-text-active";
  }
  ({ variant, icon } = color);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  let obj = {};
  const items = [icon, ];
  obj = { variant };
  const items1 = [_createForOfIteratorHelperLoose().priceTag, style];
  obj.style = items1;
  obj.color = str;
  obj.accessibilityLabel = color.accessibilityLabel;
  obj.children = priceFormatted;
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(closure_10, obj);
}
function OrbsPriceTag(arg0) {
  let discountPercentage;
  let eligibleForShopDiscount;
  let isProductDisabled;
  let original;
  let product;
  let vcData;
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE;
    if (result) {
      let obj = require(6785) /* getProductOrbPrice */;
      result = obj.isOrbsExclusiveProduct(product);
    }
    let obj1 = require(6786) /* getPriceForCollectiblesProduct */;
    const productDiscount = obj1.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= require(6786) /* getPriceForCollectiblesProduct */.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    obj = {};
    const items = [tmp.priceTagRow, ];
    let disabled = !vcData.canAfford;
    if (!disabled) {
      disabled = isProductDisabled;
    }
    if (disabled) {
      disabled = tmp.disabled;
    }
    items[1] = disabled;
    obj.style = items;
    let tmp13 = result;
    if (result) {
      obj = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp.strikedOrbPrice };
      obj1 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      obj.icon = callback(require(8749) /* OrbsIcon */.OrbsIcon, obj1);
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj2 = { orbAmount: original.toString() };
      obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.QfcKZ5, obj2);
      tmp13 = callback(PriceTag, obj);
    }
    const items1 = [tmp13, , ];
    const obj3 = { priceFormatted: vcData.price.amount.toString(), variant: "text-md/semibold" };
    let tmp21;
    if (!result) {
      const obj4 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp21 = callback(require(8749) /* OrbsIcon */.OrbsIcon, obj4);
    }
    obj3.icon = tmp21;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = require(1212) /* getSystemLocale */.t;
    if (result) {
      const obj5 = { orbAmount: vcData.price.amount.toString(), discountPercentage };
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj5);
      const str5 = vcData.price.amount;
    } else {
      const obj6 = { orbAmount: vcData.price.amount.toString() };
      formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj6);
      const str4 = vcData.price.amount;
    }
    obj3.accessibilityLabel = formatToPlainStringResult;
    items1[1] = callback(PriceTag, obj3);
    let tmp28 = null;
    if (result) {
      const obj7 = { discountPercentage };
      tmp28 = callback(BundleDiscountV2, obj7);
    }
    items1[2] = tmp28;
    obj.children = items1;
    return closure_11(closure_4, obj);
  }
}
function BundleDiscountV2(discountPercentage) {
  discountPercentage = discountPercentage.discountPercentage;
  let tmp2 = null;
  if (discountPercentage >= require(6786) /* getPriceForCollectiblesProduct */.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    let obj = { style: tmp.discount };
    obj = { variant: "text-md/normal", color: "text-feedback-positive" };
    const items = ["-", discountPercentage, "%"];
    obj.children = items;
    obj.children = callback2(require(4126) /* Text */.Text, obj);
    tmp2 = callback(closure_4, obj);
  }
  return tmp2;
}
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
({ AnalyticsSections: closure_7, CurrencyCodes: closure_8 } = ME);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, priceTagColumn: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, underline: { textDecorationLine: "underline" } };
_createForOfIteratorHelperLoose = { marginBottom: -2, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.subscribeNowPressable = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.androidTextPadding = { paddingBottom: 2 };
_createForOfIteratorHelperLoose.orbsIcon = { marginRight: 4 };
_createForOfIteratorHelperLoose.disabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_13 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { backgroundColor: "rgba(46, 204, 113, 0.25)", flexDirection: "row", flexShrink: 1, borderRadius: importDefault(689).radii.xs - 1, paddingHorizontal: 6, marginLeft: 6 };
  let num;
  if (obj3.isAndroid()) {
    num = 0;
  }
  obj.paddingTop = num;
  obj3 = require(477) /* set */;
  let num2;
  if (obj4.isAndroid()) {
    num2 = 2;
  }
  obj.paddingBottom = num2;
  obj.discount = obj;
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default function InlinePriceTag(arg0) {
  let product;
  let require;
  ({ product, onTrackPress: require } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let obj = require(8708) /* useCurrentUser */;
  const currentUser = obj.useCurrentUser();
  let obj1 = require(6786) /* getPriceForCollectiblesProduct */;
  const shopDiscountSource = obj1.getShopDiscountSource(currentUser);
  let obj2 = importDefault(3776);
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(currentUser);
  const dependencyMap = importDefault(8804)(constants.SHOP_PRODUCT_DETAILS);
  let obj3 = require(8805) /* useProductDisableState */;
  const isDisabled = obj3.useProductDisableState(product.skuId).isDisabled;
  let obj4 = require(8760) /* _createForOfIteratorHelperLoose */;
  const formattedPriceForCollectiblesProduct = obj4.getFormattedPriceForCollectiblesProduct(product, false, true);
  let obj5 = require(8806) /* useVirtualCurrencyData */;
  const virtualCurrencyData = obj5.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  let obj6 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj6.useStateFromStores(items, () => outer1_5.isFetchingGoogleSkus());
  let obj7 = require(8744) /* isUserPaidTier2 */;
  const isProfileFramesEarlyAccessPhase = obj7.useIsProfileFramesEarlyAccessPhase("InlinePriceTag");
  if (stateFromStores) {
    if (null == formattedPriceForCollectiblesProduct) {
      return callback(require(8769) /* CollectiblesShopPricePlaceholder */.CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp59 = null;
    if (null != virtualCurrencyData.price) {
      obj = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp59 = callback(OrbsPriceTag, obj);
    }
    return tmp59;
  } else {
    let tmp11 = canUseShopDiscountsResult;
    if (!canUseShopDiscountsResult) {
      tmp11 = tmp9;
    }
    let obj8 = require(8760) /* _createForOfIteratorHelperLoose */;
    const formattedPriceForCollectiblesProduct1 = obj8.getFormattedPriceForCollectiblesProduct(product, true, true);
    let obj9 = require(6786) /* getPriceForCollectiblesProduct */;
    obj = { style: tmp.container };
    obj1 = { style: tmp.priceTagColumn };
    obj2 = { style: tmp.priceTagRow };
    obj3 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: tmp11 ? tmp.strikedPrice : tmp.regularPrice };
    let str2 = "interactive-text-active";
    obj3.color = "interactive-text-active";
    const intl = require(1212) /* getSystemLocale */.intl;
    obj4 = { price: formattedPriceForCollectiblesProduct };
    obj3.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.sPvyr8, obj4);
    const items1 = [callback(PriceTag, obj3), , ];
    let tmp25 = null;
    if (product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE) {
      tmp25 = null;
      if (!canUseShopDiscountsResult) {
        obj5 = { discountPercentage: obj9.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage };
        tmp25 = callback(BundleDiscountV2, obj5);
      }
    }
    items1[1] = tmp25;
    if (!(null != formattedPriceForCollectiblesProduct1 && tmp11)) {
      items1[2] = tmp28;
      obj2.children = items1;
      const items2 = [tmp19(tmp20, obj2), ];
      let tmp45Result = null != formattedPriceForCollectiblesProduct1 && !tmp11;
      if (tmp45Result) {
        obj6 = { style: tmp.priceTagRow };
        obj7 = {
          onPress() {
                  if (null != callback) {
                    callback(outer1_6.SUBSCRIBE_NOW);
                  }
                  dependencyMap();
                },
          style: tmp.subscribeNowPressable,
          accessibilityRole: "button"
        };
        obj8 = { color: "interactive-text-default" };
        const items3 = [, ];
        ({ nitroIcon: arr4[0], nitroIconSubscribeNow: arr4[1] } = tmp);
        obj8.style = items3;
        const items4 = [callback(require(7486) /* NitroWheelIcon */.NitroWheelIcon, obj8), ];
        obj9 = { variant: "text-md/normal", color: "interactive-text-default" };
        let androidTextPadding;
        if (obj26.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        obj9.style = androidTextPadding;
        const intl3 = require(1212) /* getSystemLocale */.intl;
        const obj10 = {
          price: formattedPriceForCollectiblesProduct1,
          subscribeNowHook(children) {
                  return outer1_9(outer1_0(4126).Text, { variant: "text-md/normal", style: tmp.underline, children }, arg1);
                }
        };
        obj9.children = intl3.format(require(1212) /* getSystemLocale */.t.Kxw2LT, obj10);
        items4[1] = callback(require(4126) /* Text */.Text, obj9);
        obj7.children = items4;
        obj6.children = closure_11(closure_3, obj7);
        tmp45Result = callback(closure_4, obj6);
        obj26 = require(477) /* set */;
        const tmp45 = callback;
        const tmp46 = closure_4;
        const tmp47 = closure_11;
        const tmp48 = closure_3;
        const tmp52 = callback;
      }
      items2[1] = tmp45Result;
      obj1.children = items2;
      const items5 = [tmp17(tmp18, obj1), ];
      let tmp56 = null != virtualCurrencyData.price;
      if (tmp56) {
        const obj11 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
        tmp56 = callback(OrbsPriceTag, obj11);
      }
      items5[1] = tmp56;
      obj.children = items5;
      return tmp15(tmp16, obj);
    } else {
      const obj12 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj13 = { price: formattedPriceForCollectiblesProduct1 };
      obj12.accessibilityLabel = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.kWkpdG, obj13);
      let androidTextPadding1;
      if (obj19.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj12.style = androidTextPadding1;
      if (shopDiscountSource === require(6786) /* getPriceForCollectiblesProduct */.ShopDiscountSource.THIRDPARTY) {
        const obj14 = { color: str2 };
        str2 = tmp.nitroIcon;
        obj14.style = str2;
        let tmp39 = callback(require(7512) /* TagIcon */.TagIcon, obj14);
      } else {
        const obj15 = { color: str2, style: tmp.nitroIcon };
        tmp39 = callback(require(7486) /* NitroWheelIcon */.NitroWheelIcon, obj15);
      }
      obj12.icon = tmp39;
      callback(PriceTag, obj12);
      obj19 = require(477) /* set */;
      const tmp29 = callback;
      const tmp30 = PriceTag;
    }
    tmp15 = closure_11;
    tmp16 = closure_4;
    tmp17 = closure_11;
    tmp18 = closure_4;
    tmp19 = closure_11;
    tmp20 = closure_4;
    const tmp21 = callback;
    const tmp22 = PriceTag;
  }
};
