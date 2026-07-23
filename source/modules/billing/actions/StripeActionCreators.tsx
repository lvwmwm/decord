// Module ID: 4456
// Function ID: 39281
// Name: _createStripeSetupIntent
// Dependencies: [5, 653, 507, 2]
// Exports: createSetupIntentForPaymentElements, createStripeSetupIntent

// Module 4456 (_createStripeSetupIntent)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
async function _createStripeSetupIntent() {
  let iter = (function*(sendMessageOptionsForReply) {
    let obj = sendMessageOptionsForReply;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = outer2_0(outer2_1[2]).HTTP;
    obj = { url: outer2_3.BILLING_STRIPE_SETUP_INTENT_SECRET, oldFormErrors: true, rejectWithError: true };
    const merged = Object.assign(obj);
    return yield HTTP.post(obj).body;
  })();
  iter.next();
  return iter;
}
async function _createSetupIntentForPaymentElements() {
  let iter = (function*(sendMessageOptionsForReply) {
    let obj = sendMessageOptionsForReply;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = outer2_0(outer2_1[2]).HTTP;
    obj = { url: outer2_3.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS, oldFormErrors: true, rejectWithError: true, failImmediatelyWhenRateLimited: true };
    const merged = Object.assign(obj);
    return yield HTTP.post(obj).body;
  })();
  iter.next();
  return iter;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/billing/actions/StripeActionCreators.tsx");

export const createStripeSetupIntent = function createStripeSetupIntent() {
  return _createStripeSetupIntent(...arguments);
};
export const createSetupIntentForPaymentElements = function createSetupIntentForPaymentElements() {
  return _createSetupIntentForPaymentElements(...arguments);
};
