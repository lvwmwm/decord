// Module ID: 3789
// Function ID: 29534
// Name: _createGatewayCheckoutContext
// Dependencies: []
// Exports: calculateStandardizedUnits, captureBillingException, captureBillingMessage, createGatewayCheckoutContext, getLocalizedDisplayMonth, isExpectedHttpClientError

// Module 3789 (_createGatewayCheckoutContext)
async function _createGatewayCheckoutContext(paymentGateway, arg1) {
  let tmp = null;
  if (null != paymentGateway) {
    tmp = null;
    if (paymentGateway.paymentGateway === constants.BRAINTREE) {
      let obj = callback(closure_2[2]);
      const tmp5 = yield obj.collectDeviceData();
      tmp = null;
      if (null != tmp5) {
        obj = { braintree_device_data: tmp5 };
        tmp = obj;
      }
    }
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
const PaymentGateways = arg1(dependencyMap[1]).PaymentGateways;
const result = arg1(dependencyMap[6]).fileFinishedImporting("utils/BillingUtils.tsx");

export const getLocalizedDisplayMonth = function getLocalizedDisplayMonth(arg0, arg1) {
  const date = new Date();
  date.setMonth(arg0 - 1);
  return date.toLocaleString(arg1, { month: "short" });
};
export const createGatewayCheckoutContext = function createGatewayCheckoutContext(paymentSource) {
  return _createGatewayCheckoutContext(...arguments);
};
export const captureBillingException = function captureBillingException(error, tags) {
  let obj = importDefault(dependencyMap[3]);
  obj = {};
  const merged = Object.assign(tags);
  obj = {};
  tags = undefined;
  if (null != tags) {
    tags = tags.tags;
  }
  const merged1 = Object.assign(tags);
  obj["app_context"] = "billing";
  obj["tags"] = obj;
  obj.captureException(error, obj);
};
export const isExpectedHttpClientError = function isExpectedHttpClientError(status) {
  let tmp = status instanceof arg1(dependencyMap[4]).HTTPResponseError;
  if (tmp) {
    tmp = status.status >= 400;
  }
  if (tmp) {
    tmp = status.status < 500;
  }
  if (!tmp) {
    let tmp4 = status instanceof importDefault(dependencyMap[5]);
    if (tmp4) {
      tmp4 = null != status.status;
    }
    if (tmp4) {
      tmp4 = status.status >= 400;
    }
    if (tmp4) {
      tmp4 = status.status < 500;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const captureBillingMessage = function captureBillingMessage(arg0, tags) {
  let obj = importDefault(dependencyMap[3]);
  obj = {};
  const merged = Object.assign(tags);
  obj = {};
  tags = undefined;
  if (null != tags) {
    tags = tags.tags;
  }
  const merged1 = Object.assign(tags);
  obj["app_context"] = "billing";
  obj["tags"] = obj;
  obj.captureMessage(arg0, obj);
};
export function calculateStandardizedUnits(billingPeriod, billingPeriod2) {
  let tmp = "P1M" === billingPeriod;
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = "P1Y" === billingPeriod2;
  }
  if (tmp2 === true) {
    return 12;
  } else {
    let tmp3 = tmp;
    if (tmp) {
      tmp3 = "P6M" === billingPeriod2;
    }
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
        let tmp5 = tmp4;
        if (tmp4) {
          tmp5 = "P1Y" === billingPeriod2;
        }
        if (tmp5 === true) {
          return 4;
        } else {
          if (tmp4) {
            tmp4 = "P6M" === billingPeriod2;
          }
          if (tmp4 !== true) {
            let tmp6 = "P6M" === billingPeriod;
            if (tmp6) {
              tmp6 = "P1Y" === billingPeriod2;
            }
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
