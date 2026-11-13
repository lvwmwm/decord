// Module ID: 9978
// Function ID: 9979
// Name: prefetch
// Dependencies: [5, 9975, 9967, 9976, 9963, 9973]
// Exports: __readAutoPrefetchQueue, prefetch, prefetchOnAppStart, removeAllFromAutoprefetch, removeFromAutoPrefetch

// Module 9978 (prefetch)
import serializeFormData from "serializeFormData" /* 9967 */;
import hybridObject from "hybridObject" /* 9973 */;
import NitroFetchHybrid2 from "NitroFetchHybrid" /* 9975 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let _false, c1, c5, closure_3, closure_4, closure_5, config, prefetchKey2;

let obj = function _prefetch() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let prefetchKey = arg1;
    let c6 = 0;
    let c7 = 0;
    return (async function(arg0, value) {
      let obj6;
      let obj9;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let someResult1;
          let closure_6;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              _false = undefined;
              closure_3 = undefined;
              prefetchKey = undefined;
              someResult1 = undefined;
              closure_6 = undefined;
              const NitroFetchHybrid = NitroFetchHybrid2.NitroFetchHybrid;
              let createClient;
              const tmp57 = closure_0;
              if (NitroFetchHybrid != null) {
                createClient = NitroFetchHybrid.createClient;
              }
              if (typeof createClient === "function") {
                c6 = 1;
                c7 = 1;
                const obj5 = { value: obj9.resolveRequestBody(tmp57, prefetchKey), done: false };
                obj9 = serializeFormData;
                return obj5;
              }
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              prefetchKey = value;
              c6 = 2;
              c7 = 1;
              const obj8 = { value: obj6.resolveBlobBody(prefetchKey), done: false };
              obj6 = closure_133_0(closure_133_1[2]);
              return obj8;
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              prefetchKey = value;
              const obj13 = closure_133_0(closure_133_1[3]);
              _false = obj13.buildNitroRequest(closure_0, prefetchKey);
              const headers3 = _false.headers;
              let someResult;
              if (headers3 != null) {
                someResult = headers3.some((key) => {
                  const str = key.key;
                  return "prefetchkey" === str.toLowerCase();
                });
              }
              let c2 = someResult;
              if (someResult == null) {
                c2 = false;
              }
              closure_3 = c2;
              prefetchKey = undefined;
              if (prefetchKey != null) {
                prefetchKey = prefetchKey.prefetchKey;
              }
              const tmp11 = !closure_3 && prefetchKey;
              if (tmp11) {
                const headers = _false.headers;
                closure_3 = headers;
                const tmp14 = _false;
                if (headers == null) {
                  closure_3 = [];
                }
                const entry = { key: "prefetchKey", value: prefetchKey };
                const items = [entry];
                tmp14.headers = closure_3.concat(items);
              }
              const headers2 = _false.headers;
              someResult1 = undefined;
              if (headers2 != null) {
                someResult1 = headers2.some((key) => {
                  const str = key.key;
                  return "prefetchkey" === str.toLowerCase();
                });
              }
              const tmp23 = someResult1;
              if (tmp23) {
                const obj3 = closure_133_0(closure_133_1[1]);
                closure_6 = obj3.ensureClient();
                const tmp30 = closure_6 && typeof closure_6.prefetch === "function";
                if (tmp30) {
                  c6 = 3;
                  c7 = 1;
                  const obj11 = { value: closure_6.prefetch(_false), done: false };
                  return obj11;
                }
              } else {
                const _Error = Error;
                const self = this;
                let str = "prefetch requires a \"prefetchKey\" header";
                const self2 = this;
                const error = new Error("prefetch requires a \"prefetchKey\" header");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          }
          c7 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp45) {
          c7 = 3;
          throw tmp45;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _prefetchOnAppStart() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let prefetchKey = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value) {
      let obj10;
      let obj3;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let c3;
          let closure_8;
          let secureString;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              config = undefined;
              c3 = undefined;
              prefetchKey = undefined;
              prefetchKey2 = undefined;
              headers = undefined;
              obj = undefined;
              closure_8 = undefined;
              secureString = undefined;
              c8 = 1;
              c9 = 1;
              const obj5 = { value: obj10.resolveRequestBody(closure_0, prefetchKey), done: false };
              obj10 = serializeFormData;
              return obj5;
            }
          } else if (1 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              prefetchKey = value;
              c8 = 2;
              c9 = 1;
              const obj7 = { value: obj3.resolveBlobBody(prefetchKey), done: false };
              obj3 = closure_133_0(closure_133_1[2]);
              return obj7;
            }
          } else {
            if (2 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                return { value, done: true };
              } else {
                prefetchKey = value;
                const obj9 = closure_133_0(closure_133_1[3]);
                config = obj9.buildNitroRequest(closure_0, prefetchKey);
                const headers1 = config.headers;
                value = undefined;
                if (headers1 != null) {
                  const iter = headers1.find((key) => {
                    const str = key.key;
                    return "prefetchkey" === str.toLowerCase();
                  });
                  if (iter != null) {
                    value = iter.value;
                  }
                }
                c3 = value;
                prefetchKey = undefined;
                if (prefetchKey != null) {
                  prefetchKey = prefetchKey.prefetchKey;
                }
                config = c3;
                if (c3 == null) {
                  config = prefetchKey;
                }
                prefetchKey2 = config;
                const tmp20 = prefetchKey2;
                if (tmp20) {
                  headers = config.headers;
                  closure_3 = headers;
                  if (headers == null) {
                    closure_3 = [];
                  }
                  headers = closure_3.reduce((acc, value) => {
                    value = value.value;
                    const StringResult = String(value.key);
                    acc[StringResult] = String(value);
                    return acc;
                  }, {});
                  obj = { url: config.url, prefetchKey: prefetchKey2, headers };
                  const method = config.method && "GET" !== config.method;
                  if (method) {
                    obj.method = config.method;
                  }
                  if (undefined !== config.bodyString) {
                    obj.bodyString = config.bodyString;
                  }
                  const bodyBytes = config.bodyBytes && config.bodyBytes.byteLength > 0;
                  if (bodyBytes) {
                    const _Uint8Array = Uint8Array;
                    const self3 = this;
                    const self4 = this;
                    const base64FromBytes = closure_133_0(closure_133_1[4]).base64FromBytes;
                    closure_133_0(closure_133_1[4]);
                    const uint8Array = new Uint8Array(config.bodyBytes);
                    obj.bodyBytesBase64 = base64FromBytes(uint8Array);
                  }
                  const bodyFormData = config.bodyFormData && config.bodyFormData.length > 0;
                  if (bodyFormData) {
                    obj.bodyFormData = config.bodyFormData;
                  }
                  if (typeof config.timeoutMs === "number") {
                    obj.timeoutMs = config.timeoutMs;
                  }
                  if (config.priority) {
                    obj.priority = config.priority;
                  }
                  if (false === config.followRedirects) {
                    obj.followRedirects = false;
                  }
                  const credentials = config.credentials && "same-origin" !== config.credentials;
                  if (credentials) {
                    obj.credentials = config.credentials;
                  }
                  if (typeof config.prefetchCacheTtlMs === "number") {
                    obj.prefetchCacheTtlMs = config.prefetchCacheTtlMs;
                  }
                  closure_8 = [];
                  c7 = 2;
                  const NativeStorage = closure_133_0(closure_133_1[5]).NativeStorage;
                  secureString = NativeStorage.getSecureString(closure_133_4);
                  const tmp85 = secureString;
                  if (tmp85) {
                    const _JSON = JSON;
                    closure_8 = JSON.parse(secureString);
                  }
                  const _Array = Array;
                  if (!Array.isArray(closure_8)) {
                    closure_8 = [];
                  }
                  c7 = 1;
                  if (closure_8.some((prefetchKey) => prefetchKey && prefetchKey.prefetchKey === prefetchKey2)) {
                    closure_8 = closure_8.filter((prefetchKey) => prefetchKey && prefetchKey.prefetchKey !== prefetchKey2);
                  }
                  closure_8.push(obj);
                  const NativeStorage2 = closure_133_0(closure_133_1[5]).NativeStorage;
                  const _JSON2 = JSON;
                  NativeStorage2.setSecureString(closure_133_4, JSON.stringify(closure_8));
                  c7 = 0;
                } else {
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  let str = "prefetchOnAppStart requires a \"prefetchKey\" (header or init.prefetchKey)";
                  const error = new Error("prefetchOnAppStart requires a \"prefetchKey\" (header or init.prefetchKey)");
                  throw error;
                }
              }
            } else if (3 === c8) {
              c7 = 0;
              let closure_10 = headers;
              const _console = console;
              console.warn("Failed to persist prefetch queue", closure_10);
            } else {
              c7 = 1;
              closure_8 = [];
            }
            c9 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp110) {
          headers = tmp110;
          if (0 === c7) {
            c9 = 3;
            throw tmp110;
          } else if (1 === tmp112) {
            c8 = 3;
          } else {
            c8 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _removeFromAutoPrefetch() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c4;
      try {
        let length;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let closure_2 = tmp;
            length = [];
            c4 = 2;
            const NativeStorage3 = hybridObject.NativeStorage;
            const secureString = NativeStorage3.getSecureString(nitrofetch_autoprefetch_queue);
            if (secureString) {
              const _JSON = JSON;
              length = JSON.parse(secureString);
            }
            const _Array = Array;
            if (!Array.isArray(length)) {
              length = [];
            }
            c4 = 1;
            length = length.filter((prefetchKey) => prefetchKey && prefetchKey.prefetchKey !== closure_1_0);
            if (0 === length.length) {
              const NativeStorage2 = closure_130_0(closure_130_1[5]).NativeStorage;
              NativeStorage2.removeSecureString(closure_130_4);
            } else {
              length = length.length;
              if (length !== length.length) {
                const NativeStorage = closure_130_0(closure_130_1[5]).NativeStorage;
                length = closure_130_4;
                const _JSON2 = JSON;
                NativeStorage.setSecureString(closure_130_4, JSON.stringify(length));
              }
            }
            c4 = 0;
          }
        } else if (1 === tmp4) {
          c4 = 0;
          const _console = console;
          console.warn("Failed to remove from prefetch queue", closure_3);
        } else {
          c4 = 1;
          length = [];
        }
        c6 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp28) {
        closure_3 = tmp28;
        if (0 === c4) {
          c6 = 3;
          throw tmp28;
        } else if (1 === tmp30) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _removeAllFromAutoprefetch() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp3;
            const NativeStorage = hybridObject.NativeStorage;
            NativeStorage.removeSecureString(nitrofetch_autoprefetch_queue);
            c3 = 0;
          }
        } else {
          c3 = 0;
          closure_0 = closure_2;
          const _console = console;
          console.warn("Failed to clear prefetch queue", closure_0);
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp13) {
        closure_2 = tmp13;
        if (0 === c3) {
          c4 = 3;
          throw tmp13;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const nitrofetch_autoprefetch_queue = "nitrofetch_autoprefetch_queue";

export function prefetch(arg0, arg1) {
  return obj(...arguments);
}
export function prefetchOnAppStart(arg0, arg1) {
  return obj(...arguments);
}
export function removeFromAutoPrefetch(arg0) {
  return obj(...arguments);
}
export function removeAllFromAutoprefetch() {
  return obj(...arguments);
}
export function __readAutoPrefetchQueue() {
  try {
    const NativeStorage = hybridObject.NativeStorage;
    const secureString = NativeStorage.getSecureString(nitrofetch_autoprefetch_queue);
    const tmp5 = secureString;
    if (tmp5) {
      let items;
      const _JSON = JSON;
      const parsed = JSON.parse(secureString);
      const _Array = Array;
      if (Array.isArray(parsed)) {
        items = parsed;
      } else {
        items = [];
      }
      return items;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
}
