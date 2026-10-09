// Module ID: 9038
// Function ID: 9039
// Name: CollectiblesShopCardCardDetailsV2
// Dependencies: [19, 17, 7125, 1085, 21, 5091, 587, 558, 576, 8949, 7268, 9039, 7269, 9041, 9055, 1126, 5087, 9020, 1382, 9056, 9016, 8286, 4728, 4779, 4928, 9058, 504, 9059, 5388, 2]

// Module 9038 (CollectiblesShopCardCardDetailsV2)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4728 */;
import useToken from "useToken" /* 4779 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import Text_Text from "Text/Text" /* 5087 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7268 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7269 */;
import useCurrentUser from "useCurrentUser" /* 8286 */;
import useDefaultVariantIndex from "useDefaultVariantIndex" /* 8949 */;
import OrbsIcon from "OrbsIcon" /* 9020 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9039 */;
import _mod9041 from "module_9041" /* 9041 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 9055 */;
import getProductName from "getProductName" /* 9058 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 7125 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let tmp11;
let tmp4;
const LinearGradientDefault = tmp11(5388);
const CollectiblesShopCardVariantsDefault = tmp4(9059);
const View = react_native.View;
({ CurrencyCodes: metroRequire, VerticalGradient: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { regularMetadataContainer: size, assetName: { marginBottom: 4 }, priceVariantsContainer: obj2, priceDescription: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, text: { flexShrink: 1 }, discountPercentage: { paddingLeft: 3 }, wheelIcon: { marginTop: 0, marginRight: 3 }, androidTextPadding: { paddingBottom: 2 } };
size = { position: "absolute", height: "45%", width: "100%", padding: 10, flex: 1, bottom: 0, overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "flex-end" };
createStyles = createStyles.createStyles;
obj2 = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let collectibleProductState;
  let discountSource;
  let hasShopDiscount;
  let isDisabled;
  let isFetchingGoogleSkus;
  let items;
  let items4;
  let preferVCPrice;
  let priceDescription;
  let priceDescription2;
  let priceDescription3;
  let priceDescription4;
  let priceDescription5;
  let product;
  let styles;
  let text;
  let text2;
  let text3;
  let text4;
  let text5;
  const obj = react2;
  const cResult = obj.c(95);
  ({ product, hasShopDiscount, discountSource, styles, collectibleProductState, isFetchingGoogleSkus, preferVCPrice, isDisabled } = arg0);
  const obj2 = useDefaultVariantIndex;
  const defaultVariantIndex = obj2.useDefaultVariantIndex(product);
  if (cResult[0] === hasShopDiscount) {
    if (cResult[1] === product) {
      let tmp5;
      let tmp6;
      if (cResult[2] === defaultVariantIndex) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      if (cResult[5] === hasShopDiscount) {
        let tmp9;
        if (cResult[6] === tmp5) {
          tmp9 = cResult[7];
        }
        if (cResult[8] === hasShopDiscount) {
          let tmp11;
          if (cResult[9] === tmp5) {
            tmp11 = cResult[10];
          }
          const discountPercentage = tmp11.discountPercentage;
          if (cResult[11] === hasShopDiscount) {
            let tmp13;
            if (cResult[12] === tmp5) {
              tmp13 = cResult[13];
            }
            const discountPercentage2 = tmp13.discountPercentage;
            const tmpResult = _mod9041;
            const balance = tmpResult.useFetchVirtualCurrencyBalance().balance;
            let tmp17 = null;
            if (null != tmp9) {
              tmp17 = null;
              if (null != balance) {
                tmp17 = tmp9.amount <= balance;
              }
            }
            if (isFetchingGoogleSkus) {
              if (null == tmp6) {
                let tmp111;
                const _Symbol6 = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp113 = metroImportAll(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
                  cResult[14] = tmp113;
                  tmp111 = tmp113;
                } else {
                  tmp111 = cResult[14];
                }
                return tmp111;
              }
            }
            if ("partiallyOwnedBundle" === collectibleProductState) {
              let tmp101;
              let tmp103;
              const _Symbol5 = Symbol;
              ({ priceDescription: priceDescription5, text: text5 } = styles);
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const intl6 = tmp(1126).intl;
                const stringResult = intl6.string(intl7.t.BEjTij);
                cResult[15] = stringResult;
                tmp101 = stringResult;
              } else {
                tmp101 = cResult[15];
              }
              if (cResult[16] !== styles.text) {
                const obj3 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: text5, children: tmp101 };
                const tmp105 = metroImportAll(Text_Text.Text, obj3);
                cResult[16] = styles.text;
                cResult[17] = tmp105;
                tmp103 = tmp105;
              } else {
                tmp103 = cResult[17];
              }
              if (cResult[18] === styles.priceDescription) {
                let tmp106;
                if (cResult[19] === tmp103) {
                  tmp106 = cResult[20];
                }
                return tmp106;
              }
              const obj4 = { style: priceDescription5, children: tmp103 };
              const tmp109 = metroImportAll(View, obj4);
              cResult[18] = styles.priceDescription;
              cResult[19] = tmp103;
              cResult[20] = tmp109;
              tmp106 = tmp109;
            } else if ("purchased" === collectibleProductState) {
              let tmp91;
              let tmp93;
              const _Symbol4 = Symbol;
              ({ priceDescription: priceDescription4, text: text4 } = styles);
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1126).intl;
                const stringResult1 = intl5.string(intl7.t["6cfuDj"]);
                cResult[21] = stringResult1;
                tmp91 = stringResult1;
              } else {
                tmp91 = cResult[21];
              }
              if (cResult[22] !== styles.text) {
                const obj5 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: text4, children: tmp91 };
                const tmp95 = metroImportAll(Text_Text.Text, obj5);
                cResult[22] = styles.text;
                cResult[23] = tmp95;
                tmp93 = tmp95;
              } else {
                tmp93 = cResult[23];
              }
              if (cResult[24] === styles.priceDescription) {
                let tmp96;
                if (cResult[25] === tmp93) {
                  tmp96 = cResult[26];
                }
                return tmp96;
              }
              const obj6 = { style: priceDescription4, children: tmp93 };
              const tmp99 = metroImportAll(View, obj6);
              cResult[24] = styles.priceDescription;
              cResult[25] = tmp93;
              cResult[26] = tmp99;
              tmp96 = tmp99;
            } else if ("nitroUpsell" === collectibleProductState) {
              let tmp81;
              let tmp83;
              const _Symbol3 = Symbol;
              ({ priceDescription: priceDescription3, text: text3 } = styles);
              if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(1126).intl;
                const stringResult2 = intl4.string(intl7.t.sEAnVH);
                cResult[27] = stringResult2;
                tmp81 = stringResult2;
              } else {
                tmp81 = cResult[27];
              }
              if (cResult[28] !== styles.text) {
                const obj7 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: text3, children: tmp81 };
                const tmp85 = metroImportAll(Text_Text.Text, obj7);
                cResult[28] = styles.text;
                cResult[29] = tmp85;
                tmp83 = tmp85;
              } else {
                tmp83 = cResult[29];
              }
              if (cResult[30] === styles.priceDescription) {
                let tmp86;
                if (cResult[31] === tmp83) {
                  tmp86 = cResult[32];
                }
                return tmp86;
              }
              const obj8 = { style: priceDescription3, children: tmp83 };
              const tmp89 = metroImportAll(View, obj8);
              cResult[30] = styles.priceDescription;
              cResult[31] = tmp83;
              cResult[32] = tmp89;
              tmp86 = tmp89;
            } else if ("nitroClaim" === collectibleProductState) {
              let tmp71;
              let tmp73;
              const _Symbol2 = Symbol;
              ({ priceDescription: priceDescription2, text: text2 } = styles);
              if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(1126).intl;
                const stringResult3 = intl3.string(intl7.t.rt69oo);
                cResult[33] = stringResult3;
                tmp71 = stringResult3;
              } else {
                tmp71 = cResult[33];
              }
              if (cResult[34] !== styles.text) {
                const obj9 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: text2, children: tmp71 };
                const tmp75 = metroImportAll(Text_Text.Text, obj9);
                cResult[34] = styles.text;
                cResult[35] = tmp75;
                tmp73 = tmp75;
              } else {
                tmp73 = cResult[35];
              }
              if (cResult[36] === styles.priceDescription) {
                let tmp76;
                if (cResult[37] === tmp73) {
                  tmp76 = cResult[38];
                }
                return tmp76;
              }
              const obj10 = { style: priceDescription2, children: tmp73 };
              const tmp79 = metroImportAll(View, obj10);
              cResult[36] = styles.priceDescription;
              cResult[37] = tmp73;
              cResult[38] = tmp79;
              tmp76 = tmp79;
            } else if (isDisabled) {
              let tmp61;
              let tmp63;
              const _Symbol = Symbol;
              ({ priceDescription, text } = styles);
              if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1126).intl;
                const stringResult4 = intl2.string(intl7.t.wu4gyV);
                cResult[39] = stringResult4;
                tmp61 = stringResult4;
              } else {
                tmp61 = cResult[39];
              }
              if (cResult[40] !== styles.text) {
                const obj11 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: text, children: tmp61 };
                const tmp65 = metroImportAll(Text_Text.Text, obj11);
                cResult[40] = styles.text;
                cResult[41] = tmp65;
                tmp63 = tmp65;
              } else {
                tmp63 = cResult[41];
              }
              if (cResult[42] === styles.priceDescription) {
                let tmp66;
                if (cResult[43] === tmp63) {
                  tmp66 = cResult[44];
                }
                return tmp66;
              }
              const obj12 = { style: priceDescription, children: tmp63 };
              const tmp69 = metroImportAll(View, obj12);
              cResult[42] = styles.priceDescription;
              cResult[43] = tmp63;
              cResult[44] = tmp69;
              tmp66 = tmp69;
            } else {
              if (null != tmp9) {
                if (null != balance) {
                  let tmp38;
                  let num32 = 1;
                  if (false === tmp17) {
                    num32 = 0.5;
                  }
                  if (cResult[45] !== num32) {
                    const obj13 = { opacity: num32 };
                    cResult[45] = num32;
                    cResult[46] = obj13;
                    tmp38 = obj13;
                  } else {
                    tmp38 = cResult[46];
                  }
                  if (cResult[47] === styles.priceDescription) {
                    let tmp39;
                    let tmp40;
                    let tmp43;
                    let tmp45;
                    if (cResult[48] === tmp38) {
                      tmp39 = cResult[49];
                    }
                    if (cResult[50] !== styles.wheelIcon) {
                      const obj14 = { size: "xxs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
                      const tmp42 = metroImportAll(OrbsIcon.OrbsIcon, obj14);
                      cResult[50] = styles.wheelIcon;
                      cResult[51] = tmp42;
                      tmp40 = tmp42;
                    } else {
                      tmp40 = cResult[51];
                    }
                    if (cResult[52] !== tmp9.amount) {
                      const intl = tmp(1126).intl;
                      const obj15 = { orbAmount: tmp9.amount };
                      const formatToPlainStringResult = intl.formatToPlainString(intl7.t.W4DfeF, obj15);
                      cResult[52] = tmp9.amount;
                      cResult[53] = formatToPlainStringResult;
                      tmp43 = formatToPlainStringResult;
                    } else {
                      tmp43 = cResult[53];
                    }
                    if (cResult[54] !== styles.androidTextPadding) {
                      const tmpResult10 = PlatformUtils;
                      const tmp46 = tmpResult10.isAndroid() && styles.androidTextPadding;
                      cResult[54] = styles.androidTextPadding;
                      cResult[55] = tmp46;
                      tmp45 = tmp46;
                    } else {
                      tmp45 = cResult[55];
                    }
                    if (cResult[56] === styles.text) {
                      let tmp47;
                      if (cResult[57] === tmp45) {
                        tmp47 = cResult[58];
                      }
                      if (cResult[59] === tmp43) {
                        if (cResult[60] === tmp47) {
                          let tmp48;
                          if (cResult[61] === tmp9.amount) {
                            tmp48 = cResult[62];
                          }
                          if (cResult[63] === styles.androidTextPadding) {
                            if (cResult[64] === styles.discountPercentage) {
                              if (cResult[65] === styles.text) {
                                let tmp51;
                                if (cResult[66] === discountPercentage2) {
                                  tmp51 = cResult[67];
                                }
                                if (cResult[68] === tmp48) {
                                  if (cResult[69] === tmp51) {
                                    if (cResult[70] === tmp39) {
                                      let tmp56;
                                      if (cResult[71] === tmp40) {
                                        tmp56 = cResult[72];
                                      }
                                      return tmp56;
                                    }
                                  }
                                }
                                const obj16 = { style: tmp39, children: items };
                                items = [tmp40, tmp48, tmp51];
                                const tmp59 = React4(View, obj16);
                                cResult[68] = tmp48;
                                cResult[69] = tmp51;
                                cResult[70] = tmp39;
                                cResult[71] = tmp40;
                                cResult[72] = tmp59;
                                tmp56 = tmp59;
                              }
                            }
                          }
                          let tmp53Result = discountPercentage2 >= tmp(7269).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
                          if (tmp53Result) {
                            const items1 = [, , ];
                            ({ discountPercentage: arr6[0], text: arr6[1] } = styles);
                            const Text2 = tmp(5087).Text;
                            let androidTextPadding;
                            const tmp53 = metroImportAll;
                            const tmpResult11 = PlatformUtils;
                            if (tmpResult11.isAndroid()) {
                              androidTextPadding = styles.androidTextPadding;
                            }
                            items1[2] = androidTextPadding;
                            const _HermesInternal2 = HermesInternal;
                            const obj17 = { style: items1, color: "text-feedback-positive", variant: "text-xs/semibold", lineClamp: 1, children: "-" + discountPercentage2 + "%" };
                            tmp53Result = tmp53(Text2, obj17);
                          }
                          cResult[63] = styles.androidTextPadding;
                          cResult[64] = styles.discountPercentage;
                          cResult[65] = styles.text;
                          cResult[66] = discountPercentage2;
                          cResult[67] = tmp53Result;
                          tmp51 = tmp53Result;
                        }
                      }
                      const obj18 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityLabel: tmp43, style: tmp47, children: tmp9.amount };
                      const tmp50 = metroImportAll(Text_Text.Text, obj18);
                      cResult[59] = tmp43;
                      cResult[60] = tmp47;
                      cResult[61] = tmp9.amount;
                      cResult[62] = tmp50;
                      tmp48 = tmp50;
                    }
                    const items2 = [styles.text, tmp45];
                    cResult[56] = styles.text;
                    cResult[57] = tmp45;
                    cResult[58] = items2;
                    tmp47 = items2;
                  }
                  const items3 = [styles.priceDescription, tmp38];
                  cResult[47] = styles.priceDescription;
                  cResult[48] = tmp38;
                  cResult[49] = items3;
                  tmp39 = items3;
                }
              }
              if (cResult[73] === discountSource) {
                if (cResult[74] === hasShopDiscount) {
                  let tmp18;
                  let tmp23;
                  if (cResult[75] === styles.wheelIcon) {
                    tmp18 = cResult[76];
                  }
                  if (cResult[77] !== styles.androidTextPadding) {
                    const tmpResult12 = PlatformUtils;
                    const tmp24 = tmpResult12.isAndroid() && styles.androidTextPadding;
                    cResult[77] = styles.androidTextPadding;
                    cResult[78] = tmp24;
                    tmp23 = tmp24;
                  } else {
                    tmp23 = cResult[78];
                  }
                  if (cResult[79] === styles.text) {
                    let tmp25;
                    if (cResult[80] === tmp23) {
                      tmp25 = cResult[81];
                    }
                    if (cResult[82] === tmp6) {
                      let tmp26;
                      if (cResult[83] === tmp25) {
                        tmp26 = cResult[84];
                      }
                      if (cResult[85] === discountPercentage) {
                        if (cResult[86] === styles.androidTextPadding) {
                          if (cResult[87] === styles.discountPercentage) {
                            let tmp29;
                            if (cResult[88] === styles.text) {
                              tmp29 = cResult[89];
                            }
                            if (cResult[90] === styles.priceDescription) {
                              if (cResult[91] === tmp29) {
                                if (cResult[92] === tmp18) {
                                  let tmp34;
                                  if (cResult[93] === tmp26) {
                                    tmp34 = cResult[94];
                                  }
                                  return tmp34;
                                }
                              }
                            }
                            const obj19 = { style: styles.priceDescription, children: items4 };
                            items4 = [tmp18, tmp26, tmp29];
                            const tmp37 = React4(View, obj19);
                            cResult[90] = styles.priceDescription;
                            cResult[91] = tmp29;
                            cResult[92] = tmp18;
                            cResult[93] = tmp26;
                            cResult[94] = tmp37;
                            tmp34 = tmp37;
                          }
                        }
                      }
                      let tmp31Result = discountPercentage >= tmp(7269).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
                      if (tmp31Result) {
                        const items5 = [, , ];
                        ({ discountPercentage: arr2[0], text: arr2[1] } = styles);
                        const Text = tmp(5087).Text;
                        let androidTextPadding1;
                        const tmp31 = metroImportAll;
                        const tmpResult13 = PlatformUtils;
                        if (tmpResult13.isAndroid()) {
                          androidTextPadding1 = styles.androidTextPadding;
                        }
                        items5[2] = androidTextPadding1;
                        const _HermesInternal = HermesInternal;
                        const obj20 = { style: items5, color: "text-feedback-positive", variant: "text-xs/semibold", lineClamp: 1, children: "-" + discountPercentage + "%" };
                        tmp31Result = tmp31(Text, obj20);
                      }
                      cResult[85] = discountPercentage;
                      cResult[86] = styles.androidTextPadding;
                      cResult[87] = styles.discountPercentage;
                      cResult[88] = styles.text;
                      cResult[89] = tmp31Result;
                      tmp29 = tmp31Result;
                    }
                    const obj21 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp25, children: tmp6 };
                    const tmp28 = metroImportAll(Text_Text.Text, obj21);
                    cResult[82] = tmp6;
                    cResult[83] = tmp25;
                    cResult[84] = tmp28;
                    tmp26 = tmp28;
                  }
                  const items6 = [styles.text, tmp23];
                  cResult[79] = styles.text;
                  cResult[80] = tmp23;
                  cResult[81] = items6;
                  tmp25 = items6;
                }
              }
              let tmp19 = hasShopDiscount;
              if (tmp19) {
                let tmp21;
                if (discountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
                  const obj22 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
                  tmp21 = metroImportAll(tmp(9056).TagIcon, obj22);
                } else {
                  const obj23 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
                  tmp21 = metroImportAll(tmp(9016).NitroWheelIcon, obj23);
                }
                tmp19 = tmp21;
              }
              cResult[73] = discountSource;
              cResult[74] = hasShopDiscount;
              cResult[75] = styles.wheelIcon;
              cResult[76] = tmp19;
              tmp18 = tmp19;
            }
          }
          const tmpResult14 = CollectiblesUtils;
          const productDiscount = tmpResult14.getProductDiscount(tmp5, hasShopDiscount, metroRequire.DISCORD_ORB);
          cResult[11] = hasShopDiscount;
          cResult[12] = tmp5;
          cResult[13] = productDiscount;
          tmp13 = productDiscount;
        }
        const tmpResult15 = CollectiblesUtils;
        const productDiscount1 = tmpResult15.getProductDiscount(tmp5, hasShopDiscount);
        cResult[8] = hasShopDiscount;
        cResult[9] = tmp5;
        cResult[10] = productDiscount1;
        tmp11 = productDiscount1;
      }
      const obj24 = { product: tmp5, hasShopDiscount };
      const tmpResult16 = CollectiblesProductUtils;
      const productOrbPrice = tmpResult16.getProductOrbPrice(obj24);
      cResult[5] = hasShopDiscount;
      cResult[6] = tmp5;
      cResult[7] = productOrbPrice;
      tmp9 = productOrbPrice;
    }
  }
  const tmpResult17 = CollectiblesProductUtils;
  const selectedProduct = tmpResult17.getSelectedProduct(product, defaultVariantIndex);
  const tmpResult18 = collectibles_CollectiblesUtils;
  const formattedPriceForCollectiblesProduct = tmpResult18.getFormattedPriceForCollectiblesProduct(selectedProduct, hasShopDiscount, true);
  cResult[0] = hasShopDiscount;
  cResult[1] = product;
  cResult[2] = defaultVariantIndex;
  cResult[3] = selectedProduct;
  cResult[4] = formattedPriceForCollectiblesProduct;
  tmp6 = formattedPriceForCollectiblesProduct;
  tmp5 = selectedProduct;
}) : ((arg0) => {
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
  let obj = hasShopDiscount(memo[9]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj2 = hasShopDiscount(memo[10]);
  const selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  const obj3 = hasShopDiscount(memo[11]);
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
  const obj4 = hasShopDiscount(memo[13]);
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
      return closure_8(tmp(tmp2[14]).CollectiblesShopPricePlaceholder, {});
    }
  }
  if ("partiallyOwnedBundle" === collectibleProductState) {
    const obj5 = { style: styles.priceDescription, children: closure_8(Text9, obj6) };
    obj6 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl6.string(tmp(tmp2[15]).t.BEjTij) };
    Text9 = tmp(tmp2[16]).Text;
    intl6 = tmp(tmp2[15]).intl;
    return closure_8(View, obj5);
  } else if ("purchased" === collectibleProductState) {
    const obj7 = { style: styles.priceDescription, children: closure_8(Text8, obj8) };
    obj8 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl5.string(tmp(tmp2[15]).t["6cfuDj"]) };
    Text8 = tmp(tmp2[16]).Text;
    intl5 = tmp(tmp2[15]).intl;
    return closure_8(View, obj7);
  } else if ("nitroUpsell" === collectibleProductState) {
    const obj9 = { style: styles.priceDescription, children: closure_8(Text7, obj10) };
    obj10 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl4.string(tmp(tmp2[15]).t.sEAnVH) };
    Text7 = tmp(tmp2[16]).Text;
    intl4 = tmp(tmp2[15]).intl;
    return closure_8(View, obj9);
  } else if ("nitroClaim" === collectibleProductState) {
    const obj11 = { style: styles.priceDescription, children: closure_8(Text6, obj12) };
    obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl3.string(tmp(tmp2[15]).t.rt69oo) };
    Text6 = tmp(tmp2[16]).Text;
    intl3 = tmp(tmp2[15]).intl;
    return closure_8(View, obj11);
  } else {
    let tmp11Result;
    if (isDisabled) {
      const obj13 = { style: styles.priceDescription, children: closure_8(Text5, obj14) };
      obj14 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: styles.text, children: intl2.string(tmp(tmp2[15]).t.wu4gyV) };
      Text5 = tmp(tmp2[16]).Text;
      intl2 = tmp(tmp2[15]).intl;
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
          items5 = [closure_8(tmp(tmp2[17]).OrbsIcon, obj17), , ];
          const obj18 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityLabel: intl.formatToPlainString(tmp(tmp2[15]).t.W4DfeF, obj19), style: items6, children: memo.amount };
          const Text = tmp(tmp2[16]).Text;
          intl = tmp(tmp2[15]).intl;
          items6 = [styles.text, ];
          obj19 = { orbAmount: memo.amount };
          const tmpResult = tmp(tmp2[18]);
          items6[1] = tmpResult.isAndroid() && styles.androidTextPadding;
          tmpResult.isAndroid() && styles.androidTextPadding;
          items5[1] = closure_8(Text, obj18);
          let tmp14Result = memo2 >= tmp(tmp2[12]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
          if (tmp14Result) {
            const items7 = [, , ];
            ({ discountPercentage: arr8[0], text: arr8[1] } = styles);
            const Text2 = tmp(tmp2[16]).Text;
            let androidTextPadding;
            const tmpResult4 = tmp(tmp2[18]);
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
        if (discountSource === tmp(tmp2[12]).ShopDiscountSource.THIRDPARTY) {
          const obj22 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          tmp21 = closure_8(tmp(tmp2[19]).TagIcon, obj22);
        } else {
          const obj23 = { size: "xs", color: "mobile-text-heading-primary", style: styles.wheelIcon };
          tmp21 = closure_8(tmp(tmp2[20]).NitroWheelIcon, obj23);
        }
        tmp19 = tmp21;
      }
      items8 = [tmp19, , ];
      const items9 = [styles.text, ];
      const Text3 = tmp(tmp2[16]).Text;
      const tmpResult5 = tmp(tmp2[18]);
      const obj24 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items9, children: formattedPriceForCollectiblesProduct };
      items9[1] = tmpResult5.isAndroid() && styles.androidTextPadding;
      tmpResult5.isAndroid() && styles.androidTextPadding;
      items8[1] = closure_8(Text3, obj24);
      let tmp23Result = memo1 >= tmp(tmp2[12]).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
      if (tmp23Result) {
        const items10 = [, , ];
        ({ discountPercentage: arr11[0], text: arr11[1] } = styles);
        const Text4 = tmp(tmp2[16]).Text;
        let androidTextPadding1;
        const tmpResult6 = tmp(tmp2[18]);
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
}));
const unpackModuleId = memoResult;
memoResult.displayName = "PriceDescription";
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CardDetailsV2(arg0) {
  let collectibleProductState;
  let fetchingGoogleSkus;
  let hidePrice;
  let isDisabled;
  let preferVCPrice;
  let product;
  let tmp13;
  let tmp16;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(35);
  ({ product, collectibleProductState, preferVCPrice, isDisabled, hidePrice } = arg0);
  const tmp4 = closure_10();
  const obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  if (cResult[0] !== currentUser) {
    const obj3 = PremiumUtilsDefault;
    const canUseShopDiscountsResult = obj3.canUseShopDiscounts(currentUser);
    cResult[0] = currentUser;
    cResult[1] = canUseShopDiscountsResult;
    tmp6 = canUseShopDiscountsResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== currentUser) {
    const tmpResult = CollectiblesUtils;
    const shopDiscountSource = tmpResult.getShopDiscountSource(currentUser);
    cResult[2] = currentUser;
    cResult[3] = shopDiscountSource;
    tmp9 = shopDiscountSource;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult8 = useToken;
  const token = tmpResult8.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[4] !== token) {
    const hexToRgbaString = ColorUtils.hexToRgbaString;
    ColorUtils;
    const tmpResult10 = ColorUtils;
    const hexToRgbaStringResult = hexToRgbaString(tmpResult10.hexWithOpacity(token, 0.9));
    cResult[4] = token;
    cResult[5] = hexToRgbaStringResult;
    tmp13 = hexToRgbaStringResult;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== token) {
    const hexToRgbaString2 = ColorUtils.hexToRgbaString;
    ColorUtils;
    const tmpResult12 = ColorUtils;
    const hexToRgbaString2Result = hexToRgbaString2(tmpResult12.hexWithOpacity(token, 0));
    cResult[6] = token;
    cResult[7] = hexToRgbaString2Result;
    tmp16 = hexToRgbaString2Result;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== product) {
    const tmpResult13 = getProductName;
    const cardProductName = tmpResult13.getCardProductName(product);
    cResult[8] = product;
    cResult[9] = cardProductName;
    tmp19 = cardProductName;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    class V {
      constructor() {
        return closure_1_5.isFetchingGoogleSkus();
      }
    }
    cResult[10] = items;
    cResult[11] = V;
    tmp22 = V;
    tmp21 = items;
  } else {
    tmp21 = cResult[10];
    tmp22 = cResult[11];
  }
  const tmpResult14 = get_initialized;
  const stateFromStores = tmpResult14.useStateFromStores(tmp21, tmp22);
  if (cResult[12] === token) {
    if (cResult[13] === tmp13) {
      let tmp25;
      if (cResult[14] === tmp16) {
        tmp25 = cResult[15];
      }
      const _Symbol = Symbol;
      class V {
        constructor() {
          return closure_1_5.isFetchingGoogleSkus();
        }
      }
      if (cResult[17] === tmp19) {
        let tmp28;
        if (cResult[18] === tmp4.assetName) {
          tmp28 = cResult[19];
        }
        if (cResult[20] === collectibleProductState) {
          if (cResult[21] === tmp9) {
            if (cResult[22] === hidePrice) {
              if (cResult[23] === isDisabled) {
                if (cResult[24] === stateFromStores) {
                  if (cResult[25] === preferVCPrice) {
                    if (cResult[26] === product) {
                      if (cResult[27] === tmp6) {
                        let tmp31;
                        if (cResult[28] === tmp4) {
                          tmp31 = cResult[29];
                        }
                        if (cResult[30] === tmp4.regularMetadataContainer) {
                          if (cResult[31] === tmp28) {
                            if (cResult[32] === tmp31) {
                              let tmp33;
                              if (cResult[33] === tmp25) {
                                tmp33 = cResult[34];
                              }
                              return tmp33;
                            }
                          }
                        }
                        class V {
                          constructor() {
                            return closure_1_5.isFetchingGoogleSkus();
                          }
                        }
                        tmp35[0] = tmp4.regularMetadataContainer;
                        tmp35[1] = tmp25;
                        tmp35[2] = tmp27;
                        ({ START: tmp35[3], END: tmp35[4] } = metroImportDefault);
                        const items1 = [tmp28, tmp31];
                        tmp35[5] = items1;
                        const tmp37 = React4(LinearGradientDefault, tmp35);
                        cResult[30] = tmp4.regularMetadataContainer;
                        cResult[31] = tmp28;
                        cResult[32] = tmp31;
                        cResult[33] = tmp25;
                        cResult[34] = tmp37;
                        tmp33 = tmp37;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        class V {
          constructor() {
            return closure_1_5.isFetchingGoogleSkus();
          }
        }
        cResult[20] = collectibleProductState;
        cResult[21] = tmp9;
        cResult[22] = hidePrice;
        cResult[23] = isDisabled;
        cResult[24] = stateFromStores;
        cResult[25] = preferVCPrice;
        cResult[26] = product;
        cResult[27] = tmp6;
        cResult[28] = tmp4;
        cResult[29] = !hidePrice;
        tmp31 = tmp32;
      }
      const obj4 = { style: tmp4.assetName, variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: tmp19 };
      const tmp30 = metroImportAll(Text_Text.Text, obj4);
      cResult[17] = tmp19;
      cResult[18] = tmp4.assetName;
      cResult[19] = tmp30;
      tmp28 = tmp30;
    }
  }
  const items2 = [tmp16, tmp13, token];
  cResult[12] = token;
  cResult[13] = tmp13;
  cResult[14] = tmp16;
  cResult[15] = items2;
  tmp25 = items2;
}) : (function CardDetailsV2(arg0) {
  let collectibleProductState;
  let fetchingGoogleSkus;
  let hidePrice;
  let isDisabled;
  let items1;
  let items2;
  let items3;
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
  const obj9 = { style: tmp.regularMetadataContainer, colors: items1, locations: [0, 0.4, 1], start: metroImportDefault.START, end: metroImportDefault.END, children: items2 };
  items1 = [hexToRgbaString2Result, hexToRgbaStringResult, token];
  items2 = [, ];
  const obj10 = { style: tmp.assetName, variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: cardProductName };
  const tmp15 = LinearGradientDefault;
  items2[0] = metroImportAll(Text_Text.Text, obj10);
  let tmp14Result = !hidePrice;
  if (tmp14Result) {
    const obj11 = { style: tmp.priceVariantsContainer, children: items3 };
    const obj12 = { product, hasShopDiscount: canUseShopDiscountsResult, discountSource: shopDiscountSource, styles: tmp, collectibleProductState, isFetchingGoogleSkus: stateFromStores, preferVCPrice, isDisabled };
    items3 = [metroImportAll(unpackModuleId, obj12), ];
    const obj13 = { product };
    items3[1] = metroImportAll(CollectiblesShopCardVariantsDefault, obj13);
    tmp14Result = tmp14(View, obj11);
  }
  items2[1] = tmp14Result;
  return React4(tmp15, obj9);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx");

export default memoResult1;
