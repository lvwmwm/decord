// Module ID: 1467
// Function ID: 17030
// Name: getRouteHistory
// Dependencies: [1464, 1465]

// Module 1467 (getRouteHistory)
const require = arg1;
const module = arg2;
let dependencyMap = arg6;
let obj = {
  jumpTo(name, params) {
    const payload = { name, params };
    return { type: "JUMP_TO", payload };
  }
};
function getRouteHistory(routes, index, arg2, arg3) {
  let diff = index;
  let closure_0 = arg3;
  let obj = { type: "route", key: routes[index].key };
  const items = [obj];
  if ("order" === arg2) {
    if (diff > 0) {
      do {
        obj = { type: "route", key: routes[diff - 1].key };
        let arr = items.unshift(obj);
        diff = diff - 1;
      } while (diff > 0);
    }
  } else if ("firstRoute" === arg2) {
    if (0 !== diff) {
      obj = { type: "route", key: routes[0].key };
      items.unshift(obj);
    }
  } else if ("initialRoute" === arg2) {
    const findIndexResult = routes.findIndex((name) => name.name === closure_0);
    let num = 0;
    if (-1 !== findIndexResult) {
      num = findIndexResult;
    }
    if (diff !== num) {
      const obj1 = { type: "route", key: routes[num].key };
      items.unshift(obj1);
    }
  }
  return items;
}
function changeIndex(history, index) {
  if ("history" === arg2) {
    const key = history.routes[index].key;
    history = history.history;
    const found = history.filter((type) => {
      let tmp = "route" === type.type;
      if (tmp) {
        tmp = type.key !== key;
      }
      return tmp;
    });
    let obj = { type: "route", key };
    let combined = found.concat(obj);
  } else {
    combined = getRouteHistory(history.routes, index, arg2, arg3);
  }
  obj = { index, history: combined };
  return Object.assign({}, history, obj);
}
arg5.default = function TabRouter(arg0) {
  let backBehavior;
  let require;
  ({ initialRouteName: require, backBehavior } = arg0);
  let str = "firstRoute";
  if (undefined !== backBehavior) {
    str = backBehavior;
  }
  obj = {
    type: "tab",
    getInitialState(arg0) {
      let closure_0;
      let routeNames;
      ({ routeNames, routeParamList: closure_0 } = arg0);
      let num = 0;
      if (undefined !== closure_0) {
        num = 0;
        if (routeNames.includes(closure_0)) {
          num = routeNames.indexOf(closure_0);
        }
      }
      const mapped = routeNames.map((name) => {
        const obj = { name, key: "" + name + "-" + outer2_0(outer2_2[1]).nanoid(), params: table[name] };
        return obj;
      });
      let obj = { stale: false, type: "tab" };
      const tmp4 = outer1_4(mapped, num, str, closure_0);
      obj.key = "tab-" + outer1_0(outer1_2[1]).nanoid();
      obj.index = num;
      obj.routeNames = routeNames;
      obj.history = tmp4;
      obj.routes = mapped;
      return obj;
    },
    getRehydratedState(stale) {
      let closure_0;
      let routeNames;
      ({ routeNames, routeParamList: closure_0 } = arg1);
      let closure_1 = stale;
      if (false === stale.stale) {
        return stale;
      } else {
        const mapped = routeNames.map((name) => {
          const dependencyMap = name;
          const routes = stale.routes;
          const found = routes.find((name) => name.name === closure_0);
          const obj = { name };
          if (found) {
            if (found.name === name) {
              if (found.key) {
                let key = found.key;
              }
              obj.key = key;
              if (undefined !== dependencyMap[name]) {
                let params;
                if (found) {
                  params = found.params;
                }
                params = Object.assign({}, dependencyMap[name], params);
              } else if (found) {
                params = found.params;
              }
              obj.params = params;
              return tmp3({}, found, obj);
            }
          }
          key = "" + name + "-" + outer2_0(outer2_2[1]).nanoid();
        });
        let index;
        if (null != stale) {
          index = stale.index;
        }
        let num2 = 0;
        if (null != index) {
          num2 = index;
        }
        let name;
        if (null != stale.routes[num2]) {
          name = tmp2.name;
        }
        const bound = Math.min(Math.max(routeNames.indexOf(name), 0), mapped.length - 1);
        const history = stale.history;
        let found;
        if (null != history) {
          found = history.filter((arg0) => {
            let closure_0 = arg0;
            return mapped.find((key) => key.key === key.key);
          });
        }
        if (null == found) {
          found = [];
        }
        let obj = { stale: false, type: "tab" };
        const _HermesInternal = HermesInternal;
        obj.key = "tab-" + outer1_0(outer1_2[1]).nanoid();
        obj.index = bound;
        obj.routeNames = routeNames;
        obj.history = found;
        obj.routes = mapped;
        return outer1_5(obj, bound, closure_1, closure_0);
      }
    },
    getStateForRouteNamesChange(history) {
      let closure_2;
      let routeNames;
      let str;
      let closure_0 = history;
      ({ routeNames, routeParamList: str, routeKeyChanges: closure_2 } = arg1);
      const mapped = routeNames.map((name) => {
        const history = name;
        const routes = history.routes;
        let found = routes.find((name) => {
          let tmp = name.name === closure_0;
          if (tmp) {
            tmp = !outer1_2.includes(name.name);
          }
          return tmp;
        });
        if (!found) {
          const obj = { name };
          const _HermesInternal = HermesInternal;
          obj.key = "" + name + "-" + outer2_0(outer2_2[1]).nanoid();
          obj.params = table[name];
          found = obj;
          const obj2 = outer2_0(outer2_2[1]);
        }
        return found;
      });
      const bound = Math.max(0, routeNames.indexOf(history.routes[history.index].name));
      history = history.history;
      let found = history.filter((type) => {
        let closure_0 = type;
        let found = "route" !== type.type;
        if (!found) {
          found = mapped.find((key) => key.key === type.key);
        }
        return found;
      });
      let tmp3 = found;
      if (!found.length) {
        tmp3 = outer1_4(mapped, bound, str, closure_0);
      }
      let obj = { history: tmp3, routeNames, routes: mapped, index: bound };
      return Object.assign({}, history, obj);
    },
    getStateForRouteFocus(routes) {
      let closure_0 = arg1;
      routes = routes.routes;
      const findIndexResult = routes.findIndex((key) => key.key === closure_0);
      let tmp2 = routes;
      if (-1 !== findIndexResult) {
        tmp2 = routes;
        if (findIndexResult !== routes.index) {
          tmp2 = outer1_5(routes, findIndexResult, str, closure_0);
        }
      }
      return tmp2;
    },
    getStateForAction(history, type) {
      let closure_2;
      let str;
      let closure_0 = type;
      ({ routeParamList: str, routeGetIdList: closure_2 } = arg2);
      type = type.type;
      if ("JUMP_TO" !== type) {
        if ("NAVIGATE" !== type) {
          if ("GO_BACK" === type) {
            if (1 === history.history.length) {
              return null;
            } else {
              const routes3 = history.routes;
              const findIndexResult = routes3.findIndex((key) => key.key === key);
              let merged = null;
              if (-1 !== findIndexResult) {
                let _Object = Object;
                let obj = {};
                history = history.history;
                obj.history = history.slice(0, -1);
                obj.index = findIndexResult;
                merged = Object.assign({}, history, obj);
              }
              return merged;
            }
          } else {
            obj = str(outer1_2[0]);
            return obj.getStateForAction(history, type);
          }
        }
      }
      let findIndexResult1 = -1;
      if ("NAVIGATE" === type.type) {
        if (type.payload.key) {
          const routes2 = history.routes;
          findIndexResult1 = routes2.findIndex((key) => key.key === type.payload.key);
        }
        let tmp7 = null;
        if (-1 !== findIndexResult1) {
          let _Object2 = Object;
          obj = {};
          let routes = history.routes;
          obj.routes = routes.map((params) => {
            if (arg1 !== findIndexResult1) {
              return params;
            } else {
              let tmp;
              if (null != table[params.name]) {
                let obj = { params: params.params };
                tmp = tmp27(obj);
              }
              let tmp2;
              if (null != table[params.name]) {
                obj = { params: type.payload.params };
                tmp2 = tmp27(obj);
              }
              if (tmp === tmp2) {
                let key = params.key;
              } else {
                const _HermesInternal = HermesInternal;
                key = "" + params.name + "-" + outer2_0(outer2_2[1]).nanoid();
                const obj3 = outer2_0(outer2_2[1]);
              }
              if ("NAVIGATE" === type.type) {
                if (type.payload.merge) {
                  if (tmp4) {
                    if (undefined === type.payload.params) {
                      if (undefined === dependencyMap[params.name]) {
                        let params2 = params.params;
                      }
                    }
                    const _Object2 = Object;
                    const _Object3 = Object;
                    params2 = Object.assign({}, dependencyMap[params.name], params.params, type.payload.params);
                  }
                }
              }
              if (undefined !== dependencyMap[params.name]) {
                const _Object = Object;
                params = Object.assign({}, dependencyMap[params.name], type.payload.params);
              } else {
                params = type.payload.params;
              }
              if ("NAVIGATE" === type.type) {
                if (null != type.payload.path) {
                  let path = type.payload.path;
                }
                if (params !== params.params) {
                  const _Object4 = Object;
                  obj = { key, path, params };
                  let merged = Object.assign({}, params, obj);
                } else {
                  merged = params;
                }
                return merged;
              }
              path = params.path;
            }
          });
          tmp7 = outer1_5(Object.assign({}, history, obj), findIndexResult1, str, closure_0);
        }
        return tmp7;
      }
      routes = history.routes;
      findIndexResult1 = routes.findIndex((name) => name.name === type.payload.name);
    },
    shouldActionChangeFocus(type) {
      return "NAVIGATE" === type.type;
    },
    actionCreators: obj
  };
  return Object.assign({}, str(1464), obj);
};
arg5.TabActions = obj;
