// Module ID: 15269
// Function ID: 15270
// Name: PremiumGiftingSetting
// Dependencies: [19, 1078, 21, 558, 568, 7693, 11601, 13858, 1181, 11630, 1119, 11366, 4463, 13857, 2]

// Module 15269 (PremiumGiftingSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4463 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7693 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11601 */;
import PromotionsHooks from "PromotionsHooks" /* 13858 */;
import noop from "module_19" /* 19 */;

const native = tmp(1181);
require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        openBlockedPaymentsCountryActionSheetDefault();
        flag = false;
      }
      return flag;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useCallback(() => {
  const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
  let flag = !isPaymentsBlocked;
  if (isPaymentsBlocked) {
    openBlockedPaymentsCountryActionSheetDefault();
    flag = false;
  }
  return flag;
}, []));
const SettingBuilders = fn(11630);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
  if (cResult[0] !== unseenOutboundPromotions.length) {
    const obj3 = { value: unseenOutboundPromotions.length };
    const tmp6 = jsx(native.Badge, { value: unseenOutboundPromotions.length });
    cResult[0] = unseenOutboundPromotions.length;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
  return jsx(native.Badge, { value: unseenOutboundPromotions.length });
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: fn(11366).GiftIcon,
  usePredicate() {
    return BillingPlatformUtils.isPremiumGiftingSupported();
  },
  usePreNavigationAction: tmp2,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
    if (cResult[0] !== unseenOutboundPromotions.length) {
      const obj3 = { value: unseenOutboundPromotions.length };
      const tmp6 = jsx(native.Badge, { value: unseenOutboundPromotions.length });
      cResult[0] = unseenOutboundPromotions.length;
      cResult[1] = tmp6;
      let tmp4 = tmp6;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }) : (() => {
    const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
    return jsx(native.Badge, { value: unseenOutboundPromotions.length });
  }),
  unsearchable: true,
  screen: {
    route: fn(1078).UserSettingsSections.PREMIUM_GIFTING,
    getComponent() {
      return require("UserSettingsPremiumGifting").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default route;
