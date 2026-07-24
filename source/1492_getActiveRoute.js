// Module ID: 1492
// Function ID: 17206
// Name: getActiveRoute
// Dependencies: [65, 57, 1493, 1494, 1495]
// Exports: default

// Module 1492 (getActiveRoute)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";

function getActiveRoute(index) {
  if ("number" === typeof index.index) {
    let tmp = index.routes[index.index];
  } else {
    tmp = index.routes[index.routes.length - 1];
  }
  let tmp2 = tmp;
  if (tmp.state) {
    tmp2 = getActiveRoute(tmp.state);
  }
  return tmp2;
}
function getParamName(str) {
  return str.replace(/^:/, "").replace(/\?$/, "");
}
function joinPaths() {
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  const items = [];
  const concat = items.concat;
  const found = concat.apply(items, callback(arr.map((str) => str.split("/")))).filter(Boolean);
  return found.join("/");
}
function createConfigItem(exact) {
  if ("string" === typeof exact) {
    let obj = {};
    let tmp13 = exact;
    if (arg1) {
      tmp13 = joinPaths(arg1, exact);
    }
    obj.pattern = tmp13;
    return obj;
  } else {
    if (exact.exact) {
      if (undefined === exact.path) {
        const _Error = Error;
        const error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
        throw error;
      }
    }
    if (true !== exact.exact) {
      let str2 = arg1;
      if (!arg1) {
        str2 = "";
      }
      let str = joinPaths(str2, exact.path || "");
      const tmp = joinPaths;
      const tmp2 = exact.path || "";
    } else {
      str = exact.path || "";
    }
    let tmp3;
    if (exact.screens) {
      tmp3 = createNormalizedConfigs(exact.screens, str);
    }
    obj = {};
    let joined;
    if (null != str) {
      const parts = str.split("/");
      const _Boolean = Boolean;
      const found = parts.filter(Boolean);
      joined = found.join("/");
    }
    obj.pattern = joined;
    obj.stringify = exact.stringify;
    obj.screens = tmp3;
    return obj;
  }
}
function createNormalizedConfigs(arg0, arg1) {
  const importDefault = arg1;
  const entries = Object.entries(arg0);
  return importDefault(1494)(entries.map((arg0) => {
    const tmp = outer1_4(arg0, 2);
    const items = [tmp[0], outer1_8(tmp[1], closure_0)];
    return items;
  }));
}

export default function getPathFromState(arg0, config) {
  const importDefault = arg0;
  if (null == arg0) {
    const _Error = Error;
    throw Error("Got 'undefined' for the navigation state. You must pass a valid state object.");
  } else {
    if (config) {
      importDefault(replaced1[2])(config);
    }
    if (null != config) {
      if (config.screens) {
        let screens;
        if (null != config) {
          screens = config.screens;
        }
        let obj = createNormalizedConfigs(screens);
        let tmp4 = createNormalizedConfigs;
      }
      replaced1 = "/";
      let _toConsumableArray = arg0;
      let _slicedToArray = {};
      if (arg0) {
        do {
          let tmp6 = (function _loop() {
            let num = 0;
            if ("number" === typeof state.index) {
              num = state.index;
            }
            let closure_2 = num;
            state = state.routes[closure_2];
            const tmp4 = outer1_5(closure_0);
            let _slicedToArray = tmp4;
            const table = params;
            let items = [];
            let c7 = true;
            if (state.name in table) {
              if (c7) {
                tmp5();
                while (state.name in table) {
                  let tmp10 = c7;
                  if (!c7) {
                    break;
                  }
                }
              }
            }
            if (undefined === closure_0) {
              closure_0 = items.join("/");
            }
            if (undefined !== table[state.name]) {
              let parts = closure_0.split("/");
              let _encodeURIComponent = parts.map((str) => {
                if ("*" === str) {
                  return state.name;
                } else if (str.startsWith(":")) {
                  if (undefined !== tmp4[tmp]) {
                    const _encodeURIComponent2 = encodeURIComponent;
                    let str3 = encodeURIComponent(tmp4);
                  } else {
                    str3 = "";
                  }
                  return str3;
                } else {
                  const _encodeURIComponent = encodeURIComponent;
                  return encodeURIComponent(str);
                }
              });
              closure_2 = closure_2 + _encodeURIComponent.join("/");
            } else {
              _encodeURIComponent = encodeURIComponent;
              closure_2 = closure_2 + encodeURIComponent(state.name);
            }
            if (!params) {
              params = tmp4.params;
            }
            if (state.state) {
              closure_2 = `${closure_2}/`;
            } else if (params) {
              for (const key10062 in params) {
                let tmp26 = key10062;
                let tmp27 = params;
                if ("undefined" !== params[key10062]) {
                  continue;
                } else {
                  let tmp18 = params;
                  delete tmp[tmp2];
                  continue;
                }
                continue;
              }
              obj = obj(replaced1[4]);
              obj = { sort: false };
              const json = obj.stringify(params, obj);
              if (json) {
                const _HermesInternal = HermesInternal;
                closure_2 = closure_2 + "?" + json;
              }
            }
            state = state.state;
          })();
          let tmp7 = _toConsumableArray;
        } while (_toConsumableArray);
      }
      const replaced = replaced1.replace(/\/+/g, "/");
      replaced1 = replaced;
      if (replaced.length > 1) {
        replaced1 = replaced1.replace(/\/$/, "");
      }
      return replaced1;
    }
    obj = {};
  }
};
