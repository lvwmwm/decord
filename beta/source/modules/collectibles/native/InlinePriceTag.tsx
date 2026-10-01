// Module ID: 12718
// Function ID: 12719
// Name: InlinePriceTag
// Dependencies: [19, 17, 6658, 1076, 1074, 21, 4836, 576, 4832, 1974, 6973, 6974, 8298, 1115, 672, 4531, 4800, 12719, 1981, 6603, 5293, 1364, 8122, 6630, 7623, 4488, 12722, 8334, 12723, 8313, 12724, 504, 8326, 8327, 2]
// Exports: default

// Module 12718 (InlinePriceTag)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import intl3 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import useToken from "useToken" /* 4531 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6973 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import useCurrentUser from "useCurrentUser" /* 7623 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 8122 */;
import OrbsIcon from "OrbsIcon" /* 8298 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8313 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 8326 */;
import useProductDisableState from "useProductDisableState" /* 8334 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 12722 */;
import MobileNitroUpsellInShopPdpExperimentDefault from "MobileNitroUpsellInShopPdpExperiment" /* 12723 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 12724 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import IAPStore from "IAPStore" /* 6658 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let c10;
let c3;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
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
    variant = "text-md/medium";
  }
  const accessibilityLabel = color.accessibilityLabel;
  const obj = { children: items };
  items = [icon, ];
  const obj2 = { variant, style: items1, color: str, accessibilityLabel, children: priceFormatted };
  items1 = [closure_12().priceTag, style];
  closure_12();
  items[1] = React4(Text_Text.Text, obj2);
  return unpackModuleId(authStore, obj);
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
  const tmp = closure_12();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      const tmp17Result = CollectiblesProductUtils;
      result = tmp17Result.isOrbsExclusiveProduct(product);
    }
    const tmp17Result2 = CollectiblesUtils;
    const productDiscount = tmp17Result2.getProductDiscount(product, eligibleForShopDiscount, metroImportAll.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= tmp17(6974).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    const items = [tmp.priceTagRow, ];
    const canAfford = vcData.canAfford;
    let disabled = !canAfford;
    const tmp5 = unpackModuleId;
    const tmp6 = React3;
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
      const obj2 = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp.strikedOrbPrice, icon: React4(OrbsIcon.OrbsIcon, obj3), accessibilityLabel: formatToPlainString(QfcKZ5, obj4) };
      obj3 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      const intl = tmp17(1115).intl;
      formatToPlainString = intl.formatToPlainString;
      obj4 = { orbAmount: original.toString() };
      QfcKZ5 = tmp17(1115).t.QfcKZ5;
      tmp7 = React4(PriceTag, obj2);
    }
    items1 = [tmp7, , ];
    const obj5 = { priceFormatted: str.toString(), variant: "text-md/semibold", icon: tmp10Result, accessibilityLabel: formatToPlainString2Result };
    tmp10Result = undefined;
    str = vcData.price.amount;
    const tmp11 = PriceTag;
    if (!result) {
      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = tmp10(tmp17(8298).OrbsIcon, obj6);
    }
    const intl2 = tmp17(1115).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t = tmp17(1115).t;
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
    items1[1] = React4(tmp11, obj5);
    let tmp10Result2 = null;
    if (result) {
      const obj9 = { discountPercentage };
      tmp10Result2 = tmp10(BundleDiscountV2, obj9);
    }
    items1[2] = tmp10Result2;
    return tmp5(tmp6, obj);
  }
}
function ExpressiveNitroUpsell(arg0) {
  let defaultPriceFormatted;
  let intl;
  let intl2;
  let items;
  let items1;
  let items3;
  let obj6;
  let premiumPriceFormatted;
  ({ onTrackPress: require, handleNitroSubscribe: importDefault, showActionSheet: dependencyMap } = arg0);
  ({ defaultPriceFormatted, premiumPriceFormatted } = arg0);
  const tmp = closure_12();
  const strikedPrice = tmp;
  let tmp4 = _modDef672;
  let obj = useToken;
  const tmp4Result = tmp4(obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
  const alphaResult = tmp4Result.alpha(0.4);
  const hexResult = alphaResult.hex();
  const tmp7 = _modDef672;
  const obj4 = useToken;
  let tmp9 = closure_11;
  let tmp11 = closure_9;
  const obj2 = {
    onPress() {
      let intl;
      let intl2;
      let items;
      if (require != null) {
        tmp(ShopCtaEnum.SUBSCRIBE_NOW);
      }
      const tmp4 = dependencyMap;
      if (tmp4) {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const tmp11 = asyncRequire(12719, dependencyMap.paths);
        const obj = { analyticsLocations: items, title: intl.string(intl3.t.XcOMLu), description: intl2.string(intl3.t.JhE8nA) };
        items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP_DETAILS_MODAL];
        intl = intl3.intl;
        intl2 = intl3.intl;
        openLazy(tmp11, "ShopNitroUpsellPromoSheet", obj, "stack");
      } else {
        importDefault();
      }
    },
    style: tmp.nitroUpsellPill,
    accessibilityRole: "button",
    children: items1
  };
  const tmp7Result = tmp7(obj4.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
  const alphaResult1 = tmp7Result.alpha(0.4);
  const obj3 = { style: tmp.nitroUpsellGradient, colors: items, start, end, pointerEvents: "none" };
  items = [hexResult, alphaResult1.hex()];
  items1 = [, , ];
  alphaResult1.hex();
  items1[0] = closure_9(LinearGradientDefault, obj3);
  const items2 = [tmp.nitroUpsellSavings, ];
  const Text = Text_Text.Text;
  let androidTextPadding;
  const obj9 = PlatformUtils;
  const tmp10 = strikedPrice;
  if (obj9.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  items2[1] = androidTextPadding;
  const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: items2, children: intl.format(intl3.t.TWtV8E, obj6) };
  intl = tmp5(1115).intl;
  obj6 = {
    defaultPrice: defaultPriceFormatted,
    premiumPrice: premiumPriceFormatted,
    defaultPriceHook(children, arg1) {
      const obj = { variant: "text-sm/medium", color: "text-subtle", style: strikedPrice.strikedPrice, children };
      return React4(Text_Text.Text, obj, arg1);
    },
    premiumPriceHook(children, arg1) {
      const obj = { variant: "text-sm/semibold", color: "interactive-text-active", children };
      return closure_1_9(Text_Text.Text, obj, arg1);
    }
  };
  items1[1] = tmp11(Text, obj5);
  const obj7 = { style: tmp.nitroUpsellCta, children: items3 };
  const obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm", style: tmp.nitroUpsellIcon };
  const NitroWheelIcon = tmp5(8122).NitroWheelIcon;
  items3 = [tmp11(NitroWheelIcon, obj8), , ];
  const Text2 = tmp5(4832).Text;
  let androidTextPadding1;
  const tmp13 = closure_4;
  const tmp5Result = PlatformUtils;
  if (tmp5Result.isAndroid()) {
    androidTextPadding1 = tmp.androidTextPadding;
  }
  const obj10 = { variant: "text-sm/medium", color: "interactive-text-active", style: androidTextPadding1, children: intl2.string(intl3.t["8x0jKT"]) };
  intl2 = tmp5(1115).intl;
  items3[1] = tmp11(Text2, obj10);
  const obj11 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "xs", style: tmp.nitroUpsellChevron };
  const ChevronSmallRightIcon = tmp5(6630).ChevronSmallRightIcon;
  items3[2] = tmp11(ChevronSmallRightIcon, obj11);
  items1[2] = tmp9(tmp13, obj7);
  return tmp9(tmp10, obj2);
}
function NitroUpsell(premiumPriceFormatted) {
  let intl;
  let items;
  let items1;
  let obj5;
  let underline;
  ({ onTrackPress: require, handleNitroSubscribe: importDefault } = premiumPriceFormatted);
  premiumPriceFormatted = premiumPriceFormatted.premiumPriceFormatted;
  const tmp = closure_12();
  dependencyMap = tmp;
  let obj = {
    onPress() {
      if (require != null) {
        tmp(ShopCtaEnum.SUBSCRIBE_NOW);
      }
      importDefault();
    },
    style: tmp.subscribeNowPressable,
    accessibilityRole: "button",
    children: items1
  };
  const obj2 = { color: "interactive-text-default", style: items };
  items = [, ];
  ({ nitroIcon: arr[0], nitroIconSubscribeNow: arr[1] } = tmp);
  items1 = [closure_9(NitroWheelIcon2.NitroWheelIcon, obj2), ];
  const Text = Text_Text.Text;
  let androidTextPadding;
  const obj3 = PlatformUtils;
  const tmp2 = closure_11;
  const tmp3 = closure_3;
  const tmp4 = closure_9;
  if (obj3.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  const obj4 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: intl.format(intl3.t.Kxw2LT, obj5) };
  intl = tmp5(1115).intl;
  obj5 = {
    price: premiumPriceFormatted,
    subscribeNowHook(children, arg1) {
      const obj = { variant: "text-md/normal", style: underline.underline, children };
      return React4(Text_Text.Text, obj, arg1);
    }
  };
  items1[1] = tmp4(Text, obj4);
  return tmp2(tmp3, obj);
}
function BundleDiscountV2(discountPercentage) {
  let items;
  let obj2;
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  const tmp = closure_19();
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    const obj = { style: tmp.discount, children: unpackModuleId(Text_Text.Text, obj2) };
    obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: items };
    items = ["-", discountPercentage, "%"];
    tmp4 = React4(React3, obj);
  }
  return tmp4;
}
({ Pressable: c3, View: closure_4, StyleSheet } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
({ AnalyticsSections: metroImportDefault, CurrencyCodes: metroImportAll } = Constants);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, root: { flexDirection: "column" }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, nitroUpsellPill: obj2, nitroUpsellGradient: obj3, nitroUpsellSavings: obj4, nitroUpsellCta: { flexDirection: "row", alignItems: "center", flexShrink: 0 }, nitroUpsellIcon: { width: 16, height: 16, marginRight: 4 }, nitroUpsellChevron: { marginLeft: 2 }, underline: { textDecorationLine: "underline" }, subscribeNowPressable: obj5, androidTextPadding: { paddingBottom: 2 }, orbsIcon: { marginRight: 4 }, disabled: { opacity: 0.5 } };
obj2 = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.round, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { opacity: 0.6 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flexShrink: 1, marginRight: nativeDefault.space.PX_8 };
obj5 = { alignSelf: "flex-start", marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let closure_12 = createStyles(obj);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles(() => {
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

export default function InlinePriceTag(arg0) {
  let androidTextPadding;
  let enabled;
  let fetchingGoogleSkus;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj14;
  let obj17;
  let onTrackPress;
  let product;
  let showActionSheet;
  let tmp30Result5;
  ({ product, onTrackPress } = arg0);
  const tmp = closure_12();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = CollectiblesUtils;
  const shopDiscountSource = obj2.getShopDiscountSource(currentUser);
  const obj3 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj3.canUseShopDiscounts(currentUser);
  const tmp7 = useOpenNitroSubscribeActionSheetDefault(metroImportDefault.SHOP_PRODUCT_DETAILS);
  const obj4 = useProductDisableState;
  const isDisabled = obj4.useProductDisableState(product.skuId).isDisabled;
  const obj5 = MobileNitroUpsellInShopPdpExperimentDefault;
  const config = obj5.useConfig({ location: "InlinePriceTag" });
  ({ enabled, showActionSheet } = config);
  const obj6 = collectibles_CollectiblesUtils;
  const formattedPriceForCollectiblesProduct = obj6.getFormattedPriceForCollectiblesProduct(product, false, true);
  const obj7 = useVirtualCurrencyData;
  const virtualCurrencyData = obj7.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  const items = [IAPStore];
  const obj8 = get_initialized;
  if (obj8.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus())) {
    if (null == formattedPriceForCollectiblesProduct) {
      return React4(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp23 = null;
    if (null != virtualCurrencyData.price) {
      const obj9 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp23 = React4(OrbsPriceTag, obj9);
    }
    return tmp23;
  } else {
    const tmp2Result = collectibles_CollectiblesUtils;
    const formattedPriceForCollectiblesProduct1 = tmp2Result.getFormattedPriceForCollectiblesProduct(product, true, true);
    const obj10 = { style: tmp.root, children: items3 };
    const obj11 = { style: tmp.container, children: items2 };
    const obj12 = { style: tmp.priceTagRow, children: items1 };
    const obj13 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: canUseShopDiscountsResult ? tmp.strikedPrice : tmp.regularPrice, color: "interactive-text-active", accessibilityLabel: intl.formatToPlainString(intl3.t.sPvyr8, obj14) };
    const tmp2Result3 = CollectiblesUtils;
    const discountPercentage = tmp2Result3.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage;
    intl = tmp2(1115).intl;
    obj14 = { price: formattedPriceForCollectiblesProduct };
    items1 = [React4(PriceTag, obj13), , ];
    let tmp30Result = null;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp30Result = null;
      if (!canUseShopDiscountsResult) {
        const obj15 = { discountPercentage };
        tmp30Result = tmp30(BundleDiscountV2, obj15);
      }
    }
    items1[1] = tmp30Result;
    let tmp30Result6 = null != formattedPriceForCollectiblesProduct1 && canUseShopDiscountsResult;
    if (tmp30Result6) {
      const obj16 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: intl2.formatToPlainString(intl3.t.kWkpdG, obj17), style: androidTextPadding, icon: tmp30Result5 };
      intl2 = tmp2(1115).intl;
      androidTextPadding = undefined;
      obj17 = { price: formattedPriceForCollectiblesProduct1 };
      const tmp2Result4 = PlatformUtils;
      if (tmp2Result4.isAndroid()) {
        androidTextPadding = tmp.androidTextPadding;
      }
      if (shopDiscountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
        const obj18 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp30Result5 = tmp30(tmp2(8327).TagIcon, obj18);
      } else {
        const obj19 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp30Result5 = tmp30(tmp2(8122).NitroWheelIcon, obj19);
      }
      tmp30Result6 = tmp30(tmp31, obj16);
    }
    items1[2] = tmp30Result6;
    items2 = [unpackModuleId(React3, obj12), ];
    let tmp30Result7 = null != virtualCurrencyData.price;
    if (tmp30Result7) {
      const obj20 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp30Result7 = tmp30(OrbsPriceTag, obj20);
    }
    items2[1] = tmp30Result7;
    items3 = [unpackModuleId(React3, obj11), ];
    let tmp19 = null != formattedPriceForCollectiblesProduct1 && !canUseShopDiscountsResult;
    if (tmp19) {
      let tmp30Result8;
      if (enabled) {
        const obj21 = { defaultPriceFormatted: formattedPriceForCollectiblesProduct, premiumPriceFormatted: formattedPriceForCollectiblesProduct1, onTrackPress, handleNitroSubscribe: tmp7, showActionSheet };
        tmp30Result8 = tmp30(ExpressiveNitroUpsell, obj21);
      } else {
        const obj22 = { premiumPriceFormatted: formattedPriceForCollectiblesProduct1, onTrackPress, handleNitroSubscribe: tmp7 };
        tmp30Result8 = tmp30(NitroUpsell, obj22);
      }
      tmp19 = tmp30Result8;
    }
    items3[1] = tmp19;
    return unpackModuleId(React3, obj10);
  }
};
