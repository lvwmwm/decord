// Module ID: 4457
// Function ID: 39302
// Name: _callSuper
// Dependencies: []

// Module 4457 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_4(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getIsStripeRedirectedPaymentSource(arg0) {
  let hasItem = set.has(arg0);
  if (hasItem) {
    hasItem = arg0 in obj;
  }
  return hasItem;
}
function getIsStripeDirectConfirmationPaymentSource(arg0) {
  return arg0 in obj5;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ Endpoints: closure_9, REDIRECTED_PAYMENT_SOURCES: closure_10 } = arg1(dependencyMap[6]));
const PaymentSourceTypes = arg1(dependencyMap[7]).PaymentSourceTypes;
let obj = { [PaymentSourceTypes.GIROPAY]: obj, [PaymentSourceTypes.SOFORT]: obj, [PaymentSourceTypes.PRZELEWY24]: obj1, [PaymentSourceTypes.BANCONTACT]: obj2, [PaymentSourceTypes.EPS]: obj3, [PaymentSourceTypes.IDEAL]: obj4 };
obj = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(name) {
    let obj = { name: name.paymentSource.billingAddress.name };
    obj = { stripeConfirmPayment: name.stripe.confirmGiropayPayment, paymentMethod: { billing_details: obj } };
    return obj;
  }
};
obj = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    let obj = { country: paymentSource.billingAddress.country };
    obj = { name: paymentSource.billingAddress.name, email: paymentSource.email };
    obj = { stripeConfirmPayment: paymentSource.stripe.confirmSofortPayment, paymentMethod: { sofort: obj, billing_details: obj } };
    return obj;
  }
};
const obj5 = { [PaymentSourceTypes.SEPA_DEBIT]: obj6, [PaymentSourceTypes.PIX]: obj7 };
const tmp3 = () => {
  class PaymentConfirmationHandler {
    constructor(arg0, arg1) {
      tmp = closure_7(this, PaymentConfirmationHandler);
      this.paymentSource = arg0;
      this.payment = arg1;
      this.paymentSourceType = arg0.type;
      this.paymentId = arg1.payment_id;
      return;
    }
  }
  const arg1 = PaymentConfirmationHandler;
  const items = [
    {
      key: "performRedirect",
      value(arg0) {
        window.open(arg0);
      }
    }
  ];
  return callback4(PaymentConfirmationHandler, items);
}();
const obj1 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    if (null == paymentSource.bank) {
      const _HermesInternal = HermesInternal;
      throw arg1(dependencyMap[8]).dispatchConfirmationError("PaymentSource (" + paymentSource.id + ") missing bank info for p24.");
    } else {
      let obj = {};
      obj = { bank: paymentSource.bank };
      obj.p24 = obj;
      obj = { name: paymentSource.billingAddress.name, email: paymentSource.email };
      obj.billing_details = obj;
      const obj1 = { stripeConfirmPayment: tmp.confirmP24Payment, paymentMethod: obj };
      return obj1;
    }
  }
};
const obj2 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    let obj = { name: paymentSource.billingAddress.name, email: paymentSource.email };
    obj = { stripeConfirmPayment: paymentSource.stripe.confirmBancontactPayment, paymentMethod: { billing_details: obj } };
    return obj;
  }
};
const obj3 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    if (null == paymentSource.bank) {
      const _HermesInternal = HermesInternal;
      throw arg1(dependencyMap[8]).dispatchConfirmationError("PaymentSource (" + paymentSource.id + ") missing bank info for EPS.");
    } else {
      let obj = {};
      obj = { bank: paymentSource.bank };
      obj.eps = obj;
      obj = { name: paymentSource.billingAddress.name };
      obj.billing_details = obj;
      const obj1 = { stripeConfirmPayment: tmp.confirmEpsPayment, paymentMethod: obj };
      return obj1;
    }
  }
};
const obj4 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    let obj = { ideal: {}, billing_details: obj };
    obj = { name: paymentSource.billingAddress.name };
    if (null != paymentSource.bank) {
      obj = { bank: paymentSource.bank };
      obj.ideal = obj;
    }
    return { stripeConfirmPayment: paymentSource.stripe.confirmIdealPayment, paymentMethod: obj };
  }
};
const obj6 = {
  confirmationType: "stripe_direct_confirmation",
  constructStripeConfirmPaymentHandler(paymentMethodId) {
    paymentMethodId = paymentMethodId.paymentMethodId;
    if (null == paymentMethodId) {
      throw arg1(dependencyMap[8]).dispatchConfirmationError("On a sepa payment payment method id cannot be null");
    } else {
      const obj = { stripeConfirmPayment: tmp.confirmSepaDebitPayment, paymentMethod: paymentMethodId };
      return obj;
    }
  }
};
const obj7 = {
  confirmationType: "stripe_direct_confirmation",
  constructStripeConfirmPaymentHandler(stripe) {
    return { stripeConfirmPayment: stripe.stripe.confirmPixPayment, paymentMethod: stripe.paymentMethodId, pendingCustomerAction: true };
  }
};
const tmp2 = arg1(dependencyMap[6]);
const tmp4 = (arg0) => {
  class StripePaymentConfirmationHandler {
    constructor(arg0, arg1) {
      tmp = closure_7(this, StripePaymentConfirmationHandler);
      if (null == arg0) {
        tmp7 = f39337;
        tmp8 = f39331;
        num2 = 8;
        obj2 = f39337(f39331[8]);
        str2 = "Payment source cannot be null on a redirect.";
        throw obj2.dispatchConfirmationError("Payment source cannot be null on a redirect.");
      } else {
        tmp9 = closure_13;
        tmp10 = StripePaymentConfirmationHandler;
        items = [, ];
        items[0] = arg0;
        tmp11 = arg1;
        items[1] = arg1;
        tmp12 = closure_13(this, StripePaymentConfirmationHandler, items);
        tmp12.stripe = null;
        tmp13 = closure_15;
        if (closure_15(tmp12.paymentSourceType)) {
          tmp6 = closure_11;
          tmp12.handlerRegistry = closure_11[tmp12.paymentSourceType];
        } else {
          tmp2 = closure_16;
          if (closure_16(tmp12.paymentSourceType)) {
            tmp5 = closure_12;
            tmp12.handlerRegistry = closure_12[tmp12.paymentSourceType];
          } else {
            tmp3 = f39337;
            tmp4 = f39331;
            num = 8;
            obj = f39337(f39331[8]);
            str = "Invalid Payment Source Type - redirect or direct confirmation handlers not found.";
            throw obj.dispatchConfirmationError("Invalid Payment Source Type - redirect or direct confirmation handlers not found.");
          }
        }
        return tmp12;
      }
    }
  }
  const callback3 = StripePaymentConfirmationHandler;
  callback3(StripePaymentConfirmationHandler, arg0);
  let obj = { key: "getStripe" };
  let closure_5 = callback(async function() {
    const self = this;
    if (null == self.stripe) {
      self.stripe = yield callback2(closure_2[9]).getStripe();
      const obj = callback2(closure_2[9]);
    }
    if (null == self.stripe) {
      throw callback(closure_2[8]).dispatchConfirmationError("Stripe cannot be null on a redirect.");
    } else {
      return self.stripe;
    }
  });
  obj.value = function getStripe() {
    return callback6(...arguments);
  };
  const items = [obj, , , , , ];
  obj = { key: "getPaymentIntentInfo" };
  let closure_4 = callback(async function() {
    const HTTP = callback(closure_2[10]).HTTP;
    let obj = { y: null, isArray: null, accessible: null, url: closure_9.BILLING_STRIPE_PAYMENT_INTENTS(this.paymentId) };
    const body = yield HTTP.get(obj).body;
    obj = { clientSecret: body.stripe_payment_intent_client_secret, paymentMethodId: body.stripe_payment_intent_payment_method_id };
    return obj;
  });
  obj.value = function getPaymentIntentInfo() {
    return callback5(...arguments);
  };
  items[1] = obj;
  obj = { key: "getStripeRedirect" };
  const callback = callback(async (arg0) => {
    const fn = function*(arg0) {
      let clientSecret;
      let error;
      let paymentIntent;
      let paymentMethodId;
      let state;
      const self = this;
      ({ state, clientSecret, paymentMethodId } = arg0);
      yield undefined;
      const handlerRegistry = self.handlerRegistry;
      let obj = { stripe: yield self.getStripe(), paymentSource: self.paymentSource, paymentMethodId };
      const result = handlerRegistry.constructStripeConfirmPaymentHandler(obj);
      obj = { payment_method: result.paymentMethod };
      let str = "";
      const aPIBaseURL = callback(closure_2[10]).getAPIBaseURL();
      if (null != state) {
        str = state;
      }
      obj.return_url = aPIBaseURL + closure_9.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(self.paymentSourceType, str, "success");
      const obj4 = callback(closure_2[10]);
      ({ paymentIntent, error } = yield result.stripeConfirmPayment(clientSecret, obj, { handleActions: false }));
      if (null != error) {
        throw callback(closure_2[8]).dispatchConfirmationError(error);
      } else if (null == paymentIntent) {
        throw callback(closure_2[8]).dispatchConfirmationError("paymentIntent not available with successful api call");
      } else {
        const next_action = paymentIntent.next_action;
        let url;
        if (null != next_action) {
          const redirect_to_url = next_action.redirect_to_url;
          if (null != redirect_to_url) {
            url = redirect_to_url.url;
          }
        }
        if (null == url) {
          throw callback(closure_2[8]).dispatchConfirmationError("confirm payment did not return a redirect url");
        } else {
          return paymentIntent.next_action.redirect_to_url.url;
        }
      }
      const tmp4 = yield result.stripeConfirmPayment(clientSecret, obj, { handleActions: false });
    };
    fn.next();
    return fn;
  });
  obj.value = function getStripeRedirect(arg0) {
    return callback4(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "confirmRedirectedPaymentSource" };
  let closure_2 = callback(async (arg0) => {
    const fn = function*(arg0) {
      let clientSecret;
      let paymentMethodId;
      const self = this;
      ({ clientSecret, paymentMethodId } = arg0);
      yield undefined;
      let obj = callback(closure_2[8]);
      obj = { clientSecret, state: yield obj.popupBridgeState(self.paymentSourceType), paymentMethodId };
      self.performRedirect(yield self.getStripeRedirect(obj));
    };
    fn.next();
    return fn;
  });
  obj1.value = function confirmRedirectedPaymentSource(arg0) {
    return callback3(...arguments);
  };
  items[3] = obj1;
  const obj2 = { key: "confirmDirectPaymentSource" };
  let closure_1 = callback(async (arg0) => {
    const fn = function*(arg0) {
      let clientSecret;
      let error;
      let paymentIntent;
      let paymentMethodId;
      const self = this;
      ({ clientSecret, paymentMethodId } = arg0);
      yield undefined;
      const handlerRegistry = self.handlerRegistry;
      let obj = { stripe: yield self.getStripe(), paymentSource: self.paymentSource, paymentMethodId };
      const result = handlerRegistry.constructStripeConfirmPaymentHandler(obj);
      obj = { payment_method: result.paymentMethod };
      ({ paymentIntent, error } = yield result.stripeConfirmPayment(clientSecret, obj));
      if (null != error) {
        throw callback(closure_2[8]).dispatchConfirmationError(error);
      } else if (null == paymentIntent) {
        throw callback(closure_2[8]).dispatchConfirmationError("paymentIntent not available with successful stripe call");
      } else {
        obj = { pendingCustomerAction: result.pendingCustomerAction, customerActionCancelled: "requires_action" === paymentIntent.status };
        return obj;
      }
      const tmp2 = yield result.stripeConfirmPayment(clientSecret, obj);
    };
    fn.next();
    return fn;
  });
  obj2.value = function confirmDirectPaymentSource(arg0) {
    return callback2(...arguments);
  };
  items[4] = obj2;
  const obj3 = { key: "confirmPayment" };
  let closure_0 = callback(async function() {
    let clientSecret;
    let paymentMethodId;
    const self = this;
    ({ clientSecret, paymentMethodId } = yield self.getPaymentIntentInfo());
    if ("stripe_redirect_confirmation" === self.handlerRegistry.confirmationType) {
      let obj = { clientSecret, paymentMethodId };
      yield self.confirmRedirectedPaymentSource(obj);
      obj = { redirectConfirmation: true };
      return obj;
    } else {
      obj = { clientSecret, paymentMethodId };
      const obj1 = { redirectConfirmation: false };
      ({ pendingCustomerAction: obj2.pendingCustomerAction, customerActionCancelled: obj2.customerActionCancelled } = yield self.confirmDirectPaymentSource(obj));
      return obj1;
    }
    const tmp = yield self.getPaymentIntentInfo();
  });
  obj3.value = function confirmPayment() {
    return callback(...arguments);
  };
  items[5] = obj3;
  return callback4(StripePaymentConfirmationHandler, items);
}(tmp3);
const tmp5 = (arg0) => {
  class AdyenPaymentConfirmationHandler {
    constructor(arg0, arg1) {
      tmp = closure_7(this, AdyenPaymentConfirmationHandler);
      if (null == arg0) {
        tmp5 = AdyenPaymentConfirmationHandler;
        tmp6 = closure_2;
        num = 8;
        obj = AdyenPaymentConfirmationHandler(closure_2[8]);
        str = "Payment source cannot be null on a redirect.";
        throw obj.dispatchConfirmationError("Payment source cannot be null on a redirect.");
      } else {
        tmp2 = closure_13;
        tmp3 = AdyenPaymentConfirmationHandler;
        items = [, ];
        items[0] = arg0;
        tmp4 = arg1;
        items[1] = arg1;
        return closure_13(this, AdyenPaymentConfirmationHandler, items);
      }
    }
  }
  const arg1 = AdyenPaymentConfirmationHandler;
  callback3(AdyenPaymentConfirmationHandler, arg0);
  let obj = {
    key: "handleAdyenConfirmation",
    value() {
      const self = this;
      const adyen_redirect_url = this.payment.adyen_redirect_url;
      if (null == adyen_redirect_url) {
        throw AdyenPaymentConfirmationHandler(closure_2[8]).dispatchConfirmationError("redirect url cannot be null on a redirect for adyen.");
      } else {
        const obj = {};
        if (set.has(self.paymentSource.type)) {
          self.performRedirect(adyen_redirect_url);
          obj.redirectConfirmation = true;
          obj.redirectURL = adyen_redirect_url;
          let tmp2 = obj;
        } else {
          obj.redirectConfirmation = false;
          obj.redirectURL = adyen_redirect_url;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "confirmPayment",
    value() {
      return Promise.resolve(this.handleAdyenConfirmation());
    }
  };
  items[1] = obj;
  return callback4(AdyenPaymentConfirmationHandler, items);
}(tmp3);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/billing/actions/HandleConfirmPaymentRegistry.tsx");

export const STRIPE_REDIRECTED_PAYMENT_METHOD_REGISTRY = obj;
export { getIsStripeRedirectedPaymentSource };
export const STRIPE_DIRECT_CONFIRM_PAYMENT_METHOD_REGISTRY = obj5;
export { getIsStripeDirectConfirmationPaymentSource };
export const StripePaymentConfirmationHandler = tmp4;
export const AdyenPaymentConfirmationHandler = tmp5;
