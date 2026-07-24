// Module ID: 8759
// Function ID: 69201
// Name: memoResult1
// Dependencies: [31, 27, 5619, 653, 33, 4130, 689, 8705, 6785, 8760, 6786, 8763, 8769, 4126, 1212, 8749, 477, 7512, 7486, 8708, 8744, 1876, 3776, 3834, 3974, 8770, 566, 4554, 8771, 2]

// Module 8759 (memoResult1)
import importAllResult from "result";
import { View } from "LinearGradient";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ CurrencyCodes: closure_6, VerticalGradient: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = { position: "absolute", height: "45%", width: "100%", padding: 10, flex: 1, bottom: 0, overflow: "hidden", borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, display: "flex", flexDirection: "column", justifyContent: "flex-end" };
obj.regularMetadataContainer = obj;
obj.assetName = { marginBottom: 4 };
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.priceVariantsContainer = _createForOfIteratorHelperLoose;
obj.priceDescription = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
obj.text = { flexShrink: 1 };
obj.discountPercentage = { paddingLeft: 3 };
obj.wheelIcon = { marginTop: 0, marginRight: 3 };
obj.androidTextPadding = { paddingBottom: 2 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let collectibleProductState;
  let discountSource;
  let hasShopDiscount;
  let isDisabled;
  let isFetchingGoogleSkus;
  let preferVCPrice;
  let product;
  let styles;
  ({ product, hasShopDiscount } = arg0);
  ({ styles, collectibleProductState } = arg0);
  ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  let obj = hasShopDiscount(memo[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj1 = hasShopDiscount(memo[8]);
  const selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  let obj2 = hasShopDiscount(memo[9]);
  const formattedPriceForCollectiblesProduct = obj2.getFormattedPriceForCollectiblesProduct(selectedProduct, hasShopDiscount, true);
  const items = [selectedProduct, hasShopDiscount];
  memo = balance.useMemo(() => {
    let obj = hasShopDiscount(memo[8]);
    obj = { product: selectedProduct, hasShopDiscount };
    return obj.getProductOrbPrice(obj);
  }, items);
  const items1 = [selectedProduct, hasShopDiscount];
  const memo1 = balance.useMemo(() => hasShopDiscount(memo[10]).getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage, items1);
  const items2 = [selectedProduct, hasShopDiscount];
  const memo2 = balance.useMemo(() => hasShopDiscount(memo[10]).getProductDiscount(selectedProduct, hasShopDiscount, outer1_6.DISCORD_ORB).discountPercentage, items2);
  let obj3 = hasShopDiscount(memo[11]);
  balance = obj3.useFetchVirtualCurrencyBalance().balance;
  const items3 = [balance, memo];
  const memo3 = balance.useMemo(() => {
    let tmp = null;
    if (null != memo) {
      tmp = null;
      if (null != balance) {
        tmp = memo.amount <= balance;
      }
    }
    return tmp;
  }, items3);
  if (isFetchingGoogleSkus) {
    if (null == formattedPriceForCollectiblesProduct) {
      return callback(hasShopDiscount(memo[12]).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    obj = { style: styles.priceDescription };
    obj = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text };
    const intl6 = hasShopDiscount(memo[14]).intl;
    obj.children = intl6.string(hasShopDiscount(memo[14]).t.BEjTij);
    obj.children = callback(hasShopDiscount(memo[13]).Text, obj);
    return callback(View, obj);
  } else if ("purchased" === collectibleProductState) {
    obj1 = { style: styles.priceDescription };
    obj2 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text };
    const intl5 = hasShopDiscount(memo[14]).intl;
    obj2.children = intl5.string(hasShopDiscount(memo[14]).t["6cfuDj"]);
    obj1.children = callback(hasShopDiscount(memo[13]).Text, obj2);
    return callback(View, obj1);
  } else if ("nitroUpsell" === collectibleProductState) {
    obj3 = { style: styles.priceDescription };
    const obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text };
    const intl4 = hasShopDiscount(memo[14]).intl;
    obj4.children = intl4.string(hasShopDiscount(memo[14]).t.sEAnVH);
    obj3.children = callback(hasShopDiscount(memo[13]).Text, obj4);
    return callback(View, obj3);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj5 = { style: styles.priceDescription };
    const obj6 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text };
    const intl3 = hasShopDiscount(memo[14]).intl;
    obj6.children = intl3.string(hasShopDiscount(memo[14]).t.rt69oo);
    obj5.children = callback(hasShopDiscount(memo[13]).Text, obj6);
    return callback(View, obj5);
  } else {
    if (isDisabled) {
      const obj7 = { style: styles.priceDescription };
      const obj8 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text };
      const intl2 = hasShopDiscount(memo[14]).intl;
      obj8.children = intl2.string(hasShopDiscount(memo[14]).t.wu4gyV);
      obj7.children = callback(hasShopDiscount(memo[13]).Text, obj8);
      let tmp9Result = callback(View, obj7);
    } else {
      if (null != memo) {
        if (null != balance) {
          if (true !== preferVCPrice) {
            if (!memo3) {
              tmp9Result = tmp9(tmp10, obj9);
            }
          }
          obj9 = {};
          const items4 = [styles.priceDescription, ];
          const obj10 = {};
          let num = 1;
          if (false === memo3) {
            num = 0.5;
          }
          obj10.opacity = num;
          items4[1] = obj10;
          obj9.style = items4;
          let obj11 = { size: "xxs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          const items5 = [callback(hasShopDiscount(memo[15]).OrbsIcon, obj11), , ];
          const obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
          const intl = hasShopDiscount(memo[14]).intl;
          const obj13 = { orbAmount: memo.amount };
          obj12.accessibilityLabel = intl.formatToPlainString(hasShopDiscount(memo[14]).t.W4DfeF, obj13);
          const items6 = [styles.text, ];
          obj9 = hasShopDiscount(memo[16]);
          items6[1] = obj9.isAndroid() && styles.androidTextPadding;
          obj12.style = items6;
          obj12.children = memo.amount;
          items5[1] = callback(hasShopDiscount(memo[13]).Text, obj12);
          let tmp19Result = memo2 >= hasShopDiscount(memo[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
          if (tmp19Result) {
            const obj14 = { style: null, color: "text-feedback-positive", variant: "text-xs/semibold", lineClamp: 1 };
            const items7 = [, , ];
            ({ discountPercentage: arr8[0], text: arr8[1] } = styles);
            obj11 = hasShopDiscount(memo[16]);
            let androidTextPadding;
            if (obj11.isAndroid()) {
              androidTextPadding = styles.androidTextPadding;
            }
            items7[2] = androidTextPadding;
            obj14.style = items7;
            const _HermesInternal = HermesInternal;
            obj14.children = "-" + memo2 + "%";
            tmp19Result = callback(hasShopDiscount(memo[13]).Text, obj14);
            const tmp19 = callback;
          }
          items5[2] = tmp19Result;
          obj9.children = items5;
          const tmp12 = callback;
          const tmp15 = obj9.isAndroid() && styles.androidTextPadding;
        }
      }
      const obj15 = { style: styles.priceDescription };
      if (!hasShopDiscount) {
        const items8 = [hasShopDiscount, , ];
        let obj16 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
        const items9 = [styles.text, ];
        obj16 = hasShopDiscount(memo[16]);
        items9[1] = obj16.isAndroid() && styles.androidTextPadding;
        obj16.style = items9;
        obj16.children = formattedPriceForCollectiblesProduct;
        items8[1] = callback(hasShopDiscount(memo[13]).Text, obj16);
        let tmp42Result = memo1 >= hasShopDiscount(memo[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
        if (tmp42Result) {
          const obj17 = { style: null, color: "text-feedback-positive", variant: "text-xs/semibold", lineClamp: 1 };
          const items10 = [, , ];
          ({ discountPercentage: arr11[0], text: arr11[1] } = styles);
          let obj18 = hasShopDiscount(memo[16]);
          let androidTextPadding1;
          if (obj18.isAndroid()) {
            androidTextPadding1 = styles.androidTextPadding;
          }
          items10[2] = androidTextPadding1;
          obj17.style = items10;
          const _HermesInternal2 = HermesInternal;
          obj17.children = "-" + memo1 + "%";
          tmp42Result = callback(hasShopDiscount(memo[13]).Text, obj17);
          const tmp42 = callback;
        }
        items8[2] = tmp42Result;
        obj15.children = items8;
        obj9 = obj15;
        const tmp35 = callback;
        const tmp38 = obj16.isAndroid() && styles.androidTextPadding;
      } else if (discountSource === hasShopDiscount(memo[10]).ShopDiscountSource.THIRDPARTY) {
        obj18 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
        let tmp30 = callback(hasShopDiscount(memo[17]).TagIcon, obj18);
      } else {
        const obj19 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
        tmp30 = callback(hasShopDiscount(memo[18]).NitroWheelIcon, obj19);
      }
    }
    return tmp9Result;
  }
});
memoResult.displayName = "PriceDescription";
const memoResult1 = importAllResult.memo(function CardDetailsV2(product) {
  let collectibleProductState;
  let hidePrice;
  let isDisabled;
  let preferVCPrice;
  product = product.product;
  ({ collectibleProductState, preferVCPrice, isDisabled, hidePrice } = product);
  const tmp = callback3();
  let obj = require(8708) /* useCurrentUser */;
  const currentUser = obj.useCurrentUser();
  let obj1 = require(8744) /* isUserPaidTier2 */;
  let isProfileFramesEarlyAccessPhase = obj1.useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardCardDetailsV2");
  if (isProfileFramesEarlyAccessPhase) {
    let obj2 = require(6785) /* getProductOrbPrice */;
    const productType = obj2.getProductType(product);
    isProfileFramesEarlyAccessPhase = productType === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  let obj3 = importDefault(3776);
  const tmp7 = obj3.canUseShopDiscounts(currentUser) || isProfileFramesEarlyAccessPhase;
  const shopDiscountSource = require(6786) /* getPriceForCollectiblesProduct */.getShopDiscountSource(currentUser);
  const obj5 = require(6786) /* getPriceForCollectiblesProduct */;
  const token = require(3834) /* map */.useToken(importDefault(689).colors.BACKGROUND_BASE_LOW);
  const obj6 = require(3834) /* map */;
  const obj7 = require(3974) /* hexToRgb */;
  const obj8 = require(3974) /* hexToRgb */;
  const hexToRgbaStringResult = obj7.hexToRgbaString(require(3974) /* hexToRgb */.hexWithOpacity(token, 0.9));
  const obj9 = require(3974) /* hexToRgb */;
  const obj10 = require(3974) /* hexToRgb */;
  const hexToRgbaStringResult1 = obj9.hexToRgbaString(require(3974) /* hexToRgb */.hexWithOpacity(token, 0));
  const productName = require(8770) /* getProductName */.getProductName(product);
  const obj11 = require(8770) /* getProductName */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.isFetchingGoogleSkus());
  obj = { style: items1, colors: items2, locations: [0, 0.4, 1], start: constants.START, end: constants.END };
  items1 = [tmp.regularMetadataContainer];
  items2 = [hexToRgbaStringResult1, hexToRgbaStringResult, token];
  const obj12 = require(566) /* initialize */;
  const tmp14 = callback2;
  obj = { style: tmp.assetName, variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: productName };
  const items3 = [callback(require(4126) /* Text */.Text, obj), ];
  let tmp16 = !hidePrice;
  if (tmp16) {
    obj1 = { style: tmp.priceVariantsContainer };
    obj2 = { product, hasShopDiscount: tmp7, discountSource: shopDiscountSource, styles: tmp, collectibleProductState, isFetchingGoogleSkus: stateFromStores, preferVCPrice, isDisabled };
    const items4 = [callback(closure_11, obj2), ];
    obj3 = { product };
    items4[1] = callback(importDefault(8771), obj3);
    obj1.children = items4;
    tmp16 = callback2(View, obj1);
  }
  items3[1] = tmp16;
  obj.children = items3;
  return tmp14(importDefault(4554), obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default memoResult1;
