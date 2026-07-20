// Module ID: 9752
// Function ID: 75871
// Name: RewardPreview
// Dependencies: []
// Exports: default

// Module 9752 (RewardPreview)
function RewardPreview(arg0) {
  let collectiblesItem;
  let currentUser;
  let gradientAngle;
  let gradientColors;
  ({ collectiblesItem, gradientAngle } = arg0);
  ({ currentUser, gradientColors } = arg0);
  const tmp = callback3(importDefault(dependencyMap[11])().insets.bottom);
  if (isNameplateRecord(collectiblesItem)) {
    let obj = {};
    obj = { style: tmp.nameplateWrapper };
    const obj1 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
    let obj8 = arg1(dependencyMap[13]);
    obj1.nameplate = obj8.getNameplateData(collectiblesItem);
    obj.children = callback(importDefault(dependencyMap[12]), obj1);
    const items = [callback(closure_5, obj), , ];
    const obj2 = { style: tmp.singleAvatarContainer };
    const obj3 = { user: currentUser, guildId: undefined, size: arg1(dependencyMap[14]).AvatarSizes.SMALL, aria-hidden: true };
    obj2.children = callback(arg1(dependencyMap[14]).Avatar, obj3);
    items[1] = callback(closure_5, obj2);
    const obj4 = { style: tmp.selectedRewardText, variant: "text-xs/medium" };
    const intl2 = arg1(dependencyMap[16]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[16]).t.Rh4oem);
    items[2] = callback(arg1(dependencyMap[15]).Text, obj4);
    obj.children = items;
    let tmp5Result = callback2(closure_13, obj);
    const tmp26 = importDefault(dependencyMap[12]);
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
      obj5.angleCenter = {};
      obj5.colors = gradientColors;
      const items1 = [callback(importDefault(dependencyMap[17]), obj5), , ];
      const obj6 = { style: tmp.singleAvatarContainer };
      const obj7 = {};
      const tmp10 = importDefault(dependencyMap[17]);
      const tmp5 = callback2;
      const tmp6 = closure_13;
      const tmp7 = callback;
      obj7.size = arg1(dependencyMap[14]).AvatarSizes.NORMAL;
      obj7.asset = collectiblesItem.asset;
      obj6.children = callback(importDefault(dependencyMap[18]), obj7);
      items1[1] = callback(closure_5, obj6);
      obj8 = { style: tmp.selectedRewardText };
      const intl = arg1(dependencyMap[16]).intl;
      obj8.children = intl.string(arg1(dependencyMap[16]).t.Rh4oem);
      items1[2] = callback(arg1(dependencyMap[15]).Text, obj8);
      obj.children = items1;
      tmp5Result = tmp5(tmp6, obj);
      const tmp16 = importDefault(dependencyMap[18]);
    }
  }
  return tmp5Result;
}
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const isAvatarDecorationRecord = arg1(dependencyMap[3]).isAvatarDecorationRecord;
const isNameplateRecord = arg1(dependencyMap[4]).isNameplateRecord;
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const HelpdeskArticles = arg1(dependencyMap[7]).HelpdeskArticles;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
let closure_15 = arg1(dependencyMap[9]).createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW, paddingTop: importDefault(dependencyMap[10]).space.PX_12, paddingBottom: importDefault(dependencyMap[10]).space.PX_12 + arg0, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, gap: importDefault(dependencyMap[10]).space.PX_8 };
  const merged = Object.assign(importDefault(dependencyMap[10]).shadows.SHADOW_TOP_HIGH);
  obj.container = obj;
  obj.chooseRewardContainer = { "Bool(false)": 1, "Bool(false)": "tail", "Bool(false)": "text-md/semibold" };
  obj = {};
  const merged1 = Object.assign(closure_4.absoluteFillObject);
  obj["borderRadius"] = importDefault(dependencyMap[10]).radii.sm;
  obj["overflow"] = "hidden";
  obj.gradientBackdrop = obj;
  obj.chooseRewardText = { flex: 1, marginStart: importDefault(dependencyMap[10]).space.PX_8 };
  obj.backgroundImage = { ONE_DAY: true, marginRight: "/assets/modules/stage_channels/native/images", gameImage: 25, agq: 24, marginRight: null, display: "b252f7dc065300671ba9347414eb0bad" };
  const obj2 = { aze: null, azj: null, marginStart: importDefault(dependencyMap[10]).space.PX_8 };
  obj.inAppFlowImage = obj2;
  const items = [{ rotate: "-4deg" }, { translateY: -11 }];
  obj.inAppFlowImageLargeTilted = { transform: items };
  obj.singleAvatarContainer = {};
  const obj3 = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[10]).space.PX_16 };
  obj.selectedRewardRow = obj3;
  obj.selectedRewardBannerContainer = { "Null": 16777216, "Null": 369, "Null": 1167610368, alignItems: 977359655 };
  const obj4 = {};
  const merged2 = Object.assign(closure_4.absoluteFillObject);
  obj4["borderRadius"] = importDefault(dependencyMap[10]).radii.sm;
  obj4["top"] = importDefault(dependencyMap[10]).space.PX_4;
  obj4["bottom"] = importDefault(dependencyMap[10]).space.PX_4;
  obj4["start"] = importDefault(dependencyMap[10]).space.PX_4;
  obj4["end"] = importDefault(dependencyMap[10]).space.PX_4;
  obj4["marginStart"] = importDefault(dependencyMap[10]).space.PX_12;
  obj.selectedRewardBannerGradient = obj4;
  obj.selectedRewardText = { flex: 1 };
  const obj1 = { flex: 1, marginStart: importDefault(dependencyMap[10]).space.PX_8 };
  obj.nameplateWrapper = { borderRadius: importDefault(dependencyMap[10]).radii.sm };
  return obj;
});
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  let claimableRewards;
  let isPurchasing;
  const arg1 = defaultSelection.defaultSelection;
  let importDefault;
  let React;
  claimableRewards = undefined;
  let closure_6;
  let isAvatarDecorationRecord;
  let isNameplateRecord;
  let closure_9;
  let closure_10;
  function navigateToRewardSelection(selectedGiftingPromotionReward) {
    let tmp = selectedGiftingPromotionReward;
    if (tmp7) {
      setCurrentAnalyticsStep(defaultSelection(closure_2[28]).PaymentFlowStep.REWARD_SKU_SELECT);
      if (null == tmp) {
        tmp = defaultSelection;
      }
      let navigateResult = {
        defaultHighlightedReward: tmp,
        allRewards: null != closure_3 ? closure_3 : [],
        claimableRewards: null != claimableRewards ? claimableRewards : [],
        onSelect(arg0) {
            callback2(arg0);
            navigation.navigate(callback(closure_2[29]).PremiumGiftScreens.CUSTOMIZATION);
          }
      };
      navigateResult = navigation.navigate(defaultSelection(closure_2[29]).PremiumGiftScreens.REWARD_SELECT, navigateResult);
      const tmp7 = navigation;
    }
  }
  const tmp = callback3(importDefault(dependencyMap[11])().insets.bottom);
  let obj = arg1(dependencyMap[19]);
  importDefault = obj.useNavigation();
  let obj1 = arg1(dependencyMap[20]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ onPurchase: closure_2, isPurchasing, allRewards: closure_3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  closure_6 = setSelectedGiftingPromotionReward;
  isAvatarDecorationRecord = nativeGiftContext.setCurrentAnalyticsStep;
  let obj2 = arg1(dependencyMap[21]);
  const items = [closure_9];
  const stateFromStores = obj2.useStateFromStores(items, () => tmp8.getCurrentUser());
  let obj3 = arg1(dependencyMap[22]);
  const canPurchaseIAP = obj3.useCanPurchaseIAP(nativeGiftContext.productId);
  let obj4 = arg1(dependencyMap[21]);
  const items1 = [closure_10];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    const marketingComponentByType = tmp10.getMarketingComponentByType(defaultSelection(closure_2[23]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
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
  let inAppFlowImageLargeTilted = assetVariant === arg1(dependencyMap[24]).GiftCustomizationBanner_AssetVariant.LARGE_TILTED;
  let tmp7 = null != claimableRewards;
  if (tmp7) {
    tmp7 = claimableRewards.length > 0;
  }
  isNameplateRecord = tmp7;
  let tmp8 = null != claimableRewards;
  if (tmp8) {
    tmp8 = 1 === claimableRewards.length;
  }
  closure_9 = tmp8;
  const tmp9 = importDefault(dependencyMap[25])();
  let tmp10 = tmp9;
  if (tmp9) {
    tmp10 = null == selectedGiftingPromotionReward;
  }
  closure_10 = tmp10;
  const GiftingBadgeExperiment = arg1(dependencyMap[26]).GiftingBadgeExperiment;
  let obj5 = arg1(dependencyMap[21]);
  const items2 = [closure_6];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items2, () => {
    let getNextTier;
    let getRemainingToNextTier;
    ({ getNextTier, getRemainingToNextTier } = setSelectedGiftingPromotionReward);
    return { nextTier: getNextTier(defaultSelection(closure_2[27]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(defaultSelection(closure_2[27]).BadgeId.GIFTING) };
  });
  const nextTier = stateFromStoresObject.nextTier;
  const items3 = [tmp8, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = React.useEffect(() => {
    if (tmp8) {
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
    const items4 = [String(importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND), ];
    const _String2 = String;
    items4[1] = String(importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND);
    tmp13 = items4;
  }
  let obj6 = arg1(dependencyMap[30]);
  const product = obj6.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  const intl = arg1(dependencyMap[16]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[16]).t;
  if (tmp10) {
    let stringResult = string(t.gNZY/B);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str = "active";
  if (tmp10) {
    str = "primary";
  }
  let obj7 = arg1(dependencyMap[31]);
  let prop;
  if (null != stateFromStores1) {
    prop = stateFromStores1.mobileBackgroundAsset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj7.useThemeAndReducedMotionAwareAssetUrl(prop);
  let obj8 = arg1(dependencyMap[31]);
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
      obj2.angleCenter = {};
      obj2.colors = colors;
      const items5 = [callback(importDefault(dependencyMap[17]), obj2), ];
      let tmp54 = null != themeAndReducedMotionAwareAssetUrl;
      if (tmp54) {
        obj3 = { style: tmp.backgroundImage, resizeMode: "cover" };
        obj4 = { uri: themeAndReducedMotionAwareAssetUrl };
        obj3.source = obj4;
        tmp54 = callback(importDefault(dependencyMap[32]), obj3);
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
        tmp59Result = callback(importDefault(dependencyMap[32]), obj5);
        const tmp59 = callback;
        const tmp62 = importDefault(dependencyMap[32]);
      }
      items6[1] = tmp59Result;
      obj7 = { style: tmp.chooseRewardText };
      const intl3 = arg1(dependencyMap[16]).intl;
      obj7.children = intl3.string(arg1(dependencyMap[16]).t.cMiNit);
      items6[2] = callback(arg1(dependencyMap[15]).Text, obj7);
      obj.children = items6;
      let tmp32Result = closure_14(selectedGiftingPromotionReward, obj);
      const tmp44 = closure_14;
      const tmp45 = selectedGiftingPromotionReward;
      const tmp46 = closure_14;
      const tmp47 = selectedGiftingPromotionReward;
      const tmp48 = callback;
      const tmp51 = importDefault(dependencyMap[17]);
    }
    const items8 = [tmp32Result, , ];
    let tmp66 = !tmp10;
    if (tmp66) {
      obj8 = { variant: "text-sm/normal" };
      const intl4 = arg1(dependencyMap[16]).intl;
      const obj9 = { paidURL: importDefault(dependencyMap[38]).getArticleURL(navigateToRewardSelection.PAID_TERMS) };
      obj8.children = intl4.format(arg1(dependencyMap[16]).t.hYoGUM, obj9);
      tmp66 = callback(arg1(dependencyMap[37]).TextWithIOSLinkWorkaround, obj8);
      const obj27 = importDefault(dependencyMap[38]);
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
        defaultSelection(callback[40]).dismissKeyboard();
        if (tmp10) {
          if (tmp7) {
            navigateToRewardSelection();
          }
        }
        callback(() => {
          navigation.navigate(callback(closure_2[29]).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    obj10.onPress = fn;
    items8[2] = callback(arg1(dependencyMap[39]).Button, obj10);
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
          const obj14 = {};
          const obj15 = { size: "sm" };
          obj14.icon = callback(arg1(dependencyMap[34]).PencilIcon, obj15);
          const intl2 = arg1(dependencyMap[16]).intl;
          obj14.accessibilityLabel = intl2.string(arg1(dependencyMap[16]).t.bt75uw);
          obj14.onPress = function onPress() {
            navigateToRewardSelection(selectedGiftingPromotionReward);
          };
          tmp39 = callback(arg1(dependencyMap[33]).IconButton, obj14);
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
      obj16.analyticsLocation = importDefault(dependencyMap[36]).PREMIUM_GIFT_CUSTOMIZATION;
      tmp32Result = callback(importDefault(dependencyMap[35]), obj16);
      const tmp26 = callback;
      const tmp29 = importDefault(dependencyMap[35]);
    }
  }
};
