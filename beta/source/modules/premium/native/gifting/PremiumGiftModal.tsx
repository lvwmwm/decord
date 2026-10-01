// Module ID: 10125
// Function ID: 10126
// Name: PremiumGiftModal
// Dependencies: [32, 19, 1372, 21, 10126, 4836, 576, 504, 8238, 1115, 5936, 10127, 10506, 10509, 10537, 2583, 10494, 10124, 6603, 6583, 5910, 1255, 5039, 4501, 10285, 10162, 10791, 6421, 2]
// Exports: default

// Module 10125 (PremiumGiftModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10126 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let user;

let CUSTOMIZATION;
let GIFTING_BADGE;
let PLAN_SELECT;
let REWARD_SELECT;
let SUCCESS;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const jsx = Fragment.jsx;
const PremiumGiftScreens = { PLAN_SELECT: "PremiumGiftPlanSelect", REWARD_SELECT: "GiftingSKUSelect", CUSTOMIZATION: "PremiumGiftCustomization", SUCCESS: "PremiumGiftSuccess", GIFTING_BADGE: "GiftingBadgePostPurchase" };
let obj2 = { [PLAN_SELECT]: PremiumAnalyticsUtils.PaymentFlowStep.SKU_SELECT, [REWARD_SELECT]: PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT, [CUSTOMIZATION]: PremiumAnalyticsUtils.PaymentFlowStep.PLAN_SELECT, [SUCCESS]: PremiumAnalyticsUtils.PaymentFlowStep.CONFIRM, [GIFTING_BADGE]: PremiumAnalyticsUtils.PaymentFlowStep.CONFIRM };
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = PremiumGiftScreens);
let obj3 = { header: obj4 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_9 = createStyles.createStyles(obj3);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftModal.tsx");

export default function PremiumGiftModal(analyticsLocations) {
  let analyticsLoadId;
  let analyticsLocation;
  let c1;
  let c2;
  let c3;
  let c4;
  let closure_4;
  let headerCloseButton;
  let headerCloseButton1;
  let initialRoute;
  let intl;
  let intl2;
  let intl3;
  let obj6;
  let onDismiss;
  let order;
  let planInterval;
  let premiumType;
  let recipientUserId;
  let tmp19Result;
  let tmp9Result;
  let tmp9Result12;
  let tmp9Result13;
  ({ recipientUserId, premiumType, analyticsLocation } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ initialRoute, onDismiss } = analyticsLocations);
  react = undefined;
  let tmp = analyticsLocations;
  let tmp2 = onDismiss;
  ({ planInterval, order } = analyticsLocations);
  const analyticsLocations2 = analyticsLocations(onDismiss[19])(analyticsLocations).analyticsLocations;
  const tmp3 = analyticsLocations(onDismiss[20])(() => {
    const obj = analyticsLocation(onDismiss[21]);
    return obj.v4();
  });
  _slicedToArray = tmp3;
  let obj = react;
  let items = [tmp3, analyticsLocation, analyticsLocations];
  const memo = react.useMemo(() => {
    const obj = PremiumAnalyticsUtils;
    obj2 = { isGift: true, analyticsLoadId, analyticsLocation, analyticsLocations };
    return obj.getBasePurchaseFlowAnalyticsFields(obj2);
  }, items);
  if (initialRoute == null) {
    let PLAN_SELECT;
    if (null != premiumType) {
      PLAN_SELECT = obj.CUSTOMIZATION;
    } else {
      PLAN_SELECT = obj.PLAN_SELECT;
    }
    initialRoute = PLAN_SELECT;
  }
  const items1 = [onDismiss];
  const callback = obj.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    if (onDismiss != null) {
      onDismiss();
    }
  }, items1);
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  const tmp8 = closure_9();
  let tmp9 = analyticsLocation;
  obj2 = analyticsLocation(tmp2[7]);
  const items2 = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items2, () => {
    user = null;
    if (null != recipientUserId) {
      user = user.getUser(tmp);
    }
    return user;
  });
  const obj3 = analyticsLocation(tmp2[8]);
  const fetchWishlistAndProfileInfoForUser = obj3.useFetchWishlistAndProfileInfoForUser(recipientUserId);
  ({ wishlist: c1, userProfile: c2, wishlistId: c3, error: c4 } = fetchWishlistAndProfileInfoForUser);
  const obj4 = analyticsLocation(tmp2[8]);
  const shouldShowWishlistInDMGifting = obj4.useShouldShowWishlistInDMGifting({ isGift: true, giftRecipient: stateFromStores, isSocialLayerStorefrontEnabled: false });
  const PLAN_SELECT2 = obj.PLAN_SELECT;
  if (shouldShowWishlistInDMGifting) {
    const obj5 = {
      title: intl.string(tmp9(tmp2[9]).t["JCFN/y"]),
      headerLeft: tmp9Result.getHeaderCloseButton(callback),
      headerStyle: tmp8.header,
      render() {
          return jsx(analyticsLocations(onDismiss[11]), { shouldUseDMWishlistGiftingDesign: true, isLoadingWishlist: false });
        }
    };
    intl = tmp9(tmp2[9]).intl;
    obj6 = obj5;
    tmp9Result = tmp9(tmp2[10]);
  } else {
    obj6 = {
      title: "",
      headerShown: false,
      render() {
          let isLoadingWishlist = null != recipientUserId;
          const tmp = jsx;
          const tmp2 = analyticsLocations(onDismiss[11]);
          if (isLoadingWishlist) {
            isLoadingWishlist = !shouldShowWishlistInDMGifting;
          }
          if (isLoadingWishlist) {
            isLoadingWishlist = null == c4;
          }
          if (isLoadingWishlist) {
            let tmp7 = null == c2;
            if (!tmp7) {
              tmp7 = null != c3 && null == c1;
              const tmp9 = null != c3 && null == c1;
            }
            isLoadingWishlist = tmp7;
          }
          return tmp(tmp2, { shouldUseDMWishlistGiftingDesign: false, isLoadingWishlist });
        }
    };
  }
  const obj7 = {};
  obj7[PLAN_SELECT2] = obj6;
  const REWARD_SELECT = tmp13.REWARD_SELECT;
  const obj8 = {
    title: "",
    headerTitle() {

    },
    headerLeft: headerCloseButton,
    headerStyle: tmp8.header,
    render(arg0) {
      let allRewards;
      let claimableRewards;
      let defaultHighlightedReward;
      let onSelect;
      ({ defaultHighlightedReward, allRewards, claimableRewards, onSelect } = arg0);
      return jsx(analyticsLocations(onDismiss[12]), { defaultHighlightedReward, allRewards, claimableRewards, onSelect });
    }
  };
  if (initialRoute === obj.REWARD_SELECT) {
    const tmp9Result8 = tmp9(tmp2[10]);
    headerCloseButton = tmp9Result8.getHeaderCloseButton(callback);
  } else {
    const tmp9Result9 = tmp9(tmp2[10]);
    headerCloseButton = tmp9Result9.getHeaderBackButton();
  }
  obj7[REWARD_SELECT] = obj8;
  const CUSTOMIZATION = tmp13.CUSTOMIZATION;
  if (initialRoute === obj.CUSTOMIZATION) {
    const tmp9Result10 = tmp9(tmp2[10]);
    headerCloseButton1 = tmp9Result10.getHeaderCloseButton(callback);
  } else {
    const tmp9Result11 = tmp9(tmp2[10]);
    headerCloseButton1 = tmp9Result11.getHeaderBackButton();
  }
  obj7[CUSTOMIZATION] = {
    title: "",
    headerLeft: headerCloseButton1,
    headerStyle: tmp8.header,
    render() {
      return jsx(analyticsLocations(onDismiss[13]), {});
    }
  };
  const SUCCESS = tmp13.SUCCESS;
  const obj9 = {
    title: "",
    headerLeft: tmp9Result12.getHeaderCloseButton(callback),
    headerStyle: tmp8.header,
    render() {
      return jsx(analyticsLocations(onDismiss[14]), {});
    }
  };
  obj7[SUCCESS] = obj9;
  tmp9Result12 = tmp9(tmp2[10]);
  const GIFTING_BADGE = tmp13.GIFTING_BADGE;
  const obj10 = {
    title: intl2.string(tmp(tmp2[15]).roVAey),
    headerLeft: tmp9Result13.getHeaderCloseButton(callback),
    headerTransparent: true,
    headerStyle: { backgroundColor: "transparent", shadowColor: "transparent" },
    render(currentProgress) {
      return jsx(analyticsLocations(onDismiss[16]), {
        currentProgress: currentProgress.currentProgress,
        onSendGift() {
          let items;
          const obj = { analyticsLocations: items };
          const openGiftModal = analyticsLocation(onDismiss[17]).openGiftModal;
          items = [];
          analyticsLocation(onDismiss[17]);
          items[0] = analyticsLocations(onDismiss[18]).GIFTING_BADGE_POST_PURCHASE;
          openGiftModal(obj);
        }
      });
    }
  };
  intl2 = tmp9(tmp2[9]).intl;
  obj7[GIFTING_BADGE] = obj10;
  tmp9Result13 = tmp9(tmp2[10]);
  const tmp16 = _slicedToArray(obj.useState(obj2[initialRoute]), 2);
  react = tmp18;
  const first = tmp16[0];
  const tmp9Result14 = tmp9(tmp2[23]);
  if (tmp9Result14.isPremiumGiftingSupported()) {
    const obj11 = { value: analyticsLocations2, children: null };
    const AnalyticsLocationProvider = tmp9(tmp2[19]).AnalyticsLocationProvider;
    const NativeGiftContextProvider = tmp9(tmp2[25]).NativeGiftContextProvider;
    tmp(tmp2[26]);
    tmp19Result = tmp19(AnalyticsLocationProvider, obj11);
  } else {
    const obj15 = { title: intl3.string(tmp9(tmp2[9]).t["JCFN/y"]) };
    const tmpResult2 = tmp(tmp2[24]);
    intl3 = tmp9(tmp2[9]).intl;
    tmp19Result = tmp19(tmpResult2, obj15);
  }
  return tmp19Result;
};
export { PremiumGiftScreens };
