// Module ID: 12726
// Function ID: 12727
// Name: ProductDetailsActionSheetPurchaseSection
// Dependencies: [32, 19, 17, 6977, 1076, 1074, 10549, 1374, 21, 4836, 576, 7363, 10496, 4800, 10473, 1115, 12724, 8334, 8303, 1485, 6583, 5039, 12727, 1981, 6961, 12731, 1077, 12732, 10542, 8298, 4832, 5282, 1974, 7623, 504, 10618, 4488, 6974, 6973, 8315, 10548, 12734, 12735, 1613, 5281, 12736, 2]
// Exports: default

// Module 12726 (ProductDetailsActionSheetPurchaseSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import OrbsIcon from "OrbsIcon" /* 8298 */;
import openGiftModal from "openGiftModal" /* 10473 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 10542 */;
import MainTabsConstants from "MainTabsConstants" /* 10549 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6977 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let BaseTextButton;
  let canAfford;
  let intl2;
  let modalKey;
  let obj6;
  let obj8;
  let orbsButtonText;
  let price;
  let stageCollectibleChangeForEditProfile;
  let str2;
  balance = balance.balance;
  const product = balance.product;
  importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: dependencyMap, stageCollectibleChangeForEditProfile } = balance);
  navigation = undefined;
  let analyticsLocations;
  let closure_7;
  let color;
  let str;
  const tmp = closure_17();
  react = tmp;
  const tmp2 = balance;
  let obj = balance(12724);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj2 = balance(8334);
  let isDisabled = obj2.useProductDisableState(product.skuId).isDisabled;
  let obj3 = balance(8303);
  const isPartiallyOwnedBundle = obj3.useProductPurchaseState(product).isPartiallyOwnedBundle;
  if (!isDisabled) {
    isDisabled = !canAfford;
  }
  if (!isDisabled) {
    isDisabled = isPartiallyOwnedBundle;
  }
  const tmp2Result = tmp2(1485);
  navigation = tmp2Result.useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_7 = react.useCallback(() => {
    let constants3;
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
        let obj = balance(dependencyMap[24]);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        const obj2 = ModalActionCreatorsDefault;
        obj2.popWithKey(ORB_CHECKOUT_MODAL);
        if (product.skuId === constants.ORB_PROFILE_BADGE) {
          const obj3 = {
            modalKey,
            onPressViewBadge() {
                return navigation.navigate(constants3.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase
          };
          const tmp4Result = ModalActionCreatorsDefault;
          tmp4Result.pushLazy(balance(dependencyMap[23])(dependencyMap[25], dependencyMap.paths), obj3, modalKey);
        } else {
          const ALL = tmp(tmp2[26]).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(product.skuId)) {
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            const first = entitlements[0];
            const obj4 = {
              skuId: product.skuId,
              consumed: flag,
              onPressExplorePerks() {
                    navigation.navigate(constants2.PREMIUM);
                    const obj = product(closure_2_2[13]);
                    obj.hideActionSheet();
                  },
              onPressViewCredits() {
                    navigation.navigate(constants2.PREMIUM_MANAGE_PLAN);
                    const obj = product(closure_2_2[13]);
                    obj.hideActionSheet();
                  }
            };
            flag = undefined;
            ActionSheetActionCreatorsDefault;
            const tmp11 = balance(dependencyMap[23])(dependencyMap[27], dependencyMap.paths);
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
    obj2.pushLazy(asyncRequire(12727, dependencyMap.paths), obj3, ORB_CHECKOUT_MODAL);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = nativeDefault.colors;
    color = isDisabled ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    str = "text-overlay-light";
    if (isDisabled) {
      str = "interactive-text-active";
    }
    const intl = tmp2(1115).intl;
    let obj4 = {
      orbPrice: price.amount,
      orbIconHook() {
          const obj = { size: "sm", color };
          return map1(OrbsIcon.OrbsIcon, obj, "orbs-icon");
        }
    };
    const formatResult = intl.format(tmp2(1115).t.JC15qj, obj4);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    let obj5 = {
      style: tmp.orbsButtonLabel,
      accessibilityLabel: intl2.formatToPlainString(tmp2(1115).t.yi41qQ, obj6),
      children: arr2.map((children, index) => {
          let tmp7;
          if (typeof children === "string") {
            const obj = { style: orbsButtonText.orbsButtonText, variant: "text-md/semibold", color: str, children };
            tmp7 = map1(Text_Text.Text, obj, index);
          } else {
            tmp7 = children;
          }
          return tmp7;
        })
    };
    intl2 = tmp2(1115).intl;
    obj6 = { orbPrice: price.amount };
    const obj7 = { style: tmp.buttonContainer, children: closure_13(BaseTextButton, obj8) };
    let tmp11 = closure_13(navigation, obj5);
    obj8 = {
      loading: false,
      textElement: tmp11,
      onPress() {
          if (dependencyMap != null) {
            tmp(metroImportAll.BUY_WITH_ORBS);
          }
          closure_7();
        },
      disabled: isDisabled,
      size: "lg",
      variant: str2,
      grow: true
    };
    str2 = "primary";
    BaseTextButton = tmp2(5282).BaseTextButton;
    const tmp10 = navigation;
    if (isDisabled) {
      str2 = "secondary";
    }
    return closure_13(tmp10, obj7);
  }
}
function PurchaseDisclaimer(arg0) {
  let buyButtonLabel;
  let formatResult;
  let product;
  ({ product, buyButtonLabel } = arg0);
  const obj = { style: closure_17().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: formatResult };
  const Text = Text_Text.Text;
  formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  const tmp2 = map1;
  if (formatResult) {
    const intl = tmp3(1115).intl;
    const obj2 = { buyButtonLabel, paidServiceTermURL: constants2.PAID_TERMS };
    formatResult = intl.format(tmp3(1115).t.iIglwJ, obj2);
  }
  return tmp2(Text, obj);
}
let _slicedToArray = _slicedToArray_mod;
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
  let c3;
  let c4;
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
  let tmp19Result1;
  product = product.product;
  require = product;
  ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  _slicedToArray = undefined;
  c4 = undefined;
  const tmp = closure_17();
  const obj = require("useCurrentUser");
  const currentUser = obj.useCurrentUser();
  const obj2 = require("useProductPurchaseState");
  const productPurchaseState = obj2.useProductPurchaseState(product);
  ({ isPartiallyOwnedBundle, isPurchased } = productPurchaseState);
  let items = [CollectiblesPurchaseStore];
  const items1 = [product];
  const obj3 = require("get initialized");
  const first = _slicedToArray(obj3.useStateFromStoresArray(items, () => {
    const items = [CollectiblesPurchaseStore.isClaiming === require.skuId];
    return items;
  }, items1), 1)[0];
  const obj4 = require("useIsPremiumSubscriber");
  const isPremiumSubscriber = obj4.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj5 = require("PremiumUtils");
  const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
  const obj6 = require("CollectiblesUtils");
  const result = obj6.isPremiumCollectiblesProduct(product);
  const obj7 = require("CollectiblesUtils");
  const result1 = obj7.isFreeCollectiblesProduct(product);
  const obj8 = require("CollectiblesProductUtils");
  const result2 = obj8.isOrbsExclusiveProduct(product);
  const obj9 = require("module_8315");
  const balance = obj9.useFetchVirtualCurrencyBalance().balance;
  const obj10 = require("useVirtualCurrencyData");
  const canAfford = obj10.useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  const obj11 = require("useHandleUseNow");
  const handleUseNow = obj11.useHandleUseNow({ product, analyticsLocations, stageCollectibleChangeForEditProfile });
  ({ handleUseNow: c3, handleEditProfile: c4, isApplying, canUseNow } = handleUseNow);
  const obj12 = require("useHandleClaim");
  const handleClaim = obj12.useHandleClaim({ product, stageCollectibleChangeForEditProfile }).handleClaim;
  const obj13 = require("useCanGiftProduct");
  let canGiftProduct = obj13.useCanGiftProduct(product);
  let PX_16 = require("useSafeAreaInsets")().bottom;
  const items2 = [tmp.container, ];
  const tmp8 = importDefault;
  if (PX_16 == null) {
    PX_16 = tmp8(tmp3[10]).space.PX_16;
  }
  const obj14 = { style: items2, children: tmp19Result1 };
  items2[1] = { paddingBottom: PX_16 };
  if (isPurchased) {
    let tmp30Result = product.type !== tmp2(tmp3[32]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp30Result) {
      let obj17;
      const obj15 = { style: tmp.buttonContainer, children: items3 };
      const Button3 = tmp2(tmp3[44]).Button;
      const tmp30 = closure_14;
      if (canUseNow) {
        const obj16 = {
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
        obj17 = obj16;
      } else {
        obj17 = {
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
      items3 = [closure_13(Button3, obj17), ];
      if (canGiftProduct) {
        const obj18 = { product, analyticsLocations, onTrackPress };
        canGiftProduct = tmp15(GiftButton, obj18);
      }
      items3[1] = canGiftProduct;
      tmp30Result = tmp30(tmp16, obj15);
    }
    tmp19Result1 = tmp30Result;
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj19 = { onTrackPress };
          tmp19Result1 = tmp15(tmp2(tmp3[45]).UnlockWithNitroButton, obj19);
        }
      }
    }
    if (!result1) {
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
        const intl2 = tmp2(tmp3[15]).intl;
        stringResult = intl2.string(tmp2(tmp3[15]).t.BlSW1e);
      } else {
        const intl = tmp2(tmp3[15]).intl;
        stringResult = intl.string(tmp2(tmp3[15]).t.AQ0Veg);
      }
      let tmp15Result5 = canAfford;
      const obj20 = { style: tmp.purchaseSection, children: items4 };
      if (tmp15Result5) {
        const obj21 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp15Result5 = tmp15(VCButton, obj21);
      }
      items4 = [tmp15Result5, , , ];
      let tmp19Result = !result2;
      if (tmp19Result) {
        const obj22 = { style: tmp.buttonContainer, children: items5 };
        const obj23 = {
          loading: isBuying,
          text: stringResult,
          onPress() {
                  if (onTrackPress != null) {
                    tmp(metroImportAll.BUY_WITH_FIAT);
                  }
                  importDefault();
                },
          disabled: isPartiallyOwnedBundle,
          variant: str2,
          size: "lg",
          grow: true
        };
        const Button = tmp2(tmp3[44]).Button;
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        let str = "primary";
        str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        items5 = [closure_13(Button, obj23), ];
        let tmp15Result6 = canGiftProduct;
        if (tmp15Result6) {
          const obj24 = { product, analyticsLocations, variant: str, onTrackPress };
          const tmp24 = GiftButton;
          if (canAfford) {
            str = "secondary";
          }
          tmp15Result6 = tmp15(tmp24, obj24);
        }
        items5[1] = tmp15Result6;
        tmp19Result = tmp19(tmp16, obj22);
      }
      items4[1] = tmp19Result;
      let tmp15Result7 = !canAfford;
      if (tmp15Result7) {
        const obj25 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp15Result7 = tmp15(VCButton, obj25);
      }
      items4[2] = tmp15Result7;
      let tmp15Result8 = !result2;
      if (tmp15Result8) {
        const obj26 = { product, buyButtonLabel: stringResult };
        tmp15Result8 = tmp15(PurchaseDisclaimer, obj26);
      }
      items4[3] = tmp15Result8;
      tmp19Result1 = tmp19(tmp16, obj20);
    }
    const obj27 = {
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
    const Button2 = tmp2(tmp3[44]).Button;
    intl7 = tmp2(tmp3[15]).intl;
    tmp19Result1 = tmp15(Button2, obj27);
  }
  return closure_13(handleClaim, obj14);
};
