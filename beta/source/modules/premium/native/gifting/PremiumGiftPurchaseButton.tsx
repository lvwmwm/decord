// Module ID: 13947
// Function ID: 13948
// Name: PremiumGiftPurchaseButton
// Dependencies: [19, 17, 8137, 9143, 1071, 21, 4913, 575, 5488, 1500, 9468, 9287, 504, 9147, 9496, 8070, 9208, 9466, 11923, 1112, 9505, 9507, 2888, 11247, 9509, 9482, 7539, 5504, 2187, 5511, 5098, 2]
// Exports: default

// Module 13947 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import ChatInputUtils from "ChatInputUtils" /* 5098 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5488 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 9208 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8137 */;
import PromotionsStore from "PromotionsStore" /* 9143 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, marketingComponentBySurface;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let tmp;
const HelpdeskUtilsDefault = tmp(2187);
const _modDef2888 = tmp(2888);
const AnalyticsLocationDefault = tmp(7539);
const useShouldShowGiftingPromotionDecoDefault = tmp(9496);
const PremiumGiftPromotionDetailsDefault = tmp(9507);
const GiftingBadgeProgressBannerDefault = tmp(9509);
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
    navigation.navigate(defaultSelection(c2[17]).PremiumGiftScreens.CUSTOMIZATION);
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
  let obj = defaultSelection(1500);
  importDefault = obj.useNavigation();
  let obj2 = defaultSelection(9468);
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  const obj3 = defaultSelection(9287);
  const canPurchaseIAP = obj3.useCanPurchaseIAP(productId);
  let items = [c7];
  const obj4 = defaultSelection(504);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    marketingComponentBySurface = marketingComponentBySurface.getMarketingComponentBySurface(defaultSelection(c2[13]).MarketingSurfaceType.GIFT_CUSTOMIZATION_BANNER);
    let surface;
    if (marketingComponentBySurface != null) {
      surface = marketingComponentBySurface.surface;
    }
    if (surface == null) {
      surface = null;
    }
    return surface;
  });
  HelpdeskArticles = tmp8;
  let closure_9 = tmp9;
  const tmp10 = useShouldShowGiftingPromotionDecoDefault();
  let closure_10 = tmp11;
  let items1 = [setSelectedGiftingPromotionReward];
  const tmp4Result = tmp4(504);
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items1, () => {
    const obj = { nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(c2[15]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(c2[15]).BadgeId.GIFTING) };
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
  const tmp4Result4 = tmp4(11923);
  const product = tmp4Result4.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  const tmp14 = null != product && product.items.length > 0;
  const intl = tmp4(1112).intl;
  const string = intl.string;
  const t = tmp4(1112).t;
  if (tmp10 && null == selectedGiftingPromotionReward) {
    stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str = "active";
  if (tmp10 && null == selectedGiftingPromotionReward) {
    str = "primary";
  }
  tmp4(9505);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp10 && null == selectedGiftingPromotionReward) {
    if (null != claimableRewards && claimableRewards.length > 0) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp17, title: intl4.string(_modDef2888["7yaXr8"]), subtitle: intl5.string(_modDef2888.QojGXK) };
      const tmpResult = PremiumGiftPromotionDetailsDefault;
      intl4 = tmp4(1112).intl;
      intl5 = tmp4(1112).intl;
      tmp21Result = closure_9(tmpResult, obj6);
    }
    const items3 = [tmp21Result, , ];
    let tmp30 = !tmp11;
    if (tmp30) {
      const obj7 = { variant: "body-sm/normal", children: format(hYoGUM, obj8) };
      const Text = tmp4(5504).Text;
      const intl6 = tmp4(1112).intl;
      format = intl6.format;
      obj8 = { paidURL: tmpResult3.getArticleURL(HelpdeskArticles.PAID_TERMS) };
      hYoGUM = tmp4(1112).t.hYoGUM;
      tmpResult3 = HelpdeskUtilsDefault;
      tmp30 = closure_9(Text, obj7);
    }
    items3[1] = tmp30;
    const obj9 = { loading: isPurchasing, variant: str, text: stringResult, disabled: tmp34, onPress };
    tmp34 = !canPurchaseIAP;
    const Button = tmp4(5511).Button;
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
              marketingComponentBySurface(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
              const navigate = navigation.navigate;
              const obj2 = { defaultHighlightedReward: defaultSelection, allRewards: items, claimableRewards: items1, onSelect };
              items = c3;
              const REWARD_SELECT = tmp(9466).PremiumGiftScreens.REWARD_SELECT;
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
          navigation.navigate(defaultSelection(c2[17]).PremiumGiftScreens.SUCCESS);
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
                    marketingComponentBySurface(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
                    const tmp4 = require;
                    if (null == tmp) {
                      tmp = defaultSelection;
                    }
                    const navigate = navigation.navigate;
                    const obj = { defaultHighlightedReward: tmp, allRewards: items, claimableRewards: items1, onSelect };
                    items = c3;
                    const REWARD_SELECT = tmp4(9466).PremiumGiftScreens.REWARD_SELECT;
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
          const intl2 = tmp4(1112).intl;
          const obj11 = { rewardName: product.name };
          formatToPlainStringResult = intl2.formatToPlainString(_modDef2888.qbJihM, obj11);
        }
        const obj12 = { style: tmp3.previewDetails, product, title: intl3.string(tmp4(1112).t.Rh4oem), subtitle: name };
        const PremiumGiftPromotionCollectibleRewardDetails = tmp4(9507).PremiumGiftPromotionCollectibleRewardDetails;
        intl3 = tmp4(1112).intl;
        name = undefined;
        if (product != null) {
          name = product.name;
        }
        items5 = [closure_9(PremiumGiftPromotionCollectibleRewardDetails, obj12), !tmp9 && closure_9(tmp4(11247).PencilIcon, { size: "sm" })];
        !(null != claimableRewards && 1 === claimableRewards.length) && closure_9(tmp4(11247).PencilIcon, { size: "sm" });
        tmp21Result = tmp18(tmp23, obj10);
      }
    }
  }
  tmp21Result = null;
  if (null != nextTier) {
    const obj13 = { giftsToNextTier, nextTierName: str2, nextTierIcon: tmp4Result6.getGiftingBadgeTierIconUrl(nextTier), analyticsLocation: AnalyticsLocationDefault.PREMIUM_GIFT_CUSTOMIZATION };
    str2 = nextTier.name;
    const tmp21 = closure_9;
    const tmpResult4 = GiftingBadgeProgressBannerDefault;
    if (str2 == null) {
      str2 = "";
    }
    tmp4Result6 = tmp4(9482);
    tmp21Result = tmp21(tmpResult4, obj13);
  }
};
