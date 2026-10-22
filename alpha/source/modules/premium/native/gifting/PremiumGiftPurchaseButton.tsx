// Module ID: 13851
// Function ID: 13852
// Name: PremiumGiftPurchaseButton
// Dependencies: [19, 17, 8654, 9489, 1087, 21, 4969, 587, 558, 576, 5579, 1505, 10420, 13852, 10465, 504, 10478, 10466, 8646, 10418, 10417, 5145, 11015, 1128, 10479, 10482, 2600, 10090, 10484, 10472, 7262, 5220, 2067, 5230, 2]

// Module 13851 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import ChatInputUtils from "ChatInputUtils" /* 5145 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5579 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10418 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8654 */;
import PromotionsStore from "PromotionsStore" /* 9489 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let tmp;
const HelpdeskUtilsDefault = tmp(2067);
const _modDef2600 = tmp(2600);
const AnalyticsLocationDefault = tmp(7262);
const useShouldShowGiftingPromotionDecoDefault = tmp(10478);
const PremiumGiftPromotionDetailsDefault = tmp(10482);
const GiftingBadgeProgressBannerDefault = tmp(10484);
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  let obj2;
  const obj = { container: obj2, selectedRewardRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 }, promoDetails: { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, previewDetails: { flex: 1 } };
  obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 + arg0, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 });
  ({ paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftPurchaseButton(defaultSelection) {
  let allRewards;
  let giftsToNextTier;
  let isPurchasing;
  let nextTier;
  let onPurchase;
  let tmp10;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp9;
  let tmp = defaultSelection;
  let tmp2 = onPurchase;
  let obj = defaultSelection(onPurchase[9]);
  const cResult = obj.c(57);
  defaultSelection = defaultSelection.defaultSelection;
  let tmp4 = navigation;
  closure_11(navigation(onPurchase[10])().insets.bottom);
  const obj2 = defaultSelection(onPurchase[11]);
  navigation = obj2.useNavigation();
  const obj3 = defaultSelection(onPurchase[12]);
  const nativeGiftContext = obj3.useNativeGiftContext();
  onPurchase = nativeGiftContext.onPurchase;
  ({ isPurchasing, allRewards } = nativeGiftContext);
  const claimableRewards = nativeGiftContext.claimableRewards;
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  const setCurrentAnalyticsStep = nativeGiftContext.setCurrentAnalyticsStep;
  const productId = nativeGiftContext.productId;
  const obj4 = defaultSelection(onPurchase[13]);
  const canPurchaseIAP = obj4.useCanPurchaseIAP(productId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [setCurrentAnalyticsStep];
    class R {
      constructor() {
        const marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
        let prop = null;
        if (null != marketingComponentByType) {
          prop = null;
          if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
          }
        }
        return prop;
      }
    }
    cResult[0] = items;
    cResult[1] = R;
    tmp10 = R;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(tmp2[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  let closure_8 = tmp13;
  let closure_9 = tmp14;
  const tmp16 = tmp4(tmp2[16])() && null == selectedGiftingPromotionReward;
  let closure_10 = tmp16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: "PremiumGiftPurchaseButton" };
    cResult[2] = obj5;
    class R {
      constructor() {
        const marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
        let prop = null;
        if (null != marketingComponentByType) {
          prop = null;
          if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
          }
        }
        return prop;
      }
    }
  } else {
    tmp17 = cResult[2];
  }
  const GiftingBadgeExperiment = tmp(tmp2[17]).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig(tmp17).enabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [setSelectedGiftingPromotionReward];
    class R {
      constructor() {
        const marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
        let prop = null;
        if (null != marketingComponentByType) {
          prop = null;
          if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
          }
        }
        return prop;
      }
    }
    cResult[3] = items1;
    cResult[4] = tmp21;
    tmp19 = tmp21;
    tmp18 = items1;
  } else {
    tmp18 = cResult[3];
    tmp19 = cResult[4];
  }
  const tmpResult2 = tmp(tmp2[15]);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp18, tmp19);
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  if (cResult[5] === allRewards) {
    if (cResult[6] === claimableRewards) {
      if (cResult[7] === defaultSelection) {
        if (cResult[8] === (null != claimableRewards && claimableRewards.length > 0)) {
          if (cResult[9] === navigation) {
            if (cResult[10] === setCurrentAnalyticsStep) {
              let tmp23;
              if (cResult[11] === setSelectedGiftingPromotionReward) {
                tmp23 = cResult[12];
              }
              closure_11 = tmp23;
              if (cResult[13] === claimableRewards) {
                if (cResult[14] === (null != claimableRewards && 1 === claimableRewards.length)) {
                  let tmp24;
                  let tmp25;
                  if (cResult[15] === setSelectedGiftingPromotionReward) {
                    tmp24 = cResult[16];
                    tmp25 = cResult[17];
                  }
                  const effect = allRewards.useEffect(tmp24, tmp25);
                  class R {
                    constructor() {
                      const marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
                      let prop = null;
                      if (null != marketingComponentByType) {
                        prop = null;
                        if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
                          prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
                        }
                      }
                      return prop;
                    }
                  }
                  function onPress() {
                    const obj = ChatInputUtils;
                    obj.dismissKeyboard();
                    const tmp2 = closure_10;
                    if (tmp2) {
                      const tmp3 = closure_8;
                      if (tmp3) {
                        closure_11();
                      }
                    }
                    onPurchase(() => {
                      navigation.navigate(defaultSelection(onPurchase[20]).PremiumGiftScreens.SUCCESS);
                    });
                  }
                  cResult[18] = null != claimableRewards && claimableRewards.length > 0;
                  cResult[19] = tmp23;
                  cResult[20] = navigation;
                  cResult[21] = onPurchase;
                  cResult[22] = tmp16;
                  cResult[23] = onPress;
                }
              }
              class R {
                constructor() {
                  const marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
                  let prop = null;
                  if (null != marketingComponentByType) {
                    prop = null;
                    if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
                      prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
                    }
                  }
                  return prop;
                }
              }
              const items2 = [tmp14, claimableRewards, setSelectedGiftingPromotionReward];
              cResult[13] = claimableRewards;
              cResult[14] = null != claimableRewards && 1 === claimableRewards.length;
              cResult[15] = setSelectedGiftingPromotionReward;
              cResult[16] = tmp26;
              cResult[17] = items2;
              tmp25 = items2;
              tmp24 = tmp26;
            }
          }
        }
      }
    }
  }
  function navigateToRewardSelection(arg0) {
    let items;
    let items1;
    const tmp = closure_8;
    if (tmp) {
      let tmp2 = arg0;
      setCurrentAnalyticsStep(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
      const tmp4 = require;
      if (null == arg0) {
        tmp2 = defaultSelection;
      }
      const navigate = navigation.navigate;
      const obj = {
        defaultHighlightedReward: tmp2,
        allRewards: items,
        claimableRewards: items1,
        onSelect(arg0) {
            setSelectedGiftingPromotionReward(arg0);
            navigation.navigate(defaultSelection(onPurchase[20]).PremiumGiftScreens.CUSTOMIZATION);
          }
      };
      items = allRewards;
      const REWARD_SELECT = tmp4(10417).PremiumGiftScreens.REWARD_SELECT;
      if (allRewards == null) {
        items = [];
      }
      items1 = claimableRewards;
      if (claimableRewards == null) {
        items1 = [];
      }
      navigate(REWARD_SELECT, obj);
    }
  }
  cResult[5] = allRewards;
  cResult[6] = claimableRewards;
  cResult[7] = defaultSelection;
  cResult[8] = null != claimableRewards && claimableRewards.length > 0;
  cResult[9] = navigation;
  cResult[10] = setCurrentAnalyticsStep;
  cResult[11] = setSelectedGiftingPromotionReward;
  cResult[12] = navigateToRewardSelection;
  tmp23 = navigateToRewardSelection;
}) : (function PremiumGiftPurchaseButton(defaultSelection) {
  let _undefined;
  let c2;
  let c3;
  let c7;
  let claimableRewards;
  let closure_8;
  let format;
  let formatToPlainStringResult;
  let hYoGUM;
  let intl3;
  let intl4;
  let intl5;
  let isPurchasing;
  let items4;
  let items5;
  let name;
  let obj8;
  let onPress;
  let productId;
  let str2;
  let stringResult;
  let tmp21Result;
  let tmp34;
  let tmp4Result6;
  let tmpResult3;
  function onSelect(arg0) {
    setSelectedGiftingPromotionReward(arg0);
    navigation.navigate(defaultSelection(c2[20]).PremiumGiftScreens.CUSTOMIZATION);
  }
  defaultSelection = defaultSelection.defaultSelection;
  importDefault = undefined;
  dependencyMap = undefined;
  react = undefined;
  claimableRewards = undefined;
  c7 = undefined;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  const tmp3 = closure_11(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  let tmp4 = defaultSelection;
  let obj = defaultSelection(1505);
  importDefault = obj.useNavigation();
  let obj2 = defaultSelection(10420);
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  const obj3 = defaultSelection(13852);
  const canPurchaseIAP = obj3.useCanPurchaseIAP(productId);
  let items = [c7];
  const obj4 = defaultSelection(504);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(defaultSelection(c2[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
      }
    }
    return prop;
  });
  HelpdeskArticles = tmp8;
  let closure_9 = tmp9;
  const tmp10 = useShouldShowGiftingPromotionDecoDefault();
  let closure_10 = tmp11;
  const GiftingBadgeExperiment = tmp4(10466).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled;
  let items1 = [setSelectedGiftingPromotionReward];
  const tmp4Result = tmp4(504);
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items1, () => {
    const obj = { nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(c2[18]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(c2[18]).BadgeId.GIFTING) };
    return obj;
  });
  const nextTier = stateFromStoresObject.nextTier;
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const giftsToNextTier = stateFromStoresObject.giftsToNextTier;
  const effect = react.useEffect(() => {
    const tmp = closure_9;
    if (tmp) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result4 = tmp4(11015);
  const product = tmp4Result4.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  const tmp14 = null != product && product.items.length > 0;
  const intl = tmp4(1128).intl;
  const string = intl.string;
  const t = tmp4(1128).t;
  if (tmp10 && null == selectedGiftingPromotionReward) {
    stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str = "active";
  if (tmp10 && null == selectedGiftingPromotionReward) {
    str = "primary";
  }
  tmp4(10479);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp10 && null == selectedGiftingPromotionReward) {
    if (null != claimableRewards && claimableRewards.length > 0) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp17, title: intl4.string(_modDef2600["7yaXr8"]), subtitle: intl5.string(_modDef2600.QojGXK) };
      const tmpResult = PremiumGiftPromotionDetailsDefault;
      intl4 = tmp4(1128).intl;
      intl5 = tmp4(1128).intl;
      tmp21Result = closure_9(tmpResult, obj6);
    }
    const items3 = [tmp21Result, , ];
    let tmp30 = !tmp11;
    if (tmp30) {
      const obj7 = { variant: "text-sm/normal", children: format(hYoGUM, obj8) };
      const Text = tmp4(5220).Text;
      const intl6 = tmp4(1128).intl;
      format = intl6.format;
      obj8 = { paidURL: tmpResult3.getArticleURL(HelpdeskArticles.PAID_TERMS) };
      hYoGUM = tmp4(1128).t.hYoGUM;
      tmpResult3 = HelpdeskUtilsDefault;
      tmp30 = closure_9(Text, obj7);
    }
    items3[1] = tmp30;
    const obj9 = { loading: isPurchasing, variant: str, text: stringResult, disabled: tmp34, onPress };
    tmp34 = !canPurchaseIAP;
    const Button = tmp4(5230).Button;
    const tmp33 = closure_9;
    if (canPurchaseIAP) {
      tmp34 = isPurchasing;
    }
    onPress = undefined;
    if (!isPurchasing) {
      onPress = function onPress() {
        let items;
        let items1;
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        const tmp4 = closure_10;
        if (tmp4) {
          if (closure_8) {
            if (closure_8) {
              marketingComponentByType(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
              const navigate = navigation.navigate;
              const obj2 = { defaultHighlightedReward: defaultSelection, allRewards: items, claimableRewards: items1, onSelect };
              items = c3;
              const REWARD_SELECT = tmp(10417).PremiumGiftScreens.REWARD_SELECT;
              if (c3 == null) {
                items = [];
              }
              items1 = claimableRewards;
              if (claimableRewards == null) {
                items1 = [];
              }
              navigate(REWARD_SELECT, obj2);
            }
          }
        }
        c2(() => {
          navigation.navigate(defaultSelection(c2[20]).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    items3[2] = tmp33(Button, obj9);
    obj5.children = items3;
    return closure_10(tmp19, obj5);
  }
  if (tmp14) {
    if (tmp10) {
      if (null != selectedGiftingPromotionReward) {
        const obj10 = {
          style: items4,
          onPress: function handleEditButtonPressed() {
                  let items;
                  let items1;
                  let tmp = selectedGiftingPromotionReward;
                  const tmp2 = closure_8;
                  if (tmp2) {
                    marketingComponentByType(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
                    const tmp4 = require;
                    if (null == tmp) {
                      tmp = defaultSelection;
                    }
                    const navigate = navigation.navigate;
                    const obj = { defaultHighlightedReward: tmp, allRewards: items, claimableRewards: items1, onSelect };
                    items = c3;
                    const REWARD_SELECT = tmp4(10417).PremiumGiftScreens.REWARD_SELECT;
                    if (c3 == null) {
                      items = [];
                    }
                    items1 = claimableRewards;
                    if (claimableRewards == null) {
                      items1 = [];
                    }
                    navigate(REWARD_SELECT, obj);
                  }
                },
          disabled: null != claimableRewards && 1 === claimableRewards.length,
          accessibilityRole: "button",
          accessibilityLabel: formatToPlainStringResult,
          children: items5
        };
        items4 = [, ];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        formatToPlainStringResult = undefined;
        const tmp23 = claimableRewards;
        if (!(null != claimableRewards && 1 === claimableRewards.length)) {
          const intl2 = tmp4(1128).intl;
          const obj11 = { rewardName: product.name };
          formatToPlainStringResult = intl2.formatToPlainString(_modDef2600.qbJihM, obj11);
        }
        const obj12 = { style: tmp3.previewDetails, product, title: intl3.string(tmp4(1128).t.Rh4oem), subtitle: name };
        const PremiumGiftPromotionCollectibleRewardDetails = tmp4(10482).PremiumGiftPromotionCollectibleRewardDetails;
        intl3 = tmp4(1128).intl;
        name = undefined;
        if (product != null) {
          name = product.name;
        }
        items5 = [closure_9(PremiumGiftPromotionCollectibleRewardDetails, obj12), !tmp9 && closure_9(tmp4(10090).PencilIcon, { size: "sm" })];
        !(null != claimableRewards && 1 === claimableRewards.length) && closure_9(tmp4(10090).PencilIcon, { size: "sm" });
        tmp21Result = tmp18(tmp23, obj10);
      }
    }
  }
  tmp21Result = null;
  if (enabled) {
    tmp21Result = null;
    if (null != nextTier) {
      const obj13 = { giftsToNextTier, nextTierName: str2, nextTierIcon: tmp4Result6.getGiftingBadgeTierIconUrl(nextTier), analyticsLocation: AnalyticsLocationDefault.PREMIUM_GIFT_CUSTOMIZATION };
      str2 = nextTier.name;
      const tmp21 = closure_9;
      const tmpResult4 = GiftingBadgeProgressBannerDefault;
      if (str2 == null) {
        str2 = "";
      }
      tmp4Result6 = tmp4(10472);
      tmp21Result = tmp21(tmpResult4, obj13);
    }
  }
});
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default tmp4;
