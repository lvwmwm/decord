// Module ID: 6418
// Function ID: 6419
// Name: StoreUtils
// Dependencies: [5, 502, 2051, 2052, 2055, 1084, 6419, 5938, 5857, 1449, 6498, 5758, 1294, 1381, 1125, 2]
// Exports: getAssetURL, getPrimarySKUForApplication, httpGetWithCountryCodeQuery, nativePlatformTypeToSKUOperatingSystem, skuOperatingSystemToText

// Module 6418 (StoreUtils)
import intl4 from "intl" /* 1125 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1449 */;
import BrowserUtils from "BrowserUtils" /* 5857 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5938 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 6498 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BillingInfoStore from "BillingInfoStore" /* 2051 */;
import PaymentSourceStore from "PaymentSourceStore" /* 2052 */;
import SubscriptionStore from "SubscriptionStore" /* 2055 */;
import Constants from "Constants" /* 1084 */;
import allSettled_mod from "allSettled" /* 6419 */;
import size from "module_2" /* 2 */;

let c1, c6, c7;

let metroImportAll;
let metroImportDefault;
let obj = function _waitForSubscriptionsToBeFetched() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let obj5;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let c0 = 0;
            if (!SubscriptionStore.hasFetchedSubscriptions()) {
              if (BillingInfoStore.isSubscriptionFetching) {
                if (BillingInfoStore.isSubscriptionFetching) {
                  c1 = 2;
                  c2 = 1;
                  const obj6 = { value: obj5.sleep(50), done: false };
                  obj5 = closure_128_0(closure_128_1[11]);
                  return obj6;
                }
              } else {
                c1 = 1;
                c2 = 1;
                const obj7 = { value: obj3.fetchSubscriptions(), done: false };
                obj3 = actions_BillingActionCreators;
                return obj7;
              }
            }
          }
        } else if (1 === tmp3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp13) {
        c2 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
function fetchCountryCodeQueryDependencies() {
  function waitForSubscriptionsToBeFetched() {
    return obj(...arguments);
  }
  const items = [];
  if (!PaymentSourceStore.hasFetchedPaymentSources) {
    let paymentSourcesFetchRequest = BillingInfoStore.paymentSourcesFetchRequest;
    const push = items.push;
    if (paymentSourcesFetchRequest == null) {
      obj = actions_BillingActionCreators;
      paymentSourcesFetchRequest = obj.fetchPaymentSources();
    }
    push(paymentSourcesFetchRequest);
  }
  if (!BillingInfoStore.ipCountryCodeLoaded) {
    const push2 = items.push;
    const obj2 = actions_BillingActionCreators;
    push2(obj2.fetchIpCountryCode());
  }
  items.push(waitForSubscriptionsToBeFetched());
  return Promise.allSettled(items);
}
obj = function _httpGetWithCountryCodeQuery() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_4;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_5;
        let obj6;
        let flag;
        let country_code;
        let paymentSourceId;
        let tmp;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp4;
            obj6 = closure_0;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = true;
            }
            country_code = undefined;
            paymentSourceId = undefined;
            tmp = undefined;
            closure_5 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const isAuthenticatedResult = flag && closure_133_3.isAuthenticated();
              if (isAuthenticatedResult) {
                const items = [closure_133_11(), ];
                const self3 = this;
                const self4 = this;
                const promise = new Promise((arg0) => setTimeout(arg0, 10000));
                items[1] = promise;
                c6 = 2;
                c7 = 1;
                const obj5 = { value: race(items), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
          country_code = closure_133_5.getDefaultBillingCountryCode();
          const defaultPaymentSource = closure_133_5.defaultPaymentSource;
          let id;
          if (defaultPaymentSource != null) {
            id = defaultPaymentSource.id;
          }
          let c2 = id;
          if (id == null) {
            c2 = null;
          }
          paymentSourceId = c2;
          tmp = closure_133_6.getPremiumTypeSubscription();
          const tmp18 = null != tmp && null != tmp.paymentSourceId;
          if (tmp18) {
            paymentSourceId = tmp.paymentSourceId;
          }
          if (null === country_code) {
            const ipCountryCode = closure_133_4.ipCountryCode;
            let c3 = ipCountryCode;
            if (ipCountryCode == null) {
              c3 = null;
            }
            country_code = c3;
          }
          closure_5 = {};
          if (null != country_code) {
            closure_5.country_code = country_code;
          }
          if (null != paymentSourceId) {
            closure_5.payment_source_id = paymentSourceId;
          }
          if (null != country_code) {
            if (typeof obj6 === "string") {
              obj6 = { url: obj6, oldFormErrors: true, rejectWithError: false };
            }
            if (typeof obj6.query === "string") {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("string query not supported");
              throw error;
            } else {
              const obj7 = {};
              const merged = Object.assign(closure_5);
              const merged1 = Object.assign(obj6.query);
              obj6.query = obj7;
            }
          }
          const HTTP = closure_133_0(closure_133_1[12]).HTTP;
          c7 = 3;
          const obj8 = { value: HTTP.get(obj6), done: true };
          return obj8;
        }
      } catch (tmp60) {
        c7 = 3;
        throw tmp60;
      }
    }
  });
  return obj(...arguments);
};
({ Endpoints: metroImportDefault, OperatingSystems: metroImportAll } = Constants);
let allSettled = allSettled_mod;
allSettled = allSettled.shim();
let tmp4 = !shared_PlatformUtils.isMobile && !shared_PlatformUtils.isTablet;
if (tmp4) {
  const _module1 = BrowserUtils;
  tmp4 = -1 !== _module1.getChromeVersion();
}
let closure_9 = tmp4;
const result = size.fileFinishedImporting("utils/StoreUtils.tsx");

