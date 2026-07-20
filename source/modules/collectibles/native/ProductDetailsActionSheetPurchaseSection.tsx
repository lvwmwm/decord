// Module ID: 8759
// Function ID: 69246
// Name: GiftButton
// Dependencies: []
// Exports: default

// Module 8759 (GiftButton)
function GiftButton(onTrackPress) {
  let variant;
  ({ product: closure_0, analyticsLocations: closure_1, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  const dependencyMap = onTrackPress.onTrackPress;
  let obj = { size: "lg", variant };
  obj = { size: "md" };
  if ("primary" === variant) {
    let TEXT_STRONG = importDefault(dependencyMap[11]).colors.WHITE;
  } else {
    TEXT_STRONG = importDefault(dependencyMap[11]).colors.TEXT_STRONG;
  }
  obj.color = TEXT_STRONG;
  obj.icon = closure_16(arg1(dependencyMap[13]).GiftIcon, obj);
  obj.onPress = function onPress() {
    if (null != onTrackPress) {
      onTrackPress(constants.SEND_AS_GIFT);
    }
    let obj = callback(onTrackPress[14]);
    obj.hideActionSheet(lib(onTrackPress[15]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    obj = { skuId: lib.skuId, analyticsLocations: callback };
    lib(onTrackPress[16]).openShopGiftModal(obj);
  };
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.PEjaCx);
  return closure_16(arg1(dependencyMap[12]).IconButton, obj);
}
function VCButton(balance) {
  balance = balance.balance;
  const arg1 = balance;
  const product = balance.product;
  const importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = balance.onTrackPress;
  let closure_3;
  let React;
  let View;
  let closure_6;
  let closure_7;
  let str;
  const tmp = callback4();
  closure_3 = tmp;
  let obj = arg1(dependencyMap[18]);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  const price = virtualCurrencyData.price;
  let obj1 = arg1(dependencyMap[19]);
  let isPartiallyOwnedBundle = obj1.useProductDisableState(product.skuId).isDisabled;
  let obj2 = arg1(dependencyMap[20]);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !virtualCurrencyData.canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj2.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  let obj3 = arg1(dependencyMap[21]);
  const navigation = obj3.useNavigation();
  React = navigation;
  const analyticsLocations = importDefault(dependencyMap[22])().analyticsLocations;
  View = analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations];
  closure_6 = React.useCallback(() => {
    let obj = product(onTrackPress[14]);
    obj.hideActionSheet();
    obj = {
      skuId: product.skuId,
      analyticsLocations,
      onCheckoutSuccess(arg0) {
        let obj = callback(closure_2[26]);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        let obj1 = lib(closure_2[23]);
        obj1.popWithKey(closure_20);
        if (lib.skuId === constants.ORB_PROFILE_BADGE) {
          obj = {
            modalKey: closure_19,
            onPressViewBadge(arg0) {
                return navigation.navigate(constants2.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase: callback
          };
          lib(closure_2[23]).pushLazy(callback(closure_2[25])(closure_2[27], closure_2.paths), obj, closure_19);
          const obj7 = lib(closure_2[23]);
        } else if (lib.skuId === constants.FRACTIONAL_PREMIUM) {
          obj = {};
          const first = arg0.entitlements[0];
          let consumed;
          const obj5 = lib(closure_2[14]);
          if (null != first) {
            consumed = first.consumed;
          }
          obj.consumed = null != consumed && consumed;
          obj.onPressExplorePerks = function onPressExplorePerks() {
            navigation.navigate(constants.PREMIUM);
            callback(closure_2[14]).hideActionSheet();
          };
          obj.onPressViewCredits = function onPressViewCredits() {
            navigation.navigate(constants.PREMIUM_MANAGE_PLAN);
            callback(closure_2[14]).hideActionSheet();
          };
          obj5.openLazy(callback(closure_2[25])(closure_2[28], closure_2.paths), "FractionalNitroCollectedActionSheet", obj);
          const tmp11 = callback(closure_2[25])(closure_2[28], closure_2.paths);
        } else {
          obj1 = { "Null": null, "Null": null, "Null": null, product: lib, orbBalancePriorToPurchase: callback };
          lib(closure_2[29]).open(obj1);
          const obj3 = lib(closure_2[29]);
        }
      }
    };
    product(onTrackPress[23]).pushLazy(balance(onTrackPress[25])(onTrackPress[24], onTrackPress.paths), obj, closure_20);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = importDefault(dependencyMap[11]).colors;
    closure_7 = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    str = "text-overlay-light";
    if (isPartiallyOwnedBundle) {
      str = "interactive-text-active";
    }
    const intl = arg1(dependencyMap[17]).intl;
    obj = {
      orbPrice: price.amount,
      orbIconHook() {
          return callback2(balance(onTrackPress[30]).OrbsIcon, { size: "sm", color: closure_7 }, "orbs-icon");
        }
    };
    const formatResult = intl.format(arg1(dependencyMap[17]).t.JC15qj, obj);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    obj = { style: tmp.orbsButtonLabel };
    const intl2 = arg1(dependencyMap[17]).intl;
    obj1 = { orbPrice: price.amount };
    obj.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[17]).t.yi41qQ, obj1);
    obj.children = arr2.map((children) => {
      if ("string" === typeof children) {
        const obj = { style: tmp.orbsButtonText, variant: "text-md/semibold", color: str, children };
        let tmp2 = callback2(balance(onTrackPress[31]).Text, obj, arg1);
      } else {
        tmp2 = children;
      }
      return tmp2;
    });
    obj2 = { style: tmp.buttonContainer };
    obj3 = {
      loading: false,
      textElement: callback2(View, obj),
      onPress() {
          if (null != onTrackPress) {
            onTrackPress(constants.BUY_WITH_ORBS);
          }
          callback();
        },
      disabled: isPartiallyOwnedBundle,
      size: "lg"
    };
    let str3 = "primary";
    if (isPartiallyOwnedBundle) {
      str3 = "secondary";
    }
    obj3.variant = str3;
    obj3.grow = true;
    obj2.children = callback2(arg1(dependencyMap[32]).BaseTextButton, obj3);
    return callback2(View, obj2);
  }
}
function PurchaseDisclaimer(arg0) {
  let buyButtonLabel;
  let product;
  ({ product, buyButtonLabel } = arg0);
  let obj = { Promise: 291840, marginTop: 131072, flags: 0, style: callback4().disclaimer };
  let formatResult = product.type !== arg1(dependencyMap[34]).CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = arg1(dependencyMap[17]).intl;
    obj = { buyButtonLabel, paidServiceTermURL: constants.PAID_TERMS };
    formatResult = intl.format(arg1(dependencyMap[17]).t.iIglwJ, obj);
  }
  obj.children = formatResult;
  return closure_16(arg1(dependencyMap[33]).TextWithIOSLinkWorkaround, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const useNativeCheckoutStore = arg1(dependencyMap[3]).useNativeCheckoutStore;
let closure_7 = importDefault(dependencyMap[4]);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_8, ShopCtaEnum: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ HelpdeskArticles: closure_10, MarketingURLs: closure_11, UserSettingsSections: closure_12 } = arg1(dependencyMap[6]));
const RootNavigatorScreen = arg1(dependencyMap[7]).RootNavigatorScreen;
const tmp3 = arg1(dependencyMap[6]);
({ PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = arg1(dependencyMap[9]));
let closure_19 = "ORB_BADGE_COLLECTED_MODAL";
let closure_20 = "ORB_CHECKOUT_MODAL";
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_8 };
obj.container = obj;
const obj1 = { <string:80282112>: "Iyka0U", <string:72444672>: "sdk", borderColor: importDefault(dependencyMap[11]).colors.BORDER_MUTED };
obj.containerFramesEA = obj1;
obj.gradientOverlay = { left: "isArray", borderColor: "skuId", borderWidth: "T", backgroundColor: "r", borderRadius: "isArray" };
const tmp5 = arg1(dependencyMap[9]);
obj.purchaseSection = { gap: importDefault(dependencyMap[11]).space.PX_12 };
obj.disclaimer = { opacity: 0.75 };
const obj2 = { gap: importDefault(dependencyMap[11]).space.PX_12 };
obj.buttonContainer = { flexDirection: "row", gap: importDefault(dependencyMap[11]).space.PX_12 };
const obj3 = { flexDirection: "row", gap: importDefault(dependencyMap[11]).space.PX_12 };
obj.framesEAContainer = { flexDirection: "column", gap: importDefault(dependencyMap[11]).space.PX_8 };
obj.orbsButtonLabel = { -9223372036854775808: true, filter: true };
obj.orbsButtonText = { flexShrink: 1 };
let closure_21 = obj.createStyles(obj);
const obj4 = { flexDirection: "column", gap: importDefault(dependencyMap[11]).space.PX_8 };
const result = arg1(dependencyMap[59]).fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(onBuy) {
  const product = onBuy.product;
  const arg1 = product;
  const analyticsLocations = onBuy.analyticsLocations;
  const importDefault = analyticsLocations;
  const dependencyMap = onBuy.onTrackPress;
  let closure_18;
  let closure_19;
  let handleClaim;
  let callback4;
  let closure_22;
  let closure_23;
  const tmp = callback4();
  const callback = tmp;
  let obj = arg1(dependencyMap[36]);
  const tmp2 = importDefault(dependencyMap[35])();
  let obj1 = arg1(dependencyMap[37]);
  const token = obj1.useToken(importDefault(dependencyMap[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = arg1(dependencyMap[38]);
  const currentUser = obj2.useCurrentUser();
  let obj3 = arg1(dependencyMap[20]);
  const productPurchaseState = obj3.useProductPurchaseState(product);
  const isPurchased = productPurchaseState.isPurchased;
  let closure_4 = isPurchased;
  const View = productPurchaseState.isPartiallyOwnedBundle;
  let obj4 = arg1(dependencyMap[39]);
  const items = [closure_7];
  const items1 = [product];
  const useNativeCheckoutStore = callback(obj4.useStateFromStoresArray(items, () => {
    const items = [isClaiming.isClaiming === product.skuId];
    return items;
  }, items1), 1)[0];
  let obj5 = arg1(dependencyMap[40]);
  closure_7 = obj5.useIsPremiumSubscriber(TIER_2.TIER_2);
  let obj6 = importDefault(dependencyMap[41]);
  const canUseShopDiscountsResult = obj6.canUseShopDiscounts(currentUser);
  let obj7 = arg1(dependencyMap[42]);
  let closure_9 = obj7.isPremiumCollectiblesProduct(product);
  let obj8 = arg1(dependencyMap[42]);
  let closure_10 = obj8.isFreeCollectiblesProduct(product);
  let obj9 = arg1(dependencyMap[43]);
  let closure_11 = obj9.isOrbsExclusiveProduct(product);
  const isThemeDarkResult = obj.isThemeDark(importDefault(dependencyMap[35])());
  const balance = arg1(dependencyMap[44]).useFetchVirtualCurrencyBalance().balance;
  const obj11 = arg1(dependencyMap[44]);
  const RootNavigatorScreen = arg1(dependencyMap[18]).useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  const obj12 = arg1(dependencyMap[18]);
  const handleUseNow = arg1(dependencyMap[45]).useHandleUseNow({ product, analyticsLocations });
  ({ handleUseNow: closure_14, isApplying: closure_15, canUseNow: closure_16, handleEditProfile: closure_17 } = handleUseNow);
  const tmp9 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  obj = { product, analyticsLocations, onBuy: onBuy.onBuy };
  let id;
  const obj13 = arg1(dependencyMap[45]);
  if (null != tmp9) {
    id = tmp9.id;
  }
  obj.orderId = id;
  const tmp10 = importDefault(dependencyMap[46]);
  ({ handleBuyNow: closure_18, isBuying: closure_19 } = importDefault(dependencyMap[46])(obj));
  const tmp10Result = importDefault(dependencyMap[46])(obj);
  handleClaim = arg1(dependencyMap[47]).useHandleClaim({ product }).handleClaim;
  const tmp13 = importDefault(dependencyMap[48])({ location: "ProductDetailsActionSheetPurchaseSection", product });
  callback4 = tmp13;
  let tmp22Result = tmp13;
  if (tmp13) {
    tmp22Result = !isPurchased;
  }
  const obj15 = arg1(dependencyMap[47]);
  closure_22 = arg1(dependencyMap[49]).useIsEligibleForBogoOffer() ? tmp15.MONTH : tmp15.YEAR;
  const obj16 = arg1(dependencyMap[49]);
  closure_23 = arg1(dependencyMap[50]).useCanGiftProduct(product);
  let PX_16 = importDefault(dependencyMap[51])().bottom;
  obj = {};
  const items2 = [tmp.container, , ];
  let containerFramesEA = tmp22Result;
  if (tmp22Result) {
    containerFramesEA = tmp.containerFramesEA;
  }
  items2[1] = containerFramesEA;
  obj1 = {};
  if (null == PX_16) {
    PX_16 = importDefault(dependencyMap[11]).space.PX_16;
  }
  obj1.paddingBottom = PX_16;
  items2[2] = obj1;
  obj.style = items2;
  if (tmp22Result) {
    tmp22Result = !arg1(dependencyMap[52]).isAndroid();
    const obj20 = arg1(dependencyMap[52]);
  }
  if (tmp22Result) {
    obj2 = {};
    obj3 = { colors: ["index", "formatToPlainString"], locations: ["TooltipNames", "accountId"], start: { "Null": false, "Null": true }, end: { "Null": "innocent", "Null": "innocent" } };
    const items3 = [tmp.gradientOverlay, ];
    let tmp28 = !isThemeDarkResult;
    if (tmp28) {
      obj4 = { opacity: 0.4 };
      tmp28 = obj4;
    }
    items3[1] = tmp28;
    obj3.style = items3;
    obj3.pointerEvents = "none";
    const items4 = [callback2(importDefault(dependencyMap[53]), obj3), ];
    obj5 = { "Bool(false)": false, "Bool(false)": 2, "Bool(false)": "sh", "Bool(false)": 3, style: tmp.gradientOverlay };
    const tmp22 = callback3;
    const tmp23 = closure_18;
    const tmp24 = callback2;
    const tmp27 = importDefault(dependencyMap[53]);
    obj6 = {};
    obj7 = { applicationId: "\u{1FAF1}\u{1F3FC}\u200D\u{1FAF2}\u{1F3FB}", isGameRelationship: true, isNameplatedRow: null, canShowDisplayNameStyles: 14, canShowDisplayNameStylesFont: "perks", deviceType: "message", simpleDeviceType: null };
    obj8 = { MEETS_AUTO_ENABLE: "Group 4", folderColor: 3, summaryContainer: 2, stopColor: token };
    const items5 = [callback2(arg1(dependencyMap[54]).Stop, obj8), ];
    obj9 = { MEETS_AUTO_ENABLE: "start_ring_position", folderColor: "scalar", summaryContainer: 13, stopColor: token };
    items5[1] = callback2(arg1(dependencyMap[54]).Stop, obj9);
    obj7.children = items5;
    obj6.children = callback3(arg1(dependencyMap[54]).RadialGradient, obj7);
    const items6 = [callback2(arg1(dependencyMap[54]).Defs, obj6), callback2(arg1(dependencyMap[54]).Rect, { required: null, id: null, source: null, name: null, selfVideo: null })];
    obj5.children = items6;
    items4[1] = callback3(importDefault(dependencyMap[54]), obj5);
    obj2.children = items4;
    tmp22Result = tmp22(tmp23, obj2);
    const tmp32 = importDefault(dependencyMap[54]);
  }
  const items7 = [
    tmp22Result,
    () => {
      if (isPurchased) {
        let tmp = product.type !== product(onTrackPress[34]).CollectiblesItemType.EXTERNAL_SKU;
        if (tmp) {
          let obj = { style: tmp.buttonContainer };
          tmp = product;
          tmp = onTrackPress;
          tmp = callback2;
          tmp = isPartiallyOwnedBundle;
          tmp = callback;
          tmp = callback;
          if (callback) {
            obj = {};
            tmp = closure_15;
            obj.loading = closure_15;
            tmp = product;
            tmp = onTrackPress;
            const intl13 = product(onTrackPress[17]).intl;
            obj.text = intl13.string(product(onTrackPress[17]).t.MAS7uK);
            obj.onPress = function onPress() {
              if (null != callback) {
                callback(constants.USE_NOW);
              }
              callback2();
            };
            obj.size = "lg";
            obj.grow = true;
            let obj1 = obj;
          } else {
            obj1 = {};
            tmp = product;
            tmp = onTrackPress;
            const intl12 = product(onTrackPress[17]).intl;
            obj1.text = intl12.string(product(onTrackPress[17]).t.2p2aYz);
            obj1.onPress = function onPress() {
              if (null != callback) {
                callback(constants.EDIT_PROFILE);
              }
              callback3();
            };
            obj1.size = "lg";
            obj1.grow = true;
          }
          const items = [tmp(product(onTrackPress[55]).Button, obj1), ];
          tmp = closure_23;
          if (closure_23) {
            tmp = callback;
            tmp = closure_22;
            const obj2 = {};
            tmp = product;
            obj2.product = product;
            tmp = analyticsLocations;
            obj2.analyticsLocations = analyticsLocations;
            tmp = onTrackPress;
            obj2.onTrackPress = onTrackPress;
            tmp = callback(closure_22, obj2);
          }
          items[1] = tmp;
          obj.children = items;
          tmp = tmp(tmp, obj);
        }
        return tmp;
      } else {
        tmp = tmp13;
        if (tmp13) {
          let obj9 = product(onTrackPress[52]);
          const t = product(onTrackPress[17]).t;
          const isAndroidResult = obj9.isAndroid();
          const obj3 = {};
          const items1 = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
          items1[arraySpreadResult] = analyticsLocations(onTrackPress[56]).PROFILE_FRAMES_EA_MARKETING;
          const sum = arraySpreadResult + 1;
          obj3.value = items1;
          const obj4 = { style: tmp.framesEAContainer };
          const obj5 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true };
          const intl8 = product(onTrackPress[17]).intl;
          const obj6 = {};
          let obj14 = analyticsLocations(onTrackPress[57]);
          obj6.articleURL = obj14.getArticleURL(constants.SHOP_FRAMES_EARLY_ACCESS);
          obj5.children = intl8.format(product(onTrackPress[17]).t.3cglst, obj6);
          const items2 = [callback(product(onTrackPress[33]).TextWithIOSLinkWorkaround, obj5), , ];
          const obj7 = { onTrackPress };
          const intl9 = product(onTrackPress[17]).intl;
          obj7.text = intl9.string(product(onTrackPress[17]).t.9wfL34);
          items2[1] = callback(product(onTrackPress[58]).UnlockWithNitroButton, obj7);
          const obj8 = { variant: "text-xxs/normal" };
          const intl10 = product(onTrackPress[17]).intl;
          obj9 = { paidURL: constants2.PAID_TERMS };
          const tmp78 = obj9.isAndroid() ? t.COObWR : t.7wpqfj;
          obj9.interval = analyticsLocations(onTrackPress[41]).getIntervalStringAsNoun(closure_22);
          const intl11 = product(onTrackPress[17]).intl;
          obj9.ctaText = intl11.string(product(onTrackPress[17]).t.9wfL34);
          obj8.children = intl10.format(tmp78, obj9);
          items2[2] = callback(product(onTrackPress[33]).TextWithIOSLinkWorkaround, obj8);
          obj4.children = items2;
          obj3.children = callback2(isPartiallyOwnedBundle, obj4);
          return callback(product(onTrackPress[22]).AnalyticsLocationProvider, obj3);
        } else {
          if (closure_9) {
            if (!closure_7) {
              if (!constants) {
                obj = { onTrackPress };
                return callback(product(onTrackPress[58]).UnlockWithNitroButton, obj);
              }
            }
          }
          if (!constants) {
            if (product.type === product(onTrackPress[34]).CollectiblesItemType.BUNDLE) {
              const intl6 = product(onTrackPress[17]).intl;
              let stringResult = intl6.string(product(onTrackPress[17]).t.V1AWw0);
            } else {
              tmp = product;
              tmp = product;
              tmp = onTrackPress;
              if (product.type === product(onTrackPress[34]).CollectiblesItemType.PROFILE_EFFECT) {
                const intl5 = product(onTrackPress[17]).intl;
                stringResult = intl5.string(product(onTrackPress[17]).t.kAeDcK);
              } else {
                tmp = product;
                tmp = product;
                tmp = onTrackPress;
                if (product.type === product(onTrackPress[34]).CollectiblesItemType.NAMEPLATE) {
                  const intl4 = product(onTrackPress[17]).intl;
                  stringResult = intl4.string(product(onTrackPress[17]).t.H3vhqU);
                } else {
                  tmp = product;
                  tmp = product;
                  tmp = onTrackPress;
                  if (product.type === product(onTrackPress[34]).CollectiblesItemType.AVATAR_DECORATION) {
                    const intl3 = product(onTrackPress[17]).intl;
                    stringResult = intl3.string(product(onTrackPress[17]).t.AQ0Veg);
                  } else {
                    tmp = product;
                    tmp = product;
                    tmp = onTrackPress;
                    if (product.type === product(onTrackPress[34]).CollectiblesItemType.PROFILE_FRAME) {
                      const intl2 = product(onTrackPress[17]).intl;
                      stringResult = intl2.string(product(onTrackPress[17]).t.BlSW1e);
                    } else {
                      const intl = product(onTrackPress[17]).intl;
                      stringResult = intl.string(product(onTrackPress[17]).t.AQ0Veg);
                    }
                  }
                }
              }
            }
            const obj10 = { style: tmp.purchaseSection };
            let tmp31 = canAfford;
            if (canAfford) {
              const obj11 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress };
              tmp31 = callback(closure_23, obj11);
            }
            const items3 = [tmp31, , , ];
            let tmp40Result = !constants2;
            if (tmp40Result) {
              const obj12 = { style: tmp.buttonContainer };
              const obj13 = {
                loading: closure_19,
                text: stringResult,
                onPress() {
                          if (null != callback) {
                            callback(constants.BUY_WITH_FIAT);
                          }
                          callback4();
                        },
                disabled: isPartiallyOwnedBundle
              };
              let str = "primary";
              let str2 = "primary";
              if (canAfford) {
                str2 = "secondary";
              }
              obj13.variant = str2;
              obj13.size = "lg";
              obj13.grow = true;
              const items4 = [callback(product(onTrackPress[55]).Button, obj13), ];
              let tmp50Result = closure_23;
              if (closure_23) {
                obj14 = { product, analyticsLocations };
                if (canAfford) {
                  str = "secondary";
                }
                obj14.variant = str;
                obj14.onTrackPress = onTrackPress;
                tmp50Result = callback(closure_22, obj14);
                const tmp50 = callback;
                const tmp51 = closure_22;
              }
              items4[1] = tmp50Result;
              obj12.children = items4;
              tmp40Result = callback2(isPartiallyOwnedBundle, obj12);
              const tmp40 = callback2;
              const tmp41 = isPartiallyOwnedBundle;
              const tmp43 = callback;
            }
            items3[1] = tmp40Result;
            let tmp57 = !canAfford;
            if (tmp57) {
              const obj15 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress };
              tmp57 = callback(closure_23, obj15);
            }
            items3[2] = tmp57;
            let tmp65 = !constants2;
            if (tmp65) {
              const obj16 = { product, buyButtonLabel: stringResult };
              tmp65 = callback(closure_24, obj16);
            }
            items3[3] = tmp65;
            obj10.children = items3;
            return callback2(isPartiallyOwnedBundle, obj10);
          }
          const obj17 = {};
          const intl7 = product(onTrackPress[17]).intl;
          obj17.text = intl7.string(product(onTrackPress[17]).t.zp6caO);
          obj17.loading = closure_6;
          obj17.onPress = function onPress() {
            if (null != callback) {
              callback(constants.ADD_TO_COLLECTION);
            }
            callback5();
          };
          obj17.size = "lg";
          obj17.grow = true;
          return callback(product(onTrackPress[55]).Button, obj17);
        }
      }
    }()
  ];
  obj.children = items7;
  return callback3(View, obj);
};
