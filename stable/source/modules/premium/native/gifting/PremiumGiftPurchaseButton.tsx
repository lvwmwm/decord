// Module ID: 11184
// Function ID: 11185
// Name: PremiumGiftPurchaseButton
// Dependencies: [19, 17, 8309, 10794, 1074, 21, 4636, 576, 7084, 1483, 10828, 11185, 504, 10871, 10884, 10869, 10867, 10872, 8301, 10876, 10792, 10791, 11180, 1114, 10885, 10886, 2460, 10379, 10888, 7285, 4632, 2024, 5056, 4502, 2]
// Exports: default

// Module 11184 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 576 */;
import ChatInputUtils from "ChatInputUtils" /* 4502 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7084 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10791 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10792 */;
import PremiumGiftingGogoPromotionExperimentDefault from "PremiumGiftingGogoPromotionExperiment" /* 10869 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10884 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8309 */;
import PromotionsStore from "PromotionsStore" /* 10794 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4636);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { container: null, selectedRewardRow: null, promoDetails: null, previewDetails: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 + arg0, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 + arg0, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  obj.selectedRewardRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.promoDetails = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.previewDetails = { flex: 1 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  defaultSelection = defaultSelection.defaultSelection;
  dependencyMap = undefined;
  noop = undefined;
  claimableRewards = undefined;
  c7 = undefined;
  HelpdeskArticles = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  let tmp3 = closure_11(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  importDefault = defaultSelection(1483).useNavigation();
  let obj = defaultSelection(1483);
  const nativeGiftContext = defaultSelection(10828).useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(10828);
  const canPurchaseIAP = defaultSelection(11185).useCanPurchaseIAP(productId);
  const obj3 = defaultSelection(11185);
  let items = [c7];
  const stateFromStores = defaultSelection(504).useStateFromStores(items, () => {
    const marketingComponentByType = _undefined2.getMarketingComponentByType(defaultSelection(_undefined[13]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
      }
    }
    return prop;
  });
  let tmp8 = null != claimableRewards;
  if (tmp8) {
    tmp8 = claimableRewards.length > 0;
  }
  HelpdeskArticles = tmp8;
  let tmp9 = null != claimableRewards;
  if (tmp9) {
    tmp9 = 1 === claimableRewards.length;
  }
  closure_9 = tmp9;
  const tmp10 = useShouldShowGiftingPromotionDecoDefault();
  let tmp11 = tmp10;
  if (tmp10) {
    tmp11 = null == selectedGiftingPromotionReward;
  }
  closure_10 = tmp11;
  const obj4 = defaultSelection(504);
  const config = PremiumGiftingGogoPromotionExperimentDefault.useConfig({ location: "PremiumGiftPurchaseButton" });
  const GiftingBadgeExperiment = tmp4(10872).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled;
  const tmpResult = PremiumGiftingGogoPromotionExperimentDefault;
  let items1 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = defaultSelection(504).useStateFromStoresObject(items1, () => ({ nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING) }));
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const tmp4Result = defaultSelection(504);
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const isGiftingBadgeComplexArtEnabled = defaultSelection(10876).useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
  const effect = noop.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result5 = defaultSelection(10876);
  const product = defaultSelection(11180).useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  let tmp16 = null != product;
  if (tmp16) {
    tmp16 = product.items.length > 0;
  }
  const intl = tmp4(1114).intl;
  const string = intl.string;
  const t = tmp4(1114).t;
  if (tmp11) {
    let stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str2 = "active";
  if (tmp11) {
    str2 = "primary";
  }
  const tmp4Result6 = defaultSelection(11180);
  let asset;
  if (stateFromStores != null) {
    asset = stateFromStores.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = defaultSelection(10885).useThemeAndReducedMotionAwareAssetUrl(asset);
  const obj5 = { style: tmp3.container, children: null };
  if (tmp10) {
    if (config.enabled) {
      if (selectedGiftingPromotionReward === tmp4(10867).GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID) {
        const obj6 = { style: tmp3.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
        const intl6 = tmp4(1114).intl;
        obj6.title = intl6.string(tmp(2460)["P+DDLh"]);
        const intl7 = tmp4(1114).intl;
        obj6.subtitle = intl7.string(tmp(2460).dOZh6X);
        let tmp23Result = closure_9(tmp(10886), obj6);
        const tmpResult5 = tmp(10886);
      }
      const items3 = [tmp23Result, , ];
      let tmp34 = !tmp11;
      if (!tmp11) {
        const obj7 = { variant: "text-sm/normal", children: null };
        const intl8 = tmp4(1114).intl;
        const obj8 = { paidURL: tmp(2024).getArticleURL(HelpdeskArticles.PAID_TERMS) };
        obj7.children = intl8.format(tmp4(1114).t.hYoGUM, obj8);
        tmp34 = closure_9(tmp4(4632).Text, obj7);
        const tmpResult6 = tmp(2024);
      }
      items3[1] = tmp34;
      const obj9 = { loading: isPurchasing, variant: str2, text: stringResult, disabled: null, onPress: null };
      let tmp38 = !canPurchaseIAP;
      if (canPurchaseIAP) {
        tmp38 = isPurchasing;
      }
      obj9.disabled = tmp38;
      let fn;
      if (!isPurchasing) {
        fn = () => {
          ChatInputUtils.dismissKeyboard();
          if (closure_10) {
            if (closure_8) {
              if (closure_8) {
                _undefined2(tmp(10792).PaymentFlowStep.REWARD_SKU_SELECT);
                const obj2 = { defaultHighlightedReward: defaultSelection, allRewards: null, claimableRewards: null, onSelect: null };
                let items = c3;
                if (c3 == null) {
                  items = [];
                }
                obj2.allRewards = items;
                let items1 = claimableRewards;
                if (claimableRewards == null) {
                  items1 = [];
                }
                obj2.claimableRewards = items1;
                obj2.onSelect = function onSelect(arg0) {
                  setSelectedGiftingPromotionReward(arg0);
                  navigation.navigate(defaultSelection(10791).PremiumGiftScreens.CUSTOMIZATION);
                };
                navigation.navigate(tmp(10791).PremiumGiftScreens.REWARD_SELECT, obj2);
              }
            }
          }
          _undefined(() => {
            navigation.navigate(defaultSelection(10791).PremiumGiftScreens.SUCCESS);
          });
        };
      }
      obj9.onPress = fn;
      items3[2] = closure_9(tmp4(5056).Button, obj9);
      obj5.children = items3;
      return tmp20(tmp21, obj5);
    }
  }
  if (tmp11) {
    if (tmp8) {
      const obj10 = { style: tmp3.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
      const intl4 = tmp4(1114).intl;
      obj10.title = intl4.string(tmp(2460)["7yaXr8"]);
      const intl5 = tmp4(1114).intl;
      obj10.subtitle = intl5.string(tmp(2460).QojGXK);
      tmp23Result = closure_9(tmp(10886), obj10);
      const tmpResult7 = tmp(10886);
    }
  }
  if (tmp16) {
    if (tmp10) {
      if (null != selectedGiftingPromotionReward) {
        const obj11 = { style: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityLabel: null, children: null };
        const items4 = [, ];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        obj11.style = items4;
        obj11.onPress = function onPress() {
          let tmp = selectedGiftingPromotionReward;
          if (closure_8) {
            _undefined2(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
            if (null == tmp) {
              tmp = defaultSelection;
            }
            const obj = { defaultHighlightedReward: tmp, allRewards: null, claimableRewards: null, onSelect: null };
            let items = c3;
            if (c3 == null) {
              items = [];
            }
            obj.allRewards = items;
            let items1 = claimableRewards;
            if (claimableRewards == null) {
              items1 = [];
            }
            obj.claimableRewards = items1;
            obj.onSelect = function onSelect(arg0) {
              setSelectedGiftingPromotionReward(arg0);
              navigation.navigate(defaultSelection(10791).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
          }
        };
        obj11.disabled = tmp9;
        obj11.accessibilityRole = "button";
        let stringResult1;
        if (!tmp9) {
          const intl2 = tmp4(1114).intl;
          stringResult1 = intl2.string(tmp4(1114).t.bt75uw);
        }
        obj11.accessibilityLabel = stringResult1;
        const obj12 = { style: tmp3.previewDetails, product, title: null, subtitle: null };
        const intl3 = tmp4(1114).intl;
        obj12.title = intl3.string(tmp4(1114).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj12.subtitle = name;
        const items5 = [closure_9(tmp4(10886).PremiumGiftPromotionCollectibleRewardDetails, obj12), ];
        let tmp27Result = !tmp9;
        if (!tmp9) {
          tmp27Result = tmp27(tmp4(10379).PencilIcon, { size: "sm" });
        }
        items5[1] = tmp27Result;
        obj11.children = items5;
        tmp23Result = tmp20(claimableRewards, obj11);
      }
    }
  }
  tmp23Result = null;
  if (enabled) {
    const obj13 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
    let str3 = nextTier.name;
    if (str3 == null) {
      str3 = "";
    }
    obj13.nextTierName = str3;
    const tmp23 = closure_9;
    const tmpResult8 = tmp(10888);
    obj13.nextTierIcon = tmp4(10876).getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    obj13.analyticsLocation = tmp(7285).PREMIUM_GIFT_CUSTOMIZATION;
    tmp23Result = tmp23(tmpResult8, obj13);
    const tmp4Result8 = tmp4(10876);
  }
};
