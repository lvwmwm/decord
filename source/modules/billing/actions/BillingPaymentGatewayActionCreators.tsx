// Module ID: 4454
// Function ID: 39118
// Name: _getClientSecret
// Dependencies: [5, 653, 482, 3, 507, 1212, 4452, 4455, 686, 44, 4456, 4457, 3798, 4029, 2]
// Exports: confirmCardPaymentSource, confirmEPS, confirmIdeal, confirmPaymentElementSource, confirmPrzelewy24, createAdyenPrepaidPaymentSource, createAdyenVaultablePaymentSource, createBraintreePaymentSource, createCardToken, createPaymentRequestPaymentSource, createPaymentSourceToken, createStripePaymentSource, paymentIntentSucceeded, submitElementsAndCreateStripePaymentMethod

// Module 4454 (_getClientSecret)
import getSystemLocale from "getSystemLocale";
import ME from "ME";
import sum from "sum";
import importDefaultResult from "timestamp";
import set from "sum";

let PaymentSourceTypes;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
async function _getClientSecret(arg0, arg1) {
  const HTTP = outer2_0(outer2_3[4]).HTTP;
  const obj = { url: outer2_5.BILLING_STRIPE_PAYMENT_INTENTS(arg0), oldFormErrors: true, rejectWithError: true };
  return yield HTTP.get(obj).body.stripe_payment_intent_client_secret;
}
function createAdyenPaymentSourceToken(type) {
  let json = null;
  if (!set.has(type.type)) {
    const obj = {};
    const value = map.get(type.type);
    let tmp5 = null;
    if (null != value) {
      tmp5 = value;
    }
    obj.type = tmp5;
    json = JSON.stringify(obj);
  }
  return json;
}
function dispatchPaymentElementsConfirmationError(error, flag, stringResult) {
  if (flag === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.khEaRI);
  }
  let obj = require(4452) /* _validatePaymentSourceBillingAddress */;
  obj = { tags: { source: "payment_elements" } };
  return obj.dispatchConfirmationError(error, flag, stringResult, obj);
}
async function _createCardToken(arg0, arg1, arg2) {
  let error;
  let token;
  if (null != arg0) {
    if (null != arg1) {
      const element = arg1.getElement(outer2_0(outer2_3[7]).CardNumberElement);
      if (null == element) {
        throw outer2_0(outer2_3[6]).dispatchConfirmationError("Unable to load card elements from Stripe");
      } else {
        ({ token, error } = yield arg0.createToken(element));
        if (null != error) {
          throw outer2_0(outer2_3[6]).dispatchConfirmationError(error);
        } else if (null == token) {
          throw outer2_0(outer2_3[6]).dispatchConfirmationError("token not available with successful stripe call");
        } else {
          return token.id;
        }
        const tmp10 = yield arg0.createToken(element);
      }
    }
  }
  throw outer2_0(outer2_3[6]).dispatchConfirmationError("Stripe or elements not loaded");
}
async function _confirmEPS(arg0, arg1, arg2, arg3, arg4) {
  let error;
  let paymentMethod;
  if (null == arg0) {
    throw outer2_0(outer2_3[6]).dispatchConfirmationError("Stripe not loaded");
  } else if (null == arg1) {
    throw outer2_0(outer2_3[6]).dispatchConfirmationError("Bank required for EPS");
  } else {
    const name = arg2.name;
    if (null == name) {
      throw outer2_0(outer2_3[6]).dispatchConfirmationError("Name required for EPS");
    } else {
      let obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      outer2_1(outer2_3[8]).dispatch(obj);
      const obj12 = outer2_1(outer2_3[8]);
      obj = { type: "eps" };
      obj = { bank: arg1 };
      obj.eps = obj;
      const obj1 = {};
      const obj2 = { line1: tmp20, line2: tmp21, city: tmp22, state: tmp23, postal_code: tmp24, country: tmp25 };
      obj1.address = obj2;
      obj1.name = name;
      obj1.email = tmp19;
      obj.billing_details = obj1;
      const obj14 = outer2_0(outer2_3[6]);
      const tmp30 = yield outer2_0(outer2_3[6]).validatePaymentSourceBillingAddress(arg2);
      ({ paymentMethod, error } = yield arg0.createPaymentMethod(obj));
      if (null != error) {
        throw outer2_0(outer2_3[6]).dispatchConfirmationError(error);
      } else if (null == paymentMethod) {
        throw outer2_0(outer2_3[6]).dispatchConfirmationError("paymentMethod not available with successful stripe call");
      } else {
        const obj5 = outer2_0(outer2_3[6]);
        const obj3 = { billingAddressToken: tmp30, analyticsLocation: arg3, bank: arg1 };
        return obj5.createPaymentSource(outer2_6.STRIPE, paymentMethod.id, arg2, obj3);
      }
      const tmp = yield arg0.createPaymentMethod(obj);
    }
  }
}
async function _confirmIdeal(arg0, arg1, arg2, arg3) {
  let error;
  let paymentMethod;
  if (null == arg0) {
    throw outer2_0(outer2_3[6]).dispatchConfirmationError("Stripe not loaded");
  } else {
    const name = arg1.name;
    if (null == name) {
      throw outer2_0(outer2_3[6]).dispatchConfirmationError("Name required for iDEAL");
    } else {
      let obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      outer2_1(outer2_3[8]).dispatch(obj);
      const obj10 = outer2_1(outer2_3[8]);
      obj = { type: "ideal", ideal: {} };
      obj = {};
      const obj1 = { line1: tmp18, line2: tmp19, city: tmp20, state: tmp21, postal_code: tmp22, country: tmp23 };
      obj.address = obj1;
      obj.name = name;
      obj.email = tmp17;
      obj.billing_details = obj;
      const obj12 = outer2_0(outer2_3[6]);
      const tmp28 = yield outer2_0(outer2_3[6]).validatePaymentSourceBillingAddress(arg1);
      ({ paymentMethod, error } = yield arg0.createPaymentMethod(obj));
      if (null != error) {
        throw outer2_0(outer2_3[6]).dispatchConfirmationError(error);
      } else if (null == paymentMethod) {
        throw outer2_0(outer2_3[6]).dispatchConfirmationError("paymentMethod not available with successful stripe call");
      } else {
        const obj4 = outer2_0(outer2_3[6]);
        const obj2 = { billingAddressToken: tmp28, analyticsLocation: arg2 };
        return obj4.createPaymentSource(outer2_6.STRIPE, paymentMethod.id, arg1, obj2);
      }
      const tmp = yield arg0.createPaymentMethod(obj);
    }
  }
}
async function _confirmPrzelewy(arg0, arg1, arg2, arg3, arg4) {
  let error;
  let paymentMethod;
  if (null == arg0) {
    throw outer2_0(outer2_3[6]).dispatchConfirmationError("Stripe not loaded");
  } else {
    const email = arg2.email;
    if (null == email) {
      throw outer2_0(outer2_3[6]).dispatchConfirmationError("Email required for Przelewy24");
    } else {
      let obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      outer2_1(outer2_3[8]).dispatch(obj);
      const obj11 = outer2_1(outer2_3[8]);
      const p24Bank = arg1.p24Bank;
      obj = { type: "p24" };
      obj = { bank: p24Bank };
      obj.p24 = obj;
      const obj1 = {};
      const obj2 = { line1: tmp19, line2: tmp20, city: tmp21, state: tmp22, postal_code: tmp23, country: tmp24 };
      obj1.address = obj2;
      obj1.name = tmp18;
      obj1.email = email;
      obj.billing_details = obj1;
      const obj13 = outer2_0(outer2_3[6]);
      const tmp29 = yield outer2_0(outer2_3[6]).validatePaymentSourceBillingAddress(arg2);
      ({ paymentMethod, error } = yield arg0.createPaymentMethod(obj));
      if (null != error) {
        throw outer2_0(outer2_3[6]).dispatchConfirmationError(error);
      } else if (null == paymentMethod) {
        throw outer2_0(outer2_3[6]).dispatchConfirmationError("paymentMethod not available with successful stripe call");
      } else {
        const obj5 = outer2_0(outer2_3[6]);
        const obj3 = { billingAddressToken: tmp29, analyticsLocation: arg3, bank: p24Bank };
        return obj5.createPaymentSource(outer2_6.STRIPE, paymentMethod.id, arg2, obj3);
      }
      const tmp2 = yield arg0.createPaymentMethod(obj);
    }
  }
}
function validateSetupIntentResponse(payment_method, error, created) {
  if (null != error) {
    throw created(error);
  } else if (null == payment_method) {
    throw created("SetupIntent not created");
  } else if (null == payment_method.payment_method) {
    throw created("setupIntent.payment_method not available with successful stripe call");
  } else {
    importDefault(44)("string" === typeof payment_method.payment_method, "setupIntent.payment_method expanded not supported");
    const obj = { setupIntent: payment_method, error };
    return obj;
  }
}
function submitElementsForPaymentElement() {
  return _submitElementsForPaymentElement(...arguments);
}
async function _submitElementsForPaymentElement(arg0, arg1) {
  if (null == arg0) {
    throw outer2_16("Stripe Elements not loaded", true);
  } else {
    const tmp = yield arg0.submit();
    outer2_11.info("Stripe Elements submit response: ", tmp);
    if (null != tmp.error) {
      outer2_11.error("Stripe Elements submit error: ", tmp.error);
      throw outer2_16(tmp.error, true);
    } else {
      return tmp;
    }
  }
}
function createStripePaymentMethodWithElements() {
  return _createStripePaymentMethodWithElements(...arguments);
}
async function _createStripePaymentMethodWithElements(arg0, arg1, arg2) {
  let error;
  let paymentMethod;
  let obj = { elements: arg1 };
  ({ paymentMethod, error } = yield arg0.createPaymentMethod(obj));
  if (null != error) {
    outer2_11.error("Stripe createPaymentMethod error: ", error);
    throw outer2_16(error, true);
  } else if (null == paymentMethod) {
    obj = { paymentMethod, error };
    outer2_11.warn("Stripe createPaymentMethod failed to return payment method: ", obj);
    throw outer2_16("paymentMethod not available with successful stripe call", true);
  } else {
    outer2_12.hasCreatedPaymentMethod = true;
    obj = { paymentMethod, error };
    return obj;
  }
  const tmp = yield arg0.createPaymentMethod(obj);
}
async function _submitElementsAndCreateStripePaymentMethod(arg0, arg1, arg2) {
  if (null == arg0) {
    throw outer2_16("Stripe not loaded", true);
  } else if (null == arg1) {
    throw outer2_16("Stripe Elements not loaded", true);
  } else {
    yield outer2_22(arg1);
    const obj = {};
    ({ paymentMethod: obj.paymentMethod, error: obj.error } = yield outer2_24(arg0, arg1));
    return obj;
  }
}
async function _confirmPaymentElementSource(arg0, arg1) {
  let iter = (function*(arg0) {
    let obj;
    let tmp4;
    let tmp9;
    const items = [...arguments];
    [obj, tmp4, , tmp9] = items;
    yield tmp;
    if (null == obj) {
      throw outer2_16("Stripe not loaded", true);
    } else if (null == tmp4) {
      throw outer2_16("Stripe Elements not loaded", true);
    } else {
      obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      outer2_1(outer2_3[8]).dispatch(obj);
      const obj8 = outer2_1(outer2_3[8]);
      const tmp75 = yield outer2_0(outer2_3[6]).validatePaymentSourceBillingAddress(tmp5);
      if (tmp6 !== outer2_10.PAYMENT_REQUEST) {
        yield outer2_22(tmp4);
      }
      if (outer2_13.has(tmp6)) {
        const current = tmp7.current;
        let tmp33;
        if (null != current) {
          tmp33 = current;
        }
        if (null != tmp33) {
          if (tmp6 === outer2_10.PAYMENT_REQUEST) {
            obj = {};
            let tmp49;
            if (null != tmp34) {
              tmp49 = tmp33;
            }
            obj.setupIntent = tmp49;
            obj.error = undefined;
            let tmp47 = obj;
          }
          const error = tmp47.error;
          let tmp51 = null != error;
          if (tmp51) {
            tmp51 = "setup_intent_unexpected_state" === error.code;
          }
          if (tmp51) {
            tmp51 = null != error.setup_intent;
          }
          if (tmp51) {
            let tmp52 = "succeeded" === error.setup_intent.status;
            if (!tmp52) {
              tmp52 = "canceled" === error.setup_intent.status;
            }
            tmp51 = tmp52;
          }
          if (tmp51) {
            if (tmp6 !== outer2_10.PAYMENT_REQUEST) {
              yield outer2_22(tmp4);
              const obj1 = { redirect: "if_required", clientSecret: yield tmp8().client_secret, elements: tmp3 };
              tmp47 = yield obj.confirmSetup(obj1);
            }
          }
          const setupIntent = outer2_21(tmp47.setupIntent, tmp47.error, (arg0) => outer3_16(arg0, true)).setupIntent;
          tmp7.current = setupIntent;
          let id = setupIntent.payment_method;
        }
        let hasCreatedPaymentMethod = tmp39;
        if (tmp6 === outer2_10.CARD) {
          hasCreatedPaymentMethod = outer2_12.hasCreatedPaymentMethod;
        }
        if (hasCreatedPaymentMethod) {
          yield outer2_24(obj, tmp4);
        }
        const obj2 = { redirect: "if_required", elements: tmp4 };
        tmp47 = yield obj.confirmSetup(obj2);
      } else {
        const paymentMethod = yield outer2_24(obj, tmp4).paymentMethod;
        id = paymentMethod.id;
        if (tmp6 === outer2_10.PIX) {
          const billing_details = paymentMethod.billing_details;
          let tax_id;
          if (null != billing_details) {
            tax_id = tmp76.tax_id;
          }
          if (null != tax_id) {
            if ("" !== tmp76.tax_id) {
              const obj3 = { taxId: billing_details.tax_id };
              const tmp10 = obj3;
            }
          }
          throw outer2_16("Missing PIX tax_id from Payment Element", true);
        }
      }
      const obj6 = outer2_0(outer2_3[6]);
      const obj4 = { billingAddressToken: tmp75, analyticsLocation: tmp9, pix: tmp10 };
      return obj6.createPaymentSource(outer2_6.STRIPE, id, tmp5, obj4);
    }
  })();
  iter.next();
  return iter;
}
async function _confirmCardPaymentSource(arg0, arg1, arg2, arg3, arg4) {
  let obj = arg0;
  if (null != arg0) {
    if (null != arg1) {
      obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      outer2_1(outer2_3[8]).dispatch(obj);
      const obj10 = outer2_1(outer2_3[8]);
      const client_secret = yield outer2_0(outer2_3[10]).createStripeSetupIntent().client_secret;
      let obj1 = outer2_0(outer2_3[6]);
      const tmp4 = yield obj1.validatePaymentSourceBillingAddress(arg2);
      let obj2 = outer2_2(outer2_3[11]);
      obj = {};
      obj1 = {};
      obj2 = { token: arg1 };
      obj1.card = obj2;
      obj1.billing_details = obj2.parseBillingAddressInfoToStripeBillingDetails(arg2);
      obj.payment_method = obj1;
      const tmp11 = yield obj.confirmCardSetup(client_secret, obj);
      const obj7 = outer2_0(outer2_3[6]);
      const obj3 = { billingAddressToken: tmp4, analyticsLocation: arg3 };
      return obj7.createPaymentSource(outer2_6.STRIPE, outer2_21(tmp11.setupIntent, tmp11.error, (error) => outer3_0(outer3_3[6]).dispatchConfirmationError(error)).setupIntent.payment_method, arg2, obj3);
    }
  }
  throw outer2_0(outer2_3[6]).dispatchConfirmationError("Stripe or token not loaded");
}
async function _createStripePaymentSource(arg0, arg1, arg2, arg3, arg4) {
  let city;
  let country;
  let error;
  let line1;
  let line2;
  let name;
  let paymentMethod;
  let postalCode;
  let state;
  if (null == arg0) {
    throw outer2_0(outer2_3[6]).dispatchConfirmationError("Stripe not loaded");
  } else {
    const obj9 = outer2_0(outer2_3[6]);
    ({ name, line1, line2, city, state, postalCode, country } = arg1);
    const value = outer2_9.get(arg2);
    outer2_1(outer2_3[9])(null != value, "unsupported payment method type");
    let obj = { type: value };
    obj = {};
    obj = { line1, line2, city, state, postal_code: postalCode, country };
    obj.address = obj;
    obj.name = name;
    obj.billing_details = obj;
    const tmp23 = yield outer2_0(outer2_3[6]).validatePaymentSourceBillingAddress(arg1);
    ({ paymentMethod, error } = yield arg0.createPaymentMethod(obj));
    if (null != error) {
      throw outer2_0(outer2_3[6]).dispatchConfirmationError(error);
    } else if (null == paymentMethod) {
      throw outer2_0(outer2_3[6]).dispatchConfirmationError("stripePaymentMethod not available with successful stripe call");
    } else {
      const obj4 = outer2_0(outer2_3[6]);
      const obj1 = { billingAddressToken: tmp23, analyticsLocation: arg3 };
      return obj4.createPaymentSource(outer2_6.STRIPE, paymentMethod.id, arg1, obj1);
    }
    const tmp7 = yield arg0.createPaymentMethod(obj);
  }
}
async function _createAdyenPrepaidPaymentSource(arg0, arg1, arg2, arg3) {
  let obj = outer2_0(outer2_3[6]);
  obj = { type: outer2_8.get(arg1) };
  const tmp = yield obj.validatePaymentSourceBillingAddress(arg0);
  obj = { billingAddressToken: tmp, analyticsLocation: arg2 };
  return outer2_0(outer2_3[6]).createPaymentSource(outer2_6.ADYEN, JSON.stringify(obj), arg0, obj);
}
async function _createAdyenVaultablePaymentSource(arg0, arg1, arg2, arg3, arg4) {
  let iter = (function*(email, type, analyticsLocation, paymentMethod) {
    let flag = arg4;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    let obj = outer2_0(outer2_3[6]);
    obj = { type: outer2_8.get(type) };
    paymentMethod = undefined;
    if (null != paymentMethod) {
      paymentMethod = paymentMethod.paymentMethod;
    }
    if (null == paymentMethod) {
      paymentMethod = {};
    }
    const merged = Object.assign(paymentMethod);
    const tmp = flag;
    const tmp3 = yield obj.validatePaymentSourceBillingAddress(email);
    const tmp5 = yield outer2_0(outer2_3[6]).popupBridgeState(type);
    const obj4 = outer2_0(outer2_3[6]);
    let str = "";
    const aPIBaseURL = outer2_0(outer2_3[4]).getAPIBaseURL();
    if (null != tmp5) {
      str = tmp5;
    }
    obj = {};
    const sum = aPIBaseURL + outer2_5.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(type, str, "success");
    const obj5 = outer2_0(outer2_3[4]);
    obj.paymentSource = yield outer2_0(outer2_3[6]).createPaymentSource(outer2_6.ADYEN, JSON.stringify(obj), email, { billingAddressToken: tmp3, analyticsLocation, returnUrl: sum }, tmp);
    obj.redirectConfirmation = false;
    return obj;
  })();
  iter.next();
  return iter;
}
function createStripePaymentSourceToken(paymentSource) {
  return _createStripePaymentSourceToken(...arguments);
}
async function _createStripePaymentSourceToken(arg0, arg1) {
  let error;
  let paymentMethod;
  let pixMetadata;
  if (outer2_7.has(arg0.type)) {
    return null;
  } else {
    let obj = outer2_2(outer2_3[11]);
    let obj1 = yield obj.getStripe();
    if (null == obj1) {
      const BillingError4 = outer2_0(outer2_3[13]).BillingError;
      const prototype4 = BillingError4.prototype;
      const billingError4 = new BillingError4("Stripe not loaded", outer2_0(outer2_3[13]).BillingError.ErrorCodes.UNKNOWN);
      throw billingError4;
    } else {
      const billingAddress = arg0.billingAddress;
      const country = billingAddress.country;
      obj = {};
      obj = {};
      obj1 = {};
      ({ line1: obj9.line1, line2: obj9.line2, city: obj9.city, state: obj9.state, postalCode: obj9.postal_code } = billingAddress);
      obj1.country = country;
      obj.address = obj1;
      obj.name = billingAddress.name;
      obj.billing_details = obj;
      const type = arg0.type;
      if (outer2_10.GIROPAY === type) {
        obj.type = "giropay";
      } else if (outer2_10.SOFORT === type) {
        obj.type = "sofort";
        const obj2 = {};
        let str8 = "";
        if (null != country) {
          str8 = country;
        }
        obj2.country = str8;
        obj.sofort = obj2;
        obj.billing_details.email = tmp42;
      } else if (outer2_10.BANCONTACT === type) {
        obj.type = "bancontact";
      } else if (outer2_10.IDEAL === type) {
        obj.type = "ideal";
        const obj3 = { bank: arg0.bank };
        obj.ideal = obj3;
      } else if (outer2_10.PRZELEWY24 === type) {
        if (null == arg0.bank) {
          const BillingError2 = outer2_0(outer2_3[13]).BillingError;
          const prototype2 = BillingError2.prototype;
          const billingError2 = new BillingError2("p24 missing bank information", outer2_0(outer2_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
          throw billingError2;
        } else {
          obj.type = "p24";
          const obj4 = { bank: arg0.bank };
          obj.p24 = obj4;
          obj.billing_details.email = arg0.email;
        }
      } else if (outer2_10.EPS === type) {
        if (null == arg0.bank) {
          const BillingError = outer2_0(outer2_3[13]).BillingError;
          const prototype = BillingError.prototype;
          const billingError = new BillingError("EPS missing bank information", outer2_0(outer2_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
          throw billingError;
        } else {
          obj.type = "eps";
          const obj5 = { bank: arg0.bank };
          obj.eps = obj5;
        }
      } else if (outer2_10.PIX === type) {
        obj.type = "pix";
        ({ email: obj7.billing_details.email, pixMetadata } = arg0);
        let taxId;
        if (null != pixMetadata) {
          taxId = pixMetadata.taxId;
        }
        obj.billing_details.tax_id = taxId;
      }
      outer2_1(outer2_3[9])(null != obj.type, "unsupported payment method type");
      ({ paymentMethod, error } = yield obj1.createPaymentMethod(obj));
      if (null == error) {
        if (null != paymentMethod) {
          return paymentMethod.id;
        }
      }
      const BillingError3 = outer2_0(outer2_3[13]).BillingError;
      let code;
      if (null != error) {
        code = error.code;
      }
      let message;
      if (null != error) {
        message = error.message;
      }
      const _HermesInternal = HermesInternal;
      const combined = "Unable to create payment source token: code: " + code + " message: " + message;
      const prototype3 = BillingError3.prototype;
      const billingError3 = new BillingError3(combined, outer2_0(outer2_3[13]).BillingError.ErrorCodes.UNKNOWN);
      throw billingError3;
    }
  }
}
async function _paymentIntentSucceeded(arg0, arg1) {
  let error;
  let paymentIntent;
  const obj2 = yield outer2_2(outer2_3[11]).getStripe();
  if (null == obj2) {
    throw outer2_0(outer2_3[6]).dispatchConfirmationError("Stripe has not loaded.");
  } else if (null == arg0) {
    throw outer2_0(outer2_3[6]).dispatchConfirmationError("payment intent id cannot be null.");
  } else {
    ({ paymentIntent, error } = yield obj2.retrievePaymentIntent(yield (function getClientSecret(arg0) {
      return outer3_14(...arguments);
    })(arg0)));
    if (null != error) {
      throw outer2_0(outer2_3[6]).dispatchConfirmationError(error);
    } else if (null == paymentIntent) {
      throw outer2_0(outer2_3[6]).dispatchConfirmationError("paymentIntent not available with successful stripe call");
    } else if (null != paymentIntent.last_payment_error) {
      const _HermesInternal = HermesInternal;
      throw outer2_0(outer2_3[6]).dispatchConfirmationError("unable to retrieve payment intent " + paymentIntent.last_payment_error);
    } else {
      return true;
    }
    const tmp = yield obj2.retrievePaymentIntent(yield (function getClientSecret(arg0) {
      return outer3_14(...arguments);
    })(arg0));
  }
  const obj = outer2_2(outer2_3[11]);
}
({ Endpoints: closure_5, PaymentGateways: closure_6, VAULTABLE_PAYMENT_SOURCES: closure_7 } = ME);
({ ADYEN_PAYMENT_SOURCES: closure_8, STRIPE_PAYMENT_SOURCES: closure_9, PaymentSourceTypes } = sum);
importDefaultResult = new importDefaultResult("BillingPaymentGatewayActionCreators.tsx");
let closure_12 = { hasCreatedPaymentMethod: false };
let items = [, ];
({ CARD: arr[0], PAYMENT_REQUEST: arr[1] } = PaymentSourceTypes);
let set = new Set(items);
let result = set.fileFinishedImporting("modules/billing/actions/BillingPaymentGatewayActionCreators.tsx");

export { createAdyenPaymentSourceToken };
export { dispatchPaymentElementsConfirmationError };
export const createCardToken = function createCardToken() {
  return _createCardToken(...arguments);
};
export const confirmEPS = function confirmEPS() {
  return _confirmEPS(...arguments);
};
export const confirmIdeal = function confirmIdeal() {
  return _confirmIdeal(...arguments);
};
export const confirmPrzelewy24 = function confirmPrzelewy24() {
  return _confirmPrzelewy(...arguments);
};
export { submitElementsForPaymentElement };
export const submitElementsAndCreateStripePaymentMethod = function submitElementsAndCreateStripePaymentMethod() {
  return _submitElementsAndCreateStripePaymentMethod(...arguments);
};
export const confirmPaymentElementSource = function confirmPaymentElementSource() {
  return _confirmPaymentElementSource(...arguments);
};
export const confirmCardPaymentSource = function confirmCardPaymentSource() {
  return _confirmCardPaymentSource(...arguments);
};
export const createPaymentRequestPaymentSource = function createPaymentRequestPaymentSource(billing_details, billingAddressInfo, analyticsLocation) {
  let token;
  let obj = importAll(4457);
  const result = obj.parseStripePaymentMethod(billing_details);
  ({ token, billingAddressInfo } = result);
  obj = { analyticsLocation };
  return require(4452) /* _validatePaymentSourceBillingAddress */.createPaymentSource(constants.STRIPE, token, billingAddressInfo, obj);
};
export const createBraintreePaymentSource = function createBraintreePaymentSource(id, billingAddressInfo, analyticsLocation) {
  let obj = require(4452) /* _validatePaymentSourceBillingAddress */;
  obj = { analyticsLocation };
  return obj.createPaymentSource(constants.BRAINTREE, id, billingAddressInfo, obj);
};
export const createStripePaymentSource = function createStripePaymentSource() {
  return _createStripePaymentSource(...arguments);
};
export const createAdyenPrepaidPaymentSource = function createAdyenPrepaidPaymentSource() {
  return _createAdyenPrepaidPaymentSource(...arguments);
};
export const createAdyenVaultablePaymentSource = function createAdyenVaultablePaymentSource() {
  return _createAdyenVaultablePaymentSource(...arguments);
};
export { createStripePaymentSourceToken };
export const createPaymentSourceToken = function createPaymentSourceToken(paymentSource) {
  if (set.has(paymentSource.type)) {
    return null;
  } else if (map.has(paymentSource.type)) {
    let tmp3 = createAdyenPaymentSourceToken(paymentSource);
  } else {
    tmp3 = createStripePaymentSourceToken(paymentSource);
  }
};
export const paymentIntentSucceeded = function paymentIntentSucceeded(arg0) {
  return _paymentIntentSucceeded(...arguments);
};
