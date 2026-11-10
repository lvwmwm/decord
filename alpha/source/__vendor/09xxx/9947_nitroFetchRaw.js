// Module ID: 9947
// Function ID: 9948
// Name: nitroFetchRaw
// Dependencies: [5, 9943, 9940, 9948, 9949, 9939, 9950, 9944]
// Exports: nitroFetchRaw

// Module 9947 (nitroFetchRaw)
import serializeFormData from "serializeFormData" /* 9940 */;
import _mod9943 from "module_9943" /* 9943 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c14, c15;

let obj = function _nitroFetchRaw() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj13;
    let obj18;
    let obj24;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c15 === 2) {
      c15 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c13;
      let request;
      try {
        let redirected;
        let url;
        let bodyBytes;
        let headers;
        let closure_7;
        let config;
        let _withEvents;
        let StringResult1;
        let b;
        let config2;
        let signal;
        c15 = 2;
        if (0 === c14) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_11 = tmp;
            let closure_10 = tmp4;
            redirected = undefined;
            url = undefined;
            bodyBytes = undefined;
            headers = undefined;
            closure_7 = undefined;
            config = undefined;
            _withEvents = undefined;
            StringResult1 = undefined;
            b = undefined;
            request = undefined;
            config2 = undefined;
            signal = undefined;
            if (closure_1 != null) {
              signal = closure_1.signal;
            }
            let aborted;
            if (signal != null) {
              aborted = signal.aborted;
            }
            if (aborted) {
              const obj26 = _mod9943;
              throw obj26.createAbortError(signal);
            } else if (typeof closure_0 !== "string") {
              const _URL = URL;
              if (!(closure_0 instanceof URL)) {
                c14 = 1;
                c15 = 1;
                const obj6 = { value: obj13.resolveRequestBody(closure_0, closure_1), done: false };
                obj13 = serializeFormData;
                return obj6;
              }
            }
          }
        } else {
          if (1 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_1 = value;
              let aborted1;
              if (signal != null) {
                aborted1 = signal.aborted;
              }
              if (aborted1) {
                const obj11 = closure_139_0(closure_139_1[1]);
                throw obj11.createAbortError(signal);
              }
            }
          } else if (2 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_1 = value;
              let aborted2;
              if (signal != null) {
                aborted2 = signal.aborted;
              }
              if (aborted2) {
                const obj9 = closure_139_0(closure_139_1[1]);
                throw obj9.createAbortError(signal);
              }
            }
          } else if (3 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              redirected = value;
              url = redirected.url;
              let closure_2 = url;
              if (url == null) {
                const _String2 = String;
                closure_2 = String(closure_0);
              }
              url = closure_2;
              c14 = 4;
              c15 = 1;
              const obj12 = { value: redirected.arrayBuffer(), done: false };
              return obj12;
            }
          } else if (4 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              bodyBytes = value;
              headers = [];
              const headers1 = redirected.headers;
              const item = headers1.forEach((value, key) => {
                const entry = { key, value };
                return headers.push(entry);
              });
              const response = { url, status: redirected.status, statusText: redirected.statusText, ok: redirected.ok, redirected, headers, bodyBytes, bodyString: "Boolean" };
              redirected = redirected.redirected ?? false;
              c15 = 3;
              const obj15 = { value: response, done: true };
              return obj15;
            }
          } else if (5 === c14) {
            c13 = 0;
            let tmp68 = signal;
            const tmp66 = request;
            if (signal) {
              tmp68 = b;
            }
            if (tmp68) {
              const removed = signal.removeEventListener("abort", b);
            }
            throw tmp66;
          } else if (6 === c14) {
            c13 = 1;
            let closure_14 = request;
            const tmp48 = closure_7;
            if (tmp48) {
              const NetworkInspector2 = closure_139_0(closure_139_1[7]).NetworkInspector;
              const _String = String;
              NetworkInspector2._recordEnd(closure_7, 0, "", [], 0, String(closure_14));
            }
            let aborted3;
            if (signal != null) {
              aborted3 = signal.aborted;
            }
            if (aborted3) {
              const obj4 = closure_139_0(closure_139_1[1]);
              throw obj4.createAbortError(signal);
            } else {
              throw closure_14;
            }
          } else if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c13 = 0;
            const tmp41 = signal && b;
            if (tmp41) {
              const removed1 = signal.removeEventListener("abort", b);
            }
            c15 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else {
            config2 = value;
            let aborted4;
            if (signal != null) {
              aborted4 = signal.aborted;
            }
            if (aborted4) {
              const obj2 = closure_139_0(closure_139_1[1]);
              throw obj2.createAbortError(signal);
            } else {
              const tmp7 = closure_7;
              if (tmp7) {
                const NetworkInspector = closure_139_0(closure_139_1[7]).NetworkInspector;
                const status = config2.status;
                const statusText = config2.statusText;
                headers = config2.headers;
                closure_7 = headers;
                const _recordEnd = NetworkInspector._recordEnd;
                if (headers == null) {
                  closure_7 = [];
                }
                const bodyString1 = config2.bodyString;
                let length;
                if (bodyString1 != null) {
                  length = bodyString1.length;
                }
                let c8 = length;
                if (length == null) {
                  c8 = 0;
                }
                const bodyString = config2.bodyString;
                let c9 = bodyString;
                if (bodyString == null) {
                  c9 = undefined;
                }
                _recordEnd(closure_7, status, statusText, closure_7, c8, undefined, c9);
              }
              c13 = 0;
              let tmp32 = signal;
              const tmp31 = config2;
              if (signal) {
                tmp32 = b;
              }
              if (tmp32) {
                const removed2 = signal.removeEventListener("abort", b);
              }
              c15 = 3;
              obj = { value: tmp31, done: true };
              return obj;
            }
          }
          const NitroFetchHybrid = closure_139_0(closure_139_1[3]).NitroFetchHybrid;
          let createClient;
          if (NitroFetchHybrid != null) {
            createClient = NitroFetchHybrid.createClient;
          }
          if (typeof createClient === "function") {
            const obj16 = closure_139_0(closure_139_1[4]);
            config = obj16.buildNitroRequest(closure_0, closure_1);
            _withEvents = undefined;
            if (closure_1 != null) {
              _withEvents = closure_1._withEvents;
            }
            let customMethod;
            if (_withEvents != null) {
              customMethod = _withEvents.options.customMethod;
            }
            if (null != customMethod) {
              config.method = undefined;
            }
            const obj17 = closure_139_0(closure_139_1[5]);
            if (obj17.isHttpUrl(config.url)) {
              const NetworkInspector3 = closure_139_0(closure_139_1[7]).NetworkInspector;
              if (NetworkInspector3.isEnabled()) {
                const _String3 = String;
                const _Date = Date;
                const _String4 = String;
                const _Math = Math;
                const text = `${String(Date.now())}-`;
                const StringResult = String(Math.random());
                closure_7 = `${String(Date.now())}-` + StringResult.slice(2, 8);
                const NetworkInspector4 = closure_139_0(closure_139_1[7]).NetworkInspector;
                const url2 = config.url;
                let customMethod1;
                const _recordStart = NetworkInspector4._recordStart;
                if (_withEvents != null) {
                  customMethod1 = _withEvents.options.customMethod;
                }
                let method = customMethod1;
                if (customMethod1 == null) {
                  method = config.method;
                }
                let GET = method;
                if (method == null) {
                  GET = "GET";
                }
                const headers2 = config.headers;
                headers = headers2;
                if (headers2 == null) {
                  headers = [];
                }
                _recordStart(closure_7, url2, GET, headers, config.bodyString);
              }
              StringResult1 = undefined;
              if (signal) {
                const _String5 = String;
                const _Math2 = Math;
                StringResult1 = String(Math.random());
              }
              const tmp157 = StringResult1;
              if (tmp157) {
                config.requestId = StringResult1;
              }
              const obj20 = closure_139_0(closure_139_1[3]);
              request = obj20.ensureClient();
              const tmp164 = request;
              if (tmp164) {
                if (typeof request.request === "function") {
                  let withEvents;
                  const tmp167 = signal && StringResult1;
                  if (tmp167) {
                    b = function b() {
                      try {
                        closure_12.cancelRequest(StringResult1);
                      } catch (err) {
                      }
                    };
                    const listener = signal.addEventListener("abort", b, { once: true });
                  }
                  c13 = 2;
                  if (_withEvents) {
                    withEvents = obj21.requestWithEvents(config, _withEvents.options, _withEvents.onResponseStarted, _withEvents.onData, _withEvents.onProgress);
                  } else {
                    withEvents = obj21.request(config);
                  }
                  c14 = 7;
                  c15 = 1;
                  const obj22 = { value: withEvents, done: false };
                  return obj22;
                }
              }
              const obj23 = closure_139_0(closure_139_1[3]);
              throw obj23.clientUnavailableError();
            } else {
              c15 = 3;
              const obj25 = { value: obj18.fetchLocalResource(config), done: true };
              obj18 = closure_139_0(closure_139_1[6]);
              return obj25;
            }
          } else {
            const _fetch = fetch;
            c14 = 3;
            c15 = 1;
            const obj27 = { value: fetch(closure_0, closure_1), done: false };
            return obj27;
          }
        }
        const _Blob = Blob;
        if (typeof Blob !== "undefined") {
          let body;
          if (closure_1 != null) {
            body = closure_1.body;
          }
          const _Blob2 = Blob;
          if (body instanceof Blob) {
            c14 = 2;
            c15 = 1;
            const obj28 = { value: obj24.resolveBlobBody(closure_1), done: false };
            obj24 = closure_139_0(closure_139_1[2]);
            return obj28;
          }
        }
      } catch (tmp191) {
        request = tmp191;
        if (0 === c13) {
          c15 = 3;
          throw tmp191;
        } else if (1 === tmp193) {
          c14 = 5;
        } else {
          c14 = 6;
        }
      }
    }
  });
  return obj(...arguments);
};

export function nitroFetchRaw(arg0, arg1) {
  return obj(...arguments);
}
