// Module ID: 15078
// Function ID: 15079
// Name: PremiumGiftingSetting
// Dependencies: [19, 1085, 21, 558, 576, 7125, 10470, 13681, 1200, 11262, 1126, 11561, 4739, 13680, 2]

// Module 15078 (PremiumGiftingSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4739 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7125 */;
import GiftIcon from "GiftIcon" /* 11561 */;
import PromotionsHooks from "PromotionsHooks" /* 13681 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const native = tmp(1200);
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanNavigateToPaymentSetting() {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = BlockedPaymentsCountryExperiment;
      const isPaymentsBlocked = obj.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      const tmp = dependencyMap;
      if (isPaymentsBlocked) {
        require("openBlockedPaymentsCountryActionSheet")();
        flag = false;
      }
      return flag;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useCanNavigateToPaymentSetting() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumGiftingSettingTrailing() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = PromotionsHooks;
  const unseenOutboundPromotions = obj2.useUnseenOutboundPromotions();
  if (cResult[0] !== unseenOutboundPromotions.length) {
    const tmp6 = jsx(native.Badge, { value: unseenOutboundPromotions.length });
    cResult[0] = unseenOutboundPromotions.length;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function usePremiumGiftingSettingTrailing() {
  const obj = PromotionsHooks;
  const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
  return jsx(native.Badge, { value: unseenOutboundPromotions.length });
});
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
  usePreNavigationAction: tmp2,
  useTrailing: tmp3,
  unsearchable: true,
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