export const SUPPORTS_WEBP = tmp4;
export const getAssetURL = function getAssetURL(arg0, mimeType, arg2, mp4) {
  let combined;
  let str = mp4;
  if (null == mp4) {
    let tmp;
    if (typeof mimeType !== "string") {
      tmp = "mimeType" in mimeType ? mimeType.mimeType : mimeType.mime_type;
    }
    str = "mp4";
    if ("video/quicktime" !== tmp) {
      str = "mp4";
      if ("video/mp4" !== tmp) {
        str = "image/gif" === tmp ? "gif" : "webp";
      }
    }
  }
  const tmp2 = "webp" !== str || closure_9;
  if (!tmp2) {
    str = "png";
  }
  let id = mimeType;
  if (typeof mimeType !== "string") {
    id = mimeType.id;
  }
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + "https:" + "//" + CDN_HOST + "/app-assets/" + arg0 + "/store/" + id + "." + str;
  } else {
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + "https:" + window.GLOBAL_ENV.API_ENDPOINT + metroImportDefault.STORE_ASSET(arg0, id, str);
  }
  let sum = combined;
  if (null != arg2) {
    const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
    ImageLoaderUtils;
    const _HermesInternal3 = HermesInternal;
    obj = ImageLoaderUtils;
    sum = combined + "?size=" + getBestMediaProxySize(arg2 * obj.getDevicePixelRatio());
  }
  return sum;
};
export { fetchCountryCodeQueryDependencies };
export const httpGetWithCountryCodeQuery = function httpGetWithCountryCodeQuery() {
  return obj(...arguments);
};
export const nativePlatformTypeToSKUOperatingSystem = function nativePlatformTypeToSKUOperatingSystem(platform) {
  if (PlatformUtils.PlatformTypes.WINDOWS === platform) {
    return metroImportAll.WINDOWS;
  } else if (PlatformUtils.PlatformTypes.OSX === platform) {
    return metroImportAll.MACOS;
  } else if (PlatformUtils.PlatformTypes.LINUX === platform) {
    return metroImportAll.LINUX;
  } else {
    return null;
  }
};
export const skuOperatingSystemToText = function skuOperatingSystemToText(arg0) {
  if (metroImportAll.WINDOWS === arg0) {
    const intl3 = intl4.intl;
    return intl3.string(intl4.t["0/xHFO"]);
  } else if (metroImportAll.MACOS === arg0) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t.E4u4n5);
  } else if (metroImportAll.LINUX === arg0) {
    const intl = intl4.intl;
    return intl.string(intl4.t.tcawo3);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unknown operating system value: " + arg0);
    throw error;
  }
};
export const getPrimarySKUForApplication = function getPrimarySKUForApplication(arg0, getApplication, get) {
  const application = getApplication.getApplication(arg0);
  let value = null;
  if (null != application) {
    value = null;
    if (null != application.primarySkuId) {
      value = get.get(application.primarySkuId);
    }
  }
  return value;
};
