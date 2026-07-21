// Module ID: 6639
// Function ID: 50982
// Name: checkForCustomCheckoutFlow
// Dependencies: [4294967295, 0, 0, 0, 0, 0]
// Exports: captureMobileWebRedirectCheckoutSentryError, getCustomCheckoutFlow, getCustomCheckoutFlowForAnalytics, isMobileWebRedirectCheckoutEnabled, useGetCustomCheckoutFlow

// Module 6639 (checkForCustomCheckoutFlow)
import result from "result";

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
const CustomCheckoutFlow = require(dependencyMap[0]).CustomCheckoutFlow;
({ Routes: closure_4, LinkingTypes: closure_5 } = result);
const _module1 = require(dependencyMap[6]);
result = _module1.fileFinishedImporting("modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx");

export const MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG = "mobile_web_redirect_checkout";
export const captureMobileWebRedirectCheckoutSentryError = function captureMobileWebRedirectCheckoutSentryError(error, source, tags) {
  let obj = importDefault(dependencyMap[2]);
  obj = {};
  obj = { app_context: "mobile_web_redirect_checkout", source };
  const merged = Object.assign(tags.tags);
  obj.tags = obj;
  obj.extra = tags.extra;
  obj.captureException(error, obj);
};
export const isMobileWebRedirectCheckoutEnabled = function isMobileWebRedirectCheckoutEnabled() {
  return require(dependencyMap[3]).isMetaQuest();
};
export const getCustomCheckoutFlowForAnalytics = function getCustomCheckoutFlowForAnalytics() {
  return require(dependencyMap[3]).isMetaQuest() ? CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT : CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
};
export const useGetCustomCheckoutFlow = function useGetCustomCheckoutFlow() {
  let pathname;
  let search;
  const _location = require(dependencyMap[4]).useLocation();
  ({ search, pathname } = _location);
  const obj = require(dependencyMap[4]);
  const parsed = require(dependencyMap[5]).parse(search);
  return checkForCustomCheckoutFlow(pathname, parsed.deep_link_type, parsed.flow_type);
};
export const getCustomCheckoutFlow = function getCustomCheckoutFlow() {
  const parsed = require(dependencyMap[5]).parse(window.location.search);
  return checkForCustomCheckoutFlow(window.location.pathname, parsed.deep_link_type, parsed.flow_type);
};
