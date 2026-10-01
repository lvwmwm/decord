// Module ID: 10722
// Function ID: 10723
// Name: AppStoreMetadataActionCreators
// Dependencies: [5, 1074, 1091, 573, 1271, 559, 2]
// Exports: fetchAppStoreMetadata, getAppStoreMetadataCacheKey

// Module 10722 (AppStoreMetadataActionCreators)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1091 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Dispatcher from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

let c5, constants;

function clearRetryState(arg0) {
  map2.delete(arg0);
  map3.delete(arg0);
}
const Endpoints = Constants.Endpoints;
let closure_5 = 10 * DurationsDefault.Millis.SECOND;
let closure_6 = 5 * DurationsDefault.Millis.MINUTE;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  map.clear();
  map1.clear();
  map3.clear();
});
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreMetadataActionCreators.tsx");

export const getAppStoreMetadataCacheKey = function getAppStoreMetadataCacheKey(os) {
  return "" + os.os + "#" + os.storeAppId;
};
export const fetchAppStoreMetadata = function fetchAppStoreMetadata(os) {
  os = os.os;
  const storeAppId = os.storeAppId;
  const combined = "" + os + "#" + storeAppId;
  let obj = map;
  if (map.has(combined)) {
    let value = obj.get(combined);
    if (value == null) {
      value = null;
    }
    return resolve(value);
  } else {
    let obj2 = map1;
    const value3 = map1.get(combined);
    const tmp3 = null;
    if (null != value3) {
      return value3;
    } else {
      const tmp4 = map3;
      const value4 = map3.get(combined);
      if (null != value4) {
        let _Date = Date;
        if (Date.now() < value4.retryAt) {
          return Promise.reject(value4.error);
        }
      }
      const tmp7 = (async function(arg0, value) {
        let closure_0;
        let closure_1;
        let error;
        let obj4;
        let timestamp;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            let body;
            let tmp;
            c5 = 2;
            if (0 === constants) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                os = tmp4;
                body = undefined;
                tmp = undefined;
                c3 = 2;
                const HTTP = os(error[4]).HTTP;
                const request = { url: constants.QUESTS_APP_STORE_METADATA, query: obj4, rejectWithError: true };
                obj4 = { os, app_id: storeAppId };
                constants = 3;
                c5 = 1;
                const obj5 = { value: HTTP.get(request), done: false };
                return obj5;
              }
            } else if (1 === constants) {
              c3 = 0;
              set.delete(closure_129_2);
              throw error;
            } else if (2 === constants) {
              c3 = 1;
              if (404 === error.status) {
                const result = map.set(closure_129_2, null);
                clearRetryState(closure_129_2);
                c3 = 0;
                set.delete(closure_129_2);
                c5 = 3;
                return { value: null, done: true };
              } else {
                tmp = map2.get(closure_129_2);
                if (null == tmp) {
                  const self = this;
                  const self2 = this;
                  const tmp33 = new tmp(error[5])(c5, closure_1_6);
                  tmp = tmp33;
                  const result1 = map2.set(closure_129_2, tmp);
                }
                const obj6 = { retryAt: timestamp + tmp.fail(), error };
                const _Date = Date;
                timestamp = Date.now();
                const result2 = set(closure_129_2, obj6);
                throw error;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              set.delete(closure_129_2);
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              body = value.body;
              const result3 = map.set(closure_129_2, body);
              clearRetryState(closure_129_2);
              c3 = 0;
              set.delete(closure_129_2);
              c5 = 3;
              const obj = { value: body, done: true };
              return obj;
            }
          } catch (tmp65) {
            error = tmp65;
            if (0 === c3) {
              c5 = 3;
              throw tmp65;
            } else if (1 === tmp67) {
              constants = 1;
            } else {
              constants = 2;
            }
          }
        }
      })();
      let result = obj2.set(combined, tmp7);
      return tmp7;
    }
  }
};
