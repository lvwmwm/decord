// Module ID: 11243
// Function ID: 11244
// Name: GiftCodeRedeemSuccess
// Dependencies: [32, 19, 17, 6092, 21, 5090, 587, 558, 576, 504, 10478, 6847, 10482, 7264, 1992, 8271, 11181, 6917, 8998, 6851, 8970, 5741, 1200, 10486, 11186, 11187, 11237, 5086, 1126, 5629, 5375, 5940, 6803, 2]

// Module 11243 (GiftCodeRedeemSuccess)
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1992 */;
import Text_Text from "Text/Text" /* 5086 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5629 */;
import merged5 from "merged5" /* 5741 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import GameIcon from "GameIcon" /* 6851 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6917 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8970 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8998 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 10486 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11186 */;
import NameplatePreview from "NameplatePreview" /* 11187 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11237 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SKUStore from "SKUStore" /* 6092 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GameIconDefault = GameIcon;
let dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, nameplateContainer: obj3, bundleContainer: obj4, bundlePreview: { alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, header: { marginTop: 32, textAlign: "center" }, message: { marginTop: 8, textAlign: "center" }, footer: { paddingHorizontal: 24 }, gameItemCard: { marginTop: 20 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
obj4 = { width: "100%", alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCodeRedeemSuccess(giftCode) {
  let body;
  let closure_2;
  let container;
  let first;
  let first1;
  let firstProfileEffect;
  let items1;
  let items2;
  let tmp16;
  let tmp19;
  let tmp21;
  let tmp25;
  let tmp7;
  let tmp = giftCode;
  const tmp2 = dependencyMap;
  let obj = giftCode(576);
  const cResult = obj.c(65);
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  let tmp4 = firstProfileEffect();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = first1;
    const items = [first1];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== giftCode.skuId) {
    const fn = function y() {
      return SKUStore.get(giftCode.skuId);
    };
    cResult[1] = giftCode.skuId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult7 = tmp(10478);
  const getOrFetchSubscriptionPlan = tmpResult7.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmpResult8 = tmp(6847);
  const getOrFetchApplication = tmpResult8.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = tmp(10482).useFetchCollectiblesProduct;
  tmp(10482);
  let skuId = null;
  const tmpResult10 = tmp(7264);
  if (tmpResult10.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = useFetchCollectiblesProduct(skuId, true).product;
  let closure_6 = product;
  first1 = undefined;
  if (product != null) {
    first1 = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  let tmp15 = type === tmp(1992).CollectiblesItemType.BUNDLE;
  let closure_8 = tmp15;
  if (cResult[3] !== product) {
    let tmp17 = product;
    if (product == null) {
      let obj2 = { items: [] };
      tmp17 = obj2;
    }
    cResult[3] = product;
    cResult[4] = tmp17;
    tmp16 = tmp17;
  } else {
    tmp16 = cResult[4];
  }
  const tmpResult11 = tmp(8271);
  const shopProductItems = tmpResult11.useShopProductItems(tmp16);
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  if (cResult[5] !== product) {
    let tmp20 = product;
    if (product == null) {
      let obj3 = { skuId: "", type: tmp(1992).CollectiblesItemType.BUNDLE, items: [] };
      tmp20 = obj3;
    }
    cResult[5] = product;
    cResult[6] = tmp20;
    tmp19 = tmp20;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== tmp19) {
    let obj4 = { product: tmp19 };
    cResult[7] = tmp19;
    cResult[8] = obj4;
    tmp21 = obj4;
  } else {
    tmp21 = cResult[8];
  }
  const tmpResult12 = tmp(11181);
  const handleUseNow1 = tmpResult12.useHandleUseNow(tmp21);
  const handleUseNow = handleUseNow1.handleUseNow;
  const canUseNow = handleUseNow1.canUseNow;
  const isApplying = handleUseNow1.isApplying;
  const tmp23 = stateFromStores(getOrFetchSubscriptionPlan.useState(), 2);
  const first2 = tmp23[0];
  let closure_16 = tmp23[1];
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function k(nativeEvent) {
      let closure_129_0;
      let closure_129_1;
      ({ width: closure_129_0, height: closure_129_1 } = nativeEvent.nativeEvent.layout);
      closure_16((arg0) => {
        size = arg0;
        if (null != arg0) {
          return size;
        }
        const size1 = { width, height };
        size = size1;
      });
    };
    cResult[9] = fn2;
    tmp25 = fn2;
  } else {
    tmp25 = cResult[9];
  }
  const onLayout = tmp25;
  if (cResult[10] === getOrFetchApplication) {
    if (cResult[11] === first2) {
      if (cResult[12] === firstAvatarDecoration) {
        if (cResult[13] === firstNameplate) {
          if (cResult[14] === firstProfileEffect) {
            if (cResult[15] === giftCode.giftStyle) {
              if (cResult[16] === giftCode.skuId) {
                if (cResult[17] === tmp15) {
                  if (cResult[18] === first1) {
                    if (cResult[19] === product) {
                      if (cResult[20] === stateFromStores) {
                        if (cResult[21] === tmp4.bundleContainer) {
                          if (cResult[22] === tmp4.bundlePreview) {
                            if (cResult[23] === tmp4.gameItemCard) {
                              if (cResult[24] === tmp4.nameplateContainer) {
                                let tmp26;
                                if (cResult[25] === user) {
                                  tmp26 = cResult[26];
                                }
                                if (cResult[27] === giftCode.isSubscription) {
                                  if (cResult[28] === first1) {
                                    if (cResult[29] === stateFromStores) {
                                      if (cResult[30] === tmp4.header) {
                                        let tmp27;
                                        if (cResult[31] === getOrFetchSubscriptionPlan) {
                                          tmp27 = cResult[32];
                                        }
                                        if (cResult[33] === getOrFetchApplication) {
                                          if (cResult[34] === giftCode.isSubscription) {
                                            if (cResult[35] === first1) {
                                              if (cResult[36] === stateFromStores) {
                                                if (cResult[37] === tmp4.message) {
                                                  let tmp28;
                                                  if (cResult[38] === getOrFetchSubscriptionPlan) {
                                                    tmp28 = cResult[39];
                                                  }
                                                  if (cResult[40] === canUseNow) {
                                                    if (cResult[41] === handleUseNow) {
                                                      if (cResult[42] === isApplying) {
                                                        let tmp29;
                                                        let tmp30;
                                                        let tmp32;
                                                        let tmp34;
                                                        if (cResult[43] === first1) {
                                                          tmp29 = cResult[44];
                                                        }
                                                        ({ container, body } = tmp4);
                                                        if (cResult[45] !== tmp26) {
                                                          const tmp26Result = tmp26();
                                                          cResult[45] = tmp26;
                                                          cResult[46] = tmp26Result;
                                                          tmp30 = tmp26Result;
                                                        } else {
                                                          tmp30 = cResult[46];
                                                        }
                                                        if (cResult[47] !== tmp27) {
                                                          const tmp27Result = tmp27();
                                                          cResult[47] = tmp27;
                                                          cResult[48] = tmp27Result;
                                                          tmp32 = tmp27Result;
                                                        } else {
                                                          tmp32 = cResult[48];
                                                        }
                                                        if (cResult[49] !== tmp28) {
                                                          const tmp28Result = tmp28();
                                                          cResult[49] = tmp28;
                                                          cResult[50] = tmp28Result;
                                                          tmp34 = tmp28Result;
                                                        } else {
                                                          tmp34 = cResult[50];
                                                        }
                                                        if (cResult[51] === tmp4.body) {
                                                          if (cResult[52] === tmp30) {
                                                            if (cResult[53] === tmp32) {
                                                              let tmp36;
                                                              let tmp40;
                                                              if (cResult[54] === tmp34) {
                                                                tmp36 = cResult[55];
                                                              }
                                                              const footer = tmp4.footer;
                                                              if (cResult[56] !== tmp29) {
                                                                const tmp29Result = tmp29();
                                                                cResult[56] = tmp29;
                                                                cResult[57] = tmp29Result;
                                                                tmp40 = tmp29Result;
                                                              } else {
                                                                tmp40 = cResult[57];
                                                              }
                                                              if (cResult[58] === tmp4.footer) {
                                                                let tmp42;
                                                                if (cResult[59] === tmp40) {
                                                                  tmp42 = cResult[60];
                                                                }
                                                                if (cResult[61] === tmp4.container) {
                                                                  if (cResult[62] === tmp36) {
                                                                    let tmp46;
                                                                    if (cResult[63] === tmp42) {
                                                                      tmp46 = cResult[64];
                                                                    }
                                                                    return tmp46;
                                                                  }
                                                                }
                                                                let obj5 = { bottom: true, style: container, children: items1 };
                                                                items1 = [tmp36, tmp42];
                                                                const tmp48 = firstAvatarDecoration(tmp(6803).SafeAreaPaddingView, obj5);
                                                                cResult[61] = tmp4.container;
                                                                cResult[62] = tmp36;
                                                                cResult[63] = tmp42;
                                                                cResult[64] = tmp48;
                                                                tmp46 = tmp48;
                                                              }
                                                              let obj6 = { style: footer, children: tmp40 };
                                                              const tmp45 = closure_8(getOrFetchApplication, obj6);
                                                              cResult[58] = tmp4.footer;
                                                              cResult[59] = tmp40;
                                                              cResult[60] = tmp45;
                                                              tmp42 = tmp45;
                                                            }
                                                          }
                                                        }
                                                        let obj7 = { contentContainerStyle: body, alwaysBounceVertical: false, children: items2 };
                                                        items2 = [tmp30, tmp32, tmp34];
                                                        const tmp39 = firstAvatarDecoration(closure_6, obj7);
                                                        cResult[51] = tmp4.body;
                                                        cResult[52] = tmp30;
                                                        cResult[53] = tmp32;
                                                        cResult[54] = tmp34;
                                                        cResult[55] = tmp39;
                                                        tmp36 = tmp39;
                                                      }
                                                    }
                                                  }
                                                  function renderButton() {
                                                    let intl;
                                                    let intl2;
                                                    const tmp = metroImportAll;
                                                    if (null != first1) {
                                                      let obj;
                                                      const tmp5 = canUseNow;
                                                      if (tmp5) {
                                                        const obj2 = { text: intl2.string(intl10.t.MAS7uK), size: "md", loading: isApplying, disabled: isApplying, onPress: handleUseNow };
                                                        intl2 = tmp2(1126).intl;
                                                        obj = obj2;
                                                      }
                                                      return tmp(tmp4, obj);
                                                    }
                                                    obj = { text: intl.string(intl10.t["NX+WJN"]), size: "md", onPress: ModalActionCreatorsDefault.pop };
                                                    intl = tmp2(1126).intl;
                                                  }
                                                  cResult[40] = canUseNow;
                                                  cResult[41] = handleUseNow;
                                                  cResult[42] = isApplying;
                                                  cResult[43] = first1;
                                                  cResult[44] = renderButton;
                                                  tmp29 = renderButton;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        function renderMessage() {
                                          let W2znvX;
                                          let formatToPlainString;
                                          let obj3;
                                          let tmp8Result;
                                          let tmpResult;
                                          const obj = SlayerStorefrontUtils;
                                          if (obj.isGameItemSKU(stateFromStores)) {
                                            if (null != getOrFetchApplication) {
                                              const obj2 = { variant: "text-md/medium", style: closure_2.message, children: formatToPlainString(W2znvX, obj3) };
                                              const Text2 = tmp(5086).Text;
                                              const intl3 = tmp(1126).intl;
                                              formatToPlainString = intl3.formatToPlainString;
                                              let str;
                                              W2znvX = tmp(1126).t.W2znvX;
                                              const tmp15 = metroImportAll;
                                              if (stateFromStores != null) {
                                                str = tmp3.name;
                                              }
                                              if (str == null) {
                                                str = "";
                                              }
                                              obj3 = { skuName: str, applicationName: tmp4.name };
                                              tmp8Result = tmp15(Text2, obj2);
                                            }
                                            return tmp8Result;
                                          }
                                          if (giftCode.isSubscription) {
                                            if (null != getOrFetchSubscriptionPlan) {
                                              const obj4 = { variant: "text-md/medium", style: closure_2.message, children: tmpResult.getSubscriptionGiftSuccessText(tmp6) };
                                              const Text = tmp(5086).Text;
                                              tmpResult = GiftCodeUtils;
                                              tmp8Result = metroImportAll(Text, obj4);
                                            }
                                          }
                                          const obj5 = { variant: "text-md/medium", style: closure_2.message, children: null };
                                          const tmp8 = metroImportAll;
                                          if (null != first1) {
                                            let formatToPlainStringResult;
                                            let name;
                                            if (stateFromStores != null) {
                                              name = tmp3.name;
                                            }
                                            if (null != name) {
                                              const intl2 = tmp(1126).intl;
                                              const obj6 = { itemName: stateFromStores.name };
                                              formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t["4kp0AB"], obj6);
                                            }
                                            obj5.children = formatToPlainStringResult;
                                            tmp8Result = tmp8(tmp9, obj5);
                                          }
                                          const intl = tmp(1126).intl;
                                          formatToPlainStringResult = intl.string(tmp(1126).t["5ayf7w"]);
                                        }
                                        cResult[33] = getOrFetchApplication;
                                        cResult[34] = giftCode.isSubscription;
                                        cResult[35] = first1;
                                        cResult[36] = stateFromStores;
                                        cResult[37] = tmp4.message;
                                        cResult[38] = getOrFetchSubscriptionPlan;
                                        cResult[39] = renderMessage;
                                        tmp28 = renderMessage;
                                      }
                                    }
                                  }
                                }
                                function renderHeader() {
                                  let intl;
                                  let intl2;
                                  let intl3;
                                  let intl4;
                                  let obj5;
                                  let tmp5;
                                  if (null == stateFromStores) {
                                    const obj2 = { variant: "heading-xl/bold", style: closure_2.header, accessibilityRole: "header", children: intl4.string(intl10.t["+BNMcF"]) };
                                    const Text4 = Text_Text.Text;
                                    intl4 = intl10.intl;
                                    tmp5 = metroImportAll(Text4, obj2);
                                  } else {
                                    const obj6 = SlayerStorefrontUtils;
                                    if (obj6.isGameItemSKU(stateFromStores)) {
                                      const obj3 = { variant: "heading-xl/bold", style: closure_2.header, accessibilityRole: "header", children: intl3.string(intl10.t["5glWta"]) };
                                      const Text3 = Text_Text.Text;
                                      intl3 = intl10.intl;
                                      tmp5 = metroImportAll(Text3, obj3);
                                    } else {
                                      if (giftCode.isSubscription) {
                                        if (null != getOrFetchSubscriptionPlan) {
                                          const obj4 = { variant: "heading-xl/bold", style: closure_2.header, accessibilityRole: "header", children: intl2.format(intl10.t["1C2BG/"], obj5) };
                                          const Text2 = Text_Text.Text;
                                          intl2 = intl10.intl;
                                          obj5 = { skuName: stateFromStores.name };
                                          tmp5 = metroImportAll(Text2, obj4);
                                        }
                                      }
                                      if (null != first1) {
                                        const obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: closure_2.header, accessibilityRole: "header", children: intl.string(intl10.t.IMffmm) };
                                        const Text = Text_Text.Text;
                                        intl = intl10.intl;
                                        tmp5 = metroImportAll(Text, obj);
                                      }
                                    }
                                  }
                                  return tmp5;
                                }
                                cResult[27] = giftCode.isSubscription;
                                cResult[28] = first1;
                                cResult[29] = stateFromStores;
                                cResult[30] = tmp4.header;
                                cResult[31] = getOrFetchSubscriptionPlan;
                                cResult[32] = renderHeader;
                                tmp27 = renderHeader;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function renderImage() {
    let giftStyle;
    let obj2;
    let obj5;
    let otherwiseResult;
    let tmp10;
    let tmp13;
    let tmp4;
    let tmp9;
    let tmp = first1;
    if (null == first1) {
      if (null != getOrFetchApplication) {
        let tmp23Result;
        const obj13 = SlayerStorefrontUtils;
        const tmp22 = stateFromStores;
        if (obj13.isGameItemSKU(stateFromStores)) {
          let obj = { style: nameplateContainer.gameItemCard, children: metroImportAll(SlayerStorefrontItemCardDefault, obj2) };
          obj2 = { sku: tmp22 };
          tmp23Result = tmp23(hasOwnProperty, obj);
        } else {
          const obj3 = { game: tmp2, size: GameIcon.GameIconSizes.LARGE, skuId: giftCode.skuId };
          const tmp26 = GameIconDefault;
          tmp23Result = tmp23(tmp26, obj3);
        }
        otherwiseResult = tmp23Result;
      }
      return otherwiseResult;
    }
    const tmp3 = metroImportAll;
    if (tmp3) {
      if (null != closure_6) {
        const obj4 = { style: nameplateContainer.bundleContainer, children: tmp9(tmp10, obj5) };
        obj5 = { style: nameplateContainer.bundlePreview, onLayout, children: tmp13 };
        tmp13 = null != first2;
        tmp10 = hasOwnProperty;
        const tmp6 = metroImportAll;
        const tmp7 = hasOwnProperty;
        tmp9 = metroImportAll;
        if (tmp13) {
          const obj6 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: tmp4.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp12 };
          tmp13 = metroImportAll(BundleSampleV2Default, obj6);
        }
        otherwiseResult = tmp6(tmp7, obj4);
      }
    }
    const str = merged5;
    const match = str.match(tmp);
    const obj7 = { type: CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION };
    const withResult = match.with(obj7, (avatarDecoration) => {
      let avatarSource;
      const Avatar = giftCode(nameplateContainer[22]).Avatar;
      const tmp = closure_8;
      const tmp4 = user;
      if (user != null) {
        const getAvatarSource = tmp4.getAvatarSource;
        avatarSource = getAvatarSource(null, true, tmp2(tmp3[22]).AVATAR_SIZE_MAP[tmp2(undefined, tmp3[22]).AvatarSizes.GIFT_SUCCESS]);
      }
      const obj = { source: avatarSource, avatarDecoration, size: giftCode(nameplateContainer[22]).AvatarSizes.GIFT_SUCCESS, animate: true };
      return tmp(Avatar, obj);
    });
    const obj8 = { type: CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT };
    const withResult1 = withResult.with(obj8, (profileEffect) => {
      const obj = { user, profileEffect };
      return closure_8(user(nameplateContainer[23]), obj);
    });
    const obj9 = { type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME };
    const withResult2 = withResult1.with(obj9, (profileFrame) => {
      const obj = { user, profileFrame };
      return closure_8(user(nameplateContainer[24]), obj);
    });
    const obj10 = { type: CollectiblesItemType.CollectiblesItemType.NAMEPLATE };
    const withResult3 = withResult2.with(obj10, (nameplate) => {
      let obj2;
      const obj = { style: nameplateContainer.nameplateContainer, children: closure_8(giftCode(nameplateContainer[25]).NameplatePreview, obj2) };
      obj2 = { user, nameplate };
      return closure_8(getOrFetchApplication, obj);
    });
    otherwiseResult = withResult3.otherwise(() => {
      const obj = { giftStyle: giftStyle.giftStyle };
      return closure_8(user(nameplateContainer[26]), obj);
    });
  }
  cResult[10] = getOrFetchApplication;
  cResult[11] = first2;
  cResult[12] = firstAvatarDecoration;
  cResult[13] = firstNameplate;
  cResult[14] = firstProfileEffect;
  cResult[15] = giftCode.giftStyle;
  cResult[16] = giftCode.skuId;
  cResult[17] = tmp15;
  cResult[18] = first1;
  cResult[19] = product;
  cResult[20] = stateFromStores;
  cResult[21] = tmp4.bundleContainer;
  cResult[22] = tmp4.bundlePreview;
  cResult[23] = tmp4.gameItemCard;
  cResult[24] = tmp4.nameplateContainer;
  cResult[25] = user;
  cResult[26] = renderImage;
  tmp26 = renderImage;
}) : (function GiftCodeRedeemSuccess(giftCode) {
  let W2znvX;
  let _undefined;
  let c3;
  let canUseNow;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let formatToPlainString;
  let handleUseNow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl8;
  let intl9;
  let nameplateContainer;
  let obj10;
  let obj15;
  let obj18;
  let obj26;
  let tmp18;
  let tmp24Result;
  let tmp24Result2;
  let tmp2Result10;
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  _slicedToArray = undefined;
  let tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = giftCode;
  let obj = giftCode(504);
  const items = [SKUStore];
  const stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(giftCode.skuId));
  let obj2 = giftCode(10478);
  const getOrFetchSubscriptionPlan = obj2.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const obj3 = giftCode(6847);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = giftCode(10482).useFetchCollectiblesProduct;
  giftCode(10482);
  let skuId = null;
  const obj4 = giftCode(7264);
  if (obj4.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  const BUNDLE = tmp2(1992).CollectiblesItemType.BUNDLE;
  let tmp12 = product;
  const useShopProductItems = tmp2(8271).useShopProductItems;
  tmp2(8271);
  if (product == null) {
    tmp12 = { items: [] };
    const obj5 = { items: [] };
  }
  const shopProductItems = useShopProductItems(tmp12);
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  let tmp15 = product;
  const useHandleUseNow = tmp2(11181).useHandleUseNow;
  tmp2(11181);
  if (product == null) {
    tmp15 = { skuId: "", type: tmp2(1992).CollectiblesItemType.BUNDLE, items: [] };
    const obj6 = { skuId: "", type: tmp2(1992).CollectiblesItemType.BUNDLE, items: [] };
  }
  const handleUseNow1 = useHandleUseNow({ product: tmp15 });
  const isApplying = handleUseNow1.isApplying;
  ({ handleUseNow, canUseNow } = handleUseNow1);
  [tmp18, c3] = react.useState();
  _slicedToArray(react.useState(), 2);
  const callback = react.useCallback((nativeEvent) => {
    let closure_129_0;
    let closure_129_1;
    ({ width: closure_129_0, height: closure_129_1 } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      size = arg0;
      if (null != arg0) {
        return size;
      }
      const size1 = { width, height };
      size = size1;
    });
  }, []);
  const obj7 = { bottom: true, style: tmp.container, children: null };
  const obj8 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (null == first) {
    let tmp34;
    let tmp39;
    let tmp39Result;
    if (null != getOrFetchApplication) {
      let tmp28Result;
      const tmp2Result7 = tmp2(6917);
      if (tmp2Result7.isGameItemSKU(stateFromStores)) {
        const obj9 = { style: tmp.gameItemCard, children: closure_8(user(8998), obj10) };
        obj10 = { sku: stateFromStores };
        tmp28Result = tmp28(closure_5, obj9);
      } else {
        const obj11 = { game: getOrFetchApplication, size: tmp2(6851).GameIconSizes.LARGE, skuId: giftCode.skuId };
        const tmp30 = user(6851);
        tmp28Result = tmp28(tmp30, obj11);
      }
      tmp24Result2 = tmp28Result;
    }
    const items1 = [tmp24Result2, , ];
    if (null == stateFromStores) {
      const obj12 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: intl4.string(tmp2(1126).t["+BNMcF"]) };
      const Text4 = tmp2(5086).Text;
      intl4 = tmp2(1126).intl;
      tmp34 = closure_8(Text4, obj12);
    } else {
      const tmp2Result8 = tmp2(6917);
      if (tmp2Result8.isGameItemSKU(stateFromStores)) {
        const obj13 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: intl3.string(tmp2(1126).t["5glWta"]) };
        const Text3 = tmp2(5086).Text;
        intl3 = tmp2(1126).intl;
        tmp34 = closure_8(Text3, obj13);
      } else {
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj14 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: intl2.format(tmp2(1126).t["1C2BG/"], obj15) };
            const Text2 = tmp2(5086).Text;
            intl2 = tmp2(1126).intl;
            obj15 = { skuName: stateFromStores.name };
            tmp34 = closure_8(Text2, obj14);
          }
        }
        if (null != first) {
          const obj16 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.header, accessibilityRole: "header", children: intl.string(tmp2(1126).t.IMffmm) };
          const Text = tmp2(5086).Text;
          intl = tmp2(1126).intl;
          tmp34 = closure_8(Text, obj16);
        }
      }
    }
    items1[1] = tmp34;
    const tmp2Result9 = tmp2(6917);
    if (tmp2Result9.isGameItemSKU(stateFromStores)) {
      if (null != getOrFetchApplication) {
        const obj17 = { variant: "text-md/medium", style: tmp.message, children: formatToPlainString(W2znvX, obj18) };
        const Text6 = tmp2(5086).Text;
        const intl7 = tmp2(1126).intl;
        formatToPlainString = intl7.formatToPlainString;
        let str2;
        W2znvX = tmp2(1126).t.W2znvX;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        obj18 = { skuName: str2, applicationName: getOrFetchApplication.name };
        tmp39Result = tmp45(Text6, obj17);
        tmp39 = tmp45;
      }
      items1[2] = tmp39Result;
      obj8.children = items1;
      const items2 = [closure_9(tmp22, obj8), ];
      const obj19 = { style: tmp.footer, children: null };
      const tmp46 = closure_5;
      if (null != first) {
        let obj21;
        if (canUseNow) {
          const obj20 = { text: intl9.string(tmp2(1126).t.MAS7uK), size: "md", loading: isApplying, disabled: isApplying, onPress: handleUseNow };
          intl9 = tmp2(1126).intl;
          obj21 = obj20;
        }
        obj19.children = tmp39(tmp47, obj21);
        items2[1] = tmp39(tmp46, obj19);
        obj7.children = items2;
        return closure_9(tmp21, obj7);
      }
      obj21 = { text: intl8.string(tmp2(1126).t["NX+WJN"]), size: "md", onPress: user(5940).pop };
      intl8 = tmp2(1126).intl;
    }
    if (giftCode.isSubscription) {
      if (null != getOrFetchSubscriptionPlan) {
        const obj22 = { variant: "text-md/medium", style: tmp.message, children: tmp2Result10.getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) };
        const Text5 = tmp2(5086).Text;
        tmp2Result10 = tmp2(5629);
        tmp39Result = closure_8(Text5, obj22);
        tmp39 = closure_8;
      }
    }
    tmp39 = closure_8;
    const obj23 = { variant: "text-md/medium", style: tmp.message, children: null };
    if (null != first) {
      let formatToPlainStringResult;
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      if (null != name) {
        const intl6 = tmp2(1126).intl;
        const obj24 = { itemName: stateFromStores.name };
        formatToPlainStringResult = intl6.formatToPlainString(tmp2(1126).t["4kp0AB"], obj24);
      }
      obj23.children = formatToPlainStringResult;
      tmp39Result = tmp39(tmp40, obj23);
    }
    const intl5 = tmp2(1126).intl;
    formatToPlainStringResult = intl5.string(tmp2(1126).t["5ayf7w"]);
  }
  if (type === BUNDLE) {
    if (null != product) {
      const obj25 = { style: tmp.bundleContainer, children: closure_8(closure_5, obj26) };
      obj26 = { style: tmp.bundlePreview, onLayout: callback, children: tmp24Result };
      tmp24Result = null != tmp18;
      if (tmp24Result) {
        const obj27 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp18 };
        tmp24Result = tmp24(user(8970), obj27);
      }
      tmp24Result2 = tmp24(tmp25, obj25);
    }
  }
  const str = tmp2(5741);
  const match = str.match(first);
  const obj28 = { type: tmp2(1992).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with(obj28, (avatarDecoration) => {
    let avatarSource;
    const Avatar = native.Avatar;
    const tmp = metroImportAll;
    const tmp4 = user;
    if (user != null) {
      const getAvatarSource = tmp4.getAvatarSource;
      avatarSource = getAvatarSource(null, true, tmp2(1200).AVATAR_SIZE_MAP[tmp2(undefined, 1200).AvatarSizes.GIFT_SUCCESS]);
    }
    const obj = { source: avatarSource, avatarDecoration, size: native.AvatarSizes.GIFT_SUCCESS, animate: true };
    return tmp(Avatar, obj);
  });
  const obj29 = { type: tmp2(1992).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with(obj29, (profileEffect) => {
    const obj = { user, profileEffect };
    return metroImportAll(ProfileEffectUserPreviewDefault, obj);
  });
  const obj30 = { type: tmp2(1992).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with(obj30, (profileFrame) => {
    const obj = { user, profileFrame };
    return metroImportAll(ProfileFrameUserPreviewDefault, obj);
  });
  const obj31 = { type: tmp2(1992).CollectiblesItemType.NAMEPLATE };
  const withResult3 = withResult2.with(obj31, (nameplate) => {
    let obj2;
    const obj = { style: nameplateContainer.nameplateContainer, children: metroImportAll(NameplatePreview.NameplatePreview, obj2) };
    obj2 = { user, nameplate };
    return metroImportAll(hasOwnProperty, obj);
  });
  tmp24Result2 = withResult3.otherwise(() => {
    const obj = { giftStyle: giftCode.giftStyle };
    return metroImportAll(GiftBoxAnimationDefault, obj);
  });
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default tmp5;
