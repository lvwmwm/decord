// Module ID: 4452
// Function ID: 39241
// Name: _createStripeSetupIntent
// Dependencies: []
// Exports: createSetupIntentForPaymentElements, createStripeSetupIntent

// Module 4452 (_createStripeSetupIntent)
async function _createStripeSetupIntent() {
  const fn = function*(sendMessageOptionsForReply) {
    let obj = sendMessageOptionsForReply;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = callback(closure_1[2]).HTTP;
    obj = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: constants.BILLING_STRIPE_SETUP_INTENT_SECRET };
    const merged = Object.assign(obj);
    return yield HTTP.post(obj).body;
  };
  fn.next();
  return fn;
}
async function _createSetupIntentForPaymentElements() {
  const fn = function*(sendMessageOptionsForReply) {
    let obj = sendMessageOptionsForReply;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = callback(closure_1[2]).HTTP;
    obj = { disabled: true, accessibilityHint: true, legacyCompat_selected: true, legacyCompat_onPress: true, url: constants.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS };
    const merged = Object.assign(obj);
    return yield HTTP.post(obj).body;
  };
  fn.next();
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/billing/actions/StripeActionCreators.tsx");

export const createStripeSetupIntent = function createStripeSetupIntent() {
  return _createStripeSetupIntent(...arguments);
};
export const createSetupIntentForPaymentElements = function createSetupIntentForPaymentElements() {
  return _createSetupIntentForPaymentElements(...arguments);
};
