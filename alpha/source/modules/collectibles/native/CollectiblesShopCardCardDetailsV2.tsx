// Module ID: 9703
// Function ID: 9704
// Name: CollectiblesShopCardCardDetailsV2
// Dependencies: [19, 17, 7742, 1072, 21, 5143, 575, 9613, 7876, 9704, 9706, 9709, 7877, 9721, 5763, 1113, 9685, 1377, 9722, 9681, 8895, 2176, 5734, 5140, 9724, 9725, 504, 5725, 9726, 2]

// Module 9703 (CollectiblesShopCardCardDetailsV2)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import LinearGradientDefault from "LinearGradient" /* 5725 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7877 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 7742 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let tmp4;
const CollectiblesShopCardVariantsDefault = tmp4(9726);
const View = react_native.View;
({ CurrencyCodes: metroRequire, VerticalGradient: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { regularMetadataContainer: size, assetName: { marginBottom: 4 }, priceVariantsContainer: obj2, priceDescription: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, text: { flexShrink: 1 }, discountPercentage: { paddingLeft: 3 }, wheelIcon: { marginTop: 0, marginRight: 3 }, androidTextPadding: { paddingBottom: 2 } };
size = { position: "absolute", height: "45%", width: "100%", padding: 10, flex: 1, bottom: 0, overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "flex-end" };
createStyles = createStyles.createStyles;
obj2 = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let Text5;
  let Text6;
  let Text7;
  let Text8;
  let Text9;
  let canAfford;
  let collectibleProductState;
  let discountSource;
  let hasShopDiscount;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isDisabled;
  let isFetchingGoogleSkus;
  let items3;
  let items4;
  let items6;
  let obj11;
  let obj13;
  let obj15;
  let obj16;
  let obj20;
  let obj7;
  let obj9;
  let preferVCPrice;
  let price;
  let product;
  let styles;
  ({ product, hasShopDiscount } = arg0);
  ({ styles, collectibleProductState } = arg0);
  ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  let obj = hasShopDiscount(9613);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const obj2 = hasShopDiscount(7876);
  const selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  const obj3 = hasShopDiscount(9704);
  const formattedPriceForCollectiblesProduct = obj3.getFormattedPriceForCollectiblesProduct(selectedProduct, hasShopDiscount, true);
  const obj4 = hasShopDiscount(9706);
  const isFiatExclusiveTargetedOfferPromotion = obj4.useIsFiatExclusiveTargetedOfferPromotion(selectedProduct);
  const obj5 = hasShopDiscount(9709);
  const virtualCurrencyData = obj5.useVirtualCurrencyData(selectedProduct, hasShopDiscount);
  ({ price, canAfford } = virtualCurrencyData);
  const items = [selectedProduct, hasShopDiscount];
  const balance = virtualCurrencyData.balance;
  const memo = react.useMemo(() => {
    const obj = CollectiblesUtils;
    return obj.getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage;
  }, items);
  const items1 = [selectedProduct, hasShopDiscount];
  const memo1 = react.useMemo(() => {
    const obj = CollectiblesUtils;
    return obj.getProductDiscount(selectedProduct, hasShopDiscount, metroRequire.DISCORD_ORB).discountPercentage;
  }, items1);
  if (isFetchingGoogleSkus) {
    if (null == formattedPriceForCollectiblesProduct) {
      return closure_8(hasShopDiscount(9721).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    const obj6 = { style: styles.priceDescription, children: closure_8(Text9, obj7) };
    obj7 = { variant: "body-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl6.string(hasShopDiscount(1113).t.BEjTij) };
    Text9 = tmp(5763).Text;
    intl6 = tmp(1113).intl;
    return closure_8(View, obj6);
  } else if ("purchased" === collectibleProductState) {
    const obj8 = { style: styles.priceDescription, children: closure_8(Text8, obj9) };
    obj9 = { variant: "body-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl5.string(hasShopDiscount(1113).t["6cfuDj"]) };
    Text8 = tmp(5763).Text;
    intl5 = tmp(1113).intl;
    return closure_8(View, obj8);
  } else if ("nitroUpsell" === collectibleProductState) {
    const obj10 = { style: styles.priceDescription, children: closure_8(Text7, obj11) };
    obj11 = { variant: "body-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl4.string(hasShopDiscount(1113).t.sEAnVH) };
    Text7 = tmp(5763).Text;
    intl4 = tmp(1113).intl;
    return closure_8(View, obj10);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj12 = { style: styles.priceDescription, children: closure_8(Text6, obj13) };
    obj13 = { variant: "body-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl3.string(hasShopDiscount(1113).t.rt69oo) };
    Text6 = tmp(5763).Text;
    intl3 = tmp(1113).intl;
    return closure_8(View, obj12);
  } else {
    let tmp11Result;
    if (isDisabled) {
      const obj14 = { style: styles.priceDescription, children: closure_8(Text5, obj15) };
      obj15 = { variant: "body-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl2.string(hasShopDiscount(1113).t.wu4gyV) };
      Text5 = tmp(5763).Text;
      intl2 = tmp(1113).intl;
      tmp11Result = closure_8(View, obj14);
    } else {
      if (null != price) {
        if (null != balance) {
          if (true !== preferVCPrice) {
            if (true !== canAfford) {
              tmp11Result = tmp11(tmp12, obj16);
            }
          }
          const items2 = [styles.priceDescription, ];
          let num = 1;
          if (false === canAfford) {
            num = 0.5;
          }
          obj16 = { style: items2, children: items3 };
          const obj17 = { opacity: num };
          items2[1] = obj17;
          const obj18 = { size: "xxs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          items3 = [closure_8(hasShopDiscount(9685).OrbsIcon, obj18), , ];
          const obj19 = { variant: "body-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityLabel: intl.formatToPlainString(hasShopDiscount(1113).t.W4DfeF, obj20), style: items4, children: price.amount };
          const Text = tmp(5763).Text;
          intl = tmp(1113).intl;
          items4 = [styles.text, ];
          obj20 = { orbAmount: price.amount };
          const tmpResult = hasShopDiscount(1377);
          items4[1] = tmpResult.isAndroid() && styles.androidTextPadding;
          tmpResult.isAndroid() && styles.androidTextPadding;
          items3[1] = closure_8(Text, obj19);
          let tmp14Result = memo1 >= tmp(7877).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
          if (tmp14Result) {
            const items5 = [, , ];
            ({ discountPercentage: arr6[0], text: arr6[1] } = styles);
            const Text2 = tmp(5763).Text;
            let androidTextPadding;
            const tmpResult4 = hasShopDiscount(1377);
            if (tmpResult4.isAndroid()) {
              androidTextPadding = styles.androidTextPadding;
            }
            items5[2] = androidTextPadding;
            const _HermesInternal = HermesInternal;
            const obj21 = { style: items5, color: "text-feedback-positive", variant: "body-xs/semibold", lineClamp: 1, children: "-" + memo1 + "%" };
            tmp14Result = tmp14(Text2, obj21);
          }
          items3[2] = tmp14Result;
        }
      }
      let tmp19 = hasShopDiscount;
      const obj22 = { style: styles.priceDescription, children: items6 };
      if (tmp19) {
        let tmp21;
        if (discountSource === hasShopDiscount(7877).ShopDiscountSource.THIRDPARTY) {
          const obj23 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          tmp21 = closure_8(tmp(9722).TagIcon, obj23);
        } else {
          const obj24 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          tmp21 = closure_8(tmp(9681).NitroWheelIcon, obj24);
        }
        tmp19 = tmp21;
      }
      items6 = [tmp19, , ];
      const items7 = [styles.text, ];
      const Text3 = tmp(5763).Text;
      const tmpResult5 = hasShopDiscount(1377);
      const obj25 = { variant: "body-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items7, children: formattedPriceForCollectiblesProduct };
      items7[1] = tmpResult5.isAndroid() && styles.androidTextPadding;
      tmpResult5.isAndroid() && styles.androidTextPadding;
      items6[1] = closure_8(Text3, obj25);
      let tmp23Result = memo >= tmp(7877).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
      if (tmp23Result) {
        const items8 = [, , ];
        ({ discountPercentage: arr9[0], text: arr9[1] } = styles);
        const Text4 = tmp(5763).Text;
        let androidTextPadding1;
        const tmpResult6 = hasShopDiscount(1377);
        if (tmpResult6.isAndroid()) {
          androidTextPadding1 = styles.androidTextPadding;
        }
        items8[2] = androidTextPadding1;
        const _HermesInternal2 = HermesInternal;
        const obj26 = { style: items8, color: "text-feedback-positive", variant: "body-xs/semibold", lineClamp: 1, children: "-" + memo + "%" };
        tmp23Result = tmp23(Text4, obj26);
      }
      items6[2] = tmp23Result;
      obj16 = obj22;
    }
    return tmp11Result;
  }
});
const unpackModuleId = memoResult;
memoResult.displayName = "PriceDescription";
const memoResult1 = react.memo(function CardDetailsV2(arg0) {
  let collectibleProductState;
  let hidePrice;
  let isDisabled;
  let items2;
  let items3;
  let items4;
  let preferVCPrice;
  let product;
  ({ product, hidePrice } = arg0);
  let isInImprovedMobileShopLoading;
  ({ collectibleProductState, preferVCPrice, isDisabled } = arg0);
  const tmp = closure_10();
  const obj = isInImprovedMobileShopLoading(8895);
  const currentUser = obj.useCurrentUser();
  const obj2 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(currentUser);
  const obj3 = isInImprovedMobileShopLoading(7877);
  const shopDiscountSource = obj3.getShopDiscountSource(currentUser);
  const obj4 = isInImprovedMobileShopLoading(5734);
  const token = obj4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const hexToRgbaString = isInImprovedMobileShopLoading(5140).hexToRgbaString;
  isInImprovedMobileShopLoading(5140);
  const obj5 = isInImprovedMobileShopLoading(5140);
  const hexToRgbaStringResult = hexToRgbaString(obj5.hexWithOpacity(token, 0.9));
  const hexToRgbaString2 = isInImprovedMobileShopLoading(5140).hexToRgbaString;
  isInImprovedMobileShopLoading(5140);
  const obj6 = isInImprovedMobileShopLoading(5140);
  const hexToRgbaString2Result = hexToRgbaString2(obj6.hexWithOpacity(token, 0));
  const obj7 = isInImprovedMobileShopLoading(9724);
  const cardProductName = obj7.getCardProductName(product);
  const obj8 = isInImprovedMobileShopLoading(9725);
  isInImprovedMobileShopLoading = obj8.useIsInImprovedMobileShopLoading();
  const items = [IAPStore];
  const items1 = [isInImprovedMobileShopLoading];
  const obj9 = isInImprovedMobileShopLoading(504);
  const stateFromStores = obj9.useStateFromStores(items, () => {
    const isFetchingGoogleSkusResult = !isInImprovedMobileShopLoading && IAPStore.isFetchingGoogleSkus();
    return isFetchingGoogleSkusResult;
  }, items1);
  const obj10 = { style: tmp.regularMetadataContainer, colors: items2, locations: [0, 0.4, 1], start: constants2.START, end: constants2.END, children: items3 };
  items2 = [hexToRgbaString2Result, hexToRgbaStringResult, token];
  items3 = [, ];
  const obj11 = { style: tmp.assetName, variant: "heading-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: cardProductName };
  const tmp16 = LinearGradientDefault;
  items3[0] = closure_8(isInImprovedMobileShopLoading(5763).Text, obj11);
  let tmp15Result = !hidePrice;
  if (tmp15Result) {
    const obj12 = { style: tmp.priceVariantsContainer, children: items4 };
    const obj13 = { product, hasShopDiscount: canUseShopDiscountsResult, discountSource: shopDiscountSource, styles: tmp, collectibleProductState, isFetchingGoogleSkus: stateFromStores, preferVCPrice, isDisabled };
    items4 = [closure_8(closure_11, obj13), ];
    const obj14 = { product };
    items4[1] = closure_8(CollectiblesShopCardVariantsDefault, obj14);
    tmp15Result = tmp15(View, obj12);
  }
  items3[1] = tmp15Result;
  return closure_9(tmp16, obj10);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default memoResult1;
