// Module ID: 13765
// Function ID: 104041
// Name: route
// Dependencies: []

// Module 13765 (route)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.jcSP+g);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[9]).GiftIcon,
  usePredicate() {
    return arg1(dependencyMap[10]).isPremiumGiftingSupported();
  },
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      let flag = !callback(closure_2[3]).getIsPaymentsBlocked();
      if (!flag) {
        callback2(closure_2[4])();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumGiftingSettingTrailing() {
    let obj = arg1(dependencyMap[5]);
    const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
    obj = { value: unseenOutboundPromotions.length };
    return jsx(arg1(dependencyMap[6]).Badge, obj);
  },
  unsearchable: true,
  screen: obj
};
obj = {
  route: arg1(dependencyMap[1]).UserSettingsSections.PREMIUM_GIFTING,
  getComponent() {
    return arg1(dependencyMap[11]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default route;
