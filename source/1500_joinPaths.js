// Module ID: 1500
// Function ID: 17283
// Name: joinPaths
// Dependencies: [77, 65, 1493, 1501, 1475, 1495]
// Exports: default

// Module 1500 (joinPaths)
import _defineProperty from "_defineProperty";
import _toConsumableArray from "_toConsumableArray";

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
function matchAgainstConfigs(arg0, sorted) {
  let closure_0 = sorted;
  let closure_2 = arg0;
  function _loop() {
    if (_defineProperty.regex) {
      const match = closure_2.match(_defineProperty.regex);
      if (match) {
        let reduced;
        if (null != _defineProperty.pattern) {
          let parts = str.split("/");
          let found = parts.filter((str) => str.startsWith(":"));
          reduced = found.reduce((arg0, arg1, arg2) => Object.assign(arg0, callback({}, arg1, match[2 * (arg2 + 1)].replace(/\//, ""))), {});
        }
        let closure_1 = reduced;
        const routeNames = _defineProperty.routeNames;
        closure_1 = routeNames.map((name) => {
          let closure_0 = name;
          const found = match.find((screen) => screen.screen === closure_0);
          let reduced;
          if (null != found) {
            if (null != found.path) {
              const parts = str.split("/");
              const found1 = parts.filter((str) => str.startsWith(":"));
              reduced = found1.reduce((arg0, str) => {
                if (found[str]) {
                  const replaced = str.replace(/^:/, "").replace(/\?$/, "");
                  const parse = found.parse;
                  let tmp5 = tmp;
                  if (null != parse) {
                    tmp5 = tmp;
                    if (parse[replaced]) {
                      const parse2 = found.parse;
                      tmp5 = parse2[replaced](tmp);
                    }
                  }
                  arg0[replaced] = tmp5;
                  const str2 = str.replace(/^:/, "");
                }
                return arg0;
              }, {});
            }
          }
          if (reduced) {
            const _Object = Object;
            if (Object.keys(reduced).length) {
              let obj = { name, params: reduced };
            }
            return obj;
          }
          obj = { name };
        });
        closure_2 = closure_2.replace(match[1], "");
        return 1;
      }
    } else {
      return 0;
    }
  }
  const iter = sorted[Symbol.iterator]();
  while (iter !== undefined) {
    let _defineProperty = iter.next();
    let tmp = _loop;
    let _loopResult = _loop();
    if (0 !== _loopResult) {
      let tmp4 = _loopResult;
      if (1 === tmp3) {
        iter.return();
        break;
      }
      let obj = {};
      let tmp5 = importAll;
      obj.routes = importAll;
      let tmp6 = closure_2;
      obj.remainingPath = closure_2;
      return obj;
    }
    continue;
  }
}
function createNormalizedConfigs(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let items1 = arguments[2];
    }
    let tmp;
    if (arguments.length > 3) {
      tmp = arguments[3];
    }
    const importAll = tmp;
    let tmp2;
    if (arguments.length > 4) {
      tmp2 = arguments[4];
    }
    const dependencyMap = tmp2;
    let tmp3;
    if (arguments.length > 5) {
      tmp3 = arguments[5];
    }
    let _defineProperty = tmp3;
    const items = [];
    items1.push(arg0);
    tmp2.push(arg0);
    const joinPaths = tmp7;
    if ("string" === typeof arg1[arg0]) {
      let tmp25 = tmp7;
      if (tmp3) {
        tmp25 = joinPaths(tmp3, tmp7);
      }
      items.push(createConfigItem(arg0, items1, tmp25, tmp7));
    } else if ("object" === tmp8) {
      if ("string" !== typeof tmp7.path) {
        if (tmp7.screens) {
          if (tmp7.initialRouteName) {
            const obj = { initialRouteName: tmp7.initialRouteName, parentScreens: tmp2 };
            tmp.push(obj);
          }
          const _Object = Object;
          const keys = Object.keys(tmp7.screens);
          const item = keys.forEach((arg0) => {
            const push = items.push;
            push.apply(items, items(outer1_7(arg0, tmp7.screens, items1, closure_1, items(closure_2), null != closure_6 ? closure_6 : _defineProperty)));
          });
        }
      } else {
        if (tmp7.exact) {
          if (undefined === tmp7.path) {
            const _Error = Error;
            const error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
            throw error;
          }
        }
        if (true !== tmp7.exact) {
          let str2 = tmp3;
          if (!tmp3) {
            str2 = "";
          }
          let tmp10Result = joinPaths(str2, tmp7.path || "");
          const tmp10 = joinPaths;
          const tmp11 = tmp7.path || "";
        } else {
          tmp10Result = tmp7.path || "";
        }
        const matchAgainstConfigs = tmp10Result;
        items.push(createConfigItem(arg0, items1, tmp10Result, tmp7.path, tmp7.parse));
      }
    }
    items1.pop();
    return items;
  }
  items1 = [];
}
function createConfigItem(screen, arg1, str, path, parse) {
  const obj = { screen };
  const parts = str.split("/");
  const found = parts.filter(Boolean);
  str = found.join("/");
  let regExp;
  if (str) {
    const _RegExp = RegExp;
    const parts1 = str.split("/");
    const mapped = parts1.map((str) => {
      if (str.startsWith(":")) {
        let str6 = "";
        if (str.endsWith("?")) {
          str6 = "?";
        }
        const _HermesInternal2 = HermesInternal;
        let combined = "(([^/]+\\/)" + str6 + ")";
      } else {
        str = ".*";
        if ("*" !== str) {
          str = outer1_0(outer1_2[3])(str);
        }
        const _HermesInternal = HermesInternal;
        combined = "" + str + "\\/";
      }
      return combined;
    });
    let _HermesInternal = HermesInternal;
    regExp = new RegExp("^(" + mapped.join("") + ")");
  }
  obj.regex = regExp;
  obj.pattern = str;
  obj.path = path;
  obj.routeNames = callback(arg1);
  obj.parse = parse;
  return obj;
}
function findInitialRoute(name, items, items) {
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp13 = nextResult;
    let tmp14 = items;
    if (items.length === nextResult.parentScreens.length) {
      let flag = true;
      let num = 0;
      let tmp2 = items;
      if (0 < items.length) {
        let tmp3 = items;
        let tmp4 = num;
        let obj = items[num];
        let tmp5 = nextResult;
        while (0 === obj.localeCompare(tmp13.parentScreens[num])) {
          let tmp6 = num;
          let sum = num + 1;
          num = sum;
          let tmp8 = items;
        }
        flag = false;
      }
      let tmp9 = flag;
      if (flag) {
        let tmp10 = name;
        let tmp11 = nextResult;
        let initialRouteName;
        if (name !== tmp13.initialRouteName) {
          initialRouteName = nextResult.initialRouteName;
        }
        iter.return();
        return initialRouteName;
      }
    }
    continue;
  }
}
function createStateObject(arg0, arr, arg2) {
  let items = arg0;
  let obj = {};
  if (arg2) {
    if (items) {
      obj = { index: 1, name: items };
      items = [obj, arr];
      obj.routes = items;
      let tmp4 = obj;
    } else {
      const items1 = [arr];
      obj.routes = items1;
      tmp4 = obj;
    }
  } else {
    if (items) {
      obj = { index: 1, name: items };
      const items2 = [obj, ];
      const _Object2 = Object;
      const obj1 = {};
      const obj2 = { routes: [] };
      obj1.state = obj2;
      items2[1] = Object.assign({}, arr, obj1);
      obj.routes = items2;
      let tmp2 = obj;
    } else {
      const _Object = Object;
      const obj3 = {};
      const obj4 = { routes: [] };
      obj3.state = obj4;
      const items3 = [Object.assign({}, arr, obj3)];
      obj.routes = items3;
      tmp2 = obj;
    }
    return tmp2;
  }
}
function createNestedStateObject(path, mapped, items, sorted) {
  let arr = mapped.shift();
  items = [];
  arr = items.push(arr.name);
  const tmp4 = createStateObject(findInitialRoute(arr.name, items, items), arr, 0 === mapped.length);
  if (mapped.length > 0) {
    let arr1 = mapped.shift();
    let tmp10 = tmp4;
    while (arr1) {
      let tmp5 = findInitialRoute;
      let index = tmp10.index;
      let tmp6 = findInitialRoute(arr1.name, items, items);
      if (!index) {
        index = tmp10.routes.length - 1;
      }
      let tmp7 = createStateObject;
      tmp10.routes[index].state = createStateObject(tmp6, arr1, 0 === mapped.length);
      let state = tmp10;
      if (mapped.length > 0) {
        state = tmp10.routes[index].state;
      }
      let arr2 = items.push(arr1.name);
      arr1 = mapped.shift();
      tmp10 = state;
    }
  }
  const tmp11 = importDefault(1475)(tmp4);
  tmp11.path = path;
  if (!sorted) {
    const tmp20 = parseQueryParams(path, undefined);
    if (tmp20) {
      const _Object = Object;
      tmp11.params = Object.assign({}, tmp11.params, tmp20);
    }
    return tmp4;
  } else {
    const name = tmp11.name;
    const iter = sorted[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp16 = nextResult;
      let tmp17 = name;
      if (tmp12 === nextResult.routeNames[nextResult.routeNames.length - 1]) {
        iter.return();
        let parse = nextResult.parse;
        break;
      }
      let tmp19 = parse;
      let tmp18 = __exception;
      iter.return();
      throw tmp18;
    }
    tmp12 = name;
  }
}
function parseQueryParams(path, arg1) {
  let closure_0 = arg1;
  parsed = parsed(1495).parse(path.split("?")[1]);
  if (arg1) {
    const _Object = Object;
    const keys = Object.keys(parsed);
    const item = keys.forEach((arg0) => {
      let callResult = hasOwnProperty.call(dependencyMap, arg0);
      if (callResult) {
        callResult = "string" === typeof parsed[arg0];
      }
      if (callResult) {
        parsed[arg0] = dependencyMap[arg0](parsed[arg0]);
      }
    });
  }
  let tmp4;
  if (Object.keys(parsed).length) {
    tmp4 = parsed;
  }
  return tmp4;
}

export default function getStateFromPath(path, config) {
  let remainingPath;
  let routes;
  if (config) {
    items(sorted[2])(config);
  }
  items = [];
  if (tmp4) {
    let obj = { initialRouteName: config.initialRouteName, parentScreens: [] };
    items.push(obj);
  }
  let screens;
  if (null != config) {
    screens = config.screens;
  }
  const str = path.replace(/\/+/g, "/");
  tmp4 = null != config && config.initialRouteName;
  const replaced = path.replace(/\/+/g, "/").replace(/^\//, "").replace(/\?.*$/, "");
  let str3 = replaced;
  if (!replaced.endsWith("/")) {
    let _HermesInternal = HermesInternal;
    str3 = "" + replaced + "/";
  }
  if (undefined === screens) {
    let parts = str3.split("/");
    const _Boolean = Boolean;
    let found = parts.filter(Boolean);
    const mapped = found.map((arg0) => ({ name: decodeURIComponent(arg0) }));
    let tmp24;
    if (mapped.length) {
      tmp24 = createNestedStateObject(path, mapped, items);
    }
    return tmp24;
  } else {
    const items1 = [];
    const concat = items1.concat;
    const _Object = Object;
    const keys = Object.keys(screens);
    sorted = concat.apply(items1, callback(keys.map((arg0) => outer1_7(arg0, screens, [], items, [])))).sort((pattern, pattern2) => {
      if (pattern.pattern === pattern2.pattern) {
        const routeNames = pattern2.routeNames;
        const joined = routeNames.join(">");
        const routeNames2 = pattern.routeNames;
        return joined.localeCompare(routeNames2.join(">"));
      } else {
        pattern2 = pattern.pattern;
        if (pattern2.startsWith(pattern2.pattern)) {
          return -1;
        } else {
          pattern = pattern2.pattern;
          if (pattern.startsWith(pattern.pattern)) {
            return 1;
          } else {
            const parts = pattern.pattern.split("/");
            const parts1 = pattern2.pattern.split("/");
            const _Math = Math;
            let num = 0;
            if (0 < Math.max(parts.length, parts1.length)) {
              while (null != parts[num]) {
                if (null == parts1[num]) {
                  let num4 = -1;
                  return -1;
                } else {
                  let startsWithResult = "*" === parts[num];
                  if (!startsWithResult) {
                    let obj = parts[num];
                    startsWithResult = obj.startsWith(":");
                  }
                  let startsWithResult1 = "*" === parts1[num];
                  if (!startsWithResult1) {
                    let obj2 = parts1[num];
                    startsWithResult1 = obj2.startsWith(":");
                  }
                  if (!startsWithResult) {
                    if (startsWithResult) {
                      let num3 = 1;
                      return 1;
                    } else if (startsWithResult1) {
                      let num2 = -1;
                      return -1;
                    }
                  }
                  num = num + 1;
                  let _Math2 = Math;
                }
              }
              return 1;
            }
            return parts1.length - parts.length;
          }
        }
      }
    });
    const reduced = sorted.reduce((arg0, routeNames) => {
      if (arg0[routeNames.pattern]) {
        routeNames = arg0[routeNames.pattern].routeNames;
        const routeNames1 = routeNames.routeNames;
        if (routeNames.length > routeNames1.length) {
          let everyResult = routeNames1.every((arg0, arg1) => routeNames[arg1] === arg0);
        } else {
          everyResult = routeNames.every((arg0, arg1) => routeNames1[arg1] === arg0);
        }
        if (!everyResult) {
          const _Error = Error;
          const pattern = routeNames.pattern;
          const joined = routeNames.join(" > ");
          const _HermesInternal = HermesInternal;
          const error = new Error("Found conflicting screens with the same pattern. The pattern '" + pattern + "' resolves to both '" + joined + "' and '" + routeNames1.join(" > ") + "'. Patterns must be unique and cannot resolve to more than one screen.");
          throw error;
        }
      }
      return Object.assign(arg0, outer1_3({}, routeNames.pattern, routeNames));
    }, {});
    if ("/" === str3) {
      const found1 = sorted.find((path) => {
        let everyResult = "" === path.path;
        if (everyResult) {
          const routeNames = path.routeNames;
          everyResult = routeNames.every((arg0) => {
            let closure_0 = arg0;
            const found = outer1_2.find((screen) => screen.screen === closure_0);
            return !(null != found && found.path);
          });
        }
        return everyResult;
      });
      let tmp18;
      if (found1) {
        let routeNames = found1.routeNames;
        tmp18 = createNestedStateObject(path, routeNames.map((name) => ({ name })), items, sorted);
      }
      return tmp18;
    } else {
      ({ routes, remainingPath } = matchAgainstConfigs(str3, sorted.map((regex) => {
        const obj = {};
        let regExp;
        if (regex.regex) {
          const _RegExp = RegExp;
          regExp = new RegExp(regex.regex.source + "$");
        }
        obj.regex = regExp;
        return Object.assign({}, regex, obj);
      })));
      let tmp11;
      if (undefined !== routes) {
        const tmp10 = createNestedStateObject(path, routes, items, sorted);
        tmp11 = tmp10;
      }
      if (null != tmp11) {
        if (null != tmp10) {
          return tmp10;
        }
      }
    }
    const applyResult = concat.apply(items1, callback(keys.map((arg0) => outer1_7(arg0, screens, [], items, []))));
  }
  const str2 = path.replace(/\/+/g, "/").replace(/^\//, "");
};
