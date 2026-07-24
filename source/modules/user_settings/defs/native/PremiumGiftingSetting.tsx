// Module ID: 13946
// Function ID: 106599
// Name: route
// Dependencies: [31, 653, 33, 6656, 7227, 12451, 1273, 10127, 1212, 8812, 3789, 12538, 2]

// Module 13946 (route)
import result from "result";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: require("GiftIcon").GiftIcon,
  usePredicate() {
    return require(3789) /* isPremiumGiftingSupported */.isPremiumGiftingSupported();
  },
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      let flag = !outer1_0(outer1_2[3]).getIsPaymentsBlocked();
      if (!flag) {
        outer1_1(outer1_2[4])();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumGiftingSettingTrailing() {
    let obj = require(12451) /* useEligibleActiveOutboundPromotions */;
    const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
    obj = { value: unseenOutboundPromotions.length };
    return jsx(require(1273) /* Button */.Badge, { value: unseenOutboundPromotions.length });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM_GIFTING,
  getComponent() {
    return require(12538) /* GiftingSectionTitle */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default createToggle;
