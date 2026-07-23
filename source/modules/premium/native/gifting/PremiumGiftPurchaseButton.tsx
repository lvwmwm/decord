// Module ID: 9765
// Function ID: 75952
// Name: RewardPreview
// Dependencies: [31, 27, 8268, 6779, 1874, 1849, 7130, 653, 33, 4130, 689, 5160, 8229, 1873, 1273, 4126, 1212, 4554, 9766, 1456, 8809, 566, 7203, 7453, 7147, 9690, 8776, 8265, 7156, 9680, 8206, 9688, 5085, 7771, 9106, 9693, 5484, 5459, 1920, 4543, 3989, 2]
// Exports: default

// Module 9765 (RewardPreview)
import useThemeAndReducedMotionAwareAssetUrl from "useThemeAndReducedMotionAwareAssetUrl";
import get_ActivityIndicator from "BadgeId";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import jsxProd from "IconButton";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_4;
let closure_5;
const require = arg1;
function RewardPreview(arg0) {
  let collectiblesItem;
  let currentUser;
  let gradientAngle;
  let gradientColors;
  ({ collectiblesItem, gradientAngle } = arg0);
  ({ currentUser, gradientColors } = arg0);
  const tmp = callback3(importDefault(5160)().insets.bottom);
  if (isNameplateRecord(collectiblesItem)) {
    let obj = {};
    obj = { style: tmp.nameplateWrapper };
    const obj1 = { nameplate: null, fullOpacity: true, animate: true };
    let obj8 = require(1873) /* getNameplateData */;
    obj1.nameplate = obj8.getNameplateData(collectiblesItem);
    obj.children = callback(importDefault(8229), obj1);
    const items = [callback(closure_5, obj), , ];
    const obj2 = { style: tmp.singleAvatarContainer };
    const obj3 = { user: currentUser, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.SMALL, "aria-hidden": true };
    obj2.children = callback(require(1273) /* Button */.Avatar, obj3);
    items[1] = callback(closure_5, obj2);
    const obj4 = { style: tmp.selectedRewardText, variant: "text-xs/medium" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.Rh4oem);
    items[2] = callback(require(4126) /* Text */.Text, obj4);
    obj.children = items;
    let tmp5Result = callback2(closure_13, obj);
    const tmp26 = importDefault(8229);
  } else {
    tmp5Result = null;
    if (isAvatarDecorationRecord(collectiblesItem)) {
      obj = {};
      const obj5 = { style: tmp.selectedRewardBannerGradient, useAngle: true };
      let num2 = 90;
      if (null != gradientAngle) {
        num2 = gradientAngle;
      }
      obj5.angle = num2;
      obj5.angleCenter = { x: 0.5, y: 0.5 };
      obj5.colors = gradientColors;
      const items1 = [callback(importDefault(4554), obj5), , ];
      const obj6 = { style: tmp.singleAvatarContainer };
      const obj7 = {};
      const tmp10 = importDefault(4554);
      const tmp5 = callback2;
      const tmp6 = closure_13;
      const tmp7 = callback;
      obj7.size = require(1273) /* Button */.AvatarSizes.NORMAL;
      obj7.asset = collectiblesItem.asset;
      obj6.children = callback(importDefault(9766), obj7);
      items1[1] = callback(closure_5, obj6);
      obj8 = { style: tmp.selectedRewardText, variant: "text-xs/medium", color: "text-overlay-light" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj8.children = intl.string(require(1212) /* getSystemLocale */.t.Rh4oem);
      items1[2] = callback(require(4126) /* Text */.Text, obj8);
      obj.children = items1;
      tmp5Result = tmp5(tmp6, obj);
      const tmp16 = importDefault(9766);
    }
  }
  return tmp5Result;
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, paddingTop: importDefault(689).space.PX_12, paddingBottom: importDefault(689).space.PX_12 + arg0, paddingHorizontal: importDefault(689).space.PX_16, gap: importDefault(689).space.PX_8 };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_TOP_HIGH);
  obj.container = obj;
  obj.chooseRewardContainer = { flexDirection: "row", alignItems: "center", height: 52 };
  obj = {};
  const merged1 = Object.assign(closure_4.absoluteFillObject);
  obj["borderRadius"] = importDefault(689).radii.sm;
  obj["overflow"] = "hidden";
  obj.gradientBackdrop = obj;
  obj.chooseRewardText = { flex: 1, marginStart: importDefault(689).space.PX_8 };
  obj.backgroundImage = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 1 };
  const obj2 = { width: 58, height: 58, marginStart: importDefault(689).space.PX_8 };
  obj.inAppFlowImage = obj2;
  const obj3 = { width: 86, height: 86 };
  const items = [{ rotate: "-4deg" }, { translateY: -11 }];
  obj3.transform = items;
  obj.inAppFlowImageLargeTilted = obj3;
  obj.singleAvatarContainer = { flexDirection: "row", paddingRight: 15, justifyContent: "center", alignItems: "center", marginLeft: 5 };
  const obj4 = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_16 };
  obj.selectedRewardRow = obj4;
  obj.selectedRewardBannerContainer = { flex: 1, flexDirection: "row", alignItems: "center", height: 52 };
  const obj5 = {};
  const merged2 = Object.assign(closure_4.absoluteFillObject);
  obj5["borderRadius"] = importDefault(689).radii.sm;
  obj5["top"] = importDefault(689).space.PX_4;
  obj5["bottom"] = importDefault(689).space.PX_4;
  obj5["start"] = importDefault(689).space.PX_4;
  obj5["end"] = importDefault(689).space.PX_4;
  obj5["marginStart"] = importDefault(689).space.PX_12;
  obj.selectedRewardBannerGradient = obj5;
  obj.selectedRewardText = { flex: 1 };
  const obj6 = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: importDefault(689).radii.sm, overflow: "hidden" };
  obj.nameplateWrapper = obj6;
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  let c3;
  let claimableRewards;
  let dependencyMap;
  let isPurchasing;
  defaultSelection = defaultSelection.defaultSelection;
  let importDefault;
  let React;
  claimableRewards = undefined;
  let setSelectedGiftingPromotionReward;
  let setCurrentAnalyticsStep;
  let c8;
  let c9;
  let c10;
  function navigateToRewardSelection(selectedGiftingPromotionReward) {
    let tmp = selectedGiftingPromotionReward;
    if (c8) {
      setCurrentAnalyticsStep(defaultSelection(outer1_2[28]).PaymentFlowStep.REWARD_SKU_SELECT);
      if (null == tmp) {
        tmp = defaultSelection;
      }
      let navigateResult = {
        defaultHighlightedReward: tmp,
        allRewards: null != c3 ? c3 : [],
        claimableRewards: null != claimableRewards ? claimableRewards : [],
        onSelect(arg0) {
            outer1_6(arg0);
            outer1_1.navigate(defaultSelection(outer2_2[29]).PremiumGiftScreens.CUSTOMIZATION);
          }
      };
      navigateResult = navigation.navigate(defaultSelection(outer1_2[29]).PremiumGiftScreens.REWARD_SELECT, navigateResult);
    }
  }
  let tmp = callback3(importDefault(5160)().insets.bottom);
  let obj = defaultSelection(1456);
  importDefault = obj.useNavigation();
  let obj1 = defaultSelection(8809);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ onPurchase: dependencyMap, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  setCurrentAnalyticsStep = nativeGiftContext.setCurrentAnalyticsStep;
  let obj2 = defaultSelection(566);
  const items = [c9];
  const stateFromStores = obj2.useStateFromStores(items, () => _undefined.getCurrentUser());
  let obj3 = defaultSelection(7203);
  const canPurchaseIAP = obj3.useCanPurchaseIAP(nativeGiftContext.productId);
  let obj4 = defaultSelection(566);
  const items1 = [c10];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    const marketingComponentByType = _undefined2.getMarketingComponentByType(defaultSelection(outer1_2[23]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
      }
    }
    return prop;
  });
  let assetVariant;
  if (null != stateFromStores1) {
    assetVariant = stateFromStores1.assetVariant;
  }
  let inAppFlowImageLargeTilted = assetVariant === defaultSelection(7147).GiftCustomizationBanner_AssetVariant.LARGE_TILTED;
  let tmp7 = null != claimableRewards;
  if (tmp7) {
    tmp7 = claimableRewards.length > 0;
  }
  c8 = tmp7;
  let tmp8 = null != claimableRewards;
  if (tmp8) {
    tmp8 = 1 === claimableRewards.length;
  }
  c9 = tmp8;
  const tmp9 = importDefault(9690)();
  let tmp10 = tmp9;
  if (tmp9) {
    tmp10 = null == selectedGiftingPromotionReward;
  }
  c10 = tmp10;
  const GiftingBadgeExperiment = defaultSelection(8776).GiftingBadgeExperiment;
  let obj5 = defaultSelection(566);
  const items2 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items2, () => {
    let getNextTier;
    let getRemainingToNextTier;
    ({ getNextTier, getRemainingToNextTier } = setSelectedGiftingPromotionReward);
    return { nextTier: getNextTier(defaultSelection(outer1_2[27]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(defaultSelection(outer1_2[27]).BadgeId.GIFTING) };
  });
  const nextTier = stateFromStoresObject.nextTier;
  const items3 = [tmp8, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = React.useEffect(() => {
    if (c9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items3);
  let colors;
  if (null != stateFromStores1) {
    const gradient = stateFromStores1.gradient;
    if (null != gradient) {
      colors = gradient.colors;
    }
  }
  if (null == colors) {
    colors = [];
  }
  let tmp13 = colors;
  if (colors.length <= 0) {
    const _String = String;
    const items4 = [String(importDefault(689).colors.BACKGROUND_BRAND), ];
    const _String2 = String;
    items4[1] = String(importDefault(689).colors.BACKGROUND_BRAND);
    tmp13 = items4;
  }
  let obj6 = defaultSelection(8206);
  const product = obj6.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  const intl = defaultSelection(1212).intl;
  const string = intl.string;
  const t = defaultSelection(1212).t;
  if (tmp10) {
    let stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str = "active";
  if (tmp10) {
    str = "primary";
  }
  let obj7 = defaultSelection(9688);
  let prop;
  if (null != stateFromStores1) {
    prop = stateFromStores1.mobileBackgroundAsset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj7.useThemeAndReducedMotionAwareAssetUrl(prop);
  let obj8 = defaultSelection(9688);
  let asset;
  if (null != stateFromStores1) {
    asset = stateFromStores1.asset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = obj8.useThemeAndReducedMotionAwareAssetUrl(asset);
  let first;
  if (null != product) {
    first = product.items[0];
  }
  obj = { style: tmp.container };
  if (tmp10) {
    if (tmp7) {
      obj = { style: tmp.chooseRewardContainer };
      obj1 = { style: tmp.gradientBackdrop, pointerEvents: "none" };
      obj2 = { style: claimableRewards.absoluteFillObject, useAngle: true };
      let angle;
      if (null != stateFromStores1) {
        const gradient3 = stateFromStores1.gradient;
        if (null != gradient3) {
          angle = gradient3.angle;
        }
      }
      let num9 = 90;
      if (null != angle) {
        num9 = angle;
      }
      obj2.angle = num9;
      obj2.angleCenter = { x: 0.5, y: 0.5 };
      obj2.colors = colors;
      const items5 = [callback(importDefault(4554), obj2), ];
      let tmp54 = null != themeAndReducedMotionAwareAssetUrl;
      if (tmp54) {
        obj3 = { style: tmp.backgroundImage, resizeMode: "cover" };
        obj4 = { uri: themeAndReducedMotionAwareAssetUrl };
        obj3.source = obj4;
        tmp54 = callback(importDefault(5085), obj3);
      }
      items5[1] = tmp54;
      obj1.children = items5;
      const items6 = [closure_14(selectedGiftingPromotionReward, obj1), , ];
      let tmp59Result = null != themeAndReducedMotionAwareAssetUrl1;
      if (tmp59Result) {
        obj5 = {};
        const items7 = [tmp.inAppFlowImage, ];
        if (inAppFlowImageLargeTilted) {
          inAppFlowImageLargeTilted = tmp.inAppFlowImageLargeTilted;
        }
        items7[1] = inAppFlowImageLargeTilted;
        obj5.style = items7;
        obj5.resizeMode = "contain";
        obj6 = { uri: themeAndReducedMotionAwareAssetUrl1 };
        obj5.source = obj6;
        tmp59Result = callback(importDefault(5085), obj5);
        const tmp59 = callback;
        const tmp62 = importDefault(5085);
      }
      items6[1] = tmp59Result;
      obj7 = { style: tmp.chooseRewardText, variant: "text-xs/semibold", color: "text-overlay-light" };
      const intl3 = defaultSelection(1212).intl;
      obj7.children = intl3.string(defaultSelection(1212).t.cMiNit);
      items6[2] = callback(defaultSelection(4126).Text, obj7);
      obj.children = items6;
      let tmp32Result = closure_14(selectedGiftingPromotionReward, obj);
      const tmp44 = closure_14;
      const tmp45 = selectedGiftingPromotionReward;
      const tmp46 = closure_14;
      const tmp47 = selectedGiftingPromotionReward;
      const tmp48 = callback;
      const tmp51 = importDefault(4554);
    }
    const items8 = [tmp32Result, , ];
    let tmp66 = !tmp10;
    if (tmp66) {
      obj8 = { variant: "text-sm/normal" };
      const intl4 = defaultSelection(1212).intl;
      const obj9 = { paidURL: importDefault(1920).getArticleURL(navigateToRewardSelection.PAID_TERMS) };
      obj8.children = intl4.format(defaultSelection(1212).t.hYoGUM, obj9);
      tmp66 = callback(defaultSelection(5459).TextWithIOSLinkWorkaround, obj8);
      const obj27 = importDefault(1920);
    }
    items8[1] = tmp66;
    const obj10 = { loading: isPurchasing, variant: str, text: stringResult };
    let tmp75 = !canPurchaseIAP;
    if (!tmp75) {
      tmp75 = isPurchasing;
    }
    obj10.disabled = tmp75;
    let fn;
    if (!isPurchasing) {
      fn = () => {
        defaultSelection(outer1_2[40]).dismissKeyboard();
        if (c10) {
          if (c8) {
            navigateToRewardSelection();
          }
        }
        callback(() => {
          outer1_1.navigate(defaultSelection(outer2_2[29]).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    obj10.onPress = fn;
    items8[2] = callback(defaultSelection(4543).Button, obj10);
    obj.children = items8;
    return tmp23(tmp24, obj);
  }
  if (null != first) {
    if (tmp9) {
      if (null != selectedGiftingPromotionReward) {
        const obj11 = { style: tmp.selectedRewardRow };
        const obj12 = { style: tmp.selectedRewardBannerContainer };
        const obj13 = { collectiblesItem: first, currentUser: stateFromStores, gradientColors: tmp13 };
        let angle1;
        if (null != stateFromStores1) {
          const gradient2 = stateFromStores1.gradient;
          if (null != gradient2) {
            angle1 = gradient2.angle;
          }
        }
        obj13.gradientAngle = angle1;
        obj12.children = callback(RewardPreview, obj13);
        const items9 = [callback(selectedGiftingPromotionReward, obj12), ];
        let tmp39 = !tmp8;
        if (!tmp8) {
          const obj14 = { variant: "tertiary", size: "sm" };
          const obj15 = { size: "sm" };
          obj14.icon = callback(defaultSelection(9106).PencilIcon, obj15);
          const intl2 = defaultSelection(1212).intl;
          obj14.accessibilityLabel = intl2.string(defaultSelection(1212).t.bt75uw);
          obj14.onPress = function onPress() {
            navigateToRewardSelection(selectedGiftingPromotionReward);
          };
          tmp39 = callback(defaultSelection(7771).IconButton, obj14);
        }
        items9[1] = tmp39;
        obj11.children = items9;
        tmp32Result = closure_14(selectedGiftingPromotionReward, obj11);
        const tmp32 = closure_14;
        const tmp33 = selectedGiftingPromotionReward;
        const tmp34 = callback;
        const tmp35 = selectedGiftingPromotionReward;
        const tmp36 = callback;
        const tmp37 = RewardPreview;
      }
    }
  }
  tmp32Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled) {
    tmp32Result = null;
    if (null != nextTier) {
      const obj16 = { giftsToNextTier: stateFromStoresObject.giftsToNextTier };
      const name = nextTier.name;
      let str2 = "";
      if (null != name) {
        str2 = name;
      }
      obj16.nextTierName = str2;
      obj16.nextTierIcon = nextTier.simple_icon_url;
      obj16.analyticsLocation = importDefault(5484).PREMIUM_GIFT_CUSTOMIZATION;
      tmp32Result = callback(importDefault(9693), obj16);
      const tmp26 = callback;
      const tmp29 = importDefault(9693);
    }
  }
};
