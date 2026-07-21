// Module ID: 8710
// Function ID: 68930
// Name: memoResult1
// Dependencies: []

// Module 8710 (memoResult1)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ CurrencyCodes: closure_6, VerticalGradient: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { "Null": "<string:1895825897>", "Null": "Array", "Null": "<string:1798673>", "Null": "<string:19660800>", "Null": "<string:1162936320>", "Null": "<string:3446620741>", "Null": "<string:1932197889>", "Null": "Array", "Null": "s", "Null": 1090519041, "Null": 133535, "Null": -1791799039, borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.sm };
obj.regularMetadataContainer = obj;
obj.assetName = { marginBottom: 4 };
obj1 = { gap: importDefault(dependencyMap[6]).space.PX_4 };
obj.priceVariantsContainer = obj1;
obj.priceDescription = { positionBottom: null, positionRight: 0, text: 360, state: 0 };
obj.text = { flexShrink: 1 };
obj.discountPercentage = { paddingLeft: 3 };
obj.wheelIcon = { iconPosition: 2, style: "text-sm/semibold" };
obj.androidTextPadding = { paddingBottom: 2 };
let closure_10 = obj1.createStyles(obj);
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
  const arg1 = hasShopDiscount;
  ({ styles, collectibleProductState } = arg0);
  ({ discountSource, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  let obj = arg1(dependencyMap[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj1 = arg1(dependencyMap[8]);
  const selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  const importDefault = selectedProduct;
  let obj2 = arg1(dependencyMap[9]);
  const formattedPriceForCollectiblesProduct = obj2.getFormattedPriceForCollectiblesProduct(selectedProduct, hasShopDiscount, true);
  const items = [selectedProduct, hasShopDiscount];
  const memo = importAllResult.useMemo(() => {
    let obj = hasShopDiscount(memo[8]);
    obj = { product: selectedProduct, hasShopDiscount };
    return obj.getProductOrbPrice(obj);
  }, items);
  const dependencyMap = memo;
  const items1 = [selectedProduct, hasShopDiscount];
  const memo1 = importAllResult.useMemo(() => hasShopDiscount(memo[10]).getProductDiscount(selectedProduct, hasShopDiscount).discountPercentage, items1);
  const items2 = [selectedProduct, hasShopDiscount];
  const memo2 = importAllResult.useMemo(() => hasShopDiscount(memo[10]).getProductDiscount(selectedProduct, hasShopDiscount, constants.DISCORD_ORB).discountPercentage, items2);
  let obj3 = arg1(dependencyMap[11]);
  const balance = obj3.useFetchVirtualCurrencyBalance().balance;
  const items3 = [balance, memo];
  const memo3 = importAllResult.useMemo(() => {
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
      return callback(arg1(dependencyMap[12]).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    obj = { style: styles.priceDescription };
    obj = { style: styles.text };
    const intl6 = arg1(dependencyMap[14]).intl;
    obj.children = intl6.string(arg1(dependencyMap[14]).t.BEjTij);
    obj.children = callback(arg1(dependencyMap[13]).Text, obj);
    return callback(View, obj);
  } else if ("purchased" === collectibleProductState) {
    obj1 = { style: styles.priceDescription };
    obj2 = { style: styles.text };
    const intl5 = arg1(dependencyMap[14]).intl;
    obj2.children = intl5.string(arg1(dependencyMap[14]).t.6cfuDj);
    obj1.children = callback(arg1(dependencyMap[13]).Text, obj2);
    return callback(View, obj1);
  } else if ("nitroUpsell" === collectibleProductState) {
    obj3 = { style: styles.priceDescription };
    const obj4 = { style: styles.text };
    const intl4 = arg1(dependencyMap[14]).intl;
    obj4.children = intl4.string(arg1(dependencyMap[14]).t.sEAnVH);
    obj3.children = callback(arg1(dependencyMap[13]).Text, obj4);
    return callback(View, obj3);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj5 = { style: styles.priceDescription };
    const obj6 = { style: styles.text };
    const intl3 = arg1(dependencyMap[14]).intl;
    obj6.children = intl3.string(arg1(dependencyMap[14]).t.rt69oo);
    obj5.children = callback(arg1(dependencyMap[13]).Text, obj6);
    return callback(View, obj5);
  } else {
    if (isDisabled) {
      const obj7 = { style: styles.priceDescription };
      const obj8 = { style: styles.text };
      const intl2 = arg1(dependencyMap[14]).intl;
      obj8.children = intl2.string(arg1(dependencyMap[14]).t.wu4gyV);
      obj7.children = callback(arg1(dependencyMap[13]).Text, obj8);
      let tmp9Result = callback(View, obj7);
    } else {
      if (null != memo) {
        if (null != balance) {
          if (true !== preferVCPrice) {
            if (!memo3) {
              tmp9Result = tmp9(tmp10, obj9);
            }
          }
          let obj9 = {};
          const items4 = [styles.priceDescription, ];
          const obj10 = {};
          let num = 1;
          if (false === memo3) {
            num = 0.5;
          }
          obj10.opacity = num;
          items4[1] = obj10;
          obj9.style = items4;
          let obj11 = { style: styles.wheelIcon };
          const items5 = [callback(arg1(dependencyMap[15]).OrbsIcon, obj11), , ];
          const obj12 = {};
          const intl = arg1(dependencyMap[14]).intl;
          const obj13 = { orbAmount: memo.amount };
          obj12.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[14]).t.W4DfeF, obj13);
          const items6 = [styles.text, ];
          obj9 = arg1(dependencyMap[16]);
          items6[1] = obj9.isAndroid() && styles.androidTextPadding;
          obj12.style = items6;
          obj12.children = memo.amount;
          items5[1] = callback(arg1(dependencyMap[13]).Text, obj12);
          let tmp19Result = memo2 >= arg1(dependencyMap[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
          if (tmp19Result) {
            const obj14 = {};
            const items7 = [, , ];
            ({ discountPercentage: arr8[0], text: arr8[1] } = styles);
            obj11 = arg1(dependencyMap[16]);
            let androidTextPadding;
            if (obj11.isAndroid()) {
              androidTextPadding = styles.androidTextPadding;
            }
            items7[2] = androidTextPadding;
            obj14.style = items7;
            const _HermesInternal = HermesInternal;
            obj14.children = "-" + memo2 + "%";
            tmp19Result = callback(arg1(dependencyMap[13]).Text, obj14);
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
        let obj16 = {};
        const items9 = [styles.text, ];
        obj16 = arg1(dependencyMap[16]);
        items9[1] = obj16.isAndroid() && styles.androidTextPadding;
        obj16.style = items9;
        obj16.children = formattedPriceForCollectiblesProduct;
        items8[1] = callback(arg1(dependencyMap[13]).Text, obj16);
        let tmp42Result = memo1 >= arg1(dependencyMap[10]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
        if (tmp42Result) {
          const obj17 = {};
          const items10 = [, , ];
          ({ discountPercentage: arr11[0], text: arr11[1] } = styles);
          let obj18 = arg1(dependencyMap[16]);
          let androidTextPadding1;
          if (obj18.isAndroid()) {
            androidTextPadding1 = styles.androidTextPadding;
          }
          items10[2] = androidTextPadding1;
          obj17.style = items10;
          const _HermesInternal2 = HermesInternal;
          obj17.children = "-" + memo1 + "%";
          tmp42Result = callback(arg1(dependencyMap[13]).Text, obj17);
          const tmp42 = callback;
        }
        items8[2] = tmp42Result;
        obj15.children = items8;
        obj9 = obj15;
        const tmp35 = callback;
        const tmp38 = obj16.isAndroid() && styles.androidTextPadding;
      } else if (discountSource === arg1(dependencyMap[10]).ShopDiscountSource.THIRDPARTY) {
        obj18 = { style: styles.wheelIcon };
        let tmp30 = callback(arg1(dependencyMap[17]).TagIcon, obj18);
      } else {
        const obj19 = { style: styles.wheelIcon };
        tmp30 = callback(arg1(dependencyMap[18]).NitroWheelIcon, obj19);
      }
    }
    return tmp9Result;
  }
});
memoResult.displayName = "PriceDescription";
const tmp3 = arg1(dependencyMap[4]);
const memoResult1 = importAllResult.memo(function CardDetailsV2(product) {
  let collectibleProductState;
  let hidePrice;
  let isDisabled;
  let preferVCPrice;
  product = product.product;
  ({ collectibleProductState, preferVCPrice, isDisabled, hidePrice } = product);
  const tmp = callback3();
  let obj = arg1(dependencyMap[19]);
  const currentUser = obj.useCurrentUser();
  let obj1 = arg1(dependencyMap[20]);
  let isProfileFramesEarlyAccessPhase = obj1.useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardCardDetailsV2");
  if (isProfileFramesEarlyAccessPhase) {
    let obj2 = arg1(dependencyMap[8]);
    const productType = obj2.getProductType(product);
    isProfileFramesEarlyAccessPhase = productType === arg1(dependencyMap[21]).CollectiblesItemType.PROFILE_FRAME;
  }
  let obj3 = importDefault(dependencyMap[22]);
  const tmp7 = obj3.canUseShopDiscounts(currentUser) || isProfileFramesEarlyAccessPhase;
  const shopDiscountSource = arg1(dependencyMap[10]).getShopDiscountSource(currentUser);
  const obj5 = arg1(dependencyMap[10]);
  const token = arg1(dependencyMap[23]).useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW);
  const obj6 = arg1(dependencyMap[23]);
  const obj7 = arg1(dependencyMap[24]);
  const obj8 = arg1(dependencyMap[24]);
  const hexToRgbaStringResult = obj7.hexToRgbaString(arg1(dependencyMap[24]).hexWithOpacity(token, 0.9));
  const obj9 = arg1(dependencyMap[24]);
  const obj10 = arg1(dependencyMap[24]);
  const hexToRgbaStringResult1 = obj9.hexToRgbaString(arg1(dependencyMap[24]).hexWithOpacity(token, 0));
  const productName = arg1(dependencyMap[25]).getProductName(product);
  const obj11 = arg1(dependencyMap[25]);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[26]).useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  obj = { style: items1, colors: items2, locations: [0, 0.3, 1], start: constants.START, end: constants.END };
  const items1 = [tmp.regularMetadataContainer];
  const items2 = [hexToRgbaStringResult1, hexToRgbaStringResult, token];
  const obj12 = arg1(dependencyMap[26]);
  const tmp14 = callback2;
  obj = { style: tmp.assetName, children: productName };
  const items3 = [callback(arg1(dependencyMap[13]).Text, obj), ];
  let tmp16 = !hidePrice;
  if (tmp16) {
    obj1 = { style: tmp.priceVariantsContainer };
    obj2 = { product, hasShopDiscount: tmp7, discountSource: shopDiscountSource, styles: tmp, collectibleProductState, isFetchingGoogleSkus: stateFromStores, preferVCPrice, isDisabled };
    const items4 = [callback(memoResult, obj2), ];
    obj3 = { product };
    items4[1] = callback(importDefault(dependencyMap[28]), obj3);
    obj1.children = items4;
    tmp16 = callback2(View, obj1);
  }
  items3[1] = tmp16;
  obj.children = items3;
  return tmp14(importDefault(dependencyMap[27]), obj);
});
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default memoResult1;
