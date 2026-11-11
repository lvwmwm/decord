// Module ID: 17404
// Function ID: 17405
// Name: PremiumGiftingSetting
// Dependencies: [19, 1072, 21, 9519, 9722, 10443, 1187, 12317, 1113, 11757, 2183, 15320, 2]

// Module 17404 (PremiumGiftingSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2183 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 9519 */;
import PromotionsHooks from "PromotionsHooks" /* 10443 */;
import GiftIcon from "GiftIcon" /* 11757 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: GiftIcon.GiftIcon,
  usePredicate() {
    const obj = BillingPlatformUtils;
    return obj.isPremiumGiftingSupported();
  },
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return react.useCallback(() => {
      const obj = BlockedPaymentsCountryExperiment;
      const isPaymentsBlocked = obj.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      const tmp = dependencyMap;
      if (isPaymentsBlocked) {
        require("openBlockedPaymentsCountryActionSheet")();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumGiftingSettingTrailing() {
    const obj = PromotionsHooks;
    const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
    return jsx(native.Badge, { value: unseenOutboundPromotions.length });
  },
  screen: {
    route: UserSettingsSections.PREMIUM_GIFTING,
    getComponent() {
      return require("UserSettingsPremiumGifting").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default route;
