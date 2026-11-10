// Module ID: 7589
// Function ID: 7590
// Name: MobileWebRedirectCheckoutUtils
// Dependencies: [5747, 1072, 1242, 1622, 5051, 6793, 2]
// Exports: captureMobileWebRedirectCheckoutSentryError, getCustomCheckoutFlow, getCustomCheckoutFlowForAnalytics, isMobileWebRedirectCheckoutEnabled, useGetCustomCheckoutFlow

// Module 7589 (MobileWebRedirectCheckoutUtils)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import BrowserRouter from "BrowserRouter" /* 5051 */;
import PaymentConstants from "PaymentConstants" /* 5747 */;
import _mod6793 from "module_6793" /* 6793 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
({ Routes: closure_4, LinkingTypes: hasOwnProperty } = Constants);
const mobile_web_redirect_checkout = "mobile_web_redirect_checkout";
const result = size.fileFinishedImporting("modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx");

export const MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG = "mobile_web_redirect_checkout";
export function captureMobileWebRedirectCheckoutSentryError(error, source, tags) {
  let obj2;
  const obj = { tags: obj2, extra: tags.extra };
  const captureException = SentryUtilsDefault.captureException;
  obj2 = { app_context: mobile_web_redirect_checkout, source };
  SentryUtilsDefault;
  const merged = Object.assign(tags.tags);
  captureException(error, obj);
}
export function isMobileWebRedirectCheckoutEnabled() {
  const obj = MetaQuestUtils;
  return obj.isMetaQuest();
}
export function getCustomCheckoutFlowForAnalytics() {
  const obj = MetaQuestUtils;
  return obj.isMetaQuest() ? CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT : CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
}
export function useGetCustomCheckoutFlow() {
  let deep_link_type;
  let flow_type;
  let pathname;
  let search;
  const obj = BrowserRouter;
  const _location = obj.useLocation();
  ({ pathname, search } = _location);
  const obj2 = _mod6793;
  const parsed = obj2.parse(search);
  ({ deep_link_type, flow_type } = parsed);
  let tmp3;
  if (!pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    let META_QUEST_WEB_REDIRECT_CHECKOUT;
    if (deep_link_type === hasOwnProperty.MOBILE_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
    } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
    tmp3 = META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  return tmp3;
}
export function getCustomCheckoutFlow() {
  let deep_link_type;
  let flow_type;
  const obj = _mod6793;
  const parsed = obj.parse(window.location.search);
  ({ deep_link_type, flow_type } = parsed);
  let tmp2;
  if (!pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    let META_QUEST_WEB_REDIRECT_CHECKOUT;
    if (deep_link_type === hasOwnProperty.MOBILE_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
    } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
    tmp2 = META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  return tmp2;
}
