// Module ID: 4369
// Function ID: 38770
// Name: _httpGetWithCountryCodeQuery
// Dependencies: [5, 1194, 3778, 3779, 3782, 653, 4370, 4368, 4449, 1426, 4451, 507, 477, 1212, 2]
// Exports: getAssetURL, getPrimarySKUForApplication, httpGetWithCountryCodeQuery, nativePlatformTypeToSKUOperatingSystem, skuOperatingSystemToText

// Module 4369 (_httpGetWithCountryCodeQuery)
import closure_2 from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "allSettled";

let closure_7;
let closure_8;
const require = arg1;
async function _httpGetWithCountryCodeQuery(arg0, arg1) {
  let iter = (function*(url) {
    let flag = arg1;
    if (flag === undefined) {
      flag = true;
    }
    yield undefined;
    if (flag) {
      if (outer2_3.isAuthenticated()) {
        const items = [];
        if (!outer2_5.hasFetchedPaymentSources) {
          let paymentSourcesFetchRequest = outer2_4.paymentSourcesFetchRequest;
          if (null == paymentSourcesFetchRequest) {
            let obj = outer2_0(outer2_1[10]);
            paymentSourcesFetchRequest = obj.fetchPaymentSources();
          }
          items.push(paymentSourcesFetchRequest);
        }
        if (!outer2_4.ipCountryCodeLoaded) {
          let obj1 = outer2_0(outer2_1[10]);
          items.push(obj1.fetchIpCountryCode());
        }
        items.push((function waitForSubscriptionsToBeFetched() {
          return new Promise((() => {
            let closure_0 = outer4_2(async (arg0) => {
              function wait() { ... }
              return (/* F38777 */ function*() { ... })();
            });
            return function() {
              return callback(...arguments);
            };
          })());
        })());
        const items1 = [Promise.allSettled(items), ];
        const promise = new Promise((arg0) => setTimeout(arg0, 10000));
        items1[1] = promise;
        yield Promise.race(items1);
      }
    }
    let defaultBillingCountryCode = outer2_5.getDefaultBillingCountryCode();
    const defaultPaymentSource = outer2_5.defaultPaymentSource;
    let id;
    if (null != defaultPaymentSource) {
      id = defaultPaymentSource.id;
    }
    let paymentSourceId = null;
    if (null != id) {
      paymentSourceId = id;
    }
    const premiumTypeSubscription = outer2_6.getPremiumTypeSubscription();
    if (tmp23) {
      paymentSourceId = premiumTypeSubscription.paymentSourceId;
    }
    if (null === defaultBillingCountryCode) {
      const ipCountryCode = outer2_4.ipCountryCode;
      let tmp25 = null;
      if (null != ipCountryCode) {
        tmp25 = ipCountryCode;
      }
      defaultBillingCountryCode = tmp25;
    }
    obj = {};
    if (null != defaultBillingCountryCode) {
      obj.country_code = defaultBillingCountryCode;
    }
    if (null != paymentSourceId) {
      obj.payment_source_id = paymentSourceId;
    }
    if (null != defaultBillingCountryCode) {
      let tmp27 = url;
      if ("string" === typeof url) {
        obj = { url, oldFormErrors: true, rejectWithError: false };
        tmp27 = obj;
      }
      if ("string" === typeof tmp27.query) {
        const _Error = Error;
        const error = new Error("string query not supported");
        throw error;
      } else {
        obj1 = {};
        const merged = Object.assign(obj);
        const merged1 = Object.assign(tmp27.query);
        tmp27.query = obj1;
        let tmp26 = tmp27;
      }
    } else {
      tmp26 = url;
    }
    const HTTP = outer2_0(outer2_1[11]).HTTP;
    return HTTP.get(tmp26);
  })();
  iter.next();
  return iter;
}
({ Endpoints: closure_7, OperatingSystems: closure_8 } = ME);
require("allSettled").shim();
let tmp4 = !require("isTablet").isMobile && !require("isTablet").isTablet;
if (tmp4) {
  tmp4 = -1 !== require("getChromeVersion").getChromeVersion();
  let obj2 = require("getChromeVersion");
}
let closure_9 = tmp4;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/StoreUtils.tsx");

export const SUPPORTS_WEBP = tmp4;
export const getAssetURL = function getAssetURL(application_id, thumbnailAssetId, heroWidth, webp) {
  let str = webp;
  if (null == webp) {
    str = "mp4";
    if ("video/quicktime" !== (thumbnailAssetId.mimeType || thumbnailAssetId.mime_type)) {
      str = "mp4";
      if ("video/mp4" !== tmp) {
        str = "image/gif" === tmp ? "gif" : "webp";
      }
    }
  }
  if (!tmp2) {
    str = "png";
  }
  let id = thumbnailAssetId;
  if ("string" !== typeof thumbnailAssetId) {
    id = thumbnailAssetId.id;
  }
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + "https:" + "//" + CDN_HOST + "/app-assets/" + application_id + "/store/" + id + "." + str;
  } else {
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + "https:" + window.GLOBAL_ENV.API_ENDPOINT + closure_7.STORE_ASSET(application_id, id, str);
  }
  let sum = combined;
  if (null != heroWidth) {
    const obj = require(1426) /* isAttachmentLadderEnabled */;
    const _HermesInternal3 = HermesInternal;
    sum = combined + "?size=" + obj.getBestMediaProxySize(heroWidth * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio());
    const obj2 = require(1426) /* isAttachmentLadderEnabled */;
  }
  return sum;
};
export const httpGetWithCountryCodeQuery = function httpGetWithCountryCodeQuery(result) {
  return _httpGetWithCountryCodeQuery(...arguments);
};
export const nativePlatformTypeToSKUOperatingSystem = function nativePlatformTypeToSKUOperatingSystem(platform) {
  if (require(477) /* set */.PlatformTypes.WINDOWS === platform) {
    return constants.WINDOWS;
  } else if (require(477) /* set */.PlatformTypes.OSX === platform) {
    return constants.MACOS;
  } else if (require(477) /* set */.PlatformTypes.LINUX === platform) {
    return constants.LINUX;
  } else {
    return null;
  }
};
export const skuOperatingSystemToText = function skuOperatingSystemToText(arg0) {
  if (constants.WINDOWS === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["0/xHFO"]);
  } else if (constants.MACOS === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.E4u4n5);
  } else if (constants.LINUX === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.tcawo3);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown operating system value: " + arg0);
    throw error;
  }
};
export const getPrimarySKUForApplication = function getPrimarySKUForApplication(applicationId, getApplication, get) {
  const application = getApplication.getApplication(applicationId);
  let value = null;
  if (null != application) {
    value = null;
    if (null != application.primarySkuId) {
      value = get.get(application.primarySkuId);
    }
  }
  return value;
};
