// Module ID: 5118
// Function ID: 5119
// Name: BillingUtils
// Dependencies: [5, 5119, 1083, 5120, 1242, 1285, 5126, 2]
// Exports: calculateStandardizedUnits, captureBillingException, captureBillingMessage, createGatewayCheckoutContext, getLocalizedDisplayMonth, isExpectedHttpClientError, isOfTypeStripeError, shouldReportExpressCheckoutError

// Module 5118 (BillingUtils)
import Constants from "Constants" /* 1083 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import Constants2 from "Constants" /* 5119 */;
import BraintreeUtils from "BraintreeUtils" /* 5120 */;
import BillingErrorDefault from "BillingError" /* 5126 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let braintree_device_data;

let obj = function _createGatewayCheckoutContext() {
  obj = _asyncToGenerator(async (arg0) => {
    const paymentGateway = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj3;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let obj6;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              braintree_device_data = undefined;
              obj6 = null;
              if (null != paymentGateway) {
                if (paymentGateway.paymentGateway === constants.BRAINTREE) {
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: obj3.collectDeviceData(), done: false };
                  obj3 = BraintreeUtils;
                  return obj5;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            braintree_device_data = value;
            if (null != braintree_device_data) {
              obj6 = { braintree_device_data };
            }
          }
          c3 = 3;
          return { value: obj6, done: true };
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
const StripeErrorTypes = Constants2.StripeErrorTypes;
const PaymentGateways = Constants.PaymentGateways;
const set = new Set(["card_error", "api_connection_error", "validation_error"]);
const result = size.fileFinishedImporting("utils/BillingUtils.tsx");

export function getLocalizedDisplayMonth(arg0, arg1) {
  const date = new Date();
  date.setMonth(arg0 - 1);
  return date.toLocaleString(arg1, { month: "short" });
}
export function createGatewayCheckoutContext() {
  return obj(...arguments);
}
export function captureBillingException(error, options) {
  let obj2;
  obj = { tags: obj2 };
  const captureException = SentryUtilsDefault.captureException;
  SentryUtilsDefault;
  const merged = Object.assign(options);
  let tags;
  if (options != null) {
    tags = options.tags;
  }
  obj2 = { app_context: "billing" };
  const merged1 = Object.assign(tags);
  captureException(error, obj);
}
export function isExpectedHttpClientError(status) {
  let tmp2 = status instanceof HTTPUtils.HTTPResponseError && status.status >= 400 && status.status < 500;
  if (!tmp2) {
    tmp2 = status instanceof BillingErrorDefault && null != status.status && status.status >= 400 && status.status < 500;
    const tmp4 = status instanceof BillingErrorDefault && null != status.status && status.status >= 400 && status.status < 500;
  }
  return tmp2;
}
export function isOfTypeStripeError(type) {
  const hasItem = null != type && StripeErrorTypes.includes(type.type);
  return hasItem;
}
export function shouldReportExpressCheckoutError(code) {
  let tmp6;
  if (code instanceof BillingErrorDefault) {
    let tmp8 = code.code !== tmp(5126).ErrorCodes.INVALID_PAYMENT_SOURCE;
    if (tmp8) {
      let tmp10 = code instanceof HTTPUtils.HTTPResponseError && code.status >= 400 && code.status < 500;
      if (!tmp10) {
        tmp10 = code instanceof tmp(5126) && null != code.status && code.status >= 400 && code.status < 500;
        const tmp11 = code instanceof tmp(5126) && null != code.status && code.status >= 400 && code.status < 500;
      }
      tmp8 = !tmp10;
    }
    tmp6 = tmp8;
  } else {
    const hasItem = null != code && StripeErrorTypes.includes(code.type);
    tmp6 = !hasItem;
    if (hasItem) {
      tmp6 = !set.has(code.type);
    }
  }
  return tmp6;
}
export function captureBillingMessage(arg0, tags) {
  let obj2;
  obj = { tags: obj2 };
  const captureMessage = SentryUtilsDefault.captureMessage;
  SentryUtilsDefault;
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj2 = { app_context: "billing" };
  const merged1 = Object.assign(tags);
  captureMessage(arg0, obj);
}
export function calculateStandardizedUnits(billingPeriod, billingPeriod2) {
  let tmp = "P1M" === billingPeriod;
  const tmp2 = tmp && "P1Y" === billingPeriod2;
  if (tmp2 === true) {
    return 12;
  } else {
    const tmp3 = tmp && "P6M" === billingPeriod2;
    if (tmp3 === true) {
      return 6;
    } else {
      if (tmp) {
        tmp = "P3M" === billingPeriod2;
      }
      if (tmp === true) {
        return 3;
      } else {
        let tmp4 = "P3M" === billingPeriod;
        const tmp5 = tmp4 && "P1Y" === billingPeriod2;
        if (tmp5 === true) {
          return 4;
        } else {
          if (tmp4) {
            tmp4 = "P6M" === billingPeriod2;
          }
          if (tmp4 !== true) {
            const tmp6 = "P6M" === billingPeriod && "P1Y" === billingPeriod2;
            if (tmp6 !== true) {
              return 1;
            }
          }
          return 2;
        }
      }
    }
  }
}
