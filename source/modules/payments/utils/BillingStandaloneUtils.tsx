// Module ID: 6645
// Function ID: 51040
// Name: goToBillingStandalonePageWithHandoff
// Dependencies: [653, 1443, 491, 507, 2]
// Exports: goToStandalonePremiumCheckoutWeb

// Module 6645 (goToBillingStandalonePageWithHandoff)
import ME from "ME";

let closure_3;
let closure_4;
function goToBillingStandalonePageWithHandoff(Routes, arg1, arg2) {
  const _require = Routes;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let obj = importDefault(1443);
  const uRL = new URL(obj.makeUrl(closure_4.BILLING_LOGIN_HANDOFF, false));
  const v4Result = _require(491).v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", Routes);
  const HTTP = _require(507).HTTP;
  obj = { url: uRL.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  const obj2 = _require(491);
  return HTTP.post(obj).then((arg0) => callback(arg0, uRL), (arg0) => callback2(arg0, closure_0));
}
function goToStandalonePremiumCheckout(planId, arg1, arg2) {
  return goToBillingStandalonePageWithHandoff(closure_4.BILLING_STANDALONE_CHECKOUT_PAGE(planId.planId, planId.isGift, planId.loadId, planId.paymentMethodType, planId.deepLinkType, planId.usePresetOffer, planId.flowType), arg1, arg2);
}
({ Endpoints: closure_3, Routes: closure_4 } = ME);
const result = require("v1").fileFinishedImporting("modules/payments/utils/BillingStandaloneUtils.tsx");

export { goToBillingStandalonePageWithHandoff };
export { goToStandalonePremiumCheckout };
export const goToStandalonePremiumCheckoutWeb = function goToStandalonePremiumCheckoutWeb(planId) {
  return goToStandalonePremiumCheckout(planId, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    window.open(searchParams.href);
  }, arg1);
};
