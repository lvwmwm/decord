// Module ID: 9991
// Function ID: 9992
// Dependencies: [5, 9992, 9998, 9999, 10001, 10006, 9997]
// Exports: nitroFetch

// Module 9991
import NitroRequest from "NitroRequest" /* 9992 */;
import _mod9998 from "module_9998" /* 9998 */;
import serializeFormData from "serializeFormData" /* 9999 */;
import nitroFetchRaw from "nitroFetchRaw" /* 10006 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c8, c9;

let obj = function _nitroFetch() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let cache2;
    let obj12;
    let obj14;
    let obj4;
    let obj7;
    let redirect2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_2;
        let signal2;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            let closure_7 = tmp;
            let closure_6 = tmp4;
            closure_2 = undefined;
            signal2 = undefined;
            if (closure_0 instanceof NitroRequest.NitroRequest) {
              const obj3 = { signal: signal2, redirect: redirect2, cache: cache2 };
              const merged = Object.assign(closure_1);
              let signal;
              if (closure_1 != null) {
                signal = closure_1.signal;
              }
              signal2 = signal;
              if (signal == null) {
                signal2 = tmp72.signal;
              }
              let redirect;
              if (closure_1 != null) {
                redirect = closure_1.redirect;
              }
              redirect2 = redirect;
              if (redirect == null) {
                redirect2 = tmp72.redirect;
              }
              let cache;
              if (closure_1 != null) {
                cache = closure_1.cache;
              }
              cache2 = cache;
              if (cache == null) {
                cache2 = tmp72.cache;
              }
              closure_1 = obj3;
            }
            let stream;
            if (closure_1 != null) {
              stream = closure_1.stream;
            }
            if (true === stream) {
              const isHttpUrl = _mod9998.isHttpUrl;
              const obj11 = _mod9998;
              if (isHttpUrl(obj11.getUrlString(closure_0))) {
                c8 = 1;
                c9 = 1;
                const obj5 = { value: obj14.resolveRequestBody(closure_0, closure_1), done: false };
                obj14 = serializeFormData;
                return obj5;
              }
            }
            let redirect1;
            if (closure_1 != null) {
              redirect1 = closure_1.redirect;
            }
            let follow = redirect1;
            if (redirect1 == null) {
              follow = "follow";
            }
            closure_2 = follow;
            c8 = 3;
            c9 = 1;
            const obj6 = { value: obj12.nitroFetchRaw(closure_0, closure_1), done: false };
            obj12 = nitroFetchRaw;
            return obj6;
          }
        } else if (1 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_1 = value;
            c8 = 2;
            c9 = 1;
            const obj9 = { value: obj7.resolveBlobBody(closure_1), done: false };
            obj7 = closure_135_0(closure_135_1[3]);
            return obj9;
          }
        } else if (2 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_1 = value;
            c9 = 3;
            const obj13 = { value: obj4.nitroStreamFetch(closure_0, closure_1), done: true };
            obj4 = closure_135_0(closure_135_1[4]);
            return obj13;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          signal2 = value;
          if ("error" === closure_2) {
            if (closure_135_3.has(signal2.status)) {
              const headers = signal2.headers;
              if (headers.some((key) => {
                const str = key.key;
                return "location" === str.toLowerCase();
              })) {
                const _TypeError = TypeError;
                const _HermesInternal = HermesInternal;
                let str = "\"";
                const self3 = this;
                const self4 = this;
                const typeError = new TypeError("redirect mode is \"error\": redirected request to \"" + signal2.url + "\"");
                throw typeError;
              }
            }
          }
          const response = { url: signal2.url, status: signal2.status, statusText: signal2.statusText, ok: signal2.ok, redirected: signal2.redirected, headers: signal2.headers, bodyBytes: signal2.bodyBytes, bodyString: signal2.bodyString };
          const self = this;
          const self2 = this;
          const nitroResponse = new closure_135_0(closure_135_1[6]).NitroResponse(response);
          c9 = 3;
          const obj16 = { value: nitroResponse, done: true };
          return obj16;
        }
      } catch (tmp66) {
        c9 = 3;
        throw tmp66;
      }
    }
  });
  return obj(...arguments);
};
new Set([301, 302, 303, 307, 308]);

export function nitroFetch(url, request) {
  return obj(...arguments);
}
