// Module ID: 6637
// Function ID: 50956
// Name: getPremiumManagementMethod
// Dependencies: [57, 31, 27, 1849, 3779, 3780, 6632, 6646, 5617, 653, 1851]
// Exports: getExternalManagementMessage

// Module 6637 (getPremiumManagementMethod)
import { SubscriptionStatusTypes } from "_slicedToArray";
import { PaymentGatewayToFriendlyName as closure_4 } from "module_31";
import { jsx } from "keys";
import importDefaultResult from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

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
  let obj = importDefault(dependencyMap[4]);
  obj = {};
  const intl = require(dependencyMap[5]).intl;
  obj.title = intl.string(require(dependencyMap[5]).t.NrBVjw);
  const intl2 = require(dependencyMap[5]).intl;
  obj.body = intl2.string(require(dependencyMap[5]).t.gD+grx);
  obj.hideActionSheet = true;
  obj.show(obj);
}
importDefaultResult = new importDefaultResult("PremiumManagementUtils");
const obj = { IN_APP: "manage_in_app", IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY: "manage_in_external_mobile_payment_gateway", IN_WEB: "manage_in_web" };
const result = GuildFeatures.fileFinishedImporting("modules/premium/native/utils/PremiumManagementUtils.tsx");

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
      let obj = tmp(closure_2[8]);
      obj = { loadId: tmp.loadId };
      if (null != tmp.onSuccessCallback) {
        let onSuccessCallback = tmp.onSuccessCallback;
      } else {
        onSuccessCallback = closure_9;
      }
      if (null != tmp.onFailureCallback) {
        let onFailureCallback = tmp.onFailureCallback;
      } else {
        onFailureCallback = closure_10;
      }
      return obj.goToStandaloneNitroManagementFromMobileApp("premium_external_management", obj, onSuccessCallback, onFailureCallback);
    }
  }
  const importDefault = manageExternalNitroSubscription;
  const tmp2 = getPremiumManagementMethod(subscription);
  if (null != tmp2) {
    if (tmp2 !== obj.IN_APP) {
      let str2 = "iOS";
      if (!obj8.isIOS()) {
        let obj = require(dependencyMap[7]);
        let str = "Android";
        if (obj.isMetaQuest()) {
          str = "Meta Quest";
        }
        str2 = str;
      }
      if (tmp2 === obj.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY) {
        if (null != subscription) {
          if (null != subscription.paymentGateway) {
            const intl4 = require(dependencyMap[5]).intl;
            obj = { mobilePlatform: str2, externalPaymentGateway: closure_4[subscription.paymentGateway] };
            return intl4.formatToPlainString(require(dependencyMap[5]).t.cFZnqX, obj);
          }
        }
      }
      if (tmp2 === obj.IN_WEB) {
        if (null != tmp) {
          if (tmp.shouldAllowExternalManagement) {
            if ("iOS" !== str2) {
              let obj1 = require(dependencyMap[7]);
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
              const intl3 = require(dependencyMap[5]).intl;
              const t = require(dependencyMap[5]).t;
              obj.text = intl3.string(tmp13 ? t.tqSSSA : t.olSp/D);
              obj.variant = "text-sm/semibold";
              jsx(require(dependencyMap[9]).LinkButton, obj);
              const tmp18 = jsx;
            } else {
              const intl2 = require(dependencyMap[5]).intl;
              const obj2 = { manageExternalNitroSubscription };
              return intl2.format(require(dependencyMap[5]).t.IERwUb, obj2);
            }
          }
        }
        const intl = require(dependencyMap[5]).intl;
        const obj3 = { mobilePlatform: str2 };
        return intl.formatToPlainString(require(dependencyMap[5]).t.CnoyAN, obj3);
      } else {
        return null;
      }
      const obj8 = require(dependencyMap[6]);
    }
  }
  return null;
};
