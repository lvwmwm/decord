// Module ID: 10512
// Function ID: 10513
// Name: PremiumGiftPurchaseButton
// Dependencies: [19, 17, 7637, 10128, 1074, 21, 4836, 576, 6402, 1485, 10162, 10513, 504, 10203, 10217, 10204, 7629, 10208, 10126, 10125, 10508, 1115, 10218, 10219, 2551, 9713, 10221, 6603, 4832, 2111, 5281, 4701, 2]
// Exports: default

// Module 10512 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10126 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, marketingComponentByType;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let tmp;
const HelpdeskUtilsDefault = tmp(2111);
const _modDef2551 = tmp(2551);
const AnalyticsLocationDefault = tmp(6603);
const useShouldShowGiftingPromotionDecoDefault = tmp(10217);
const PremiumGiftPromotionDetailsDefault = tmp(10219);
const GiftingBadgeProgressBannerDefault = tmp(10221);
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
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  let _undefined;
  let c2;
  let c3;
  let c7;
  let claimableRewards;
  let closure_8;
  let fn;
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
    navigation.navigate(defaultSelection(c2[19]).PremiumGiftScreens.CUSTOMIZATION);
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
  let obj = defaultSelection(1485);
  importDefault = obj.useNavigation();
  let obj2 = defaultSelection(10162);
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  const obj3 = defaultSelection(10513);
  const canPurchaseIAP = obj3.useCanPurchaseIAP(productId);
  let items = [c7];
  const obj4 = defaultSelection(504);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(defaultSelection(c2[13]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
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
  const GiftingBadgeExperiment = tmp4(10204).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled;
  let items1 = [setSelectedGiftingPromotionReward];
  const tmp4Result = tmp4(504);
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items1, () => {
    const obj = { nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(c2[16]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(c2[16]).BadgeId.GIFTING) };
    return obj;
  });
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  let str = "-DISABLED";
  const useIsGiftingBadgeComplexArtEnabled = tmp4(10208).useIsGiftingBadgeComplexArtEnabled;
  tmp4(10208);
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
  const tmp4Result6 = tmp4(10508);
  const product = tmp4Result6.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  const tmp16 = null != product && product.items.length > 0;
  const intl = tmp4(1115).intl;
  const string = intl.string;
  const t = tmp4(1115).t;
  if (tmp10 && null == selectedGiftingPromotionReward) {
    stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str2 = "active";
  if (tmp10 && null == selectedGiftingPromotionReward) {
    str2 = "primary";
  }
  tmp4(10218);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp10 && null == selectedGiftingPromotionReward) {
    if (null != claimableRewards && claimableRewards.length > 0) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp19, title: intl4.string(_modDef2551["7yaXr8"]), subtitle: intl5.string(_modDef2551.QojGXK) };
      const tmpResult = PremiumGiftPromotionDetailsDefault;
      intl4 = tmp4(1115).intl;
      intl5 = tmp4(1115).intl;
      tmp23Result = closure_9(tmpResult, obj6);
    }
    const items3 = [tmp23Result, , ];
    let tmp32 = !tmp11;
    if (tmp32) {
      const obj7 = { variant: "text-sm/normal", children: format(hYoGUM, obj8) };
      const Text = tmp4(4832).Text;
      const intl6 = tmp4(1115).intl;
      format = intl6.format;
      obj8 = { paidURL: tmpResult3.getArticleURL(HelpdeskArticles.PAID_TERMS) };
      hYoGUM = tmp4(1115).t.hYoGUM;
      tmpResult3 = HelpdeskUtilsDefault;
      tmp32 = closure_9(Text, obj7);
    }
    items3[1] = tmp32;
    const obj9 = { loading: isPurchasing, variant: str2, text: stringResult, disabled: tmp36, onPress: fn };
    tmp36 = !canPurchaseIAP;
    const Button = tmp4(5281).Button;
    const tmp35 = closure_9;
    if (canPurchaseIAP) {
      tmp36 = isPurchasing;
    }
    fn = undefined;
    if (!isPurchasing) {
      fn = () => {
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
              const REWARD_SELECT = tmp(10125).PremiumGiftScreens.REWARD_SELECT;
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
          navigation.navigate(defaultSelection(c2[19]).PremiumGiftScreens.SUCCESS);
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
          onPress() {
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
                    const REWARD_SELECT = tmp4(10125).PremiumGiftScreens.REWARD_SELECT;
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
          const intl2 = tmp4(1115).intl;
          stringResult1 = intl2.string(tmp4(1115).t.bt75uw);
        }
        const obj11 = { style: tmp3.previewDetails, product, title: intl3.string(tmp4(1115).t.Rh4oem), subtitle: name };
        const PremiumGiftPromotionCollectibleRewardDetails = tmp4(10219).PremiumGiftPromotionCollectibleRewardDetails;
        intl3 = tmp4(1115).intl;
        name = undefined;
        if (product != null) {
          name = product.name;
        }
        items5 = [closure_9(PremiumGiftPromotionCollectibleRewardDetails, obj11), !tmp9 && closure_9(tmp4(9713).PencilIcon, { size: "sm" })];
        !(null != claimableRewards && 1 === claimableRewards.length) && closure_9(tmp4(9713).PencilIcon, { size: "sm" });
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
    tmp4Result8 = tmp4(10208);
    tmp23Result = tmp23(tmpResult4, obj12);
  }
};
