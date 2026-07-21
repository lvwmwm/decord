// Module ID: 1492
// Function ID: 17204
// Name: getActiveRoute
// Dependencies: []
// Exports: default

// Module 1492 (getActiveRoute)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
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
  return importDefault(dependencyMap[3])(entries.map((arg0) => {
    const tmp = callback(arg0, 2);
    const items = [tmp[0], callback2(tmp[1], arg1)];
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
      importDefault(dependencyMap[2])(config);
    }
    if (null != config) {
      if (config.screens) {
        let screens;
        if (null != config) {
          screens = config.screens;
        }
        let obj = createNormalizedConfigs(screens);
        const tmp4 = createNormalizedConfigs;
      }
      const importAll = obj;
      let dependencyMap = "/";
      let closure_3 = arg0;
      let closure_4 = {};
      if (arg0) {
        do {
          let tmp6 = function _loop(self) {
            let num = 0;
            if ("number" === typeof self.index) {
              num = self.index;
            }
            let closure_2 = num;
            self = self.routes[closure_2];
            const tmp2 = callback(closure_0);
            let closure_4 = tmp2;
            const callback = obj;
            const items = [];
            let closure_7 = true;
            if (self.name in callback) {
              if (closure_7) {
                tmp3();
                while (self.name in callback) {
                  let tmp8 = closure_7;
                  if (!closure_7) {
                    break;
                  }
                }
              }
            }
            if (undefined === closure_0) {
              closure_0 = items.join("/");
            }
            if (undefined !== callback[closure_3.name]) {
              const parts = closure_0.split("/");
              let _encodeURIComponent = parts.map((str) => {
                if ("*" === str) {
                  return state.name;
                } else if (str.startsWith(":")) {
                  if (undefined !== tmp2[tmp]) {
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
              closure_2 = closure_2 + encodeURIComponent(self.name);
            }
            if (!obj) {
              let obj = tmp2.params;
            }
            if (self.state) {
              closure_2 = `${closure_2}/`;
            } else if (obj) {
              for (const key10062 in closure_1) {
                let tmp24 = key10062;
                let tmp25 = closure_1;
                if ("undefined" !== closure_1[key10062]) {
                  continue;
                } else {
                  let tmp16 = closure_1;
                  delete r10[r11];
                  // continue
                }
                continue;
              }
              obj = obj(closure_2[4]);
              obj = { sort: false };
              const json = obj.stringify(obj, obj);
              if (json) {
                const _HermesInternal = HermesInternal;
                closure_2 = closure_2 + "?" + json;
              }
            }
            self = self.state;
          }();
          let tmp7 = closure_3;
        } while (closure_3);
      }
      const replaced = dependencyMap.replace(/\/+/g, "/");
      dependencyMap = replaced;
      if (replaced.length > 1) {
        let replaced1 = dependencyMap.replace(/\/$/, "");
      } else {
        replaced1 = dependencyMap;
      }
      dependencyMap = replaced1;
      return replaced1;
    }
    obj = {};
  }
};
