// Module ID: 9982
// Function ID: 9983
// Dependencies: [32, 109, 5, 9959, 9973]
// Exports: callRefreshEndpoint, clearTokenRefresh, getStoredTokenRefreshConfig, registerTokenRefresh

// Module 9982
import _mod9959 from "module_9959" /* 9959 */;
import hybridObject from "hybridObject" /* 9973 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c14, c15;

function getNestedField(arg0, str) {
  const parts = str.split(".");
  let tmp2 = arg0;
  const iter = parts[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null != tmp2) {
      if (typeof tmp2 === "object") {
        tmp2 = tmp2[tmp4];
        continue;
      }
    }
    iter.return();
  }
  let StringResult;
  if (null != tmp2) {
    const _String = String;
    StringResult = String(tmp2);
  }
  return StringResult;
}
function applyTemplate(str, arg1) {
  return str.replace(/\{\{value\}\}/g, arg1);
}
function applyCompositeTemplate(str, arg1) {
  let closure_0 = arg1;
  return str.replace(/\{\{(\w+)\}\}/g, (arg0, arg1) => {
    let str = closure_0[arg1];
    if (str == null) {
      str = "";
    }
    return str;
  });
}
let obj = function _callRefreshEndpoint() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let JSON;
    let closure_0 = arg0;
    if (c15 === 2) {
      c15 = 3;
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
      while (true) {
        let closure_3;
        let closure_4;
        let compositeHeaders;
        let closure_6;
        let entries;
        let closure_8;
        let c9;
        let closure_10;
        let closure_11;
        let closure_12;
        let POST;
        c15 = 2;
        let tmp4 = c14;
        if (0 === c14) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let tmp109 = closure_0;
            value = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            compositeHeaders = undefined;
            closure_6 = undefined;
            entries = undefined;
            closure_8 = undefined;
            c9 = undefined;
            closure_10 = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            let method = closure_0.method;
            POST = method;
            if (method == null) {
              POST = "POST";
            }
            let obj8 = _mod9959;
            let request = { method: POST, headers: null, body: null };
            ({ headers: obj9.headers, body: obj9.body } = tmp109);
            c14 = 1;
            c15 = 1;
            let obj4 = { value: obj8.nitroFetch(tmp109.url, request), done: false };
            return obj4;
          }
        } else {
          let parse;
          if (1 === tmp4) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              POST = value;
              if (POST.ok) {
                value = {};
                if ("text" === closure_0.responseType) {
                  c14 = 2;
                  c15 = 1;
                  let obj6 = { value: POST.text(), done: false };
                  return obj6;
                } else {
                  let _JSON = JSON;
                  parse = JSON.parse;
                  c14 = 3;
                  c15 = 1;
                  let obj7 = { value: POST.text(), done: false };
                  return obj7;
                }
              } else {
                let _Error = Error;
                let _HermesInternal = HermesInternal;
                let self = this;
                let self2 = this;
                let error = new Error("Token refresh failed: " + POST.status + " " + POST.statusText);
                throw error;
              }
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              let obj10 = { value, done: true };
              return obj10;
            } else {
              closure_3 = value;
              if (closure_0.textHeader) {
                let tmp67;
                let tmp63 = value;
                let textHeader = closure_0.textHeader;
                if (closure_0.textTemplate) {
                  tmp67 = closure_139_9(closure_0.textTemplate, closure_3);
                } else {
                  tmp67 = closure_3;
                }
                tmp63[textHeader] = tmp67;
              }
              c15 = 3;
              let obj11 = { value, done: true };
              return obj11;
            }
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              let obj12 = { value, done: true };
              return obj12;
            } else {
              closure_4 = parse(value);
              if (closure_0.mappings) {
                let mappings = closure_0.mappings;
                value = mappings[Symbol.iterator]();
                while (value !== undefined) {
                  let c12 = 1;
                  compositeHeaders = tmp19;
                  closure_6 = closure_139_8(closure_4, compositeHeaders.jsonPath);
                  if (null != closure_6) {
                    let tmp25;
                    let tmp21 = value;
                    let header = compositeHeaders.header;
                    if (compositeHeaders.valueTemplate) {
                      tmp25 = closure_139_9(compositeHeaders.valueTemplate, closure_6);
                    } else {
                      tmp25 = closure_6;
                    }
                    tmp21[header] = tmp25;
                  }
                  c12 = 0;
                  continue;
                }
              }
              if (closure_0.compositeHeaders) {
                compositeHeaders = closure_0.compositeHeaders;
                closure_4 = compositeHeaders[Symbol.iterator]();
                while (closure_4 !== undefined) {
                  c12 = 2;
                  entries = tmp37;
                  closure_8 = {};
                  let _Object = Object;
                  entries = Object.entries(entries.paths);
                  closure_6 = entries[Symbol.iterator]();
                  while (closure_6 !== undefined) {
                    c12 = 3;
                    c9 = tmp40;
                    closure_10 = closure_139_3(c9, 2);
                    closure_11 = closure_10[0];
                    closure_12 = closure_139_8(closure_4, closure_10[1]);
                    if (null != closure_12) {
                      closure_8[closure_11] = closure_12;
                    }
                    c12 = 2;
                    continue;
                  }
                  value[entries.header] = closure_139_10(entries.template, closure_8);
                  c12 = 0;
                  continue;
                }
              }
              c15 = 3;
              obj = { value, done: true };
              return obj;
            }
          } else if (4 === tmp4) {
            c12 = 0;
            value.return();
            throw closure_1_13;
          } else if (5 === tmp4) {
            c12 = 0;
            closure_4.return();
            throw closure_1_13;
          } else {
            c12 = 2;
            closure_6.return();
            throw closure_1_13;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_2 = ["target"];
const nitro_token_refresh_websocket = "nitro_token_refresh_websocket";
const nitro_token_refresh_fetch = "nitro_token_refresh_fetch";

export { getNestedField };
export { applyTemplate };
export function callRefreshEndpoint(arg0) {
  return obj(...arguments);
}
export function registerTokenRefresh(target) {
  target = target.target;
  const json = JSON.stringify(_objectWithoutProperties(target, closure_2));
  const tmp2 = "websocket" !== target && "all" !== target;
  if (!tmp2) {
    const NativeStorage = hybridObject.NativeStorage;
    NativeStorage.setSecureString(nitro_token_refresh_websocket, json);
  }
  const tmp7 = "fetch" !== target && "all" !== target;
  if (!tmp7) {
    const NativeStorage2 = hybridObject.NativeStorage;
    NativeStorage2.setSecureString(nitro_token_refresh_fetch, json);
  }
}
export function clearTokenRefresh(arg0) {
  let str = arg0;
  if (arg0 == null) {
    str = "all";
  }
  const tmp = "websocket" !== str && "all" !== str;
  if (!tmp) {
    const NativeStorage = hybridObject.NativeStorage;
    NativeStorage.removeSecureString(nitro_token_refresh_websocket);
    const NativeStorage2 = hybridObject.NativeStorage;
    NativeStorage2.removeSecureString("nitro_token_refresh_ws_cache");
  }
  const tmp7 = "fetch" !== str && "all" !== str;
  if (!tmp7) {
    const NativeStorage3 = hybridObject.NativeStorage;
    NativeStorage3.removeSecureString(nitro_token_refresh_fetch);
    const NativeStorage4 = hybridObject.NativeStorage;
    NativeStorage4.removeSecureString("nitro_token_refresh_fetch_cache");
  }
}
export function getStoredTokenRefreshConfig(arg0) {
  try {
    const NativeStorage = hybridObject.NativeStorage;
    const secureString = NativeStorage.getSecureString(tmp);
    let parsed = null;
    if (secureString) {
      const _JSON = JSON;
      parsed = JSON.parse(secureString);
    }
    return parsed;
  } catch (err) {
    return null;
  }
}
