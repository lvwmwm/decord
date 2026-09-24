// Module ID: 13492
// Function ID: 13493
// Name: InlinePriceTag
// Dependencies: [19, 17, 7516, 1080, 1078, 21, 4790, 580, 558, 568, 4786, 1977, 7832, 7833, 9146, 1119, 8484, 4450, 13493, 9178, 9157, 13494, 504, 9170, 1368, 9171, 8970, 2]

// Module 13492 (InlinePriceTag)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4450 */;
import Text_Text from "Text/Text" /* 4786 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7833 */;
import useCurrentUser from "useCurrentUser" /* 8484 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9157 */;
import useProductDisableState from "useProductDisableState" /* 9178 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13493 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 13494 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7516 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1080).ShopCtaEnum;
const Constants = fn(1078);
({ AnalyticsSections: closure_7, CurrencyCodes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4790);
let obj2 = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, priceTagColumn: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, underline: { textDecorationLine: "underline" }, subscribeNowPressable: { marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" }, androidTextPadding: { paddingBottom: 2 }, orbsIcon: { marginRight: 4 }, disabled: { opacity: 0.5 } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ priceFormatted, style, color, icon, variant, accessibilityLabel } = arg0);
  let str = "interactive-text-active";
  if (undefined !== color) {
    str = color;
  }
  let str2 = "text-md/medium";
  if (undefined !== variant) {
    str2 = variant;
  }
  const tmp4 = closure_12();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.priceTag) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === accessibilityLabel) {
      if (cResult[4] === str) {
        if (cResult[5] === priceFormatted) {
          if (cResult[6] === tmp5) {
            if (cResult[7] === str2) {
              let tmp6 = cResult[8];
            }
            if (cResult[9] === icon) {
              if (cResult[10] === tmp6) {
                let tmp9 = cResult[11];
              }
              return tmp9;
            }
            const obj2 = { children: null };
            const items = [icon, tmp6];
            obj2.children = items;
            const tmp12 = closure_1_11(v65535, obj2);
            cResult[9] = icon;
            cResult[10] = tmp6;
            cResult[11] = tmp12;
            tmp9 = tmp12;
          }
        }
      }
    }
    const obj3 = { variant: str2, style: tmp5, color: str, accessibilityLabel, children: priceFormatted };
    const tmp8 = options(Text_Text.Text, obj3);
    cResult[3] = accessibilityLabel;
    cResult[4] = str;
    cResult[5] = priceFormatted;
    cResult[6] = tmp5;
    cResult[7] = str2;
    cResult[8] = tmp8;
    tmp6 = tmp8;
  }
  const items1 = [tmp4.priceTag, style];
  cResult[0] = style;
  cResult[1] = tmp4.priceTag;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((accessibilityLabel) => {
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
  items[1] = options(Text_Text.Text, obj2);
  obj.children = items;
  return closure_1_11(v65535, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(41);
  ({ vcData, isProductDisabled, product, eligibleForShopDiscount } = arg0);
  const tmp4 = closure_12();
  if (null == vcData.price) {
    return null;
  } else {
    if (cResult[0] !== product) {
      let result = product.type === tmp(1977).CollectiblesItemType.BUNDLE;
      if (result) {
        result = tmp(7832).isOrbsExclusiveProduct(product);
        const tmpResult = tmp(7832);
      }
      cResult[0] = product;
      cResult[1] = result;
      let tmp5 = result;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] === eligibleForShopDiscount) {
      if (cResult[3] === tmp5) {
        if (cResult[4] === isProductDisabled) {
          if (cResult[5] === product) {
            if (cResult[6] === tmp4.disabled) {
              if (cResult[7] === tmp4.orbsIcon) {
                if (cResult[8] === tmp4.priceTagRow) {
                  if (cResult[9] === tmp4.strikedOrbPrice) {
                    if (cResult[10] === vcData.canAfford) {
                      let tmp7 = cResult[11];
                      let tmp8 = cResult[12];
                      let tmp9 = cResult[13];
                      let tmp10 = cResult[14];
                      let tmp11 = cResult[15];
                    }
                    if (cResult[19] !== vcData.price.amount) {
                      const str1 = vcData.price.amount.toString();
                      cResult[19] = vcData.price.amount;
                      cResult[20] = str1;
                      let tmp20 = str1;
                    } else {
                      tmp20 = cResult[20];
                    }
                    if (cResult[21] === tmp9) {
                      if (cResult[22] === tmp4.orbsIcon) {
                        let tmp22 = cResult[23];
                      }
                      if (cResult[24] === tmp8) {
                        if (cResult[25] === tmp9) {
                          if (cResult[26] === vcData.price.amount) {
                            if (cResult[28] === tmp20) {
                              if (cResult[29] === tmp22) {
                                if (cResult[30] === tmp25) {
                                  let tmp28 = cResult[31];
                                }
                                if (cResult[32] === tmp8) {
                                  if (cResult[33] === tmp9) {
                                    let tmp32 = cResult[34];
                                  }
                                  if (cResult[35] === tmp7) {
                                    if (cResult[36] === tmp10) {
                                      if (cResult[37] === tmp11) {
                                        if (cResult[38] === tmp28) {
                                          if (cResult[39] === tmp32) {
                                            let tmp36 = cResult[40];
                                          }
                                          return tmp36;
                                        }
                                      }
                                    }
                                  }
                                  const obj2 = { style: tmp10, children: null };
                                  const items = [tmp11, tmp28, tmp32];
                                  obj2.children = items;
                                  const tmp38 = closure_1_11(tmp7, obj2);
                                  cResult[35] = tmp7;
                                  cResult[36] = tmp10;
                                  cResult[37] = tmp11;
                                  cResult[38] = tmp28;
                                  cResult[39] = tmp32;
                                  cResult[40] = tmp38;
                                  tmp36 = tmp38;
                                }
                                let tmp33 = null;
                                if (tmp9) {
                                  const obj3 = { discountPercentage: tmp8 };
                                  tmp33 = options(closure_16, obj3);
                                }
                                cResult[32] = tmp8;
                                cResult[33] = tmp9;
                                cResult[34] = tmp33;
                                tmp32 = tmp33;
                              }
                            }
                            const obj4 = { priceFormatted: tmp20, variant: "text-md/semibold", icon: tmp22, accessibilityLabel: cResult[27] };
                            const tmp31 = options(closure_13, obj4);
                            cResult[28] = tmp20;
                            cResult[29] = tmp22;
                            cResult[30] = cResult[27];
                            cResult[31] = tmp31;
                            tmp28 = tmp31;
                          }
                        }
                      }
                      const intl2 = tmp(1119).intl;
                      const formatToPlainString = intl2.formatToPlainString;
                      let t = tmp(1119).t;
                      if (tmp9) {
                        t = { orbAmount: vcData.price.amount.toString(), discountPercentage: tmp8 };
                        let formatToPlainStringResult = formatToPlainString(t.ckguyq, t);
                      } else {
                        const obj5 = { orbAmount: vcData.price.amount.toString() };
                        formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj5);
                      }
                      cResult[24] = tmp8;
                      cResult[25] = tmp9;
                      vcData = vcData.price.amount;
                      cResult[26] = vcData;
                      cResult[27] = formatToPlainStringResult;
                    }
                    let tmp23;
                    if (!tmp9) {
                      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp4.orbsIcon };
                      tmp23 = options(tmp(9146).OrbsIcon, obj6);
                    }
                    cResult[21] = tmp9;
                    cResult[22] = tmp4.orbsIcon;
                    cResult[23] = tmp23;
                    tmp22 = tmp23;
                  }
                }
              }
            }
          }
        }
      }
    }
    const productDiscount = tmp(7833).getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    let tmp14 = tmp5;
    if (tmp5) {
      tmp14 = discountPercentage >= tmp(7833).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    const canAfford = vcData.canAfford;
    let disabled = !canAfford;
    if (canAfford) {
      disabled = isProductDisabled;
    }
    if (disabled) {
      disabled = tmp4.disabled;
    }
    if (cResult[16] === tmp4.priceTagRow) {
      if (cResult[17] === disabled) {
        let tmp16 = cResult[18];
      }
      let tmp17 = tmp14;
      if (tmp14) {
        const obj7 = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp4.strikedOrbPrice, icon: null, accessibilityLabel: null };
        const obj8 = { color: "interactive-text-active", size: "sm", style: tmp4.orbsIcon };
        obj7.icon = options(tmp(9146).OrbsIcon, obj8);
        const intl = tmp(1119).intl;
        const obj9 = { orbAmount: original.toString() };
        obj7.accessibilityLabel = intl.formatToPlainString(tmp(1119).t.QfcKZ5, obj9);
        tmp17 = options(closure_13, obj7);
      }
      cResult[2] = eligibleForShopDiscount;
      cResult[3] = tmp5;
      cResult[4] = isProductDisabled;
      cResult[5] = product;
      cResult[6] = tmp4.disabled;
      cResult[7] = tmp4.orbsIcon;
      cResult[8] = tmp4.priceTagRow;
      cResult[9] = tmp4.strikedOrbPrice;
      cResult[10] = vcData.canAfford;
      cResult[11] = tmp15;
      cResult[12] = discountPercentage;
      cResult[13] = tmp14;
      cResult[14] = tmp16;
      cResult[15] = tmp17;
      tmp11 = tmp17;
      tmp10 = tmp16;
      tmp9 = tmp14;
      tmp8 = discountPercentage;
      tmp7 = tmp15;
    }
    const items1 = [tmp4.priceTagRow, disabled];
    cResult[16] = tmp4.priceTagRow;
    cResult[17] = disabled;
    cResult[18] = items1;
    tmp16 = items1;
    const tmpResult2 = tmp(7833);
  }
}) : ((arg0) => {
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = closure_12();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      result = tmp16(7832).isOrbsExclusiveProduct(product);
      const tmp16Result = tmp16(7832);
    }
    const productDiscount = CollectiblesUtils.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= tmp16(7833).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
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
      obj2.icon = options(tmp16(9146).OrbsIcon, obj3);
      const intl = tmp16(1119).intl;
      const obj4 = { orbAmount: original.toString() };
      obj2.accessibilityLabel = intl.formatToPlainString(tmp16(1119).t.QfcKZ5, obj4);
      tmp7 = options(closure_13, obj2);
    }
    const items1 = [tmp7, , ];
    const obj5 = { priceFormatted: vcData.price.amount.toString(), variant: "text-md/semibold", icon: null, accessibilityLabel: null };
    let tmp10Result;
    if (!result) {
      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = tmp10(tmp16(9146).OrbsIcon, obj6);
    }
    obj5.icon = tmp10Result;
    const intl2 = tmp16(1119).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = tmp16(1119).t;
    if (result) {
      const obj7 = { orbAmount: vcData.price.amount.toString(), discountPercentage };
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj7);
    } else {
      const obj8 = { orbAmount: vcData.price.amount.toString() };
      formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj8);
    }
    obj5.accessibilityLabel = formatToPlainStringResult;
    items1[1] = options(closure_13, obj5);
    let tmp10Result2 = null;
    if (result) {
      const obj9 = { discountPercentage };
      tmp10Result2 = tmp10(closure_16, obj9);
    }
    items1[2] = tmp10Result2;
    obj.children = items1;
    return closure_1_11(React4, obj);
  }
});
fn(558);
let obj3 = { marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createStyles = fn(4790);
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
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((discountPercentage) => {
  const cResult = c.c(5);
  discountPercentage = discountPercentage.discountPercentage;
  let discount = closure_15();
  if (discountPercentage < CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    return null;
  } else {
    if (cResult[0] !== discountPercentage) {
      const obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
      const items = ["-", discountPercentage, "%"];
      obj2.children = items;
      const tmp6 = closure_1_11(Text_Text.Text, obj2);
      cResult[0] = discountPercentage;
      cResult[1] = tmp6;
      let tmp4 = tmp6;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] === discount.discount) {
    }
    const obj3 = { style: discount.discount, children: tmp4 };
    const tmp10 = options(React4, obj3);
    discount = discount.discount;
    cResult[2] = discount;
    cResult[3] = tmp4;
    cResult[4] = tmp10;
  }
}) : ((discountPercentage) => {
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    const obj = { style: tmp.discount, children: null };
    const obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
    const items = ["-", discountPercentage, "%"];
    obj2.children = items;
    obj.children = closure_1_11(Text_Text.Text, obj2);
    tmp4 = options(React4, obj);
  }
  return tmp4;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(42);
  ({ product, onTrackPress: require } = arg0);
  const tmp4 = closure_12();
  importDefault = tmp4;
  const currentUser = useCurrentUser.useCurrentUser();
  const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
  if (cResult[0] !== currentUser) {
    const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
    cResult[0] = currentUser;
    cResult[1] = canUseShopDiscountsResult;
    let tmp7 = canUseShopDiscountsResult;
  } else {
    tmp7 = cResult[1];
  }
  dependencyMap = useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
  const isDisabled = useProductDisableState.useProductDisableState(product.skuId).isDisabled;
  const tmpResult = useProductDisableState;
  const formattedPriceForCollectiblesProduct = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, false, true);
  const tmpResult7 = collectibles_CollectiblesUtils;
  const virtualCurrencyData = useVirtualCurrencyData.useVirtualCurrencyData(product, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    class C {
      constructor() {
        return closure_1_5.isFetchingGoogleSkus();
      }
    }
    cResult[2] = items;
    cResult[3] = C;
    let tmp13 = C;
    let tmp12 = items;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult8 = useVirtualCurrencyData;
  if (tmpResult9.useStateFromStores(tmp12, tmp13)) {
    if (null == formattedPriceForCollectiblesProduct) {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return closure_1_5.isFetchingGoogleSkus();
          }
        }
        const tmp57 = closure_9(tmp(9170).CollectiblesShopPricePlaceholder, {});
      }
      class C {
        constructor() {
          return closure_1_5.isFetchingGoogleSkus();
        }
      }
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    if (null == virtualCurrencyData.price) {
      return null;
    } else {
      if (cResult[5] === tmp7) {
        if (cResult[6] === isDisabled) {
          if (cResult[7] === product) {
          }
        }
      }
      class C {
        constructor() {
          return closure_1_5.isFetchingGoogleSkus();
        }
      }
      tmp52[0] = virtualCurrencyData;
      tmp52[1] = isDisabled;
      tmp52[2] = product;
      tmp52[3] = tmp7;
      const tmp53 = closure_9(closure_14, tmp52);
      cResult[5] = tmp7;
      cResult[6] = isDisabled;
      cResult[7] = product;
      cResult[8] = virtualCurrencyData;
      cResult[9] = tmp53;
    }
  } else {
    const formattedPriceForCollectiblesProduct1 = tmp(9157).getFormattedPriceForCollectiblesProduct(product, true, true);
    if (cResult[10] === tmp7) {
      if (cResult[11] === product) {
        let tmp16 = cResult[12];
      }
      const discountPercentage = tmp16.discountPercentage;
      class C {
        constructor() {
          return closure_1_5.isFetchingGoogleSkus();
        }
      }
      ({ container, priceTagColumn, priceTagRow } = tmp4);
      const tmp20 = tmp7 ? tmp4.strikedPrice : tmp4.regularPrice;
      const intl = tmp(1119).intl;
      const obj5 = { price: formattedPriceForCollectiblesProduct };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t.sPvyr8, obj5);
      if (cResult[13] === formattedPriceForCollectiblesProduct) {
        if (cResult[14] === formatToPlainStringResult) {
          if (cResult[15] === tmp19) {
            if (cResult[16] === tmp20) {
              let tmp22 = cResult[17];
            }
            if (cResult[18] === discountPercentage) {
              if (cResult[19] === tmp7) {
                if (cResult[20] === product.type) {
                  let tmp26 = cResult[21];
                }
                if (!(null != formattedPriceForCollectiblesProduct1 && tmp7)) {
                  if (cResult[22] === tmp4.priceTagRow) {
                    if (cResult[23] === tmp22) {
                      if (cResult[24] === tmp26) {
                        if (cResult[25] === tmp30) {
                          let tmp36 = cResult[26];
                        }
                        let tmp40Result = null != formattedPriceForCollectiblesProduct1 && !tmp7;
                        if (tmp40Result) {
                          const obj6 = { style: tmp4.priceTagRow, children: null };
                          class C {
                            constructor() {
                              return closure_1_5.isFetchingGoogleSkus();
                            }
                          }
                          tmp43[0] = function onPress() {
                            if (require != null) {
                              tmp(ShopCtaEnum.SUBSCRIBE_NOW);
                            }
                            closure_2();
                          };
                          tmp43[1] = tmp4.subscribeNowPressable;
                          const obj7 = { color: "interactive-text-default", style: null };
                          const items1 = [, ];
                          ({ nitroIcon: arr3[0], nitroIconSubscribeNow: arr3[1] } = tmp4);
                          obj7.style = items1;
                          const items2 = [closure_9(tmp(8970).NitroWheelIcon, obj7), ];
                          let androidTextPadding;
                          if (tmpResult11.isAndroid()) {
                            androidTextPadding = tmp4.androidTextPadding;
                          }
                          const obj8 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: null };
                          const intl3 = tmp(1119).intl;
                          const obj10 = {
                            price: formattedPriceForCollectiblesProduct1,
                            subscribeNowHook(children, arg1) {
                                                      return options(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
                                                    }
                          };
                          obj8.children = intl3.format(tmp(1119).t.Kxw2LT, obj10);
                          items2[1] = closure_9(tmp(4786).Text, obj8);
                          tmp43[3] = items2;
                          obj6.children = closure_11(closure_3, tmp43);
                          tmp40Result = tmp40(tmp18, obj6);
                          tmpResult11 = tmp(1368);
                        }
                        class C {
                          constructor() {
                            return closure_1_5.isFetchingGoogleSkus();
                          }
                        }
                        const obj11 = { style: priceTagColumn, children: null };
                        const items3 = [tmp36, tmp40Result];
                        obj11.children = items3;
                        const tmp47 = closure_11(tmp18, obj11);
                        cResult[27] = tmp18;
                        cResult[28] = tmp4.priceTagColumn;
                        cResult[29] = tmp36;
                        cResult[30] = tmp40Result;
                        cResult[31] = tmp47;
                      }
                    }
                  }
                  const obj12 = { style: null, children: null };
                  class C {
                    constructor() {
                      return closure_1_5.isFetchingGoogleSkus();
                    }
                  }
                  const items4 = [tmp22, tmp26, tmp30];
                  obj12.children = items4;
                  const tmp38 = closure_11(tmp18, obj12);
                  cResult[22] = tmp4.priceTagRow;
                  cResult[23] = tmp22;
                  cResult[24] = tmp26;
                  cResult[25] = tmp30;
                  cResult[26] = tmp38;
                  tmp36 = tmp38;
                } else {
                  const obj13 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
                  class C {
                    constructor() {
                      return closure_1_5.isFetchingGoogleSkus();
                    }
                  }
                  const intl2 = tmp(1119).intl;
                  const obj14 = { price: formattedPriceForCollectiblesProduct1 };
                  obj13.accessibilityLabel = intl2.formatToPlainString(tmp(1119).t.kWkpdG, obj14);
                  let androidTextPadding1;
                  if (tmpResult12.isAndroid()) {
                    androidTextPadding1 = tmp4.androidTextPadding;
                  }
                  obj13.style = androidTextPadding1;
                  if (shopDiscountSource === tmp(7833).ShopDiscountSource.THIRDPARTY) {
                    const obj15 = { color: "interactive-text-active", style: tmp4.nitroIcon };
                    let tmp31Result = tmp31(tmp(9171).TagIcon, obj15);
                  } else {
                    const obj16 = { color: "interactive-text-active", style: tmp4.nitroIcon };
                    tmp31Result = tmp31(tmp(8970).NitroWheelIcon, obj16);
                  }
                  obj13.icon = tmp31Result;
                  closure_9(tmp32, obj13);
                  tmpResult12 = tmp(1368);
                }
              }
            }
            class C {
              constructor() {
                return closure_1_5.isFetchingGoogleSkus();
              }
            }
            if (product.type === tmp(1977).CollectiblesItemType.BUNDLE) {
              let tmp27 = null;
              if (!tmp7) {
                class C {
                  constructor() {
                    return closure_1_5.isFetchingGoogleSkus();
                  }
                }
                tmp27 = closure_9(closure_16, { discountPercentage: null });
                const obj17 = { discountPercentage: null };
              }
            }
            cResult[18] = discountPercentage;
            cResult[19] = tmp7;
            cResult[20] = product.type;
            cResult[21] = tmp27;
            tmp26 = tmp27;
          }
        }
      }
      const obj18 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: tmp19, style: tmp20, color: "interactive-text-active", accessibilityLabel: formatToPlainStringResult };
      const tmp25 = closure_9(closure_13, obj18);
      cResult[13] = formattedPriceForCollectiblesProduct;
      cResult[14] = formatToPlainStringResult;
      cResult[15] = tmp19;
      cResult[16] = tmp20;
      cResult[17] = tmp25;
      tmp22 = tmp25;
    }
    class C {
      constructor() {
        return closure_1_5.isFetchingGoogleSkus();
      }
    }
    const productDiscount = obj9.getProductDiscount(product, tmp7);
    cResult[10] = tmp7;
    cResult[11] = product;
    cResult[12] = productDiscount;
    tmp16 = productDiscount;
    const tmpResult10 = tmp(9157);
  }
}) : ((arg0) => {
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
      return closure_9(tmp2(9170).CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp21 = null;
    if (null != virtualCurrencyData.price) {
      const obj8 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp21 = closure_9(closure_14, obj8);
    }
    return tmp21;
  } else {
    const formattedPriceForCollectiblesProduct1 = tmp2(9157).getFormattedPriceForCollectiblesProduct(product, true, true);
    const tmp2Result = tmp2(9157);
    const obj9 = { style: tmp.container, children: null };
    const obj10 = { style: tmp.priceTagColumn, children: null };
    const obj11 = { style: tmp.priceTagRow, children: null };
    const obj12 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: canUseShopDiscountsResult ? tmp.strikedPrice : tmp.regularPrice, color: "interactive-text-active", accessibilityLabel: null };
    const intl = tmp2(1119).intl;
    const obj13 = { price: formattedPriceForCollectiblesProduct };
    obj12.accessibilityLabel = intl.formatToPlainString(tmp2(1119).t.sPvyr8, obj13);
    const items1 = [closure_9(closure_13, obj12), , ];
    let tmp28Result = null;
    if (product.type === tmp2(1977).CollectiblesItemType.BUNDLE) {
      tmp28Result = null;
      if (!canUseShopDiscountsResult) {
        const obj14 = { discountPercentage: tmp2Result4.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage };
        tmp28Result = tmp28(closure_16, obj14);
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
        const items4 = [tmp28(tmp2(8970).NitroWheelIcon, obj17), ];
        let androidTextPadding;
        if (tmp2Result5.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        const obj18 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: null };
        const intl3 = tmp2(1119).intl;
        const obj19 = {
          price: formattedPriceForCollectiblesProduct1,
          subscribeNowHook(children, arg1) {
                  return options(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
                }
        };
        obj18.children = intl3.format(tmp2(1119).t.Kxw2LT, obj19);
        items4[1] = tmp28(tmp2(4786).Text, obj18);
        obj16.children = items4;
        obj15.children = tmp26(closure_3, obj16);
        tmp28Result5 = tmp28(tmp27, obj15);
        tmp2Result5 = tmp2(1368);
      }
      items2[1] = tmp28Result5;
      obj10.children = items2;
      const items5 = [tmp26(tmp27, obj10), ];
      let tmp28Result6 = null != virtualCurrencyData.price;
      if (tmp28Result6) {
        const obj20 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
        tmp28Result6 = tmp28(closure_14, obj20);
      }
      items5[1] = tmp28Result6;
      obj9.children = items5;
      return tmp26(tmp27, obj9);
    } else {
      const obj21 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      const intl2 = tmp2(1119).intl;
      const obj22 = { price: formattedPriceForCollectiblesProduct1 };
      obj21.accessibilityLabel = intl2.formatToPlainString(tmp2(1119).t.kWkpdG, obj22);
      let androidTextPadding1;
      if (tmp2Result6.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj21.style = androidTextPadding1;
      if (shopDiscountSource === tmp2(7833).ShopDiscountSource.THIRDPARTY) {
        const obj23 = { color: "interactive-text-active", style: tmp.nitroIcon };
        let tmp28Result7 = tmp28(tmp2(9171).TagIcon, obj23);
      } else {
        const obj24 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp28Result7 = tmp28(tmp2(8970).NitroWheelIcon, obj24);
      }
      obj21.icon = tmp28Result7;
      tmp28(tmp29, obj21);
      tmp2Result6 = tmp2(1368);
    }
    tmp2Result4 = tmp2(7833);
  }
});
