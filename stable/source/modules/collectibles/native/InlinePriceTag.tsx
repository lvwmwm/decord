// Module ID: 13283
// Function ID: 13284
// Name: InlinePriceTag
// Dependencies: [19, 17, 7340, 1076, 1074, 21, 4636, 576, 4632, 1889, 7656, 7657, 8962, 1114, 8295, 4294, 13284, 8994, 8973, 13285, 504, 8986, 1363, 8987, 8785, 2]
// Exports: default

// Module 13283 (InlinePriceTag)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4294 */;
import Text_Text from "Text/Text" /* 4632 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7657 */;
import useCurrentUser from "useCurrentUser" /* 8295 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8973 */;
import useProductDisableState from "useProductDisableState" /* 8994 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13284 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 13285 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7340 */;

require = fn;
function PriceTag(accessibilityLabel) {
  let str = accessibilityLabel.color;
  ({ priceFormatted, style } = accessibilityLabel);
  if (str === undefined) {
    str = "interactive-text-active";
  }
  ({ variant, icon } = accessibilityLabel);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  const obj = { children: null };
  const items = [icon, ];
  const obj2 = { variant, style: null, color: str, accessibilityLabel: accessibilityLabel.accessibilityLabel, children: priceFormatted };
  const items1 = [closure_12().priceTag, style];
  obj2.style = items1;
  items[1] = React7(Text_Text.Text, obj2);
  obj.children = items;
  return closure_1_11(closure_1_10, obj);
}
function OrbsPriceTag(arg0) {
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = closure_12();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      result = tmp16(7656).isOrbsExclusiveProduct(product);
      const tmp16Result = tmp16(7656);
    }
    const productDiscount = CollectiblesUtils.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= tmp16(7657).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    const items = [tmp.priceTagRow, ];
    const canAfford = vcData.canAfford;
    let disabled = !canAfford;
    if (canAfford) {
      disabled = isProductDisabled;
    }
    if (disabled) {
      disabled = tmp.disabled;
    }
    const obj = { style: null, children: null };
    items[1] = disabled;
    obj.style = items;
    let tmp7 = result;
    if (result) {
      const obj2 = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp.strikedOrbPrice, icon: null, accessibilityLabel: null };
      const obj3 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      obj2.icon = React7(tmp16(8962).OrbsIcon, obj3);
      const intl = tmp16(1114).intl;
      const obj4 = { orbAmount: original.toString() };
      obj2.accessibilityLabel = intl.formatToPlainString(tmp16(1114).t.QfcKZ5, obj4);
      tmp7 = React7(PriceTag, obj2);
    }
    const items1 = [tmp7, , ];
    const obj5 = { priceFormatted: vcData.price.amount.toString(), variant: "text-md/semibold", icon: null, accessibilityLabel: null };
    let tmp10Result;
    if (!result) {
      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = tmp10(tmp16(8962).OrbsIcon, obj6);
    }
    obj5.icon = tmp10Result;
    const intl2 = tmp16(1114).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = tmp16(1114).t;
    if (result) {
      const obj7 = { orbAmount: vcData.price.amount.toString(), discountPercentage };
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj7);
    } else {
      const obj8 = { orbAmount: vcData.price.amount.toString() };
      formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj8);
    }
    obj5.accessibilityLabel = formatToPlainStringResult;
    items1[1] = React7(PriceTag, obj5);
    let tmp10Result2 = null;
    if (result) {
      const obj9 = { discountPercentage };
      tmp10Result2 = tmp10(BundleDiscountV2, obj9);
    }
    items1[2] = tmp10Result2;
    obj.children = items1;
    return closure_1_11(React4, obj);
  }
}
function BundleDiscountV2(discountPercentage) {
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    const obj = { style: tmp.discount, children: null };
    const obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
    const items = ["-", discountPercentage, "%"];
    obj2.children = items;
    obj.children = closure_1_11(Text_Text.Text, obj2);
    tmp4 = React7(React4, obj);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const Constants = fn(1074);
({ AnalyticsSections: closure_7, CurrencyCodes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4636);
let obj2 = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, priceTagColumn: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, underline: { textDecorationLine: "underline" }, subscribeNowPressable: { marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" }, androidTextPadding: { paddingBottom: 2 }, orbsIcon: { marginRight: 4 }, disabled: { opacity: 0.5 } };
let closure_12 = createStyles.createStyles(obj2);
createStyles = fn(4636);
let closure_15 = createStyles.createStyles(() => {
  const discount = { backgroundColor: "rgba(46, 204, 113, 0.25)", flexDirection: "row", flexShrink: 1, borderRadius: nativeDefault.radii.xs - 1, paddingHorizontal: 6, marginLeft: 6, paddingTop: null, paddingBottom: null };
  let num;
  if (obj2.isAndroid()) {
    num = 0;
  }
  discount.paddingTop = num;
  obj2 = PlatformUtils;
  let num2;
  if (tmp2Result.isAndroid()) {
    num2 = 2;
  }
  discount.paddingBottom = num2;
  return { discount };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default function InlinePriceTag(arg0) {
  ({ product, onTrackPress: require } = arg0);
  const tmp = closure_12();
  importDefault = tmp;
  const currentUser = useCurrentUser.useCurrentUser();
  const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  dependencyMap = useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
  const isDisabled = useProductDisableState.useProductDisableState(product.skuId).isDisabled;
  const formattedPriceForCollectiblesProduct = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, false, true);
  const virtualCurrencyData = useVirtualCurrencyData.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  const items = [IAPStore];
  if (obj7.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus())) {
    if (null == formattedPriceForCollectiblesProduct) {
      return closure_9(tmp2(8986).CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp21 = null;
    if (null != virtualCurrencyData.price) {
      const obj8 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp21 = closure_9(OrbsPriceTag, obj8);
    }
    return tmp21;
  } else {
    const formattedPriceForCollectiblesProduct1 = tmp2(8973).getFormattedPriceForCollectiblesProduct(product, true, true);
    const tmp2Result = tmp2(8973);
    const obj9 = { style: tmp.container, children: null };
    const obj10 = { style: tmp.priceTagColumn, children: null };
    const obj11 = { style: tmp.priceTagRow, children: null };
    const obj12 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: canUseShopDiscountsResult ? tmp.strikedPrice : tmp.regularPrice, color: "interactive-text-active", accessibilityLabel: null };
    const intl = tmp2(1114).intl;
    const obj13 = { price: formattedPriceForCollectiblesProduct };
    obj12.accessibilityLabel = intl.formatToPlainString(tmp2(1114).t.sPvyr8, obj13);
    const items1 = [closure_9(PriceTag, obj12), , ];
    let tmp28Result = null;
    if (product.type === tmp2(1889).CollectiblesItemType.BUNDLE) {
      tmp28Result = null;
      if (!canUseShopDiscountsResult) {
        const obj14 = { discountPercentage: tmp2Result4.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage };
        tmp28Result = tmp28(BundleDiscountV2, obj14);
      }
    }
    items1[1] = tmp28Result;
    if (!(null != formattedPriceForCollectiblesProduct1 && canUseShopDiscountsResult)) {
      items1[2] = tmp12;
      obj11.children = items1;
      const items2 = [tmp26(tmp27, obj11), ];
      let tmp28Result5 = null != formattedPriceForCollectiblesProduct1 && !canUseShopDiscountsResult;
      if (tmp28Result5) {
        const obj15 = { style: tmp.priceTagRow, children: null };
        const obj16 = {
          onPress() {
                  if (require != null) {
                    tmp(ShopCtaEnum.SUBSCRIBE_NOW);
                  }
                  closure_2();
                },
          style: tmp.subscribeNowPressable,
          accessibilityRole: "button",
          children: null
        };
        const obj17 = { color: "interactive-text-default", style: null };
        const items3 = [, ];
        ({ nitroIcon: arr4[0], nitroIconSubscribeNow: arr4[1] } = tmp);
        obj17.style = items3;
        const items4 = [tmp28(tmp2(8785).NitroWheelIcon, obj17), ];
        let androidTextPadding;
        if (tmp2Result5.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        const obj18 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: null };
        const intl3 = tmp2(1114).intl;
        const obj19 = {
          price: formattedPriceForCollectiblesProduct1,
          subscribeNowHook(children, arg1) {
                  return React7(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
                }
        };
        obj18.children = intl3.format(tmp2(1114).t.Kxw2LT, obj19);
        items4[1] = tmp28(tmp2(4632).Text, obj18);
        obj16.children = items4;
        obj15.children = tmp26(closure_3, obj16);
        tmp28Result5 = tmp28(tmp27, obj15);
        tmp2Result5 = tmp2(1363);
      }
      items2[1] = tmp28Result5;
      obj10.children = items2;
      const items5 = [tmp26(tmp27, obj10), ];
      let tmp28Result6 = null != virtualCurrencyData.price;
      if (tmp28Result6) {
        const obj20 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
        tmp28Result6 = tmp28(OrbsPriceTag, obj20);
      }
      items5[1] = tmp28Result6;
      obj9.children = items5;
      return tmp26(tmp27, obj9);
    } else {
      const obj21 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      const intl2 = tmp2(1114).intl;
      const obj22 = { price: formattedPriceForCollectiblesProduct1 };
      obj21.accessibilityLabel = intl2.formatToPlainString(tmp2(1114).t.kWkpdG, obj22);
      let androidTextPadding1;
      if (tmp2Result6.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj21.style = androidTextPadding1;
      if (shopDiscountSource === tmp2(7657).ShopDiscountSource.THIRDPARTY) {
        const obj23 = { color: "interactive-text-active", style: tmp.nitroIcon };
        let tmp28Result7 = tmp28(tmp2(8987).TagIcon, obj23);
      } else {
        const obj24 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp28Result7 = tmp28(tmp2(8785).NitroWheelIcon, obj24);
      }
      obj21.icon = tmp28Result7;
      tmp28(tmp29, obj21);
      tmp2Result6 = tmp2(1363);
    }
    tmp2Result4 = tmp2(7657);
  }
};
