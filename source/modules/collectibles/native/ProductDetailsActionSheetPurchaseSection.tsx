// Module ID: 8771
// Function ID: 69322
// Name: GiftButton
// Dependencies: [57, 31, 27, 6663, 6790, 655, 653, 8772, 1851, 33, 4130, 689, 7771, 8773, 4098, 8736, 8774, 1212, 8767, 8766, 8713, 1456, 5464, 4337, 11831, 1934, 6773, 11835, 656, 11836, 9772, 8708, 4126, 4544, 5459, 1876, 4066, 3976, 3834, 8667, 566, 8529, 3776, 6786, 6785, 8722, 9778, 11838, 11839, 11840, 7129, 11842, 1557, 478, 4554, 8018, 4543, 5484, 1920, 11843, 2]
// Exports: default

// Module 8771 (GiftButton)
import QUICK_SWITCHER from "QUICK_SWITCHER";
import OrbsIcon from "OrbsIcon";
import { View } from "screens";
import { useNativeCheckoutStore } from "context";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";
import ME from "ME";
import { RootNavigatorScreen } from "MODE_CHANGE_PHYSICS";
import GuildFeatures from "GuildFeatures";
import jsxProd from "CollapsingText";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_8;
let closure_9;
let require = arg1;
function GiftButton(onTrackPress) {
  let importDefault;
  let require;
  let variant;
  ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  onTrackPress = onTrackPress.onTrackPress;
  let obj = { size: "lg", variant };
  obj = { size: "md" };
  if ("primary" === variant) {
    let TEXT_STRONG = importDefault(onTrackPress[11]).colors.WHITE;
  } else {
    TEXT_STRONG = importDefault(onTrackPress[11]).colors.TEXT_STRONG;
  }
  obj.color = TEXT_STRONG;
  obj.icon = closure_16(require(onTrackPress[13]).GiftIcon, obj);
  obj.onPress = function onPress() {
    if (null != onTrackPress) {
      onTrackPress(outer1_9.SEND_AS_GIFT);
    }
    let obj = outer1_1(onTrackPress[14]);
    obj.hideActionSheet(outer1_0(onTrackPress[15]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    obj = { skuId: skuId.skuId, analyticsLocations: closure_1 };
    outer1_0(onTrackPress[16]).openShopGiftModal(obj);
  };
  const intl = require(onTrackPress[17]).intl;
  obj.accessibilityLabel = intl.string(require(onTrackPress[17]).t.PEjaCx);
  return closure_16(require(onTrackPress[12]).IconButton, obj);
}
function VCButton(balance) {
  balance = balance.balance;
  const product = balance.product;
  const importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  const onTrackPress = balance.onTrackPress;
  let c3;
  let navigation;
  let analyticsLocations;
  let closure_6;
  let _isNativeReflectConstruct;
  let str;
  const tmp = _createForOfIteratorHelperLoose();
  c3 = tmp;
  let obj = balance(onTrackPress[18]);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  const price = virtualCurrencyData.price;
  let obj1 = balance(onTrackPress[19]);
  let isPartiallyOwnedBundle = obj1.useProductDisableState(product.skuId).isDisabled;
  let obj2 = balance(onTrackPress[20]);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !virtualCurrencyData.canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj2.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  let obj3 = balance(onTrackPress[21]);
  navigation = obj3.useNavigation();
  analyticsLocations = importDefault(onTrackPress[22])().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations];
  closure_6 = navigation.useCallback(() => {
    let obj = product(onTrackPress[14]);
    obj.hideActionSheet();
    obj = {
      skuId: product.skuId,
      analyticsLocations,
      onCheckoutSuccess(arg0) {
        let obj = balance(onTrackPress[26]);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        let obj1 = product(onTrackPress[23]);
        obj1.popWithKey(outer2_20);
        if (outer1_1.skuId === str.ORB_PROFILE_BADGE) {
          obj = {
            modalKey: outer2_19,
            onPressViewBadge(arg0) {
                return outer2_4.navigate(outer3_13.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase: outer1_0
          };
          product(onTrackPress[23]).pushLazy(balance(onTrackPress[25])(onTrackPress[27], onTrackPress.paths), obj, outer2_19);
          const obj7 = product(onTrackPress[23]);
        } else {
          const ALL = balance(onTrackPress[28]).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(outer1_1.skuId)) {
            let tmp23Result = tmp23(tmp24[14]);
            obj = { skuId: outer1_1.skuId };
            const first = arg0.entitlements[0];
            let consumed;
            if (null != first) {
              consumed = first.consumed;
            }
            obj.consumed = null != consumed && consumed;
            obj.onPressExplorePerks = function onPressExplorePerks() {
              outer2_4.navigate(outer3_12.PREMIUM);
              product(onTrackPress[14]).hideActionSheet();
            };
            obj.onPressViewCredits = function onPressViewCredits() {
              outer2_4.navigate(outer3_12.PREMIUM_MANAGE_PLAN);
              product(onTrackPress[14]).hideActionSheet();
            };
            tmp23Result.openLazy(balance(tmp24[25])(tmp24[29], tmp24.paths), "FractionalNitroCollectedActionSheet", obj);
            const tmp7 = balance(tmp24[25])(tmp24[29], tmp24.paths);
          } else {
            tmp23Result = tmp23(tmp24[30]);
            obj1 = { product: outer1_1, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase: outer1_0 };
            tmp23Result.open(obj1);
          }
        }
      }
    };
    product(onTrackPress[23]).pushLazy(balance(onTrackPress[25])(onTrackPress[24], onTrackPress.paths), obj, outer1_20);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = importDefault(onTrackPress[11]).colors;
    _isNativeReflectConstruct = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    str = "text-overlay-light";
    if (isPartiallyOwnedBundle) {
      str = "interactive-text-active";
    }
    const intl = balance(onTrackPress[17]).intl;
    obj = {
      orbPrice: price.amount,
      orbIconHook() {
          return outer1_16(balance(onTrackPress[31]).OrbsIcon, { size: "sm", color: _isNativeReflectConstruct }, "orbs-icon");
        }
    };
    const formatResult = intl.format(balance(onTrackPress[17]).t.JC15qj, obj);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    obj = { style: tmp.orbsButtonLabel };
    const intl2 = balance(onTrackPress[17]).intl;
    obj1 = { orbPrice: price.amount };
    obj.accessibilityLabel = intl2.formatToPlainString(balance(onTrackPress[17]).t.yi41qQ, obj1);
    obj.children = arr2.map((children) => {
      if ("string" === typeof children) {
        const obj = { style: _undefined.orbsButtonText, variant: "text-md/semibold", color: str, children };
        let tmp2 = outer1_16(balance(onTrackPress[32]).Text, obj, arg1);
      } else {
        tmp2 = children;
      }
      return tmp2;
    });
    obj2 = { style: tmp.buttonContainer };
    obj3 = {
      loading: false,
      textElement: callback2(analyticsLocations, obj),
      onPress() {
          if (null != onTrackPress) {
            onTrackPress(outer1_9.BUY_WITH_ORBS);
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
    obj2.children = callback2(balance(onTrackPress[33]).BaseTextButton, obj3);
    return callback2(analyticsLocations, obj2);
  }
}
function PurchaseDisclaimer(arg0) {
  let buyButtonLabel;
  let product;
  ({ product, buyButtonLabel } = arg0);
  let obj = { style: _createForOfIteratorHelperLoose().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active" };
  let formatResult = product.type !== require(1876) /* CollectiblesItemType */.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { buyButtonLabel, paidServiceTermURL: constants.PAID_TERMS };
    formatResult = intl.format(require(1212) /* getSystemLocale */.t.iIglwJ, obj);
  }
  obj.children = formatResult;
  return closure_16(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj);
}
({ EXTERNAL_PRODUCT_SKU_IDS: closure_8, ShopCtaEnum: closure_9 } = items);
({ HelpdeskArticles: closure_10, MarketingURLs: closure_11, UserSettingsSections: closure_12 } = ME);
({ PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15 } = GuildFeatures);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { borderWidth: 1, borderStyle: "solid", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
_createForOfIteratorHelperLoose.containerFramesEA = obj1;
_createForOfIteratorHelperLoose.gradientOverlay = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
_createForOfIteratorHelperLoose.purchaseSection = { gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.disclaimer = { opacity: 0.75 };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.buttonContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj3 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.framesEAContainer = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.orbsButtonLabel = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.orbsButtonText = { flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(onBuy) {
  let c18;
  let c19;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  const product = onBuy.product;
  const require = product;
  const analyticsLocations = onBuy.analyticsLocations;
  const onTrackPress = onBuy.onTrackPress;
  c18 = undefined;
  c19 = undefined;
  let handleClaim;
  let _createForOfIteratorHelperLoose;
  let closure_22;
  let closure_23;
  let tmp = _createForOfIteratorHelperLoose();
  const callback = tmp;
  let obj = require(onTrackPress[37]);
  const tmp2 = analyticsLocations(onTrackPress[36])();
  let obj1 = require(onTrackPress[38]);
  const token = obj1.useToken(analyticsLocations(onTrackPress[11]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = require(onTrackPress[39]);
  const currentUser = obj2.useCurrentUser();
  let obj3 = require(onTrackPress[20]);
  const productPurchaseState = obj3.useProductPurchaseState(product);
  const isPurchased = productPurchaseState.isPurchased;
  const isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  let obj4 = require(onTrackPress[40]);
  let items = [_isNativeReflectConstruct];
  let items1 = [product];
  const useNativeCheckoutStore = callback(obj4.useStateFromStoresArray(items, () => {
    const items = [isClaiming.isClaiming === product.skuId];
    return items;
  }, items1), 1)[0];
  let obj5 = require(onTrackPress[41]);
  _isNativeReflectConstruct = obj5.useIsPremiumSubscriber(TIER_2.TIER_2);
  let obj6 = analyticsLocations(onTrackPress[42]);
  const canUseShopDiscountsResult = obj6.canUseShopDiscounts(currentUser);
  let obj7 = require(onTrackPress[43]);
  let closure_9 = obj7.isPremiumCollectiblesProduct(product);
  let obj8 = require(onTrackPress[43]);
  let closure_10 = obj8.isFreeCollectiblesProduct(product);
  let obj9 = require(onTrackPress[44]);
  let closure_11 = obj9.isOrbsExclusiveProduct(product);
  const isThemeDarkResult = obj.isThemeDark(analyticsLocations(onTrackPress[36])());
  const balance = require(onTrackPress[45]).useFetchVirtualCurrencyBalance().balance;
  let obj11 = require(onTrackPress[45]);
  const canAfford = require(onTrackPress[18]).useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  let obj12 = require(onTrackPress[18]);
  const handleUseNow = require(onTrackPress[46]).useHandleUseNow({ product, analyticsLocations });
  ({ handleUseNow: closure_14, isApplying: closure_15, canUseNow: closure_16, handleEditProfile: closure_17 } = handleUseNow);
  const tmp9 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  obj = { product, analyticsLocations, onBuy: onBuy.onBuy };
  let id;
  let obj13 = require(onTrackPress[46]);
  if (null != tmp9) {
    id = tmp9.id;
  }
  obj.orderId = id;
  const tmp10 = analyticsLocations(onTrackPress[47]);
  ({ handleBuyNow: c18, isBuying: c19 } = analyticsLocations(onTrackPress[47])(obj));
  const tmp10Result = analyticsLocations(onTrackPress[47])(obj);
  handleClaim = require(onTrackPress[48]).useHandleClaim({ product }).handleClaim;
  const tmp13 = analyticsLocations(onTrackPress[49])({ location: "ProductDetailsActionSheetPurchaseSection", product });
  _createForOfIteratorHelperLoose = tmp13;
  let tmp22Result = tmp13;
  if (tmp13) {
    tmp22Result = !isPurchased;
  }
  let obj15 = require(onTrackPress[48]);
  closure_22 = require(onTrackPress[50]).useIsEligibleForBogoOffer() ? tmp15.MONTH : tmp15.YEAR;
  let obj16 = require(onTrackPress[50]);
  closure_23 = require(onTrackPress[51]).useCanGiftProduct(product);
  let PX_16 = analyticsLocations(onTrackPress[52])().bottom;
  obj = {};
  let items2 = [tmp.container, , ];
  let containerFramesEA = tmp22Result;
  if (tmp22Result) {
    containerFramesEA = tmp.containerFramesEA;
  }
  items2[1] = containerFramesEA;
  obj1 = {};
  if (null == PX_16) {
    PX_16 = analyticsLocations(onTrackPress[11]).space.PX_16;
  }
  obj1.paddingBottom = PX_16;
  items2[2] = obj1;
  obj.style = items2;
  if (tmp22Result) {
    tmp22Result = !require(onTrackPress[53]).isAndroid();
    const obj20 = require(onTrackPress[53]);
  }
  if (tmp22Result) {
    obj2 = {};
    obj3 = { colors: ["rgba(160, 86, 242, 0.45)", "rgba(22, 26, 138, 0.45)"], locations: [0.0854, 0.7847], start: { x: 0, y: 0 }, end: { x: 1, y: 1 } };
    let items3 = [tmp.gradientOverlay, ];
    let tmp28 = !isThemeDarkResult;
    if (tmp28) {
      obj4 = { opacity: 0.4 };
      tmp28 = obj4;
    }
    items3[1] = tmp28;
    obj3.style = items3;
    obj3.pointerEvents = "none";
    let items4 = [callback2(analyticsLocations(onTrackPress[54]), obj3), ];
    obj5 = { style: tmp.gradientOverlay, preserveAspectRatio: "none", viewBox: "0 0 100 100", pointerEvents: "none" };
    const tmp22 = callback3;
    const tmp23 = c18;
    const tmp24 = callback2;
    const tmp27 = analyticsLocations(onTrackPress[54]);
    obj6 = {};
    obj7 = { id: "frameEAVignette", cx: "50%", cy: "100%", rx: "100%", ry: "100%", fx: "50%", fy: "100%" };
    obj8 = { offset: "60%", stopColor: token, stopOpacity: 1 };
    const items5 = [callback2(require(onTrackPress[55]).Stop, obj8), ];
    obj9 = { offset: "100%", stopColor: token, stopOpacity: 0 };
    items5[1] = callback2(require(onTrackPress[55]).Stop, obj9);
    obj7.children = items5;
    obj6.children = callback3(require(onTrackPress[55]).RadialGradient, obj7);
    const items6 = [callback2(require(onTrackPress[55]).Defs, obj6), callback2(require(onTrackPress[55]).Rect, { x: "0", y: "0", width: "100", height: "100", fill: "url(#frameEAVignette)" })];
    obj5.children = items6;
    items4[1] = callback3(analyticsLocations(onTrackPress[55]), obj5);
    obj2.children = items4;
    tmp22Result = tmp22(tmp23, obj2);
    const tmp32 = analyticsLocations(onTrackPress[55]);
  }
  const items7 = [
    tmp22Result,
    (() => {
      if (isPurchased) {
        let tmp = product.type !== product(onTrackPress[35]).CollectiblesItemType.EXTERNAL_SKU;
        if (tmp) {
          let obj = { style: tmp.buttonContainer };
          tmp = product;
          tmp = onTrackPress;
          tmp = outer1_17;
          tmp = isPartiallyOwnedBundle;
          tmp = outer1_16;
          tmp = closure_16;
          if (closure_16) {
            obj = {};
            tmp = closure_15;
            obj.loading = closure_15;
            tmp = product;
            tmp = onTrackPress;
            const intl13 = product(onTrackPress[17]).intl;
            obj.text = intl13.string(product(onTrackPress[17]).t.MAS7uK);
            obj.onPress = function onPress() {
              if (null != outer1_2) {
                outer1_2(constants.USE_NOW);
              }
              outer1_14();
            };
            obj.size = "lg";
            obj.grow = true;
            let obj1 = obj;
          } else {
            obj1 = {};
            tmp = product;
            tmp = onTrackPress;
            const intl12 = product(onTrackPress[17]).intl;
            obj1.text = intl12.string(product(onTrackPress[17]).t["2p2aYz"]);
            obj1.onPress = function onPress() {
              if (null != outer1_2) {
                outer1_2(constants.EDIT_PROFILE);
              }
              outer1_17();
            };
            obj1.size = "lg";
            obj1.grow = true;
          }
          const items = [tmp(product(onTrackPress[56]).Button, obj1), ];
          tmp = closure_23;
          if (closure_23) {
            tmp = outer1_16;
            tmp = closure_22;
            const obj2 = {};
            tmp = product;
            obj2.product = product;
            tmp = analyticsLocations;
            obj2.analyticsLocations = analyticsLocations;
            tmp = onTrackPress;
            obj2.onTrackPress = onTrackPress;
            tmp = outer1_16(closure_22, obj2);
          }
          items[1] = tmp;
          obj.children = items;
          tmp = tmp(tmp, obj);
        }
        return tmp;
      } else {
        tmp = c21;
        if (c21) {
          let obj9 = product(onTrackPress[53]);
          const t = product(onTrackPress[17]).t;
          const isAndroidResult = obj9.isAndroid();
          const obj3 = {};
          const items1 = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
          items1[arraySpreadResult] = analyticsLocations(onTrackPress[57]).PROFILE_FRAMES_EA_MARKETING;
          const sum = arraySpreadResult + 1;
          obj3.value = items1;
          const obj4 = { style: tmp.framesEAContainer };
          const obj5 = { variant: "text-xs/semibold", color: "text-strong" };
          const intl8 = product(onTrackPress[17]).intl;
          const obj6 = {};
          let obj14 = analyticsLocations(onTrackPress[58]);
          obj6.articleURL = obj14.getArticleURL(constants.SHOP_FRAMES_EARLY_ACCESS);
          obj5.children = intl8.format(product(onTrackPress[17]).t["3cglst"], obj6);
          const items2 = [outer1_16(product(onTrackPress[34]).TextWithIOSLinkWorkaround, obj5), , ];
          const obj7 = { onTrackPress };
          const intl9 = product(onTrackPress[17]).intl;
          obj7.text = intl9.string(product(onTrackPress[17]).t["9wfL34"]);
          items2[1] = outer1_16(product(onTrackPress[59]).UnlockWithNitroButton, obj7);
          const obj8 = { variant: "text-xxs/normal" };
          const intl10 = product(onTrackPress[17]).intl;
          obj9 = { paidURL: constants2.PAID_TERMS };
          const tmp78 = obj9.isAndroid() ? t.COObWR : t["7wpqfj"];
          obj9.interval = analyticsLocations(onTrackPress[42]).getIntervalStringAsNoun(closure_22);
          const intl11 = product(onTrackPress[17]).intl;
          obj9.ctaText = intl11.string(product(onTrackPress[17]).t["9wfL34"]);
          obj8.children = intl10.format(tmp78, obj9);
          items2[2] = outer1_16(product(onTrackPress[34]).TextWithIOSLinkWorkaround, obj8);
          obj4.children = items2;
          obj3.children = outer1_17(isPartiallyOwnedBundle, obj4);
          return outer1_16(product(onTrackPress[22]).AnalyticsLocationProvider, obj3);
        } else {
          if (closure_9) {
            if (!_isNativeReflectConstruct) {
              if (!constants) {
                obj = { onTrackPress };
                return outer1_16(product(onTrackPress[59]).UnlockWithNitroButton, obj);
              }
            }
          }
          if (!constants) {
            if (product.type === product(onTrackPress[35]).CollectiblesItemType.BUNDLE) {
              const intl6 = product(onTrackPress[17]).intl;
              let stringResult = intl6.string(product(onTrackPress[17]).t.V1AWw0);
            } else {
              tmp = product;
              tmp = product;
              tmp = onTrackPress;
              if (product.type === product(onTrackPress[35]).CollectiblesItemType.PROFILE_EFFECT) {
                const intl5 = product(onTrackPress[17]).intl;
                stringResult = intl5.string(product(onTrackPress[17]).t.kAeDcK);
              } else {
                tmp = product;
                tmp = product;
                tmp = onTrackPress;
                if (product.type === product(onTrackPress[35]).CollectiblesItemType.NAMEPLATE) {
                  const intl4 = product(onTrackPress[17]).intl;
                  stringResult = intl4.string(product(onTrackPress[17]).t.H3vhqU);
                } else {
                  tmp = product;
                  tmp = product;
                  tmp = onTrackPress;
                  if (product.type === product(onTrackPress[35]).CollectiblesItemType.AVATAR_DECORATION) {
                    const intl3 = product(onTrackPress[17]).intl;
                    stringResult = intl3.string(product(onTrackPress[17]).t.AQ0Veg);
                  } else {
                    tmp = product;
                    tmp = product;
                    tmp = onTrackPress;
                    if (product.type === product(onTrackPress[35]).CollectiblesItemType.PROFILE_FRAME) {
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
              const obj11 = { product, hasShopDiscount: closure_8, balance, onTrackPress };
              tmp31 = outer1_16(closure_23, obj11);
            }
            const items3 = [tmp31, , , ];
            let tmp40Result = !constants2;
            if (tmp40Result) {
              const obj12 = { style: tmp.buttonContainer };
              const obj13 = {
                loading: c19,
                text: stringResult,
                onPress() {
                          if (null != outer1_2) {
                            outer1_2(constants.BUY_WITH_FIAT);
                          }
                          outer1_18();
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
              const items4 = [outer1_16(product(onTrackPress[56]).Button, obj13), ];
              let tmp50Result = closure_23;
              if (closure_23) {
                obj14 = { product, analyticsLocations };
                if (canAfford) {
                  str = "secondary";
                }
                obj14.variant = str;
                obj14.onTrackPress = onTrackPress;
                tmp50Result = outer1_16(closure_22, obj14);
                const tmp50 = outer1_16;
                const tmp51 = closure_22;
              }
              items4[1] = tmp50Result;
              obj12.children = items4;
              tmp40Result = outer1_17(isPartiallyOwnedBundle, obj12);
              const tmp40 = outer1_17;
              const tmp41 = isPartiallyOwnedBundle;
              const tmp43 = outer1_16;
            }
            items3[1] = tmp40Result;
            let tmp57 = !canAfford;
            if (tmp57) {
              const obj15 = { product, hasShopDiscount: closure_8, balance, onTrackPress };
              tmp57 = outer1_16(closure_23, obj15);
            }
            items3[2] = tmp57;
            let tmp65 = !constants2;
            if (tmp65) {
              const obj16 = { product, buyButtonLabel: stringResult };
              tmp65 = outer1_16(outer1_24, obj16);
            }
            items3[3] = tmp65;
            obj10.children = items3;
            return outer1_17(isPartiallyOwnedBundle, obj10);
          }
          const obj17 = {};
          const intl7 = product(onTrackPress[17]).intl;
          obj17.text = intl7.string(product(onTrackPress[17]).t.zp6caO);
          obj17.loading = closure_6;
          obj17.onPress = function onPress() {
            if (null != outer1_2) {
              outer1_2(constants.ADD_TO_COLLECTION);
            }
            outer1_20();
          };
          obj17.size = "lg";
          obj17.grow = true;
          return outer1_16(product(onTrackPress[56]).Button, obj17);
        }
      }
    })()
  ];
  obj.children = items7;
  return callback3(isPartiallyOwnedBundle, obj);
};
