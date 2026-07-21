// Module ID: 6640
// Function ID: 50981
// Name: goToBillingStandalonePageWithHandoff
// Dependencies: []
// Exports: goToStandalonePremiumCheckoutWeb

// Module 6640 (goToBillingStandalonePageWithHandoff)
function goToBillingStandalonePageWithHandoff(Routes, arg1, arg2) {
  const require = Routes;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let obj = importDefault(dependencyMap[1]);
  const uRL = new URL(obj.makeUrl(closure_4.BILLING_LOGIN_HANDOFF, false));
  const v4Result = require(dependencyMap[2]).v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", Routes);
  const HTTP = require(dependencyMap[3]).HTTP;
  obj = { url: uRL.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  const obj2 = require(dependencyMap[2]);
  return HTTP.post(obj).then((arg0) => arg1(arg0, uRL), (arg0) => arg2(arg0, arg0));
}
function goToStandalonePremiumCheckout(planId, arg1, arg2) {
  return goToBillingStandalonePageWithHandoff(closure_4.BILLING_STANDALONE_CHECKOUT_PAGE(planId.planId, planId.isGift, planId.loadId, planId.paymentMethodType, planId.deepLinkType, planId.usePresetOffer, planId.flowType), arg1, arg2);
}
const _module = require(dependencyMap[0]);
({ Endpoints: closure_3, Routes: closure_4 } = _module);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/payments/utils/BillingStandaloneUtils.tsx");

export { goToBillingStandalonePageWithHandoff };
export { goToStandalonePremiumCheckout };
export const goToStandalonePremiumCheckoutWeb = function goToStandalonePremiumCheckoutWeb(planId) {
  return goToStandalonePremiumCheckout(planId, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    window.open(searchParams.href);
  }, arg1);
};
