// Module ID: 11214
// Function ID: 11215
// Name: OrderSigningDeferral
// Dependencies: [5, 5729, 11215, 11216, 2]
// Exports: getPaymentRedirectContext, getSigningDeferralDeadline, getSigningDeferralMerchantAccountId, getStripeNextActionContext, isAwaitingStripeNextAction, isSigningDeferralExpired, performSigningDeferralAction

// Module 11214 (OrderSigningDeferral)
import PaymentConstants from "PaymentConstants" /* 5729 */;
import Stripe3DSChallenge from "Stripe3DSChallenge" /* 11215 */;
import StripeNextAction from "StripeNextAction" /* 11216 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c2;

function openPaymentRedirect(redirect_url) {
  redirect_url = redirect_url.redirect_url;
  if (null == redirect_url) {
    const self = this;
    if (typeof PaymentRedirectUrlMissingError === "function") {
      const self2 = this;
      const self3 = this;
      const redirect_url1 = new redirect_url("Payment redirect context has no redirect url", tmp3, redirect_url);
      redirect_url1.name = "PaymentRedirectUrlMissing";
      throw redirect_url1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _window = window;
    window.open(redirect_url);
  }
}
let obj = function _performSigningDeferralAction() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj3;
    let obj5;
    let payment_redirect_context;
    let stripe_3ds_context;
    let stripe_next_action_context;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null == closure_0) {
            const self2 = this;
            throw new SigningDeferralContextMissingError();
          } else {
            ({ payment_redirect_context, stripe_3ds_context, stripe_next_action_context } = closure_0);
            if (null == payment_redirect_context) {
              if (null == stripe_3ds_context) {
                if (null == stripe_next_action_context) {
                  const self = this;
                  throw new SigningDeferralActionUnsupportedError();
                } else {
                  c2 = 2;
                  c1 = 1;
                  const obj6 = { value: obj5.handleStripeNextAction(stripe_next_action_context, closure_0.payment_gateway_merchant_account_id), done: false };
                  obj5 = StripeNextAction;
                  return obj6;
                }
              } else {
                c2 = 1;
                c1 = 1;
                const obj7 = { value: obj3.authenticateStripePaymentIntent(stripe_3ds_context, closure_0.payment_gateway_merchant_account_id), done: false };
                obj3 = Stripe3DSChallenge;
                return obj7;
              }
            } else {
              openPaymentRedirect(payment_redirect_context);
            }
          }
        } else if (1 === tmp3) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp12) {
        c1 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const OrderStatus = PaymentConstants.OrderStatus;
class PaymentRedirectUrlMissingError extends Error {
  constructor() {
    const tmp2 = new tmp("Payment redirect context has no redirect url", new.target);
    tmp2.name = "PaymentRedirectUrlMissing";
    return tmp2;
  }
}
class SigningDeferralContextMissingError extends Error {
  constructor() {
    const tmp2 = new tmp("Order signing was deferred without a deferral context", new.target);
    tmp2.name = "SigningDeferralContextMissing";
    return tmp2;
  }
}
class SigningDeferralActionUnsupportedError extends Error {
  constructor() {
    const tmp2 = new tmp("Order signing deferral context has no action the client can complete", new.target);
    tmp2.name = "SigningDeferralActionUnsupported";
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/payments/OrderSigningDeferral.tsx");

export function getPaymentRedirectContext(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1 = null;
  if (null != prop) {
    prop1 = prop.payment_redirect_context;
  }
  return prop1;
}
export function getStripeNextActionContext(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.stripe_next_action_context;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  return prop1;
}
export function isAwaitingStripeNextAction(status) {
  let tmp = null != status && status.status === OrderStatus.SIGNING_IN_PROGRESS;
  if (tmp) {
    let billing_facet = null;
    if (null != status) {
      billing_facet = status.billing_facet;
    }
    let prop;
    if (billing_facet != null) {
      prop = billing_facet.order_signing_deferral_context;
    }
    if (prop == null) {
      prop = null;
    }
    let prop1;
    if (prop != null) {
      prop1 = prop.stripe_next_action_context;
    }
    if (prop1 == null) {
      prop1 = null;
    }
    tmp = null != prop1;
  }
  return tmp;
}
export function getSigningDeferralMerchantAccountId(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.payment_gateway_merchant_account_id;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  return prop1;
}
export function isSigningDeferralExpired(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.stripe_next_action_context;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  let expires_at;
  if (prop1 != null) {
    expires_at = prop1.expires_at;
  }
  let time = null;
  if (null != expires_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(expires_at);
    time = date.getTime();
  }
  let tmp9 = null != time;
  if (tmp9) {
    const _Date2 = Date;
    tmp9 = Date.now() >= time;
  }
  return tmp9;
}
export function getSigningDeferralDeadline(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.stripe_next_action_context;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  let expires_at;
  if (prop1 != null) {
    expires_at = prop1.expires_at;
  }
  let time = null;
  if (null != expires_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(expires_at);
    time = date.getTime();
  }
  let sum = null;
  if (null != time) {
    sum = time + 120000;
  }
  return sum;
}
export { openPaymentRedirect };
export function performSigningDeferralAction() {
  return obj(...arguments);
}
