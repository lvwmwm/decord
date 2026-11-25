// Module ID: 11251
// Function ID: 11252
// Name: InlinePriceTag
// Dependencies: [19, 17, 9062, 1071, 21, 5012, 5603, 2112, 6291, 6292, 9423, 1112, 9373, 2173, 11252, 11199, 11209, 504, 11217, 1378, 11031, 9595, 11253, 575, 2]
// Exports: default

// Module 11251 (InlinePriceTag)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2112 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2173 */;
import Text_Text from "Text/Text" /* 5603 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6291 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6292 */;
import useCurrentUser from "useCurrentUser" /* 9373 */;
import OrbsIcon from "OrbsIcon" /* 9423 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 11199 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 11209 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 11217 */;
import useProductDisableState from "useProductDisableState" /* 11252 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 9062 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp6;
const ExpressiveNitroUpsellDefault = tmp6(11253);
function PriceTag(color) {
  let icon;
  let items;
  let items1;
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
    variant = "body-md/medium";
  }
  const accessibilityLabel = color.accessibilityLabel;
  const obj = { children: items };
  items = [icon, ];
  const obj2 = { variant, style: items1, color: str, accessibilityLabel, children: priceFormatted };
  items1 = [closure_9().priceTag, style];
  closure_9();
  items[1] = metroRequire(Text_Text.Text, obj2);
  return metroImportAll(metroImportDefault, obj);
}
function OrbsPriceTag(arg0) {
  let QfcKZ5;
  let discountPercentage;
  let eligibleForShopDiscount;
  let formatToPlainString;
  let formatToPlainString2Result;
  let isProductDisabled;
  let items1;
  let obj3;
  let obj4;
  let original;
  let product;
  let str;
  let str2;
  let str3;
  let tmp10Result;
  let vcData;
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = closure_9();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      const tmp17Result = CollectiblesProductUtils;
      result = tmp17Result.isOrbsExclusiveProduct(product);
    }
    const tmp17Result2 = CollectiblesUtils;
    const productDiscount = tmp17Result2.getProductDiscount(product, eligibleForShopDiscount, CurrencyCodes.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= tmp17(6292).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    const items = [tmp.priceTagRow, ];
    const canAfford = vcData.canAfford;
    let disabled = !canAfford;
    const tmp5 = metroImportAll;
    const tmp6 = View;
    if (canAfford) {
      disabled = isProductDisabled;
    }
    if (disabled) {
      disabled = tmp.disabled;
    }
    const obj = { style: items, children: items1 };
    items[1] = disabled;
    let tmp7 = result;
    if (tmp7) {
      const obj2 = { priceFormatted: original.toString(), variant: "body-md/medium", style: tmp.strikedOrbPrice, icon: metroRequire(OrbsIcon.OrbsIcon, obj3), accessibilityLabel: formatToPlainString(QfcKZ5, obj4) };
      obj3 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      const intl = tmp17(1112).intl;
      formatToPlainString = intl.formatToPlainString;
      obj4 = { orbAmount: original.toString() };
      QfcKZ5 = tmp17(1112).t.QfcKZ5;
      tmp7 = metroRequire(PriceTag, obj2);
    }
    items1 = [tmp7, , ];
    const obj5 = { priceFormatted: str.toString(), variant: "body-md/semibold", icon: tmp10Result, accessibilityLabel: formatToPlainString2Result };
    tmp10Result = undefined;
    str = vcData.price.amount;
    const tmp11 = PriceTag;
    if (!result) {
      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = tmp10(tmp17(9423).OrbsIcon, obj6);
    }
    const intl2 = tmp17(1112).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t = tmp17(1112).t;
    if (result) {
      const ckguyq = t.ckguyq;
      const obj7 = { orbAmount: str3.toString(), discountPercentage };
      str3 = vcData.price.amount;
      formatToPlainString2Result = formatToPlainString2(ckguyq, obj7);
    } else {
      const prop = t["a/Y8PK"];
      const obj8 = { orbAmount: str2.toString() };
      str2 = vcData.price.amount;
      formatToPlainString2Result = formatToPlainString2(prop, obj8);
    }
    items1[1] = metroRequire(tmp11, obj5);
    let tmp10Result2 = null;
    if (result) {
      const obj9 = { discountPercentage };
      tmp10Result2 = tmp10(BundleDiscountV2, obj9);
    }
    items1[2] = tmp10Result2;
    return tmp5(tmp6, obj);
  }
}
function BundleDiscountV2(discountPercentage) {
  let items;
  let obj2;
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  const tmp = closure_12();
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    const obj = { style: tmp.discount, children: metroImportAll(Text_Text.Text, obj2) };
    obj2 = { variant: "body-md/normal", color: "text-feedback-positive", children: items };
    items = ["-", discountPercentage, "%"];
    tmp4 = metroRequire(View, obj);
  }
  return tmp4;
}
const View = react_native.View;
const CurrencyCodes = Constants.CurrencyCodes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles({ priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, root: { flexDirection: "column" }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, androidTextPadding: { paddingBottom: 2 }, orbsIcon: { marginRight: 4 }, disabled: { opacity: 0.5 } });
createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles(() => {
  let num;
  let num2;
  const discount = { backgroundColor: "rgba(46, 204, 113, 0.25)", flexDirection: "row", flexShrink: 1, borderRadius: nativeDefault.radii.xs - 1, paddingHorizontal: 6, marginLeft: 6, paddingTop: num, paddingBottom: num2 };
  num = undefined;
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    num = 0;
  }
  num2 = undefined;
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    num2 = 2;
  }
  return { discount };
});
let result = size.fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default function InlinePriceTag(product) {
  let androidTextPadding;
  let fetchingGoogleSkus;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj16;
  let tmp26Result5;
  product = product.product;
  const onTrackPress = product.onTrackPress;
  const tmp = closure_9();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = CollectiblesUtils;
  const shopDiscountSource = obj2.getShopDiscountSource(currentUser);
  const obj3 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj3.canUseShopDiscounts(currentUser);
  const obj4 = useProductDisableState;
  const isDisabled = obj4.useProductDisableState(product.skuId).isDisabled;
  const obj5 = collectibles_CollectiblesUtils;
  const formattedPriceForCollectiblesProduct = obj5.getFormattedPriceForCollectiblesProduct(product, false, true);
  const obj6 = useVirtualCurrencyData;
  const virtualCurrencyData = obj6.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  const items = [IAPStore];
  const obj7 = get_initialized;
  if (obj7.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus())) {
    if (null == formattedPriceForCollectiblesProduct) {
      return metroRequire(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp19 = null;
    if (null != virtualCurrencyData.price) {
      const obj8 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp19 = metroRequire(OrbsPriceTag, obj8);
    }
    return tmp19;
  } else {
    const tmp2Result = collectibles_CollectiblesUtils;
    const formattedPriceForCollectiblesProduct1 = tmp2Result.getFormattedPriceForCollectiblesProduct(product, true, true);
    const obj10 = { style: tmp.container, children: items2 };
    const obj11 = { style: tmp.priceTagRow, children: items1 };
    const obj9 = { style: tmp.root, children: items3 };
    const obj12 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-sm/semibold", style: canUseShopDiscountsResult ? tmp.strikedPrice : tmp.regularPrice, color: "interactive-text-active", accessibilityLabel: intl.formatToPlainString(intl3.t.sPvyr8, obj13) };
    const tmp2Result3 = CollectiblesUtils;
    const discountPercentage = tmp2Result3.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage;
    intl = tmp2(1112).intl;
    obj13 = { price: formattedPriceForCollectiblesProduct };
    items1 = [metroRequire(PriceTag, obj12), , ];
    let tmp26Result = null;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp26Result = null;
      if (!canUseShopDiscountsResult) {
        const obj14 = { discountPercentage };
        tmp26Result = tmp26(BundleDiscountV2, obj14);
      }
    }
    items1[1] = tmp26Result;
    let tmp26Result6 = null != formattedPriceForCollectiblesProduct1 && canUseShopDiscountsResult;
    if (tmp26Result6) {
      const obj15 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "body-md/medium", color: "interactive-text-active", accessibilityLabel: intl2.formatToPlainString(intl3.t.kWkpdG, obj16), style: androidTextPadding, icon: tmp26Result5 };
      intl2 = tmp2(1112).intl;
      androidTextPadding = undefined;
      obj16 = { price: formattedPriceForCollectiblesProduct1 };
      const tmp2Result4 = PlatformUtils;
      if (tmp2Result4.isAndroid()) {
        androidTextPadding = tmp.androidTextPadding;
      }
      if (shopDiscountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
        const obj17 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp26Result5 = tmp26(tmp2(11031).TagIcon, obj17);
      } else {
        const obj18 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp26Result5 = tmp26(tmp2(9595).NitroWheelIcon, obj18);
      }
      tmp26Result6 = tmp26(tmp27, obj15);
    }
    items1[2] = tmp26Result6;
    items2 = [metroImportAll(View, obj11), ];
    let tmp26Result7 = null != virtualCurrencyData.price;
    if (tmp26Result7) {
      const obj19 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp26Result7 = tmp26(OrbsPriceTag, obj19);
    }
    items2[1] = tmp26Result7;
    items3 = [metroImportAll(View, obj10), ];
    let tmp26Result8 = null != formattedPriceForCollectiblesProduct1 && !canUseShopDiscountsResult;
    if (tmp26Result8) {
      const obj20 = { defaultPriceFormatted: formattedPriceForCollectiblesProduct, premiumPriceFormatted: formattedPriceForCollectiblesProduct1, onTrackPress };
      tmp26Result8 = tmp26(ExpressiveNitroUpsellDefault, obj20);
    }
    items3[1] = tmp26Result8;
    return metroImportAll(View, obj9);
  }
};
