// Module ID: 14817
// Function ID: 14818
// Name: PremiumGiftingSetting
// Dependencies: [19, 1085, 21, 558, 576, 6936, 11105, 13381, 1188, 11142, 1126, 10779, 4547, 13380, 2]

// Module 14817 (PremiumGiftingSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4547 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 6936 */;
import GiftIcon from "GiftIcon" /* 10779 */;
import PromotionsHooks from "PromotionsHooks" /* 13381 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const native = tmp(1188);
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => react.useCallback(() => {
  const obj = BlockedPaymentsCountryExperiment;
  const isPaymentsBlocked = obj.getIsPaymentsBlocked();
  let flag = !isPaymentsBlocked;
  const tmp = dependencyMap;
  if (isPaymentsBlocked) {
    require("openBlockedPaymentsCountryActionSheet")();
    flag = false;
  }
  return flag;
}, []));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
