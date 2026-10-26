// Module ID: 6477
// Function ID: 6478
// Name: StripeActionCreators
// Dependencies: [5, 1087, 1297, 2]
// Exports: createSetupIntentForPaymentElements, createStripeSetupIntent

// Module 6477 (StripeActionCreators)
import Constants from "Constants" /* 1087 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _createStripeSetupIntent() {
  obj = _asyncToGenerator(async () => {
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    let obj4 = closure_0;
    if (closure_0 === undefined) {
      obj4 = {};
    }
    await "Reflect";
    const HTTP = closure_130_0(closure_130_1[2]).HTTP;
    const obj6 = { url: closure_130_3.BILLING_STRIPE_SETUP_INTENT_SECRET, oldFormErrors: true, rejectWithError: true };
    const post = HTTP.post;
    const merged = Object.assign(obj4);
    await post(obj6);
    return arg1.body;
  });
  return obj(...arguments);
};
obj = function _createSetupIntentForPaymentElements() {
  obj = _asyncToGenerator(async () => {
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    let obj4 = closure_0;
    if (closure_0 === undefined) {
      obj4 = {};
    }
    await "Reflect";
    const HTTP = closure_130_0(closure_130_1[2]).HTTP;
    const obj6 = { url: closure_130_3.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS, oldFormErrors: true, rejectWithError: true, failImmediatelyWhenRateLimited: true };
    const post = HTTP.post;
    const merged = Object.assign(obj4);
    await post(obj6);
    return arg1.body;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/billing/actions/StripeActionCreators.tsx");

export const createStripeSetupIntent = function createStripeSetupIntent() {
  return obj(...arguments);
};
export const createSetupIntentForPaymentElements = function createSetupIntentForPaymentElements() {
  return obj(...arguments);
};
