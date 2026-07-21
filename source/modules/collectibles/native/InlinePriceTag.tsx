// Module ID: 8756
// Function ID: 69227
// Name: PriceTag
// Dependencies: []
// Exports: default

// Module 8756 (PriceTag)
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
  const items1 = [callback3().priceTag, style];
  obj.style = items1;
  obj.color = str;
  obj.accessibilityLabel = color.accessibilityLabel;
  obj.children = priceFormatted;
  items[1] = callback(arg1(dependencyMap[8]).Text, obj);
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
  const tmp = callback3();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === arg1(dependencyMap[9]).CollectiblesItemType.BUNDLE;
    if (result) {
      let obj = arg1(dependencyMap[10]);
      result = obj.isOrbsExclusiveProduct(product);
    }
    let obj1 = arg1(dependencyMap[11]);
    const productDiscount = obj1.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= arg1(dependencyMap[11]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
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
      obj1 = { style: tmp.orbsIcon };
      obj.icon = callback(arg1(dependencyMap[12]).OrbsIcon, obj1);
      const intl = arg1(dependencyMap[13]).intl;
      const obj2 = { orbAmount: original.toString() };
      obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[13]).t.QfcKZ5, obj2);
      tmp13 = callback(PriceTag, obj);
    }
    const items1 = [tmp13, , ];
    const obj3 = { priceFormatted: vcData.price.amount.toString(), variant: "text-md/semibold" };
    let tmp21;
    if (!result) {
      const obj4 = { style: tmp.orbsIcon };
      tmp21 = callback(arg1(dependencyMap[12]).OrbsIcon, obj4);
    }
    obj3.icon = tmp21;
    const intl2 = arg1(dependencyMap[13]).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = arg1(dependencyMap[13]).t;
    if (result) {
      const obj5 = { orbAmount: vcData.price.amount.toString(), discountPercentage };
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj5);
      const str5 = vcData.price.amount;
    } else {
      const obj6 = { orbAmount: vcData.price.amount.toString() };
      formatToPlainStringResult = formatToPlainString(t.a/Y8PK, obj6);
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
  if (discountPercentage >= arg1(dependencyMap[11]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    let obj = { style: tmp.discount };
    obj = {};
    const items = ["accessibilityRole", discountPercentage, "%"];
    obj.children = items;
    obj.children = callback2(arg1(dependencyMap[8]).Text, obj);
    tmp2 = callback(closure_4, obj);
  }
  return tmp2;
}
importAll(dependencyMap[0]);
({ Pressable: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const ShopCtaEnum = arg1(dependencyMap[3]).ShopCtaEnum;
const tmp3 = arg1(dependencyMap[1]);
({ AnalyticsSections: closure_7, CurrencyCodes: closure_8 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { priceTag: {}, strikedPrice: { notClaimed: null, notEmailVerified: "9ba137dcd88d29dfd923fc4a2e32469d", notPhoneVerified: "es-ES.messages.9ba137dcd88d29dfd923fc4a2e32469d.compiled.messages" }, strikedOrbPrice: { notClaimed: null, notEmailVerified: "9ba137dcd88d29dfd923fc4a2e32469d", notPhoneVerified: "es-ES.messages.9ba137dcd88d29dfd923fc4a2e32469d.compiled.messages", newAccount: "jsona" }, regularPrice: {}, nitroIcon: {}, nitroIconSubscribeNow: { marginLeft: 0 }, container: {}, priceTagRow: {}, priceTagColumn: {}, underline: { textDecorationLine: "underline" } };
obj = { "Bool(true)": "center", "Bool(true)": 40, "Bool(true)": 56, "Bool(true)": true, marginTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.subscribeNowPressable = obj;
obj.androidTextPadding = { paddingBottom: 2 };
obj.orbsIcon = { marginRight: 4 };
obj.disabled = { opacity: 0.5 };
let closure_12 = obj.createStyles(obj);
const tmp5 = arg1(dependencyMap[5]);
let closure_13 = arg1(dependencyMap[6]).createStyles(() => {
  let obj = {};
  obj = { borderRadius: importDefault(dependencyMap[7]).radii.xs - 1 };
  let num;
  if (obj3.isAndroid()) {
    num = 0;
  }
  obj.paddingTop = num;
  const obj3 = arg1(dependencyMap[23]);
  let num2;
  if (obj4.isAndroid()) {
    num2 = 2;
  }
  obj.paddingBottom = num2;
  obj.discount = obj;
  return obj;
});
const obj4 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default function InlinePriceTag(arg0) {
  let product;
  ({ product, onTrackPress: closure_0 } = arg0);
  const tmp = callback3();
  const importDefault = tmp;
  let obj = arg1(closure_2[14]);
  const currentUser = obj.useCurrentUser();
  let obj1 = arg1(closure_2[11]);
  const shopDiscountSource = obj1.getShopDiscountSource(currentUser);
  let obj2 = importDefault(closure_2[15]);
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(currentUser);
  closure_2 = importDefault(closure_2[16])(constants.SHOP_PRODUCT_DETAILS);
  let obj3 = arg1(closure_2[17]);
  const isDisabled = obj3.useProductDisableState(product.skuId).isDisabled;
  let obj4 = arg1(closure_2[18]);
  const formattedPriceForCollectiblesProduct = obj4.getFormattedPriceForCollectiblesProduct(product, false, true);
  let obj5 = arg1(closure_2[19]);
  const virtualCurrencyData = obj5.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  let obj6 = arg1(closure_2[20]);
  const items = [closure_5];
  const stateFromStores = obj6.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  let obj7 = arg1(closure_2[21]);
  const isProfileFramesEarlyAccessPhase = obj7.useIsProfileFramesEarlyAccessPhase("InlinePriceTag");
  if (stateFromStores) {
    if (null == formattedPriceForCollectiblesProduct) {
      return callback(arg1(closure_2[22]).CollectiblesShopPricePlaceholder, {});
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
    let obj8 = arg1(closure_2[18]);
    const formattedPriceForCollectiblesProduct1 = obj8.getFormattedPriceForCollectiblesProduct(product, true, true);
    let obj9 = arg1(closure_2[11]);
    obj = { style: tmp.container };
    obj1 = { style: tmp.priceTagColumn };
    obj2 = { style: tmp.priceTagRow };
    obj3 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: tmp11 ? tmp.strikedPrice : tmp.regularPrice };
    let str2 = "interactive-text-active";
    obj3.color = "interactive-text-active";
    const intl = arg1(closure_2[13]).intl;
    obj4 = { price: formattedPriceForCollectiblesProduct };
    obj3.accessibilityLabel = intl.formatToPlainString(arg1(closure_2[13]).t.sPvyr8, obj4);
    const items1 = [callback(PriceTag, obj3), , ];
    let tmp25 = null;
    if (product.type === arg1(closure_2[9]).CollectiblesItemType.BUNDLE) {
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
                    callback(constants.SUBSCRIBE_NOW);
                  }
                  callback2();
                },
          style: tmp.subscribeNowPressable,
          accessibilityRole: "button"
        };
        obj8 = { color: "interactive-text-default" };
        const items3 = [, ];
        ({ nitroIcon: arr4[0], nitroIconSubscribeNow: arr4[1] } = tmp);
        obj8.style = items3;
        const items4 = [callback(arg1(closure_2[25]).NitroWheelIcon, obj8), ];
        obj9 = {};
        let androidTextPadding;
        if (obj26.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        obj9.style = androidTextPadding;
        const intl3 = arg1(closure_2[13]).intl;
        const obj10 = {
          price: formattedPriceForCollectiblesProduct1,
          subscribeNowHook(children) {
                  return callback3(callback(closure_2[8]).Text, { variant: "text-md/normal", style: tmp.underline, children }, arg1);
                }
        };
        obj9.children = intl3.format(arg1(closure_2[13]).t.Kxw2LT, obj10);
        items4[1] = callback(arg1(closure_2[8]).Text, obj9);
        obj7.children = items4;
        obj6.children = closure_11(closure_3, obj7);
        tmp45Result = callback(closure_4, obj6);
        const obj26 = arg1(closure_2[23]);
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
      const obj12 = { priceFormatted: formattedPriceForCollectiblesProduct1 };
      const intl2 = arg1(closure_2[13]).intl;
      const obj13 = { price: formattedPriceForCollectiblesProduct1 };
      obj12.accessibilityLabel = intl2.formatToPlainString(arg1(closure_2[13]).t.kWkpdG, obj13);
      let androidTextPadding1;
      if (obj19.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj12.style = androidTextPadding1;
      if (shopDiscountSource === arg1(closure_2[11]).ShopDiscountSource.THIRDPARTY) {
        const obj14 = { color: str2 };
        str2 = tmp.nitroIcon;
        obj14.style = str2;
        let tmp39 = callback(arg1(closure_2[24]).TagIcon, obj14);
      } else {
        const obj15 = { color: str2, style: tmp.nitroIcon };
        tmp39 = callback(arg1(closure_2[25]).NitroWheelIcon, obj15);
      }
      obj12.icon = tmp39;
      callback(PriceTag, obj12);
      const obj19 = arg1(closure_2[23]);
      const tmp29 = callback;
      const tmp30 = PriceTag;
    }
    const tmp15 = closure_11;
    const tmp16 = closure_4;
    const tmp17 = closure_11;
    const tmp18 = closure_4;
    const tmp19 = closure_11;
    const tmp20 = closure_4;
    const tmp21 = callback;
    const tmp22 = PriceTag;
  }
};
