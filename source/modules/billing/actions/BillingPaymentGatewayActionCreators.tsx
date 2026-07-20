// Module ID: 4446
// Function ID: 39021
// Name: _getClientSecret
// Dependencies: []
// Exports: confirmCardPaymentSource, confirmEPS, confirmIdeal, confirmPaymentElementSource, confirmPrzelewy24, createAdyenPrepaidPaymentSource, createAdyenVaultablePaymentSource, createBraintreePaymentSource, createCardToken, createPaymentRequestPaymentSource, createPaymentSourceToken, createStripePaymentSource, paymentIntentSucceeded, submitElementsAndCreateStripePaymentMethod

// Module 4446 (_getClientSecret)
let PaymentSourceTypes;
async function _getClientSecret(paymentId, arg1) {
  const HTTP = callback(closure_3[4]).HTTP;
  const obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_5.BILLING_STRIPE_PAYMENT_INTENTS(paymentId) };
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
    const intl = flag(dependencyMap[5]).intl;
    stringResult = intl.string(flag(dependencyMap[5]).t.khEaRI);
  }
  let obj = flag(dependencyMap[6]);
  obj = { tags: { source: "payment_elements" } };
  return obj.dispatchConfirmationError(error, flag, stringResult, obj);
}
async function _createCardToken(createToken, getElement, arg2) {
  let error;
  let token;
  if (null != createToken) {
    if (null != getElement) {
      const element = getElement.getElement(callback(closure_3[7]).CardNumberElement);
      if (null == element) {
        throw callback(closure_3[6]).dispatchConfirmationError("Unable to load card elements from Stripe");
      } else {
        ({ token, error } = yield createToken.createToken(element));
        if (null != error) {
          throw callback(closure_3[6]).dispatchConfirmationError(error);
        } else if (null == token) {
          throw callback(closure_3[6]).dispatchConfirmationError("token not available with successful stripe call");
        } else {
          return token.id;
        }
        const tmp10 = yield createToken.createToken(element);
      }
    }
  }
  throw callback(closure_3[6]).dispatchConfirmationError("Stripe or elements not loaded");
}
async function _confirmEPS(createPaymentMethod, bank, name, analyticsLocation, arg4) {
  let error;
  let paymentMethod;
  if (null == createPaymentMethod) {
    throw callback(closure_3[6]).dispatchConfirmationError("Stripe not loaded");
  } else if (null == bank) {
    throw callback(closure_3[6]).dispatchConfirmationError("Bank required for EPS");
  } else {
    name = name.name;
    if (null == name) {
      throw callback(closure_3[6]).dispatchConfirmationError("Name required for EPS");
    } else {
      let obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      callback2(closure_3[8]).dispatch(obj);
      const obj12 = callback2(closure_3[8]);
      obj = { type: "eps" };
      obj = { bank };
      obj.eps = obj;
      const obj1 = {};
      const obj2 = { line1: tmp20, line2: tmp21, city: tmp22, state: tmp23, postal_code: tmp24, country: tmp25 };
      obj1.address = obj2;
      obj1.name = name;
      obj1.email = tmp19;
      obj.billing_details = obj1;
      const obj14 = callback(closure_3[6]);
      const tmp30 = yield callback(closure_3[6]).validatePaymentSourceBillingAddress(name);
      ({ paymentMethod, error } = yield createPaymentMethod.createPaymentMethod(obj));
      if (null != error) {
        throw callback(closure_3[6]).dispatchConfirmationError(error);
      } else if (null == paymentMethod) {
        throw callback(closure_3[6]).dispatchConfirmationError("paymentMethod not available with successful stripe call");
      } else {
        const obj5 = callback(closure_3[6]);
        const obj3 = { billingAddressToken: tmp30, analyticsLocation, bank };
        return obj5.createPaymentSource(constants.STRIPE, paymentMethod.id, name, obj3);
      }
      const tmp = yield createPaymentMethod.createPaymentMethod(obj);
    }
  }
}
async function _confirmIdeal(createPaymentMethod, name, analyticsLocation, arg3) {
  let error;
  let paymentMethod;
  if (null == createPaymentMethod) {
    throw callback(closure_3[6]).dispatchConfirmationError("Stripe not loaded");
  } else {
    name = name.name;
    if (null == name) {
      throw callback(closure_3[6]).dispatchConfirmationError("Name required for iDEAL");
    } else {
      let obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      callback2(closure_3[8]).dispatch(obj);
      const obj10 = callback2(closure_3[8]);
      obj = { type: "ideal", ideal: {} };
      obj = {};
      const obj1 = { line1: tmp18, line2: tmp19, city: tmp20, state: tmp21, postal_code: tmp22, country: tmp23 };
      obj.address = obj1;
      obj.name = name;
      obj.email = tmp17;
      obj.billing_details = obj;
      const obj12 = callback(closure_3[6]);
      const tmp28 = yield callback(closure_3[6]).validatePaymentSourceBillingAddress(name);
      ({ paymentMethod, error } = yield createPaymentMethod.createPaymentMethod(obj));
      if (null != error) {
        throw callback(closure_3[6]).dispatchConfirmationError(error);
      } else if (null == paymentMethod) {
        throw callback(closure_3[6]).dispatchConfirmationError("paymentMethod not available with successful stripe call");
      } else {
        const obj4 = callback(closure_3[6]);
        const obj2 = { billingAddressToken: tmp28, analyticsLocation };
        return obj4.createPaymentSource(constants.STRIPE, paymentMethod.id, name, obj2);
      }
      const tmp = yield createPaymentMethod.createPaymentMethod(obj);
    }
  }
}
async function _confirmPrzelewy(createPaymentMethod, p24Bank, email, analyticsLocation, arg4) {
  let error;
  let paymentMethod;
  if (null == createPaymentMethod) {
    throw callback(closure_3[6]).dispatchConfirmationError("Stripe not loaded");
  } else {
    email = email.email;
    if (null == email) {
      throw callback(closure_3[6]).dispatchConfirmationError("Email required for Przelewy24");
    } else {
      let obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      callback2(closure_3[8]).dispatch(obj);
      const obj11 = callback2(closure_3[8]);
      p24Bank = p24Bank.p24Bank;
      obj = { type: "p24" };
      obj = { bank: p24Bank };
      obj.p24 = obj;
      const obj1 = {};
      const obj2 = { line1: tmp19, line2: tmp20, city: tmp21, state: tmp22, postal_code: tmp23, country: tmp24 };
      obj1.address = obj2;
      obj1.name = tmp18;
      obj1.email = email;
      obj.billing_details = obj1;
      const obj13 = callback(closure_3[6]);
      const tmp29 = yield callback(closure_3[6]).validatePaymentSourceBillingAddress(email);
      ({ paymentMethod, error } = yield createPaymentMethod.createPaymentMethod(obj));
      if (null != error) {
        throw callback(closure_3[6]).dispatchConfirmationError(error);
      } else if (null == paymentMethod) {
        throw callback(closure_3[6]).dispatchConfirmationError("paymentMethod not available with successful stripe call");
      } else {
        const obj5 = callback(closure_3[6]);
        const obj3 = { billingAddressToken: tmp29, analyticsLocation, bank: p24Bank };
        return obj5.createPaymentSource(constants.STRIPE, paymentMethod.id, email, obj3);
      }
      const tmp2 = yield createPaymentMethod.createPaymentMethod(obj);
    }
  }
}
function validateSetupIntentResponse(payment_method, error) {
  if (null != error) {
    throw arg2(error);
  } else if (null == payment_method) {
    throw arg2("SetupIntent not created");
  } else if (null == payment_method.payment_method) {
    throw arg2("setupIntent.payment_method not available with successful stripe call");
  } else {
    importDefault(dependencyMap[9])("string" === typeof payment_method.payment_method, "setupIntent.payment_method expanded not supported");
    const obj = { setupIntent: payment_method, error };
    return obj;
  }
}
function submitElementsForPaymentElement() {
  return _submitElementsForPaymentElement(...arguments);
}
async function _submitElementsForPaymentElement(submit, arg1) {
  if (null == submit) {
    throw callback("Stripe Elements not loaded", true);
  } else {
    const tmp = yield submit.submit();
    closure_11.info("Stripe Elements submit response: ", tmp);
    if (null != tmp.error) {
      closure_11.error("Stripe Elements submit error: ", tmp.error);
      throw callback(tmp.error, true);
    } else {
      return tmp;
    }
  }
}
function createStripePaymentMethodWithElements() {
  return _createStripePaymentMethodWithElements(...arguments);
}
async function _createStripePaymentMethodWithElements(createPaymentMethod, elements, arg2) {
  let error;
  let paymentMethod;
  let obj = { elements };
  ({ paymentMethod, error } = yield createPaymentMethod.createPaymentMethod(obj));
  if (null != error) {
    closure_11.error("Stripe createPaymentMethod error: ", error);
    throw callback(error, true);
  } else if (null == paymentMethod) {
    obj = { paymentMethod, error };
    closure_11.warn("Stripe createPaymentMethod failed to return payment method: ", obj);
    throw callback("paymentMethod not available with successful stripe call", true);
  } else {
    closure_12.hasCreatedPaymentMethod = true;
    obj = { paymentMethod, error };
    return obj;
  }
  const tmp = yield createPaymentMethod.createPaymentMethod(obj);
}
async function _submitElementsAndCreateStripePaymentMethod(arg0, arg1, arg2) {
  if (null == arg0) {
    throw callback("Stripe not loaded", true);
  } else if (null == arg1) {
    throw callback("Stripe Elements not loaded", true);
  } else {
    yield closure_22(arg1);
    const obj = {};
    ({ paymentMethod: obj.paymentMethod, error: obj.error } = yield closure_24(arg0, arg1));
    return obj;
  }
}
async function _confirmPaymentElementSource(arg0, arg1) {
  const fn = function*(arg0) {
    let obj;
    let tmp4;
    let tmp9;
    const items = [...arguments];
    [obj, tmp4, , tmp9] = items;
    yield tmp;
    if (null == obj) {
      throw callback3("Stripe not loaded", true);
    } else if (null == tmp4) {
      throw callback3("Stripe Elements not loaded", true);
    } else {
      obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      callback2(closure_3[8]).dispatch(obj);
      const obj8 = callback2(closure_3[8]);
      const tmp75 = yield callback(closure_3[6]).validatePaymentSourceBillingAddress(tmp5);
      if (tmp6 !== constants2.PAYMENT_REQUEST) {
        yield closure_22(tmp4);
      }
      if (set.has(tmp6)) {
        const current = tmp7.current;
        let tmp33;
        if (null != current) {
          tmp33 = current;
        }
        if (null != tmp33) {
          if (tmp6 === constants2.PAYMENT_REQUEST) {
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
            if (tmp6 !== constants2.PAYMENT_REQUEST) {
              yield closure_22(tmp4);
              const obj1 = { redirect: "if_required", clientSecret: yield tmp8().client_secret, elements: tmp3 };
              tmp47 = yield obj.confirmSetup(obj1);
            }
          }
          const setupIntent = callback4(tmp47.setupIntent, tmp47.error, (arg0) => callback(arg0, true)).setupIntent;
          tmp7.current = setupIntent;
          let id = setupIntent.payment_method;
        }
        let hasCreatedPaymentMethod = tmp39;
        if (tmp6 === constants2.CARD) {
          hasCreatedPaymentMethod = obj.hasCreatedPaymentMethod;
        }
        if (hasCreatedPaymentMethod) {
          yield closure_24(obj, tmp4);
        }
        const obj2 = { redirect: "if_required", elements: tmp4 };
        tmp47 = yield obj.confirmSetup(obj2);
      } else {
        const paymentMethod = yield closure_24(obj, tmp4).paymentMethod;
        id = paymentMethod.id;
        if (tmp6 === constants2.PIX) {
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
          throw callback3("Missing PIX tax_id from Payment Element", true);
        }
      }
      const obj6 = callback(closure_3[6]);
      const obj4 = { billingAddressToken: tmp75, analyticsLocation: tmp9, pix: tmp10 };
      return obj6.createPaymentSource(constants.STRIPE, id, tmp5, obj4);
    }
  };
  fn.next();
  return fn;
}
async function _confirmCardPaymentSource(arg0, token, email, analyticsLocation, arg4) {
  let obj = arg0;
  if (null != arg0) {
    if (null != token) {
      obj = { type: "BILLING_PAYMENT_SOURCE_CREATE_START" };
      callback2(closure_3[8]).dispatch(obj);
      const obj10 = callback2(closure_3[8]);
      const client_secret = yield callback(closure_3[10]).createStripeSetupIntent().client_secret;
      let obj1 = callback(closure_3[6]);
      const tmp4 = yield obj1.validatePaymentSourceBillingAddress(email);
      let obj2 = callback3(closure_3[11]);
      obj = {};
      obj1 = {};
      obj2 = { token };
      obj1.card = obj2;
      obj1.billing_details = obj2.parseBillingAddressInfoToStripeBillingDetails(email);
      obj.payment_method = obj1;
      const tmp11 = yield obj.confirmCardSetup(client_secret, obj);
      const obj7 = callback(closure_3[6]);
      const obj3 = { billingAddressToken: tmp4, analyticsLocation };
      return obj7.createPaymentSource(constants.STRIPE, callback4(tmp11.setupIntent, tmp11.error, (error) => callback(closure_3[6]).dispatchConfirmationError(error)).setupIntent.payment_method, email, obj3);
    }
  }
  throw callback(closure_3[6]).dispatchConfirmationError("Stripe or token not loaded");
}
async function _createStripePaymentSource(createPaymentMethod, email, arg2, analyticsLocation, arg4) {
  let city;
  let country;
  let error;
  let line1;
  let line2;
  let name;
  let paymentMethod;
  let postalCode;
  let state;
  if (null == createPaymentMethod) {
    throw callback(closure_3[6]).dispatchConfirmationError("Stripe not loaded");
  } else {
    const obj9 = callback(closure_3[6]);
    ({ name, line1, line2, city, state, postalCode, country } = email);
    const value = closure_9.get(arg2);
    callback2(closure_3[9])(null != value, "unsupported payment method type");
    let obj = { type: value };
    obj = {};
    obj = { line1, line2, city, state, postal_code: postalCode, country };
    obj.address = obj;
    obj.name = name;
    obj.billing_details = obj;
    const tmp23 = yield callback(closure_3[6]).validatePaymentSourceBillingAddress(email);
    ({ paymentMethod, error } = yield createPaymentMethod.createPaymentMethod(obj));
    if (null != error) {
      throw callback(closure_3[6]).dispatchConfirmationError(error);
    } else if (null == paymentMethod) {
      throw callback(closure_3[6]).dispatchConfirmationError("stripePaymentMethod not available with successful stripe call");
    } else {
      const obj4 = callback(closure_3[6]);
      const obj1 = { billingAddressToken: tmp23, analyticsLocation };
      return obj4.createPaymentSource(constants.STRIPE, paymentMethod.id, email, obj1);
    }
    const tmp7 = yield createPaymentMethod.createPaymentMethod(obj);
  }
}
async function _createAdyenPrepaidPaymentSource(email, arg1, analyticsLocation, arg3) {
  let obj = callback(closure_3[6]);
  obj = { type: closure_8.get(arg1) };
  const tmp = yield obj.validatePaymentSourceBillingAddress(email);
  obj = { billingAddressToken: tmp, analyticsLocation };
  return callback(closure_3[6]).createPaymentSource(constants.ADYEN, JSON.stringify(obj), email, obj);
}
async function _createAdyenVaultablePaymentSource(arg0, arg1, arg2, arg3, arg4) {
  const fn = function*(email, type, analyticsLocation, paymentMethod) {
    let flag = arg4;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    let obj = callback(closure_3[6]);
    obj = { type: closure_8.get(type) };
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
    const tmp5 = yield callback(closure_3[6]).popupBridgeState(type);
    const obj4 = callback(closure_3[6]);
    let str = "";
    const aPIBaseURL = callback(closure_3[4]).getAPIBaseURL();
    if (null != tmp5) {
      str = tmp5;
    }
    obj = {};
    const sum = aPIBaseURL + closure_5.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(type, str, "success");
    const obj5 = callback(closure_3[4]);
    obj.paymentSource = yield callback(closure_3[6]).createPaymentSource(closure_6.ADYEN, JSON.stringify(obj), email, { billingAddressToken: tmp3, analyticsLocation, returnUrl: sum }, tmp);
    obj.redirectConfirmation = false;
    return obj;
  };
  fn.next();
  return fn;
}
function createStripePaymentSourceToken(paymentSource) {
  return _createStripePaymentSourceToken(...arguments);
}
async function _createStripePaymentSourceToken(type, arg1) {
  let error;
  let paymentMethod;
  let pixMetadata;
  if (set.has(type.type)) {
    return null;
  } else {
    let obj = callback3(closure_3[11]);
    let obj1 = yield obj.getStripe();
    if (null == obj1) {
      const BillingError4 = callback(closure_3[13]).BillingError;
      const prototype4 = BillingError4.prototype;
      const billingError4 = new BillingError4("Stripe not loaded", callback(closure_3[13]).BillingError.ErrorCodes.UNKNOWN);
      throw billingError4;
    } else {
      const billingAddress = type.billingAddress;
      const country = billingAddress.country;
      obj = {};
      obj = {};
      obj1 = {};
      ({ line1: obj9.line1, line2: obj9.line2, city: obj9.city, state: obj9.state, postalCode: obj9.postal_code } = billingAddress);
      obj1.country = country;
      obj.address = obj1;
      obj.name = billingAddress.name;
      obj.billing_details = obj;
      type = type.type;
      if (closure_10.GIROPAY === type) {
        obj.type = "giropay";
      } else if (closure_10.SOFORT === type) {
        obj.type = "sofort";
        const obj2 = {};
        let str8 = "";
        if (null != country) {
          str8 = country;
        }
        obj2.country = str8;
        obj.sofort = obj2;
        obj.billing_details.email = tmp42;
      } else if (closure_10.BANCONTACT === type) {
        obj.type = "bancontact";
      } else if (closure_10.IDEAL === type) {
        obj.type = "ideal";
        const obj3 = { bank: type.bank };
        obj.ideal = obj3;
      } else if (closure_10.PRZELEWY24 === type) {
        if (null == type.bank) {
          const BillingError2 = callback(closure_3[13]).BillingError;
          const prototype2 = BillingError2.prototype;
          const billingError2 = new BillingError2("p24 missing bank information", callback(closure_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
          throw billingError2;
        } else {
          obj.type = "p24";
          const obj4 = { bank: type.bank };
          obj.p24 = obj4;
          obj.billing_details.email = type.email;
        }
      } else if (closure_10.EPS === type) {
        if (null == type.bank) {
          const BillingError = callback(closure_3[13]).BillingError;
          const prototype = BillingError.prototype;
          const billingError = new BillingError("EPS missing bank information", callback(closure_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
          throw billingError;
        } else {
          obj.type = "eps";
          const obj5 = { bank: type.bank };
          obj.eps = obj5;
        }
      } else if (closure_10.PIX === type) {
        obj.type = "pix";
        ({ email: obj7.billing_details.email, pixMetadata } = type);
        let taxId;
        if (null != pixMetadata) {
          taxId = pixMetadata.taxId;
        }
        obj.billing_details.tax_id = taxId;
      }
      callback2(closure_3[9])(null != obj.type, "unsupported payment method type");
      ({ paymentMethod, error } = yield obj1.createPaymentMethod(obj));
      if (null == error) {
        if (null != paymentMethod) {
          return paymentMethod.id;
        }
      }
      const BillingError3 = callback(closure_3[13]).BillingError;
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
      const billingError3 = new BillingError3(combined, callback(closure_3[13]).BillingError.ErrorCodes.UNKNOWN);
      throw billingError3;
    }
  }
}
async function _paymentIntentSucceeded(arg0, arg1) {
  let error;
  let paymentIntent;
  const obj2 = yield callback2(closure_3[11]).getStripe();
  if (null == obj2) {
    throw callback(closure_3[6]).dispatchConfirmationError("Stripe has not loaded.");
  } else if (null == arg0) {
    throw callback(closure_3[6]).dispatchConfirmationError("payment intent id cannot be null.");
  } else {
    ({ paymentIntent, error } = yield obj2.retrievePaymentIntent(yield function getClientSecret(arg0) {
      return callback(...arguments);
    }(arg0)));
    if (null != error) {
      throw callback(closure_3[6]).dispatchConfirmationError(error);
    } else if (null == paymentIntent) {
      throw callback(closure_3[6]).dispatchConfirmationError("paymentIntent not available with successful stripe call");
    } else if (null != paymentIntent.last_payment_error) {
      const _HermesInternal = HermesInternal;
      throw callback(closure_3[6]).dispatchConfirmationError("unable to retrieve payment intent " + paymentIntent.last_payment_error);
    } else {
      return true;
    }
    const tmp = yield obj2.retrievePaymentIntent(yield function getClientSecret(arg0) {
      return callback(...arguments);
    }(arg0));
  }
  const obj = callback2(closure_3[11]);
}
let closure_4 = importDefault(dependencyMap[0]);
({ Endpoints: closure_5, PaymentGateways: closure_6, VAULTABLE_PAYMENT_SOURCES: closure_7 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ ADYEN_PAYMENT_SOURCES: closure_8, STRIPE_PAYMENT_SOURCES: closure_9, PaymentSourceTypes } = arg1(dependencyMap[2]));
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("BillingPaymentGatewayActionCreators.tsx");
let closure_12 = { hasCreatedPaymentMethod: false };
const items = [, ];
({ CARD: arr[0], PAYMENT_REQUEST: arr[1] } = PaymentSourceTypes);
const set = new Set(items);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/billing/actions/BillingPaymentGatewayActionCreators.tsx");

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
  let obj = importAll(dependencyMap[11]);
  const result = obj.parseStripePaymentMethod(billing_details);
  ({ token, billingAddressInfo } = result);
  obj = { analyticsLocation };
  return billingAddressInfo(dependencyMap[6]).createPaymentSource(constants.STRIPE, token, billingAddressInfo, obj);
};
export const createBraintreePaymentSource = function createBraintreePaymentSource(id, billingAddressInfo, analyticsLocation) {
  let obj = billingAddressInfo(dependencyMap[6]);
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
