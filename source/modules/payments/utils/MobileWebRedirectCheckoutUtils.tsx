// Module ID: 6497
// Function ID: 58086
// Name: checkForCustomCheckoutFlow
// Dependencies: [4114, 653, 1184, 1553, 3954, 4989, 2]
// Exports: captureMobileWebRedirectCheckoutSentryError, getCustomCheckoutFlow, getCustomCheckoutFlowForAnalytics, isMobileWebRedirectCheckoutEnabled, useGetCustomCheckoutFlow

// Module 6497 (checkForCustomCheckoutFlow)
import { CustomCheckoutFlow } from "CustomCheckoutFlow";
import ME from "ME";

let closure_4;
let closure_5;
function checkForCustomCheckoutFlow(pathname, deep_link_type, flow_type) {
  if (!pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    if (deep_link_type === constants2.MOBILE_WEB_REDIRECT_CHECKOUT) {
      let META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
    } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
    return META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
}
({ Routes: closure_4, LinkingTypes: closure_5 } = ME);
const result = require("isNonEmptyString").fileFinishedImporting("modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx");

export const MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG = "mobile_web_redirect_checkout";
export const captureMobileWebRedirectCheckoutSentryError = function captureMobileWebRedirectCheckoutSentryError(error, source, tags) {
  let obj = importDefault(1184);
  obj = {};
  obj = { app_context: "mobile_web_redirect_checkout", source };
  const merged = Object.assign(tags.tags);
  obj.tags = obj;
  obj.extra = tags.extra;
  obj.captureException(error, obj);
};
export const isMobileWebRedirectCheckoutEnabled = function isMobileWebRedirectCheckoutEnabled() {
  return require(1553) /* isMetaQuest */.isMetaQuest();
};
export const getCustomCheckoutFlowForAnalytics = function getCustomCheckoutFlowForAnalytics() {
  return require(1553) /* isMetaQuest */.isMetaQuest() ? CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT : CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
};
export const useGetCustomCheckoutFlow = function useGetCustomCheckoutFlow() {
  let pathname;
  let search;
  const _location = require(3954) /* _extends */.useLocation();
  ({ search, pathname } = _location);
  const obj = require(3954) /* _extends */;
  const parsed = require(4989) /* encode */.parse(search);
  return checkForCustomCheckoutFlow(pathname, parsed.deep_link_type, parsed.flow_type);
};
export const getCustomCheckoutFlow = function getCustomCheckoutFlow() {
  const parsed = require(4989) /* encode */.parse(window.location.search);
  return checkForCustomCheckoutFlow(window.location.pathname, parsed.deep_link_type, parsed.flow_type);
};
