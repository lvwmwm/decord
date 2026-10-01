// Module ID: 5092
// Function ID: 5093
// Name: StoreUtils
// Dependencies: [5, 502, 4490, 4491, 4494, 1074, 5093, 5091, 5172, 1432, 5174, 1271, 1364, 1115, 2]
// Exports: getAssetURL, getPrimarySKUForApplication, httpGetWithCountryCodeQuery, nativePlatformTypeToSKUOperatingSystem, skuOperatingSystemToText

// Module 5092 (StoreUtils)
import intl4 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1432 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5091 */;
import BrowserUtils from "BrowserUtils" /* 5172 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BillingInfoStore from "BillingInfoStore" /* 4490 */;
import PaymentSourceStore from "PaymentSourceStore" /* 4491 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Constants from "Constants" /* 1074 */;
import allSettled_mod from "allSettled" /* 5093 */;
import size from "module_2" /* 2 */;

let c3, c7, c8;

let metroImportAll;
let metroImportDefault;
let obj = function _httpGetWithCountryCodeQuery() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_6;
    let tmp3;
    function waitForSubscriptionsToBeFetched() {
      closure_0 = closure_2(function*(arg0, value) {
        let obj2;
        closure_0 = arg0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let c1 = 0;
                const tmp16 = closure_0;
                if (closure_1_6.hasFetchedSubscriptions()) {
                  tmp16();
                } else if (closure_1_4.isSubscriptionFetching) {
                  function wait() {
                    if (closure_2_4.isSubscriptionFetching) {
                      const _setTimeout = setTimeout;
                      const timerId = setTimeout(wait, 50);
                    } else {
                      closure_0();
                    }
                  }
                  wait();
                } else {
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: obj2.fetchSubscriptions(), done: false };
                  obj2 = closure_0(c1[10]);
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0();
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp12) {
            c3 = 3;
            throw tmp12;
          }
        }
      });
      const promise = new Promise(function() {
        return closure_0(...arguments);
      });
      return promise;
    }
    let closure_0 = arg0;
    let closure_1 = value;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let premiumTypeSubscription;
        let obj8;
        let flag;
        let closure_2;
        let closure_3;
        let country_code;
        let paymentSourceId;
        let closure_7;
        let num = 2;
        c8 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            premiumTypeSubscription = tmp4;
            let closure_5 = tmp;
            obj8 = closure_0;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = true;
            }
            closure_2 = undefined;
            closure_3 = undefined;
            country_code = undefined;
            paymentSourceId = undefined;
            premiumTypeSubscription = undefined;
            closure_7 = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "flex", done: true };
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_2 = closure_134_3.isAuthenticated();
              const tmp89 = flag;
              if (tmp89) {
                const tmp6 = closure_2;
                if (tmp6) {
                  closure_3 = [];
                  if (!closure_134_5.hasFetchedPaymentSources) {
                    const paymentSourcesFetchRequest = closure_134_4.paymentSourcesFetchRequest;
                    closure_3 = paymentSourcesFetchRequest;
                    const push = closure_3.push;
                    if (paymentSourcesFetchRequest == null) {
                      let obj3 = closure_134_0(closure_134_1[10]);
                      closure_3 = obj3.fetchPaymentSources();
                    }
                    push(closure_3);
                  }
                  if (!closure_134_4.ipCountryCodeLoaded) {
                    const push2 = closure_3.push;
                    let obj4 = closure_134_0(closure_134_1[10]);
                    push2(obj4.fetchIpCountryCode());
                  }
                  closure_3.push(waitForSubscriptionsToBeFetched());
                  const items = [Promise.allSettled(closure_3), ];
                  const self3 = this;
                  const self4 = this;
                  let promise = new Promise((arg0) => setTimeout(arg0, 10000));
                  items[1] = promise;
                  c7 = 2;
                  c8 = 1;
                  const obj7 = { value: race(items), done: false };
                  return obj7;
                }
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          }
          country_code = closure_134_5.getDefaultBillingCountryCode();
          const defaultPaymentSource = closure_134_5.defaultPaymentSource;
          let id;
          if (defaultPaymentSource != null) {
            id = defaultPaymentSource.id;
          }
          let c2 = id;
          if (id == null) {
            c2 = null;
          }
          paymentSourceId = c2;
          let tmp16 = closure_134_6;
          premiumTypeSubscription = closure_134_6.getPremiumTypeSubscription();
          const tmp18 = null != premiumTypeSubscription && null != premiumTypeSubscription.paymentSourceId;
          if (tmp18) {
            paymentSourceId = premiumTypeSubscription.paymentSourceId;
          }
          if (null === country_code) {
            const ipCountryCode = closure_134_4.ipCountryCode;
            let c4 = ipCountryCode;
            if (ipCountryCode == null) {
              c4 = null;
            }
            country_code = c4;
          }
          closure_7 = {};
          if (null != country_code) {
            closure_7.country_code = country_code;
          }
          if (null != paymentSourceId) {
            closure_7.payment_source_id = paymentSourceId;
          }
          if (null != country_code) {
            if (typeof obj8 === "string") {
              obj8 = { url: obj8, oldFormErrors: true, rejectWithError: false };
            }
            if (typeof obj8.query === "string") {
              const _Error = Error;
              const self = this;
              const str = "string query not supported";
              const self2 = this;
              const error = new Error("string query not supported");
              throw error;
            } else {
              const obj9 = {};
              const merged = Object.assign(closure_7);
              const merged1 = Object.assign(obj8.query);
              obj8.query = obj9;
            }
          }
          const HTTP = closure_134_0(closure_134_1[11]).HTTP;
          c8 = 3;
          const obj10 = { value: HTTP.get(obj8), done: true };
          return obj10;
        }
      } catch (tmp82) {
        c8 = 3;
        throw tmp82;
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
  let num = -1;
  tmp4 = -1 !== _module1.getChromeVersion();
}
let closure_9 = tmp4;
const result = size.fileFinishedImporting("utils/StoreUtils.tsx");

export const SUPPORTS_WEBP = tmp4;
export const getAssetURL = function getAssetURL(arg0, mimeType, arg2, mp4) {
  let combined;
  let str = mp4;
  if (null == mp4) {
    str = "mp4";
    if ("video/quicktime" !== (mimeType.mimeType || mimeType.mime_type)) {
      str = "mp4";
      if ("video/mp4" !== (mimeType.mimeType || mimeType.mime_type)) {
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
