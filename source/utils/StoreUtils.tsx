// Module ID: 4361
// Function ID: 38673
// Name: _httpGetWithCountryCodeQuery
// Dependencies: []
// Exports: getAssetURL, getPrimarySKUForApplication, httpGetWithCountryCodeQuery, nativePlatformTypeToSKUOperatingSystem, skuOperatingSystemToText

// Module 4361 (_httpGetWithCountryCodeQuery)
async function _httpGetWithCountryCodeQuery(arg0, arg1) {
  const fn = function*(url) {
    let flag = arg1;
    if (flag === undefined) {
      flag = true;
    }
    yield undefined;
    if (flag) {
      if (authenticated.isAuthenticated()) {
        const items = [];
        if (!defaultBillingCountryCode.hasFetchedPaymentSources) {
          let paymentSourcesFetchRequest = closure_4.paymentSourcesFetchRequest;
          if (null == paymentSourcesFetchRequest) {
            let obj = callback(closure_1[10]);
            paymentSourcesFetchRequest = obj.fetchPaymentSources();
          }
          items.push(paymentSourcesFetchRequest);
        }
        if (!closure_4.ipCountryCodeLoaded) {
          let obj1 = callback(closure_1[10]);
          items.push(obj1.fetchIpCountryCode());
        }
        items.push(function waitForSubscriptionsToBeFetched() {
          return new Promise(() => {
            let closure_0 = callback(async (arg0) => {
              function wait() { ... }
              return /* F38680 */ function*() { ... };
            });
            return function() {
              return callback(...arguments);
            };
          }());
        }());
        const items1 = [Promise.allSettled(items), ];
        const promise = new Promise((arg0) => setTimeout(arg0, 10000));
        items1[1] = promise;
        yield Promise.race(items1);
      }
    }
    let defaultBillingCountryCode = defaultBillingCountryCode.getDefaultBillingCountryCode();
    const defaultPaymentSource = defaultBillingCountryCode.defaultPaymentSource;
    let id;
    if (null != defaultPaymentSource) {
      id = defaultPaymentSource.id;
    }
    let paymentSourceId = null;
    if (null != id) {
      paymentSourceId = id;
    }
    const premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
    if (tmp23) {
      paymentSourceId = premiumTypeSubscription.paymentSourceId;
    }
    if (null === defaultBillingCountryCode) {
      const ipCountryCode = closure_4.ipCountryCode;
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
        obj = { CONVERSATIONS: null, replace: null, push: null, url };
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
    const HTTP = callback(closure_1[11]).HTTP;
    return HTTP.get(tmp26);
  };
  fn.next();
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ Endpoints: closure_7, OperatingSystems: closure_8 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
importDefault(dependencyMap[6]).shim();
let tmp4 = !arg1(dependencyMap[7]).isMobile && !arg1(dependencyMap[7]).isTablet;
if (tmp4) {
  tmp4 = -1 !== arg1(dependencyMap[8]).getChromeVersion();
  const obj2 = arg1(dependencyMap[8]);
}
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("utils/StoreUtils.tsx");

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
    const obj = thumbnailAssetId(dependencyMap[9]);
    const _HermesInternal3 = HermesInternal;
    sum = combined + "?size=" + obj.getBestMediaProxySize(heroWidth * thumbnailAssetId(dependencyMap[9]).getDevicePixelRatio());
    const obj2 = thumbnailAssetId(dependencyMap[9]);
  }
  return sum;
};
export const httpGetWithCountryCodeQuery = function httpGetWithCountryCodeQuery(result) {
  return _httpGetWithCountryCodeQuery(...arguments);
};
export const nativePlatformTypeToSKUOperatingSystem = function nativePlatformTypeToSKUOperatingSystem(platform) {
  if (arg1(dependencyMap[12]).PlatformTypes.WINDOWS === platform) {
    return constants.WINDOWS;
  } else if (arg1(dependencyMap[12]).PlatformTypes.OSX === platform) {
    return constants.MACOS;
  } else if (arg1(dependencyMap[12]).PlatformTypes.LINUX === platform) {
    return constants.LINUX;
  } else {
    return null;
  }
};
export const skuOperatingSystemToText = function skuOperatingSystemToText(arg0) {
  if (constants.WINDOWS === arg0) {
    const intl3 = arg1(dependencyMap[13]).intl;
    return intl3.string(arg1(dependencyMap[13]).t.0/xHFO);
  } else if (constants.MACOS === arg0) {
    const intl2 = arg1(dependencyMap[13]).intl;
    return intl2.string(arg1(dependencyMap[13]).t.E4u4n5);
  } else if (constants.LINUX === arg0) {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.tcawo3);
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
