// Module ID: 6649
// Function ID: 51063
// Name: getScreens
// Dependencies: [31, 653, 33, 1212, 5087, 6650, 12427, 12430, 12472, 12485, 5464, 5519, 2]
// Exports: default

// Module 6649 (getScreens)
import "result";
import { UserSettingsSections } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function getScreens(arg0) {
  let UserSettingsSections;
  let closure_10;
  let closure_11;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let getScreens;
  let isBoostPurchaseFlow;
  let jsx;
  let onClose;
  let predicate;
  let require;
  let showCurrentPlan;
  ({ analyticsLocation: require, onClose } = arg0);
  ({ onBack: dependencyMap, giftRecipientId: UserSettingsSections, planId: jsx, applicationId: getScreens, activitySessionId: closure_6, channelId: closure_7, guildId: closure_8, premiumFeatureCardOrder: closure_9, onPaymentSuccess: closure_10, onPaymentDismiss: closure_11 } = arg0);
  let obj = {};
  obj = {};
  ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.lpNrPu);
  let obj2 = require(5087) /* HeaderBackImage */;
  obj.headerLeft = obj2.getHeaderCloseButton(onClose);
  obj.render = function render() {
    return outer1_4(onClose(outer1_2[5]), { applicationId: closure_5, onClose, activitySessionId: closure_6, channelId: closure_7, guildId: closure_8, premiumFeatureCardOrder: closure_9, onPaymentSuccess: closure_10, onPaymentDismiss: closure_11, isFullScreenPresentation: true });
  };
  obj[UserSettingsSections.PREMIUM] = obj;
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl2.string(require(1212) /* getSystemLocale */.t["8jmdON"]);
  obj.render = function render() {
    return outer1_4(onClose(outer1_2[6]), {});
  };
  obj[UserSettingsSections.PREMIUM_MANAGE_PLAN] = obj;
  const obj1 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl3.string(require(1212) /* getSystemLocale */.t["+CbP2v"]);
  obj1.headerLeft = require(5087) /* HeaderBackImage */.getHeaderCloseButton(onClose);
  obj1.render = function render() {
    return outer1_4(onClose(outer1_2[7]), {});
  };
  obj[UserSettingsSections.GUILD_BOOSTING] = obj1;
  obj2 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj2.title = intl4.string(require(1212) /* getSystemLocale */.t.u95Dt4);
  obj2.headerLeft = function headerLeft(canGoBack) {
    const obj = outer1_0(outer1_2[4]);
    if (canGoBack.canGoBack) {
      let tmp2 = obj.getHeaderBackButton(closure_2)(canGoBack);
    } else {
      tmp2 = obj.getHeaderCloseButton(onClose)(canGoBack);
    }
    return tmp2;
  };
  obj2.initialParams = { predicate, showCurrentPlan, isBoostPurchaseFlow };
  obj2.render = function render(arg0) {
    let isBoostPurchaseFlow;
    let predicate;
    let showCurrentPlan;
    ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
    return outer1_4(onClose(outer1_2[8]), { analyticsLocation: closure_0, predicate, showCurrentPlan, isBoostPurchaseFlow, planId: closure_4, applicationId: closure_5, guildId: closure_8 });
  };
  obj[UserSettingsSections.PREMIUM_PLAN_SELECT] = obj2;
  const obj3 = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj3.title = intl5.string(require(1212) /* getSystemLocale */.t.Oba8Sh);
  const obj6 = require(5087) /* HeaderBackImage */;
  obj3.headerLeft = require(5087) /* HeaderBackImage */.getHeaderCloseButton(onClose);
  obj3.render = function render() {
    return outer1_4(onClose(outer1_2[9]), { recipientUserId: closure_3, analyticsLocation: closure_0 });
  };
  obj[UserSettingsSections.PREMIUM_GIFTING] = obj3;
  return obj;
}
const result = require("jsxProd").fileFinishedImporting("components_native/premium/PremiumModal.tsx");

export default function PremiumModal(initialRoute) {
  let activitySessionId;
  let analyticsLocation;
  let analyticsLocations;
  let applicationId;
  let channelId;
  let giftRecipientId;
  let guildId;
  let isBoostPurchaseFlow;
  let onBack;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planId;
  let predicate;
  let premiumFeatureCardOrder;
  let showCurrentPlan;
  let PREMIUM = initialRoute.initialRoute;
  ({ applicationId, analyticsLocation, analyticsLocations, onClose, onBack, giftRecipientId, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss } = initialRoute);
  if (null == PREMIUM) {
    PREMIUM = UserSettingsSections.PREMIUM;
  }
  let obj = { value: importDefault(5464)(analyticsLocations).analyticsLocations };
  obj = { screens: getScreens({ analyticsLocation, onClose, onBack, predicate, giftRecipientId, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss }), initialRouteName: PREMIUM };
  obj.children = jsx(require(5519) /* NavigationStack */.Navigator, { screens: getScreens({ analyticsLocation, onClose, onBack, predicate, giftRecipientId, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss }), initialRouteName: PREMIUM });
  return jsx(require(5464) /* mergeLocations */.AnalyticsLocationProvider, { screens: getScreens({ analyticsLocation, onClose, onBack, predicate, giftRecipientId, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss }), initialRouteName: PREMIUM });
};
export const PREMIUM_KEY = "PREMIUM_KEY";
