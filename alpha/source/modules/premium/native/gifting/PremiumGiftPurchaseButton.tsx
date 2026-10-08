// Module ID: 12747
// Function ID: 12748
// Name: PremiumGiftPurchaseButton
// Dependencies: [19, 17, 8292, 10006, 1085, 21, 5090, 587, 558, 576, 6656, 1502, 10040, 12748, 10080, 504, 10094, 10081, 8284, 10085, 10004, 10003, 4945, 10482, 1126, 10095, 10098, 2629, 9675, 10100, 6865, 5086, 2127, 5375, 2]

// Module 12747 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ChatInputUtils from "ChatInputUtils" /* 4945 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6656 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10004 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8292 */;
import PromotionsStore from "PromotionsStore" /* 10006 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let tmp;
const HelpdeskUtilsDefault = tmp(2127);
const _modDef2629 = tmp(2629);
const AnalyticsLocationDefault = tmp(6865);
const useShouldShowGiftingPromotionDecoDefault = tmp(10094);
const PremiumGiftPromotionDetailsDefault = tmp(10098);
const GiftingBadgeProgressBannerDefault = tmp(10100);
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
  const cResult = obj.c(58);
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
  const tmpResult3 = tmp(tmp2[15]);
  const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp18, tmp19);
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  let str = "-DISABLED";
  const useIsGiftingBadgeComplexArtEnabled = tmp(tmp2[19]).useIsGiftingBadgeComplexArtEnabled;
  tmp(tmp2[19]);
  if (enabled) {
    str = "";
  }
  const isGiftingBadgeComplexArtEnabled = useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
  if (cResult[5] === allRewards) {
    if (cResult[6] === claimableRewards) {
      if (cResult[7] === defaultSelection) {
        if (cResult[8] === (null != claimableRewards && claimableRewards.length > 0)) {
          if (cResult[9] === navigation) {
            if (cResult[10] === setCurrentAnalyticsStep) {
              let tmp25;
              if (cResult[11] === setSelectedGiftingPromotionReward) {
                tmp25 = cResult[12];
              }
              closure_11 = tmp25;
              if (cResult[13] === claimableRewards) {
                if (cResult[14] === (null != claimableRewards && 1 === claimableRewards.length)) {
                  let tmp26;
                  let tmp27;
                  if (cResult[15] === setSelectedGiftingPromotionReward) {
                    tmp26 = cResult[16];
                    tmp27 = cResult[17];
                  }
                  const effect = allRewards.useEffect(tmp26, tmp27);
                  class V {
                    constructor() {
                      const tmp = closure_9;
                      if (tmp) {
                        setSelectedGiftingPromotionReward(claimableRewards[0]);
                      }
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
                      navigation.navigate(defaultSelection(onPurchase[21]).PremiumGiftScreens.SUCCESS);
                    });
                  }
                  cResult[18] = null != claimableRewards && claimableRewards.length > 0;
                  cResult[19] = tmp25;
                  cResult[20] = navigation;
                  cResult[21] = onPurchase;
                  cResult[22] = tmp16;
                  cResult[23] = onPress;
                }
              }
              class V {
                constructor() {
                  const tmp = closure_9;
                  if (tmp) {
                    setSelectedGiftingPromotionReward(claimableRewards[0]);
                  }
                }
              }
              const items2 = [tmp14, claimableRewards, setSelectedGiftingPromotionReward];
              cResult[13] = claimableRewards;
              cResult[14] = null != claimableRewards && 1 === claimableRewards.length;
              cResult[15] = setSelectedGiftingPromotionReward;
              cResult[16] = V;
              cResult[17] = items2;
              tmp27 = items2;
              tmp26 = V;
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
            navigation.navigate(defaultSelection(onPurchase[21]).PremiumGiftScreens.CUSTOMIZATION);
          }
      };
      items = allRewards;
      const REWARD_SELECT = tmp4(10003).PremiumGiftScreens.REWARD_SELECT;
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
  tmp25 = navigateToRewardSelection;
}) : (function PremiumGiftPurchaseButton(defaultSelection) {
  let _undefined;
  let c2;
  let c3;
  let c7;
  let claimableRewards;
  let closure_8;
  let format;
  let giftsToNextTier;
  let hYoGUM;
  let intl3;
  let intl4;
  let intl5;
  let isPurchasing;
  let items4;
  let items5;
  let name;
  let nextTier;
  let obj8;
  let onPress;
  let productId;
  let str3;
  let stringResult;
  let stringResult1;
  let tmp23Result;
  let tmp36;
  let tmp4Result8;
  let tmpResult3;
  function onSelect(arg0) {
    setSelectedGiftingPromotionReward(arg0);
    navigation.navigate(defaultSelection(c2[21]).PremiumGiftScreens.CUSTOMIZATION);
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
  let obj = defaultSelection(1502);
  importDefault = obj.useNavigation();
  let obj2 = defaultSelection(10040);
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  const obj3 = defaultSelection(12748);
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
  const GiftingBadgeExperiment = tmp4(10081).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled;
  let items1 = [setSelectedGiftingPromotionReward];
  const tmp4Result = tmp4(504);
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items1, () => {
    const obj = { nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(c2[18]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(c2[18]).BadgeId.GIFTING) };
    return obj;
  });
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  let str = "-DISABLED";
  const useIsGiftingBadgeComplexArtEnabled = tmp4(10085).useIsGiftingBadgeComplexArtEnabled;
  tmp4(10085);
  if (enabled) {
    str = "";
  }
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const isGiftingBadgeComplexArtEnabled = useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
  const effect = react.useEffect(() => {
    const tmp = closure_9;
    if (tmp) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result6 = tmp4(10482);
  const product = tmp4Result6.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  const tmp16 = null != product && product.items.length > 0;
  const intl = tmp4(1126).intl;
  const string = intl.string;
  const t = tmp4(1126).t;
  if (tmp10 && null == selectedGiftingPromotionReward) {
    stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str2 = "active";
  if (tmp10 && null == selectedGiftingPromotionReward) {
    str2 = "primary";
  }
  tmp4(10095);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp10 && null == selectedGiftingPromotionReward) {
    if (null != claimableRewards && claimableRewards.length > 0) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp19, title: intl4.string(_modDef2629["7yaXr8"]), subtitle: intl5.string(_modDef2629.QojGXK) };
      const tmpResult = PremiumGiftPromotionDetailsDefault;
      intl4 = tmp4(1126).intl;
      intl5 = tmp4(1126).intl;
      tmp23Result = closure_9(tmpResult, obj6);
    }
    const items3 = [tmp23Result, , ];
    let tmp32 = !tmp11;
    if (tmp32) {
      const obj7 = { variant: "text-sm/normal", children: format(hYoGUM, obj8) };
      const Text = tmp4(5086).Text;
      const intl6 = tmp4(1126).intl;
      format = intl6.format;
      obj8 = { paidURL: tmpResult3.getArticleURL(HelpdeskArticles.PAID_TERMS) };
      hYoGUM = tmp4(1126).t.hYoGUM;
      tmpResult3 = HelpdeskUtilsDefault;
      tmp32 = closure_9(Text, obj7);
    }
    items3[1] = tmp32;
    const obj9 = { loading: isPurchasing, variant: str2, text: stringResult, disabled: tmp36, onPress };
    tmp36 = !canPurchaseIAP;
    const Button = tmp4(5375).Button;
    const tmp35 = closure_9;
    if (canPurchaseIAP) {
      tmp36 = isPurchasing;
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
              const REWARD_SELECT = tmp(10003).PremiumGiftScreens.REWARD_SELECT;
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
          navigation.navigate(defaultSelection(c2[21]).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    items3[2] = tmp35(Button, obj9);
    obj5.children = items3;
    return closure_10(tmp21, obj5);
  }
  if (tmp16) {
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
                    const REWARD_SELECT = tmp4(10003).PremiumGiftScreens.REWARD_SELECT;
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
          accessibilityLabel: stringResult1,
          children: items5
        };
        items4 = [, ];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        stringResult1 = undefined;
        const tmp25 = claimableRewards;
        if (!(null != claimableRewards && 1 === claimableRewards.length)) {
          const intl2 = tmp4(1126).intl;
          stringResult1 = intl2.string(tmp4(1126).t.bt75uw);
        }
        const obj11 = { style: tmp3.previewDetails, product, title: intl3.string(tmp4(1126).t.Rh4oem), subtitle: name };
        const PremiumGiftPromotionCollectibleRewardDetails = tmp4(10098).PremiumGiftPromotionCollectibleRewardDetails;
        intl3 = tmp4(1126).intl;
        name = undefined;
        if (product != null) {
          name = product.name;
        }
        items5 = [closure_9(PremiumGiftPromotionCollectibleRewardDetails, obj11), !tmp9 && closure_9(tmp4(9675).PencilIcon, { size: "sm" })];
        !(null != claimableRewards && 1 === claimableRewards.length) && closure_9(tmp4(9675).PencilIcon, { size: "sm" });
        tmp23Result = tmp20(tmp25, obj10);
      }
    }
  }
  tmp23Result = null;
  if (enabled) {
    const obj12 = { giftsToNextTier, nextTierName: str3, nextTierIcon: tmp4Result8.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled), analyticsLocation: AnalyticsLocationDefault.PREMIUM_GIFT_CUSTOMIZATION };
    str3 = nextTier.name;
    const tmp23 = closure_9;
    const tmpResult4 = GiftingBadgeProgressBannerDefault;
    if (str3 == null) {
      str3 = "";
    }
    tmp4Result8 = tmp4(10085);
    tmp23Result = tmp23(tmpResult4, obj12);
  }
});
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default tmp4;
