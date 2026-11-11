// Module ID: 15389
// Function ID: 15390
// Name: ProductDetailsActionSheetPurchaseSection
// Dependencies: [32, 19, 17, 8434, 1074, 1072, 9964, 1387, 21, 5243, 575, 7922, 11757, 5489, 11734, 1113, 10369, 10384, 9452, 5880, 1499, 7852, 6785, 15390, 2118, 8418, 15398, 1075, 15399, 9954, 9375, 5866, 5874, 2111, 9343, 504, 15358, 2171, 8431, 8430, 10370, 9657, 9339, 10368, 9963, 15401, 15402, 1627, 9385, 5873, 15403, 1242, 1377, 6709, 6206, 2]
// Exports: default

// Module 15389 (ProductDetailsActionSheetPurchaseSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1113 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2111 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import Text_Text from "Text/Text" /* 5866 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6206 */;
import ReleaseChannelUtils from "ReleaseChannelUtils" /* 6709 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7852 */;
import OrbsIcon from "OrbsIcon" /* 9375 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 9954 */;
import MainTabsConstants from "MainTabsConstants" /* 9964 */;
import openGiftModal from "openGiftModal" /* 11734 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 8434 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

let c10;
let c9;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function GiftButton(onTrackPress) {
  let GiftIcon;
  let TEXT_STRONG;
  let analyticsLocations;
  let intl;
  let skuId;
  let variant;
  ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  onTrackPress = onTrackPress.onTrackPress;
  const tmp = closure_13;
  let obj = {
    size: "lg",
    variant,
    icon: tmp(GiftIcon, { size: "md", color: TEXT_STRONG }),
    onPress() {
      if (onTrackPress != null) {
        tmp(metroImportAll.SEND_AS_GIFT);
      }
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      const obj2 = openGiftModal;
      const obj3 = { skuId: require.skuId, analyticsLocations: importDefault };
      obj2.openShopGiftModal(obj3);
    },
    accessibilityLabel: intl.string(tmp2(onTrackPress[15]).t.PEjaCx)
  };
  const IconButton = require("IconButton").IconButton;
  GiftIcon = require("GiftIcon").GiftIcon;
  if ("primary" === variant) {
    TEXT_STRONG = require("native").colors.WHITE;
  } else {
    TEXT_STRONG = require("native").colors.TEXT_STRONG;
  }
  intl = tmp2(tmp3[15]).intl;
  return tmp(IconButton, obj);
}
function VCButton(balance) {
  let canAfford;
  let intl;
  let modalKey;
  let obj6;
  let obj8;
  let orbsButtonText;
  let price;
  let stageCollectibleChangeForEditProfile;
  let str;
  balance = balance.balance;
  const product = balance.product;
  importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = balance.shouldPrioritizeFiat;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ onTrackPress: dependencyMap, stageCollectibleChangeForEditProfile } = balance);
  let color;
  navigation = undefined;
  let analyticsLocations;
  let closure_8;
  const tmp = closure_17();
  react = tmp;
  const tmp2 = balance;
  let obj = balance(10369);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj2 = balance(10384);
  let isDisabled = obj2.useProductDisableState(product.skuId).isDisabled;
  let obj3 = balance(9452);
  const isPartiallyOwnedBundle = obj3.useProductPurchaseState(product).isPartiallyOwnedBundle;
  if (!isDisabled) {
    isDisabled = !canAfford;
  }
  if (!isDisabled) {
    isDisabled = isPartiallyOwnedBundle;
  }
  if (isDisabled) {
    str = "secondary";
  } else {
    str = "primary";
  }
  const tmp2Result = tmp2(5880);
  color = tmp2Result.useButtonTextColorStyles(str);
  const tmp2Result2 = tmp2(1499);
  navigation = tmp2Result2.useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_8 = react.useCallback(() => {
    let orbBalancePriorToPurchase;
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    let obj2 = ModalActionCreatorsDefault;
    let obj3 = {
      skuId: importDefault.skuId,
      analyticsLocations,
      onCheckoutSuccess(entitlements) {
        let flag;
        entitlements = entitlements.entitlements;
        let obj = balance(dependencyMap[25]);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        const obj2 = ModalActionCreatorsDefault;
        obj2.popWithKey(ORB_CHECKOUT_MODAL);
        if (product.skuId === analyticsLocations.ORB_PROFILE_BADGE) {
          const obj3 = {
            modalKey,
            onPressViewBadge() {
                return navigation.navigate(constants2.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase
          };
          const tmp4Result = ModalActionCreatorsDefault;
          tmp4Result.pushLazy(balance(dependencyMap[24])(dependencyMap[26], dependencyMap.paths), obj3, modalKey);
        } else {
          const ALL = tmp(tmp2[27]).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(product.skuId)) {
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            const first = entitlements[0];
            const obj4 = {
              skuId: product.skuId,
              consumed: flag,
              onPressExplorePerks() {
                    navigation.navigate(constants.PREMIUM);
                    const obj = product(closure_2_2[13]);
                    obj.hideActionSheet();
                  },
              onPressViewCredits() {
                    navigation.navigate(constants.PREMIUM_MANAGE_PLAN);
                    const obj = product(closure_2_2[13]);
                    obj.hideActionSheet();
                  }
            };
            flag = undefined;
            ActionSheetActionCreatorsDefault;
            const tmp11 = balance(dependencyMap[24])(dependencyMap[28], dependencyMap.paths);
            if (first != null) {
              flag = first.consumed;
            }
            if (flag == null) {
              flag = false;
            }
            openLazy(tmp11, "FractionalNitroCollectedActionSheet", obj4);
          } else {
            const obj5 = { product, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase, stageCollectibleChangeForEditProfile };
            const tmp4Result4 = ProductPurchaseSuccessActionCreatorsDefault;
            tmp4Result4.open(obj5);
          }
        }
      }
    };
    obj2.pushLazy(asyncRequire(15390, dependencyMap.paths), obj3, ORB_CHECKOUT_MODAL);
  }, items);
  if (null == price) {
    return null;
  } else {
    const intl2 = tmp2(1113).intl;
    let obj4 = {
      orbPrice: price.amount,
      orbIconHook() {
          const obj = { size: "sm", color: color.color };
          return map1(OrbsIcon.OrbsIcon, obj, "orbs-icon");
        }
    };
    const formatResult = intl2.format(tmp2(1113).t.JC15qj, obj4);
    const _Array = Array;
    let arr3 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr3 = items1;
    }
    let tmp7 = color;
    let obj5 = {
      style: tmp.orbsButtonLabel,
      accessibilityLabel: intl.formatToPlainString(tmp2(1113).t.yi41qQ, obj6),
      children: arr3.map((children, index) => {
          let items;
          let tmp7;
          if (typeof children === "string") {
            const obj = { style: items, variant: "body-md/semibold", color: "none", children };
            items = [orbsButtonText.orbsButtonText, color];
            tmp7 = map1(Text_Text.Text, obj, index);
          } else {
            tmp7 = children;
          }
          return tmp7;
        })
    };
    intl = tmp2(1113).intl;
    obj6 = { orbPrice: price.amount };
    const obj7 = { style: tmp.buttonContainer, children: closure_13(tmp2(5874).BaseTextButton, obj8) };
    obj8 = {
      loading: false,
      textElement: closure_13(color, obj5),
      onPress() {
          if (dependencyMap != null) {
            tmp(metroImportAll.BUY_WITH_ORBS);
          }
          closure_8();
        },
      disabled: isDisabled,
      size: "lg",
      variant: str,
      grow: true
    };
    return closure_13(color, obj7);
  }
}
function PurchaseDisclaimer(arg0) {
  let buyButtonLabel;
  let formatResult;
  let product;
  ({ product, buyButtonLabel } = arg0);
  const obj = { style: closure_17().disclaimer, variant: "footnote/normal", color: "interactive-text-active", children: formatResult };
  const Text = Text_Text.Text;
  formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  const tmp2 = map1;
  if (formatResult) {
    const intl = tmp3(1113).intl;
    const obj2 = { buyButtonLabel, paidServiceTermURL: constants2.PAID_TERMS };
    formatResult = intl.format(tmp3(1113).t.iIglwJ, obj2);
  }
  return tmp2(Text, obj);
}
let react = react_mod;
const View = react_native.View;
({ EXTERNAL_PRODUCT_SKU_IDS: metroImportDefault, ShopCtaEnum: metroImportAll } = CollectiblesShopConstants);
({ MarketingURLs: c9, UserSettingsSections: c10 } = Constants);
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: map1, jsxs: closure_14 } = Fragment);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
let createStyles = createStyles_mod;
let obj = { container: obj2, purchaseSection: obj3, disclaimer: { opacity: 0.75 }, buttonContainer: obj4, orbsButtonLabel: { flexDirection: "row", alignItems: "center" }, orbsButtonText: { flexShrink: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_17 = createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(product) {
  let _undefined;
  let _undefined2;
  let analyticsLocations;
  let c5;
  let c6;
  let canUseNow;
  let intl7;
  let intl8;
  let intl9;
  let isApplying;
  let isBuying;
  let isPartiallyOwnedBundle;
  let isPurchased;
  let items3;
  let items4;
  let items5;
  let onTrackPress;
  let str2;
  let tmp22Result1;
  product = product.product;
  require = product;
  ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let nativePaymentsConnected;
  c5 = undefined;
  c6 = undefined;
  let handleClaim;
  const tmp = closure_17();
  let obj = require("useCurrentUser");
  const currentUser = obj.useCurrentUser();
  let obj2 = require("useProductPurchaseState");
  const productPurchaseState = obj2.useProductPurchaseState(product);
  ({ isPartiallyOwnedBundle, isPurchased } = productPurchaseState);
  let obj3 = require("get initialized");
  let items = [c6];
  const items1 = [product];
  const first = nativePaymentsConnected(obj3.useStateFromStoresArray(items, () => {
    const items = [CollectiblesPurchaseStore.isClaiming === require.skuId];
    return items;
  }, items1), 1)[0];
  const obj4 = require("useIsPremiumSubscriber");
  const isPremiumSubscriber = obj4.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const tmp8 = importDefault;
  const obj5 = require("PremiumUtils");
  const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
  const obj6 = require("CollectiblesUtils");
  const result = obj6.isPremiumCollectiblesProduct(product);
  const obj7 = require("CollectiblesUtils");
  const result1 = obj7.isFreeCollectiblesProduct(product);
  const obj8 = require("CollectiblesProductUtils");
  const result2 = obj8.isOrbsExclusiveProduct(product);
  const obj9 = require("module_10370");
  const balance = obj9.useFetchVirtualCurrencyBalance().balance;
  const obj10 = require("NativePaymentHooks");
  nativePaymentsConnected = obj10.useNativeIAPPayments().nativePaymentsConnected;
  const obj11 = require("ShopStandalonePdpMobileExperiment");
  let closure_4 = obj11.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet");
  const obj12 = require("useVirtualCurrencyData");
  let canAfford = obj12.useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  const obj13 = require("useTargetedOfferPromotion");
  const targetedOfferPromotionForCollectiblesProduct = obj13.useTargetedOfferPromotionForCollectiblesProduct(product);
  const obj14 = require("useTargetedOfferPromotion");
  const isFiatExclusiveTargetedOfferPromotion = obj14.useIsFiatExclusiveTargetedOfferPromotion(product);
  if (canAfford) {
    canAfford = !isFiatExclusiveTargetedOfferPromotion;
  }
  const tmp2Result = require("useHandleUseNow");
  const handleUseNow = tmp2Result.useHandleUseNow({ product, analyticsLocations, stageCollectibleChangeForEditProfile });
  ({ handleUseNow: c5, handleEditProfile: c6, isApplying, canUseNow } = handleUseNow);
  const tmp2Result4 = require("useHandleClaim");
  handleClaim = tmp2Result4.useHandleClaim({ product, stageCollectibleChangeForEditProfile }).handleClaim;
  const tmp2Result5 = require("useCanGiftProduct");
  let canGiftProduct = tmp2Result5.useCanGiftProduct(product);
  let PX_16 = tmp8(tmp3[47])().bottom;
  const items2 = [tmp.container, ];
  if (PX_16 == null) {
    PX_16 = tmp8(tmp3[10]).space.PX_16;
  }
  const obj15 = { style: items2, children: tmp22Result1 };
  items2[1] = { paddingBottom: PX_16 };
  if (isPurchased) {
    let tmp33Result = product.type !== tmp2(tmp3[33]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp33Result) {
      let obj18;
      const obj16 = { style: tmp.buttonContainer, children: items3 };
      const Button3 = tmp2(tmp3[49]).Button;
      const tmp33 = closure_14;
      if (canUseNow) {
        const obj17 = {
          loading: isApplying,
          text: intl9.string(require("intl").t.MAS7uK),
          onPress() {
                  if (onTrackPress != null) {
                    tmp(metroImportAll.USE_NOW);
                  }
                  _undefined();
                },
          size: "lg",
          grow: true
        };
        intl9 = tmp2(tmp3[15]).intl;
        obj18 = obj17;
      } else {
        obj18 = {
          text: intl8.string(tmp2(onTrackPress[15]).t["2p2aYz"]),
          onPress() {
                  if (onTrackPress != null) {
                    tmp(metroImportAll.EDIT_PROFILE);
                  }
                  _undefined2();
                },
          size: "lg",
          grow: true
        };
        intl8 = tmp2(tmp3[15]).intl;
      }
      items3 = [closure_13(Button3, obj18), ];
      if (canGiftProduct) {
        const obj19 = { product, analyticsLocations, onTrackPress };
        canGiftProduct = tmp17(GiftButton, obj19);
      }
      items3[1] = canGiftProduct;
      tmp33Result = tmp33(tmp18, obj16);
    }
    tmp22Result1 = tmp33Result;
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj20 = { onTrackPress };
          tmp22Result1 = tmp17(tmp2(tmp3[50]).UnlockWithNitroButton, obj20);
        }
      }
    }
    if (!result1) {
      const tmp2Result6 = require("CollectiblesTargetedOfferPromotionUtils");
      let targetedOfferPromotionPurchaseCtaText = tmp2Result6.getTargetedOfferPromotionPurchaseCtaText(targetedOfferPromotionForCollectiblesProduct);
      if (null == targetedOfferPromotionPurchaseCtaText) {
        let stringResult;
        if (product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE) {
          const intl6 = tmp2(tmp3[15]).intl;
          stringResult = intl6.string(tmp2(tmp3[15]).t.V1AWw0);
        } else if (product.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT) {
          const intl5 = tmp2(tmp3[15]).intl;
          stringResult = intl5.string(tmp2(tmp3[15]).t.kAeDcK);
        } else if (product.type === require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE) {
          const intl4 = tmp2(tmp3[15]).intl;
          stringResult = intl4.string(tmp2(tmp3[15]).t.H3vhqU);
        } else if (product.type === require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION) {
          const intl3 = tmp2(tmp3[15]).intl;
          stringResult = intl3.string(tmp2(tmp3[15]).t.AQ0Veg);
        } else if (product.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME) {
          let intl2 = tmp2(tmp3[15]).intl;
          stringResult = intl2.string(tmp2(tmp3[15]).t.BlSW1e);
        } else {
          let intl = tmp2(tmp3[15]).intl;
          stringResult = intl.string(tmp2(tmp3[15]).t.AQ0Veg);
        }
        targetedOfferPromotionPurchaseCtaText = stringResult;
      }
      let tmp17Result5 = canAfford;
      const obj21 = { style: tmp.purchaseSection, children: items4 };
      if (tmp17Result5) {
        const obj22 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp17Result5 = tmp17(VCButton, obj22);
      }
      items4 = [tmp17Result5, , , ];
      let tmp22Result = !result2;
      if (tmp22Result) {
        const obj23 = { style: tmp.buttonContainer, children: items5 };
        const obj24 = {
          loading: isBuying,
          text: targetedOfferPromotionPurchaseCtaText,
          onPress() {
                  let intl;
                  let intl2;
                  if (onTrackPress != null) {
                    tmp(metroImportAll.BUY_WITH_FIAT);
                  }
                  const tmp4 = closure_4;
                  if (tmp4) {
                    const tmp5 = nativePaymentsConnected;
                    if (!tmp5) {
                      const captureMessage = SentryUtilsDefault.captureMessage;
                      SentryUtilsDefault;
                      const obj = PlatformUtils;
                      const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj.isIOS()}`;
                      const obj2 = { tags: { source: "standalone_pdp" } };
                      captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj.isIOS()}`} isStable: ${ReleaseChannelUtils.isStable}`, obj2);
                      const obj3 = { title: intl.string(intl10.t.zrhHH3), body: intl2.string(intl10.t.PjfUXe), hideActionSheet: false };
                      const show = actions_AlertActionCreatorsDefault.show;
                      actions_AlertActionCreatorsDefault;
                      intl = intl10.intl;
                      intl2 = intl10.intl;
                      show(obj3);
                    }
                  }
                  importDefault();
                },
          disabled: isPartiallyOwnedBundle,
          variant: str2,
          size: "lg",
          grow: true
        };
        const Button = tmp2(tmp3[49]).Button;
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        let str = "primary";
        str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        items5 = [closure_13(Button, obj24), ];
        let tmp17Result6 = canGiftProduct;
        if (tmp17Result6) {
          const obj25 = { product, analyticsLocations, variant: str, onTrackPress };
          const tmp27 = GiftButton;
          if (canAfford) {
            str = "secondary";
          }
          tmp17Result6 = tmp17(tmp27, obj25);
        }
        items5[1] = tmp17Result6;
        tmp22Result = tmp22(tmp18, obj23);
      }
      items4[1] = tmp22Result;
      let tmp17Result7 = !canAfford;
      if (tmp17Result7) {
        const obj26 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, shouldPrioritizeFiat: isFiatExclusiveTargetedOfferPromotion, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp17Result7 = tmp17(VCButton, obj26);
      }
      items4[2] = tmp17Result7;
      let tmp17Result8 = !result2;
      if (tmp17Result8) {
        const obj27 = { product, buyButtonLabel: targetedOfferPromotionPurchaseCtaText };
        tmp17Result8 = tmp17(PurchaseDisclaimer, obj27);
      }
      items4[3] = tmp17Result8;
      tmp22Result1 = tmp22(tmp18, obj21);
    }
    const obj28 = {
      text: intl7.string(require("intl").t.zp6caO),
      loading: first,
      onPress() {
          if (onTrackPress != null) {
            tmp(metroImportAll.ADD_TO_COLLECTION);
          }
          handleClaim();
        },
      size: "lg",
      grow: true
    };
    const Button2 = tmp2(tmp3[49]).Button;
    intl7 = tmp2(tmp3[15]).intl;
    tmp22Result1 = tmp17(Button2, obj28);
  }
  return closure_13(c5, obj15);
};
