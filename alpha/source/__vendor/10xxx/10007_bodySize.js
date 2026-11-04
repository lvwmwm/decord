// Module ID: 10007
// Function ID: 10008
// Name: bodySize
// Dependencies: [5, 9988, 9987, 9985]
// Exports: bodySize, sendXMLHttpRequest

// Module 10007 (bodySize)
import stringToUTF8 from "stringToUTF8" /* 9988 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c5, closure_14, onChunk;

function responseHeaders(arr) {
  const obj = {};
  const item = arr.forEach((item, index) => {
    obj[index] = item;
  });
  return obj;
}
function isBinaryResponse(arg0) {
  return "arraybuffer" === arg0 || "blob" === arg0;
}
const set = new Set(["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]);
const re6 = /(?:^|,)\s*text\/event-stream\s*(?:[;,]|$)/i;

export function bodySize(size) {
  let num = 0;
  if (null != size) {
    let byteLength;
    if (typeof size === "string") {
      const obj2 = stringToUTF8;
      byteLength = obj2.utf8Length(size);
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      if (!(size instanceof ArrayBuffer)) {
        const _ArrayBuffer = ArrayBuffer;
        if (!ArrayBuffer.isView(size)) {
          const _Blob = Blob;
          if (typeof Blob !== "undefined") {
            const _Blob2 = Blob;
            if (size instanceof Blob) {
              byteLength = size.size;
            }
          }
          const _URLSearchParams = URLSearchParams;
          if (typeof URLSearchParams !== "undefined") {
            const _URLSearchParams2 = URLSearchParams;
            if (size instanceof URLSearchParams) {
              const obj = stringToUTF8;
              byteLength = obj.utf8Length(size.toString());
            }
          }
        }
      }
      byteLength = size.byteLength;
    }
    num = byteLength;
  }
  return num;
}
export function sendXMLHttpRequest(request, arg1) {
  let _true;
  const f1266922 = () => {
    const items = [...arguments];
    const tmp2 = c3;
    if (!tmp2) {
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        HermesBuiltin.apply(f96749, items1, undefined);
      } catch (tmp10) {
        abortController.abort();
        fail(tmp10);
      }
    }
  };
  function performRequest() {
    return closure_0(...arguments);
  }
  let closure_0 = request;
  let closure_1 = arg1;
  const abortController = new AbortController();
  let c3 = false;
  function complete(arg0) {
    const tmp = c3;
    if (!tmp) {
      c3 = true;
      closure_1.onComplete("");
    }
  }
  function fail(message) {
    const tmp = c3;
    if (!tmp) {
      const _Error = Error;
      if (message instanceof Error) {
        message = message.message;
      } else {
        const _String = String;
        message = String(message);
      }
      if (typeof complete === "function") {
        const tmp5 = c3;
        if (!tmp5) {
          c3 = true;
          closure_1.onComplete(message);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  let c6 = false;
  function respond(arg0, arg1, arg2) {
    c6 = true;
    closure_1.onResponse(arg0, arg1, arg2);
  }
  const f96746 = (httpStatusCode) => {
    httpStatusCode = httpStatusCode.httpStatusCode;
    const nitroHeaders = new request(closure_1[2]).NitroHeaders(httpStatusCode.allHeadersAsList);
    const obj = {};
    const item = nitroHeaders.forEach((item, index) => {
      obj[index] = item;
    });
    if (typeof respond === "function") {
      c6 = true;
      closure_1_1.onResponse(httpStatusCode, obj, tmp2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  let f126692 = f1266922;
  let c9 = null;
  let responseType = request.responseType;
  let tmp2 = "arraybuffer" === responseType;
  if (!tmp2) {
    let str = "blob";
    tmp2 = "blob" === responseType;
  }
  let closure_10 = !tmp2;
  function flushProgress() {
    if (null != c9) {
      c9 = null;
      closure_1.onProgress(c9);
    }
  }
  const f96748 = (arg0) => {
    const tmp = closure_1_6;
    if (tmp) {
      const tmp2 = closure_1_10;
      if (!tmp2) {
        closure_1_1.onProgress(arg0);
      }
    }
    let closure_1_9 = arg0;
  };
  let c13 = false;
  let c14 = 0;
  const f96749 = (byteLength) => {
    c9 = null;
    c13 = true;
    closure_14 = closure_14 + byteLength.byteLength;
    const responseType = f96749.responseType;
    let tmp2 = "arraybuffer" === responseType;
    onChunk = onChunk.onChunk;
    const _Uint8Array = Uint8Array;
    if (!tmp2) {
      tmp2 = "blob" === responseType;
    }
    let substr = byteLength;
    if (tmp2) {
      substr = byteLength.slice(0);
    }
    const _Uint8Array1 = new _Uint8Array(substr);
    onChunk(_Uint8Array1, closure_14);
  };
  f126692 = f1266922;
  function onData(buf2stringResult) {
    f126692(buf2stringResult);
    return !c3;
  }
  const str2 = request.method;
  let closure_17 = str2.toUpperCase();
  closure_0 = abortController(function*(arg0, value) {
    let closure_4;
    let entries;
    let obj10;
    let obj5;
    let tmp59;
    let tmp62;
    let tmp64;
    let tmp66;
    let v1;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let _Uint8Array;
        let closure_2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            _Uint8Array = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            c3 = 1;
            let str = "omit";
            if (Uint8Array.withCredentials) {
              str = "include";
            }
            request = { body: Uint8Array.body, credentials: str, headers: Uint8Array.headers, method: Uint8Array.method, signal: closure_2.signal, _withEvents: obj5 };
            const obj4 = {
              responseBytes: fail(Uint8Array.responseType),
              customMethod: tmp59,
              separateConnections: entries.some((item) => {
                        let str;
                        let tmp;
                        [str, tmp] = item;
                        const isMatch = "accept" === str.toLowerCase() && regex.test(tmp);
                        return isMatch;
                      })
            };
            tmp59 = undefined;
            const tmp58 = closure_1_17;
            if (!set.has(closure_1_17)) {
              tmp59 = tmp58;
            }
            obj5 = { options: obj4, onResponseStarted: tmp62, onData: tmp64, onProgress: tmp66 };
            const _Object = Object;
            entries = Object.entries(Uint8Array.headers);
            tmp62 = undefined;
            if (Uint8Array.incremental) {
              tmp62 = closure_1_8;
            }
            tmp64 = undefined;
            if (Uint8Array.incremental) {
              tmp64 = onData;
            }
            tmp66 = undefined;
            if (Uint8Array.observesProgress) {
              tmp66 = closure_1_12;
            }
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj10.nitroFetch(Uint8Array.url, request), done: false };
            obj10 = _Uint8Array(closure_2_1[3]);
            return obj6;
          }
        } else {
          if (1 === c5) {
            c3 = 0;
            c5(tmp70);
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              _Uint8Array = value;
              const tmp89 = c3;
              if (tmp89) {
                c3 = 0;
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const tmp26 = c6;
                if (!tmp26) {
                  respond(_Uint8Array.status, _true(_Uint8Array.headers), _Uint8Array.url);
                  const tmp33 = c3;
                  if (tmp33) {
                    c3 = 0;
                    c6 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
                const tmp35 = closure_1_13;
                if (tmp35) {
                  tmp70("");
                  c3 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else if (fail(Uint8Array.responseType)) {
                  flushProgress();
                  _Uint8Array = Uint8Array;
                  c5 = 3;
                  c6 = 1;
                  const obj8 = { value: _Uint8Array.arrayBuffer(), done: false };
                  return obj8;
                } else {
                  c5 = 4;
                  c6 = 1;
                  const obj9 = { value: _Uint8Array.text(), done: false };
                  return obj9;
                }
              }
            }
          } else {
            if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c6 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                const self = this;
                const self2 = this;
                const tmp84 = new Uint8Array(value);
                closure_1 = tmp84;
                const tmp86 = c3;
                if (tmp86) {
                  c3 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  closure_1.onChunk(closure_1, closure_1.byteLength);
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_2 = value;
              const tmp79 = c3;
              if (tmp79) {
                c3 = 0;
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                let substr;
                const onText = closure_1.onText;
                if (65279 === closure_2.charCodeAt(0)) {
                  substr = closure_2.slice(1);
                } else {
                  substr = closure_2;
                }
                onText(substr);
                const tmp13 = c3;
                if (tmp13) {
                  c3 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  flushProgress();
                }
              }
            }
            tmp70("");
            c3 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp70) {
        if (0 === c3) {
          c6 = 3;
          throw tmp70;
        } else {
          c5 = 1;
        }
      }
    }
  });
  const tmp3 = performRequest();
  let obj = {
    abort() {
      const tmp = c3;
      if (!tmp) {
        c3 = true;
        abortController.abort();
      }
    }
  };
  return obj;
}
