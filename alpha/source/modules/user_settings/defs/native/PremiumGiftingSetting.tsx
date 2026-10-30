// Module ID: 16846
// Function ID: 16847
// Name: PremiumGiftingSetting
// Dependencies: [19, 1072, 21, 7595, 11337, 9605, 1188, 11505, 1114, 13315, 2060, 15402, 2]

// Module 16846 (PremiumGiftingSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2060 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7595 */;
import PromotionsHooks from "PromotionsHooks" /* 9605 */;
import GiftIcon from "GiftIcon" /* 13315 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
