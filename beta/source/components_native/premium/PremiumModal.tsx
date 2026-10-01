// Module ID: 6832
// Function ID: 6833
// Name: PremiumModal
// Dependencies: [19, 1074, 21, 1115, 5936, 6833, 13036, 13039, 13081, 13095, 6583, 6421, 2]
// Exports: default

// Module 6832 (PremiumModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 6833 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13081 */;
import UserSettingsPremiumGiftingDefault from "UserSettingsPremiumGifting" /* 13095 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("components_native/premium/PremiumModal.tsx");

export default function PremiumModal(arg0) {
  let Navigator;
  let activitySessionId;
  let analyticsLocation;
  let analyticsLocations;
  let applicationId;
  let channelId;
  let giftRecipientId;
  let guildId;
  let initialRoute;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isBoostPurchaseFlow;
  let obj11;
  let obj2;
  let obj3;
  let obj5;
  let obj8;
  let onBack;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planId;
  let predicate;
  let premiumFeatureCardOrder;
  let showCurrentPlan;
  ({ initialRoute, onClose } = arg0);
  ({ applicationId, analyticsLocation, analyticsLocations, onBack, giftRecipientId, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss } = arg0);
  const analyticsLocations2 = onClose(onBack[10])(analyticsLocations).analyticsLocations;
  if (initialRoute == null) {
    let tmp2 = giftRecipientId;
    initialRoute = giftRecipientId.PREMIUM;
  }
  let obj = { value: analyticsLocations2, children: planId(Navigator, obj2) };
  const AnalyticsLocationProvider = analyticsLocation(tmp[10]).AnalyticsLocationProvider;
  obj2 = { screens: obj3, initialRouteName: initialRoute };
  obj3 = {};
  const obj4 = {
    title: intl.string(analyticsLocation(onBack[3]).t.lpNrPu),
    headerLeft: obj5.getHeaderCloseButton(onClose),
    render() {
      return jsx(UserSettingsPremiumDefault, { applicationId, onClose, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation: true });
    }
  };
  Navigator = analyticsLocation(tmp[11]).Navigator;
  const PREMIUM = giftRecipientId.PREMIUM;
  intl = analyticsLocation(tmp[3]).intl;
  obj3[PREMIUM] = obj4;
  obj5 = analyticsLocation(onBack[4]);
  const PREMIUM_MANAGE_PLAN = giftRecipientId.PREMIUM_MANAGE_PLAN;
  const obj6 = {
    title: intl2.string(analyticsLocation(onBack[3]).t["8jmdON"]),
    render() {
      return planId(onClose(onBack[6]), {});
    }
  };
  intl2 = analyticsLocation(tmp[3]).intl;
  obj3[PREMIUM_MANAGE_PLAN] = obj6;
  const GUILD_BOOSTING = giftRecipientId.GUILD_BOOSTING;
  const obj7 = {
    title: intl3.string(analyticsLocation(onBack[3]).t["+CbP2v"]),
    headerLeft: obj8.getHeaderCloseButton(onClose),
    render() {
      return planId(onClose(onBack[7]), {});
    }
  };
  intl3 = analyticsLocation(tmp[3]).intl;
  obj3[GUILD_BOOSTING] = obj7;
  obj8 = analyticsLocation(onBack[4]);
  const PREMIUM_PLAN_SELECT = giftRecipientId.PREMIUM_PLAN_SELECT;
  const obj9 = {
    title: intl4.string(analyticsLocation(onBack[3]).t.u95Dt4),
    headerLeft(canGoBack) {
      let tmp2;
      canGoBack = canGoBack.canGoBack;
      const obj = NavigatorHeader;
      if (canGoBack) {
        tmp2 = obj.getHeaderBackButton(onBack)(canGoBack);
      } else {
        tmp2 = obj.getHeaderCloseButton(onClose)(canGoBack);
      }
      return tmp2;
    },
    initialParams: { predicate, showCurrentPlan, isBoostPurchaseFlow },
    render(arg0) {
      let isBoostPurchaseFlow;
      let predicate;
      let showCurrentPlan;
      ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
      return jsx(PremiumPlanSelectDefault, { analyticsLocation, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, guildId });
    }
  };
  intl4 = analyticsLocation(tmp[3]).intl;
  obj3[PREMIUM_PLAN_SELECT] = obj9;
  const PREMIUM_GIFTING = giftRecipientId.PREMIUM_GIFTING;
  const obj10 = {
    title: intl5.string(analyticsLocation(onBack[3]).t.Oba8Sh),
    headerLeft: obj11.getHeaderCloseButton(onClose),
    render() {
      return jsx(UserSettingsPremiumGiftingDefault, { recipientUserId: giftRecipientId, analyticsLocation });
    }
  };
  intl5 = analyticsLocation(tmp[3]).intl;
  obj3[PREMIUM_GIFTING] = obj10;
  obj11 = analyticsLocation(onBack[4]);
  return planId(AnalyticsLocationProvider, obj);
};
export const PREMIUM_KEY = "PREMIUM_KEY";
