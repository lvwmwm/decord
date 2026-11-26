// Module ID: 16306
// Function ID: 16307
// Name: PremiumGiftingSetting
// Dependencies: [19, 1071, 21, 9105, 9312, 9946, 1186, 11942, 1112, 12471, 2185, 14170, 2]

// Module 16306 (PremiumGiftingSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2185 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 9105 */;
import PromotionsHooks from "PromotionsHooks" /* 9946 */;
import GiftIcon from "GiftIcon" /* 12471 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
