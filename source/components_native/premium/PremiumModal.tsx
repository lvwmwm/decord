// Module ID: 6644
// Function ID: 51015
// Name: getScreens
// Dependencies: []
// Exports: default

// Module 6644 (getScreens)
function getScreens(arg0) {
  let isBoostPurchaseFlow;
  let onClose;
  let predicate;
  let showCurrentPlan;
  ({ analyticsLocation: closure_0, onClose } = arg0);
  const importDefault = onClose;
  ({ onBack: closure_2, giftRecipientId: closure_3, planId: closure_4, applicationId: closure_5, activitySessionId: closure_6, channelId: closure_7, guildId: closure_8, premiumFeatureCardOrder: closure_9, onPaymentSuccess: closure_10, onPaymentDismiss: closure_11 } = arg0);
  let obj = {};
  obj = {};
  ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.lpNrPu);
  let obj2 = arg1(dependencyMap[4]);
  obj.headerLeft = obj2.getHeaderCloseButton(onClose);
  obj.render = function render() {
    return callback2(onClose(closure_2[5]), { applicationId: closure_5, onClose, activitySessionId: closure_6, channelId: closure_7, guildId: closure_8, premiumFeatureCardOrder: closure_9, onPaymentSuccess: closure_10, onPaymentDismiss: closure_11 });
  };
  obj[UserSettingsSections.PREMIUM] = obj;
  obj = {};
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.title = intl2.string(arg1(dependencyMap[3]).t.8jmdON);
  obj.render = function render() {
    return callback2(onClose(closure_2[6]), {});
  };
  obj[UserSettingsSections.PREMIUM_MANAGE_PLAN] = obj;
  const obj1 = {};
  const intl3 = arg1(dependencyMap[3]).intl;
  obj1.title = intl3.string(arg1(dependencyMap[3]).t.+CbP2v);
  obj1.headerLeft = arg1(dependencyMap[4]).getHeaderCloseButton(onClose);
  obj1.render = function render() {
    return callback2(onClose(closure_2[7]), {});
  };
  obj[UserSettingsSections.GUILD_BOOSTING] = obj1;
  obj2 = {};
  const intl4 = arg1(dependencyMap[3]).intl;
  obj2.title = intl4.string(arg1(dependencyMap[3]).t.u95Dt4);
  obj2.headerLeft = function headerLeft(canGoBack) {
    const obj = callback(closure_2[4]);
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
    return callback2(onClose(closure_2[8]), { analyticsLocation: closure_0, predicate, showCurrentPlan, isBoostPurchaseFlow, planId: callback2, applicationId: closure_5, guildId: closure_8 });
  };
  obj[UserSettingsSections.PREMIUM_PLAN_SELECT] = obj2;
  const obj3 = {};
  const intl5 = arg1(dependencyMap[3]).intl;
  obj3.title = intl5.string(arg1(dependencyMap[3]).t.Oba8Sh);
  const obj6 = arg1(dependencyMap[4]);
  obj3.headerLeft = arg1(dependencyMap[4]).getHeaderCloseButton(onClose);
  obj3.render = function render() {
    return callback2(onClose(closure_2[9]), { recipientUserId: closure_3, analyticsLocation: closure_0 });
  };
  obj[UserSettingsSections.PREMIUM_GIFTING] = obj3;
  return obj;
}
importAll(dependencyMap[0]);
const UserSettingsSections = arg1(dependencyMap[1]).UserSettingsSections;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("components_native/premium/PremiumModal.tsx");

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
  let obj = { value: importDefault(dependencyMap[10])(analyticsLocations).analyticsLocations };
  obj = { screens: getScreens({ analyticsLocation, onClose, onBack, predicate, giftRecipientId, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss }), initialRouteName: PREMIUM };
  obj.children = jsx(arg1(dependencyMap[11]).Navigator, obj);
  return jsx(arg1(dependencyMap[10]).AnalyticsLocationProvider, obj);
};
export const PREMIUM_KEY = "PREMIUM_KEY";
