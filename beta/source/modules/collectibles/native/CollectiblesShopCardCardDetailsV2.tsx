// Module ID: 8312
// Function ID: 8313
// Name: CollectiblesShopCardCardDetailsV2
// Dependencies: [19, 17, 6658, 1074, 21, 4836, 576, 8227, 6973, 8313, 6974, 8315, 8326, 4832, 1115, 8298, 1364, 8327, 8122, 7623, 4488, 4531, 4683, 8329, 504, 5293, 8330, 2]

// Module 8312 (CollectiblesShopCardCardDetailsV2)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import useToken from "useToken" /* 4531 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6973 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import useCurrentUser from "useCurrentUser" /* 7623 */;
import getProductName from "getProductName" /* 8329 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 6658 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let tmp4;
const CollectiblesShopCardVariantsDefault = tmp4(8330);
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
  let items5;
  let items6;
  let items8;
  let obj10;
  let obj12;
  let obj14;
  let obj15;
  let obj19;
  let obj6;
  let obj8;
  let preferVCPrice;
  let product;
  let styles;
  ({ product, hasShopDiscount } = arg0);
  ({ styles, collectibleProductState } = arg0);
  let memo;
  let balance;
  const tmp = hasShopDiscount;
  let tmp2 = memo;
  ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  let obj = hasShopDiscount(memo[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj2 = hasShopDiscount(memo[8]);
  const selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  const obj3 = hasShopDiscount(memo[9]);
  const formattedPriceForCollectiblesProduct = obj3.getFormattedPriceForCollectiblesProduct(selectedProduct, hasShopDiscount, true);
  const items = [selectedProduct, hasShopDiscount];
  memo = balance.useMemo(() => {
    const obj = CollectiblesProductUtils;
    const obj2 = { product: selectedProduct, hasShopDiscount };
    return obj.getProductOrbPrice(obj2);
  }, items);
  const items1 = [selectedProduct, hasShopDiscount];
  const memo1 = balance.useMemo(() => {
    const obj = CollectiblesUtils;
    return obj.getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage;
  }, items1);
  const items2 = [selectedProduct, hasShopDiscount];
  const memo2 = balance.useMemo(() => {
    const obj = CollectiblesUtils;
    return obj.getProductDiscount(selectedProduct, hasShopDiscount, metroRequire.DISCORD_ORB).discountPercentage;
  }, items2);
  const obj4 = hasShopDiscount(memo[11]);
  balance = obj4.useFetchVirtualCurrencyBalance().balance;
  const items3 = [balance, memo];
  const memo3 = balance.useMemo(() => {
    let tmp2 = null;
    if (null != memo) {
      tmp2 = null;
      if (null != balance) {
        tmp2 = tmp.amount <= tmp3;
      }
    }
    return tmp2;
  }, items3);
  if (isFetchingGoogleSkus) {
    if (null == formattedPriceForCollectiblesProduct) {
      return closure_8(tmp(tmp2[12]).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    const obj5 = { style: styles.priceDescription, children: closure_8(Text9, obj6) };
    obj6 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl6.string(tmp(tmp2[14]).t.BEjTij) };
    Text9 = tmp(tmp2[13]).Text;
    intl6 = tmp(tmp2[14]).intl;
    return closure_8(View, obj5);
  } else if ("purchased" === collectibleProductState) {
    const obj7 = { style: styles.priceDescription, children: closure_8(Text8, obj8) };
    obj8 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl5.string(tmp(tmp2[14]).t["6cfuDj"]) };
    Text8 = tmp(tmp2[13]).Text;
    intl5 = tmp(tmp2[14]).intl;
    return closure_8(View, obj7);
  } else if ("nitroUpsell" === collectibleProductState) {
    const obj9 = { style: styles.priceDescription, children: closure_8(Text7, obj10) };
    obj10 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl4.string(tmp(tmp2[14]).t.sEAnVH) };
    Text7 = tmp(tmp2[13]).Text;
    intl4 = tmp(tmp2[14]).intl;
    return closure_8(View, obj9);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj11 = { style: styles.priceDescription, children: closure_8(Text6, obj12) };
    obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl3.string(tmp(tmp2[14]).t.rt69oo) };
    Text6 = tmp(tmp2[13]).Text;
    intl3 = tmp(tmp2[14]).intl;
    return closure_8(View, obj11);
  } else {
    let tmp11Result;
    if (isDisabled) {
      const obj13 = { style: styles.priceDescription, children: closure_8(Text5, obj14) };
      obj14 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl2.string(tmp(tmp2[14]).t.wu4gyV) };
      Text5 = tmp(tmp2[13]).Text;
      intl2 = tmp(tmp2[14]).intl;
      tmp11Result = closure_8(View, obj13);
    } else {
      if (null != memo) {
        if (null != balance) {
          if (true !== preferVCPrice) {
            if (!memo3) {
              tmp11Result = tmp11(tmp12, obj15);
            }
          }
          const items4 = [styles.priceDescription, ];
          let num = 1;
          if (false === memo3) {
            num = 0.5;
          }
          obj15 = { style: items4, children: items5 };
          const obj16 = { opacity: num };
          items4[1] = obj16;
          const obj17 = { size: "xxs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          items5 = [closure_8(tmp(tmp2[15]).OrbsIcon, obj17), , ];
          const obj18 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityLabel: intl.formatToPlainString(tmp(tmp2[14]).t.W4DfeF, obj19), style: items6, children: memo.amount };
          const Text = tmp(tmp2[13]).Text;
          intl = tmp(tmp2[14]).intl;
          items6 = [styles.text, ];
          obj19 = { orbAmount: memo.amount };
          const tmpResult = tmp(tmp2[16]);
          items6[1] = tmpResult.isAndroid() && styles.androidTextPadding;
          tmpResult.isAndroid() && styles.androidTextPadding;
          items5[1] = closure_8(Text, obj18);
          let tmp14Result = memo2 >= tmp(tmp2[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
          if (tmp14Result) {
            const items7 = [, , ];
            ({ discountPercentage: arr8[0], text: arr8[1] } = styles);
            const Text2 = tmp(tmp2[13]).Text;
            let androidTextPadding;
            const tmpResult4 = tmp(tmp2[16]);
            if (tmpResult4.isAndroid()) {
              androidTextPadding = styles.androidTextPadding;
            }
            items7[2] = androidTextPadding;
            const _HermesInternal = HermesInternal;
            const obj20 = { style: items7, color: "text-feedback-positive", variant: "text-xs/semibold", lineClamp: 1, children: "-" + memo2 + "%" };
            tmp14Result = tmp14(Text2, obj20);
          }
          items5[2] = tmp14Result;
        }
      }
      let tmp19 = hasShopDiscount;
      const obj21 = { style: styles.priceDescription, children: items8 };
      if (tmp19) {
        let tmp21;
        if (discountSource === tmp(tmp2[10]).ShopDiscountSource.THIRDPARTY) {
          const obj22 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          tmp21 = closure_8(tmp(tmp2[17]).TagIcon, obj22);
        } else {
          const obj23 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          tmp21 = closure_8(tmp(tmp2[18]).NitroWheelIcon, obj23);
        }
        tmp19 = tmp21;
      }
      items8 = [tmp19, , ];
      const items9 = [styles.text, ];
      const Text3 = tmp(tmp2[13]).Text;
      const tmpResult5 = tmp(tmp2[16]);
      const obj24 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items9, children: formattedPriceForCollectiblesProduct };
      items9[1] = tmpResult5.isAndroid() && styles.androidTextPadding;
      tmpResult5.isAndroid() && styles.androidTextPadding;
      items8[1] = closure_8(Text3, obj24);
      let tmp23Result = memo1 >= tmp(tmp2[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
      if (tmp23Result) {
        const items10 = [, , ];
        ({ discountPercentage: arr11[0], text: arr11[1] } = styles);
        const Text4 = tmp(tmp2[13]).Text;
        let androidTextPadding1;
        const tmpResult6 = tmp(tmp2[16]);
        if (tmpResult6.isAndroid()) {
          androidTextPadding1 = styles.androidTextPadding;
        }
        items10[2] = androidTextPadding1;
        const _HermesInternal2 = HermesInternal;
        const obj25 = { style: items10, color: "text-feedback-positive", variant: "text-xs/semibold", lineClamp: 1, children: "-" + memo1 + "%" };
        tmp23Result = tmp23(Text4, obj25);
      }
      items8[2] = tmp23Result;
      obj15 = obj21;
    }
    return tmp11Result;
  }
});
const unpackModuleId = memoResult;
memoResult.displayName = "PriceDescription";
const memoResult1 = react.memo(function CardDetailsV2(arg0) {
  let collectibleProductState;
  let fetchingGoogleSkus;
  let hidePrice;
  let isDisabled;
  let items1;
  let items2;
  let items3;
  let items4;
  let preferVCPrice;
  let product;
  ({ product, hidePrice } = arg0);
  ({ collectibleProductState, preferVCPrice, isDisabled } = arg0);
  const tmp = closure_10();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(currentUser);
  const obj3 = CollectiblesUtils;
  const shopDiscountSource = obj3.getShopDiscountSource(currentUser);
  const obj4 = useToken;
  const token = obj4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const hexToRgbaString = ColorUtils.hexToRgbaString;
  ColorUtils;
  const obj5 = ColorUtils;
  const hexToRgbaStringResult = hexToRgbaString(obj5.hexWithOpacity(token, 0.9));
  const hexToRgbaString2 = ColorUtils.hexToRgbaString;
  ColorUtils;
  const obj6 = ColorUtils;
  const hexToRgbaString2Result = hexToRgbaString2(obj6.hexWithOpacity(token, 0));
  const obj7 = getProductName;
  const cardProductName = obj7.getCardProductName(product);
  const items = [IAPStore];
  const obj8 = get_initialized;
  const stateFromStores = obj8.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const obj9 = { style: items1, colors: items2, locations: [0, 0.4, 1], start: metroImportDefault.START, end: metroImportDefault.END, children: items3 };
  items1 = [tmp.regularMetadataContainer];
  items2 = [hexToRgbaString2Result, hexToRgbaStringResult, token];
  items3 = [, ];
  const obj10 = { style: tmp.assetName, variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: cardProductName };
  const tmp15 = LinearGradientDefault;
  items3[0] = metroImportAll(Text_Text.Text, obj10);
  let tmp14Result = !hidePrice;
  if (tmp14Result) {
    const obj11 = { style: tmp.priceVariantsContainer, children: items4 };
    const obj12 = { product, hasShopDiscount: canUseShopDiscountsResult, discountSource: shopDiscountSource, styles: tmp, collectibleProductState, isFetchingGoogleSkus: stateFromStores, preferVCPrice, isDisabled };
    items4 = [metroImportAll(unpackModuleId, obj12), ];
    const obj13 = { product };
    items4[1] = metroImportAll(CollectiblesShopCardVariantsDefault, obj13);
    tmp14Result = tmp14(View, obj11);
  }
  items3[1] = tmp14Result;
  return React4(tmp15, obj9);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default memoResult1;
