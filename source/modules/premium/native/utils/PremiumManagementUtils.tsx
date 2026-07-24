// Module ID: 6642
// Function ID: 51015
// Name: getPremiumManagementMethod
// Dependencies: [653, 482, 33, 3, 4471, 1212, 477, 1553, 6643, 6646, 2]
// Exports: getExternalManagementMessage

// Module 6642 (getPremiumManagementMethod)
import { SubscriptionStatusTypes } from "ME";
import { PaymentGatewayToFriendlyName as closure_4 } from "sum";
import { jsx } from "jsxProd";
import importDefaultResult from "timestamp";

function getPremiumManagementMethod(isOnPlatformMatchingExternalPaymentGateway) {
  if (null == isOnPlatformMatchingExternalPaymentGateway) {
    return null;
  } else if (isOnPlatformMatchingExternalPaymentGateway.isOnPlatformMatchingExternalPaymentGateway) {
    let IN_WEB = obj.IN_APP;
  } else {
    if (isOnPlatformMatchingExternalPaymentGateway.isPurchasedExternally) {
      if (null != isOnPlatformMatchingExternalPaymentGateway.paymentGateway) {
        IN_WEB = obj.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
      }
    }
    IN_WEB = obj.IN_WEB;
  }
}
function defaultMobileWebNitroManagementSuccessCallback() {
  return importDefaultResult.log("Successfully opened mobile web Nitro Management page");
}
function defaultMobileWebNitroManagementFailureCallback(arg0) {
  importDefaultResult.error("Failed to open mobile web Nitro Management page, error response: ", arg0);
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.NrBVjw);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t["gD+grx"]);
  obj.hideActionSheet = true;
  obj.show(obj);
}
importDefaultResult = new importDefaultResult("PremiumManagementUtils");
let obj = { IN_APP: "manage_in_app", IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY: "manage_in_external_mobile_payment_gateway", IN_WEB: "manage_in_web" };
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/utils/PremiumManagementUtils.tsx");

export const MobileWebDestinationTypes = { PREMIUM_MANAGEMENT: "premium_management" };
export const PremiumManagementMethod = obj;
export { getPremiumManagementMethod };
export const getExternalManagementMessage = function getExternalManagementMessage(subscription, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  const require = tmp;
  function manageExternalNitroSubscription() {
    if (null != tmp) {
      let obj = tmp(outer1_2[8]);
      obj = { loadId: tmp.loadId };
      if (null != tmp.onSuccessCallback) {
        let onSuccessCallback = tmp.onSuccessCallback;
      } else {
        onSuccessCallback = outer1_9;
      }
      if (null != tmp.onFailureCallback) {
        let onFailureCallback = tmp.onFailureCallback;
      } else {
        onFailureCallback = outer1_10;
      }
      return obj.goToStandaloneNitroManagementFromMobileApp("premium_external_management", obj, onSuccessCallback, onFailureCallback);
    }
  }
  const tmp2 = getPremiumManagementMethod(subscription);
  if (null != tmp2) {
    if (tmp2 !== obj.IN_APP) {
      let str2 = "iOS";
      if (!obj8.isIOS()) {
        obj = require(1553) /* isMetaQuest */;
        let str = "Android";
        if (obj.isMetaQuest()) {
          str = "Meta Quest";
        }
        str2 = str;
      }
      if (tmp2 === obj.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY) {
        if (null != subscription) {
          if (null != subscription.paymentGateway) {
            const intl4 = require(1212) /* getSystemLocale */.intl;
            obj = { mobilePlatform: str2, externalPaymentGateway: table[subscription.paymentGateway] };
            return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.cFZnqX, obj);
          }
        }
      }
      if (tmp2 === obj.IN_WEB) {
        if (null != tmp) {
          if (tmp.shouldAllowExternalManagement) {
            if ("iOS" !== str2) {
              let obj1 = require(1553) /* isMetaQuest */;
            }
            let status;
            if (null != subscription) {
              status = subscription.status;
            }
            let tmp13 = status === SubscriptionStatusTypes.CANCELED;
            if (!tmp13) {
              tmp13 = status === SubscriptionStatusTypes.PAUSE_PENDING;
            }
            if (!tmp13) {
              tmp13 = status === SubscriptionStatusTypes.PAST_DUE;
            }
            if (tmp.returnCtaAsComponent) {
              obj = {};
              obj1 = { justifyContent: "flex-start" };
              obj.containerStyle = obj1;
              obj.onPress = function onPress() {
                return manageExternalNitroSubscription();
              };
              const intl3 = require(1212) /* getSystemLocale */.intl;
              const t = require(1212) /* getSystemLocale */.t;
              obj.text = intl3.string(tmp13 ? t.tqSSSA : t["olSp/D"]);
              obj.variant = "text-sm/semibold";
              jsx(require(6646) /* LinkButton */.LinkButton, {});
              const tmp18 = jsx;
            } else {
              const intl2 = require(1212) /* getSystemLocale */.intl;
              const obj2 = { manageExternalNitroSubscription };
              return intl2.format(require(1212) /* getSystemLocale */.t.IERwUb, obj2);
            }
          }
        }
        const intl = require(1212) /* getSystemLocale */.intl;
        const obj3 = { mobilePlatform: str2 };
        return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.CnoyAN, obj3);
      } else {
        return null;
      }
      obj8 = require(477) /* set */;
    }
  }
  return null;
};
