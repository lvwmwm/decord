// Module ID: 14167
// Function ID: 14168
// Name: route
// Dependencies: [19, 676, 21, 6821, 7385, 12668, 1297, 10380, 1236, 9510, 3960, 12754, 2]

// Module 14167 (route)
import noop from "noop";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: require("GiftIcon").GiftIcon,
  usePredicate() {
    return require(3960) /* isPremiumGiftingSupported */.isPremiumGiftingSupported();
  },
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      const isPaymentsBlocked = callback(table[3]).getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        callback2(table[4])();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumGiftingSettingTrailing() {
    let obj = require(12668) /* useEligibleActiveOutboundPromotions */;
    const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
    obj = { value: unseenOutboundPromotions.length };
    return jsx(require(1297) /* Button */.Badge, { value: unseenOutboundPromotions.length });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM_GIFTING,
  getComponent() {
    return require(12754) /* GiftingSectionTitle */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default createToggle;
