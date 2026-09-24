// Module ID: 11411
// Function ID: 11412
// Name: PremiumGiftingPromotionSuccessActions
// Dependencies: [19, 17, 21, 4790, 580, 558, 568, 11033, 1488, 11073, 11378, 1119, 2550, 10996, 11412, 11089, 5220, 2]

// Module 11411 (PremiumGiftingPromotionSuccessActions)
import nativeDefault from "native" /* 580 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10996 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 11412 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 }, promoDetails: null };
let obj3 = { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.promoDetails = { alignSelf: "stretch", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { alignSelf: "stretch", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((purchase) => {
  const cResult = purchase(prePurchaseGiftingBadgeProgress[6]).c(31);
  purchase = purchase.purchase;
  const tmp4 = closure_7();
  let obj = purchase(prePurchaseGiftingBadgeProgress[6]);
  const nativeGiftContext = purchase(prePurchaseGiftingBadgeProgress[7]).useNativeGiftContext();
  const onClose = nativeGiftContext.onClose;
  prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  ({ allRewards, claimableRewards } = nativeGiftContext);
  let obj2 = purchase(prePurchaseGiftingBadgeProgress[7]);
  const navigation = purchase(prePurchaseGiftingBadgeProgress[8]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: "PremiumGiftingPromotionSuccessActions" };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const GiftingBadgeExperiment = tmp(tmp2[9]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
  let obj3 = purchase(prePurchaseGiftingBadgeProgress[8]);
  const fetchCollectiblesProduct = purchase(prePurchaseGiftingBadgeProgress[10]).useFetchCollectiblesProduct(purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  closure_5 = product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  let tmp9 = null != product;
  if (tmp9) {
    tmp9 = product.items.length > 0;
  }
  if (cResult[1] === claimableRewards) {
    if (cResult[2] === purchase.skuId) {
      let arr = cResult[3];
    }
    if (cResult[4] === allRewards) {
      if (cResult[5] === arr) {
        if (cResult[7] === prePurchaseGiftingBadgeProgress) {
          if (cResult[8] === enabled) {
            if (cResult[9] === navigation) {
              let tmp17 = cResult[10];
            }
            onCancel = tmp17;
            if (cResult[11] === prePurchaseGiftingBadgeProgress) {
              if (cResult[12] === enabled) {
                if (cResult[13] === navigation) {
                  if (cResult[14] === onClose) {
                    if (cResult[15] === tmp17) {
                      if (cResult[16] === product) {
                        let tmp18 = cResult[17];
                      }
                      if (cResult[18] === tmp9) {
                        if (cResult[19] === product) {
                          if (cResult[20] === tmp11) {
                            if (cResult[21] === tmp4.promoDetails) {
                              let tmp20 = cResult[22];
                            }
                            const _Symbol = Symbol;
                            class F {
                              constructor() {
                                if (null != product) {
                                  tmp10 = closure_1;
                                  tmp11 = closure_2;
                                  obj2 = closure_1(closure_2[14]);
                                  obj1 = { product: null, onCancel: null };
                                  obj1.product = tmp;
                                  tmp12 = closure_6;
                                  obj1.onCancel = closure_6;
                                  openResult = obj2.open(obj1);
                                } else {
                                  tmp2 = enabled;
                                  if (enabled) {
                                    if (null != closure_2) {
                                      tmp6 = closure_3;
                                      tmp7 = closure_0;
                                      tmp8 = closure_2;
                                      obj = { currentProgress: null };
                                      obj.currentProgress = tmp3;
                                      navigateResult = closure_3.navigate(closure_0(closure_2[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
                                    }
                                  }
                                  tmp4 = onClose;
                                  tmp5 = onClose();
                                }
                                return;
                              }
                            }
                            if (cResult[24] === isFetching) {
                              if (cResult[25] === tmp18) {
                                let tmp24 = cResult[26];
                              }
                              if (cResult[27] === tmp4.container) {
                                if (cResult[28] === tmp20) {
                                  if (cResult[29] === tmp24) {
                                    let tmp27 = cResult[30];
                                  }
                                  return tmp27;
                                }
                              }
                              class F {
                                constructor() {
                                  if (null != product) {
                                    tmp10 = closure_1;
                                    tmp11 = closure_2;
                                    obj2 = closure_1(closure_2[14]);
                                    obj1 = { product: null, onCancel: null };
                                    obj1.product = tmp;
                                    tmp12 = closure_6;
                                    obj1.onCancel = closure_6;
                                    openResult = obj2.open(obj1);
                                  } else {
                                    tmp2 = enabled;
                                    if (enabled) {
                                      if (null != closure_2) {
                                        tmp6 = closure_3;
                                        tmp7 = closure_0;
                                        tmp8 = closure_2;
                                        obj = { currentProgress: null };
                                        obj.currentProgress = tmp3;
                                        navigateResult = closure_3.navigate(closure_0(closure_2[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
                                      }
                                    }
                                    tmp4 = onClose;
                                    tmp5 = onClose();
                                  }
                                  return;
                                }
                              }
                              const obj5 = { style: tmp19, children: null };
                              const items = [tmp20, tmp24];
                              obj5.children = items;
                              const tmp29 = onCancel(enabled, obj5);
                              cResult[27] = tmp4.container;
                              cResult[28] = tmp20;
                              cResult[29] = tmp24;
                              cResult[30] = tmp29;
                              tmp27 = tmp29;
                            }
                            const obj7 = { grow: true, text: tmp23, loading: isFetching, onPress: tmp18 };
                            const tmp26 = closure_5(tmp(tmp2[16]).Button, obj7);
                            cResult[24] = isFetching;
                            cResult[25] = tmp18;
                            cResult[26] = tmp26;
                            tmp24 = tmp26;
                          }
                        }
                      }
                      class F {
                        constructor() {
                          if (null != product) {
                            tmp10 = closure_1;
                            tmp11 = closure_2;
                            obj2 = closure_1(closure_2[14]);
                            obj1 = { product: null, onCancel: null };
                            obj1.product = tmp;
                            tmp12 = closure_6;
                            obj1.onCancel = closure_6;
                            openResult = obj2.open(obj1);
                          } else {
                            tmp2 = enabled;
                            if (enabled) {
                              if (null != closure_2) {
                                tmp6 = closure_3;
                                tmp7 = closure_0;
                                tmp8 = closure_2;
                                obj = { currentProgress: null };
                                obj.currentProgress = tmp3;
                                navigateResult = closure_3.navigate(closure_0(closure_2[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
                              }
                            }
                            tmp4 = onClose;
                            tmp5 = onClose();
                          }
                          return;
                        }
                      }
                      cResult[18] = tmp9;
                      cResult[19] = product;
                      cResult[20] = tmp11;
                      cResult[21] = tmp4.promoDetails;
                      cResult[22] = tmp9;
                      tmp20 = tmp21;
                    }
                  }
                }
              }
            }
            class F {
              constructor() {
                if (null != product) {
                  tmp10 = closure_1;
                  tmp11 = closure_2;
                  obj2 = closure_1(closure_2[14]);
                  obj1 = { product: null, onCancel: null };
                  obj1.product = tmp;
                  tmp12 = closure_6;
                  obj1.onCancel = closure_6;
                  openResult = obj2.open(obj1);
                } else {
                  tmp2 = enabled;
                  if (enabled) {
                    if (null != closure_2) {
                      tmp6 = closure_3;
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      obj = { currentProgress: null };
                      obj.currentProgress = tmp3;
                      navigateResult = closure_3.navigate(closure_0(closure_2[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
                    }
                  }
                  tmp4 = onClose;
                  tmp5 = onClose();
                }
                return;
              }
            }
            cResult[11] = prePurchaseGiftingBadgeProgress;
            cResult[12] = enabled;
            cResult[13] = navigation;
            cResult[14] = onClose;
            cResult[15] = tmp17;
            cResult[16] = product;
            cResult[17] = F;
            tmp18 = F;
          }
        }
        const fn = function x() {
          let tmp = enabled;
          if (enabled) {
            tmp = null != prePurchaseGiftingBadgeProgress;
          }
          if (tmp) {
            const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
          }
        };
        cResult[7] = prePurchaseGiftingBadgeProgress;
        cResult[8] = enabled;
        cResult[9] = navigation;
        cResult[10] = fn;
        tmp17 = fn;
      }
    }
    if (null != allRewards) {
      if (allRewards.length > 0) {
        if (null != arr) {
          cResult[4] = allRewards;
          class F {
            constructor() {
              if (null != product) {
                tmp10 = closure_1;
                tmp11 = closure_2;
                obj2 = closure_1(closure_2[14]);
                obj1 = { product: null, onCancel: null };
                obj1.product = tmp;
                tmp12 = closure_6;
                obj1.onCancel = closure_6;
                openResult = obj2.open(obj1);
              } else {
                tmp2 = enabled;
                if (enabled) {
                  if (null != closure_2) {
                    tmp6 = closure_3;
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    obj = { currentProgress: null };
                    obj.currentProgress = tmp3;
                    navigateResult = closure_3.navigate(closure_0(closure_2[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
                  }
                }
                tmp4 = onClose;
                tmp5 = onClose();
              }
              return;
            }
          }
          cResult[5] = arr;
          cResult[6] = stringResult;
        }
        class F {
          constructor() {
            if (null != product) {
              tmp10 = closure_1;
              tmp11 = closure_2;
              obj2 = closure_1(closure_2[14]);
              obj1 = { product: null, onCancel: null };
              obj1.product = tmp;
              tmp12 = closure_6;
              obj1.onCancel = closure_6;
              openResult = obj2.open(obj1);
            } else {
              tmp2 = enabled;
              if (enabled) {
                if (null != closure_2) {
                  tmp6 = closure_3;
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  obj = { currentProgress: null };
                  obj.currentProgress = tmp3;
                  navigateResult = closure_3.navigate(closure_0(closure_2[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
                }
              }
              tmp4 = onClose;
              tmp5 = onClose();
            }
            return;
          }
        }
        const obj8 = { count: allRewards.length };
        stringResult = tmp14(onClose(tmp2[12]).cMHedL, obj8);
      }
    }
    stringResult = obj6.string(onClose(tmp2[12])["/8znyU"]);
  }
  let found;
  if (claimableRewards != null) {
    found = claimableRewards.filter((item) => item !== purchase.skuId);
  }
  cResult[1] = claimableRewards;
  cResult[2] = purchase.skuId;
  cResult[3] = found;
  arr = found;
}) : ((purchase) => {
  purchase = purchase.purchase;
  let prePurchaseGiftingBadgeProgress;
  onCancel = undefined;
  let tmp = closure_7();
  const nativeGiftContext = purchase(prePurchaseGiftingBadgeProgress[7]).useNativeGiftContext();
  const onClose = nativeGiftContext.onClose;
  prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  ({ allRewards, claimableRewards } = nativeGiftContext);
  let obj = purchase(prePurchaseGiftingBadgeProgress[7]);
  const navigation = purchase(prePurchaseGiftingBadgeProgress[8]).useNavigation();
  const GiftingBadgeExperiment = purchase(prePurchaseGiftingBadgeProgress[9]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  let obj2 = purchase(prePurchaseGiftingBadgeProgress[8]);
  const fetchCollectiblesProduct = purchase(prePurchaseGiftingBadgeProgress[10]).useFetchCollectiblesProduct(purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  c5 = product;
  let tmp7 = null != product;
  if (tmp7) {
    tmp7 = product.items.length > 0;
  }
  if (claimableRewards != null) {
    const found = claimableRewards.filter((item) => item !== purchase.skuId);
  }
  if (null != allRewards) {
    if (allRewards.length > 0) {
      if (null != found) {
        if (0 === found.length) {
          const intl2 = tmp2(tmp3[11]).intl;
          const obj4 = { count: allRewards.length };
          let formatToPlainStringResult = intl2.formatToPlainString(onClose(tmp3[12]).cMHedL, obj4);
          let tmp9 = onClose;
        }
        const items = [enabled, prePurchaseGiftingBadgeProgress, navigation];
        onCancel = navigation.useCallback(() => {
          let tmp = enabled;
          if (enabled) {
            tmp = null != prePurchaseGiftingBadgeProgress;
          }
          if (tmp) {
            const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
          }
        }, items);
        const items1 = [product, onClose, onCancel, enabled, prePurchaseGiftingBadgeProgress, navigation];
        const obj5 = { style: tmp.container, children: null };
        const callback1 = navigation.useCallback(() => {
          if (null != c5) {
            const obj3 = { product: tmp, onCancel };
            ProductPurchaseSuccessActionCreatorsDefault.open(obj3);
          } else {
            if (enabled) {
              if (null != prePurchaseGiftingBadgeProgress) {
                const obj = { currentProgress: tmp3 };
                navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
              }
            }
            onClose();
          }
        }, items1);
        if (tmp7) {
          const obj6 = { style: tmp.promoDetails, product, title: null, subtitle: null };
          const intl3 = tmp2(tmp3[11]).intl;
          obj6.title = intl3.string(tmp9(tmp3[12]).WvAqZA);
          obj6.subtitle = formatToPlainStringResult;
          tmp7 = c5(tmp2(tmp3[15]).PremiumGiftPromotionCollectibleRewardDetails, obj6);
        }
        const items2 = [tmp7, ];
        const obj7 = { grow: true, text: null, loading: null, onPress: null };
        const intl4 = tmp2(tmp3[11]).intl;
        obj7.text = intl4.string(tmp2(tmp3[11]).t.kMYVwv);
        obj7.loading = fetchCollectiblesProduct.isFetching;
        obj7.onPress = callback1;
        items2[1] = c5(tmp2(tmp3[16]).Button, obj7);
        obj5.children = items2;
        return onCancel(enabled, obj5);
      }
    }
  }
  const intl = tmp2(tmp3[11]).intl;
  formatToPlainStringResult = intl.string(onClose(tmp3[12])["/8znyU"]);
  tmp9 = onClose;
});
