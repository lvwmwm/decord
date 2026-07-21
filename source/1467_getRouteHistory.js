// Module ID: 1467
// Function ID: 17023
// Name: getRouteHistory
// Dependencies: []

// Module 1467 (getRouteHistory)
const obj = {
  jumpTo(name, params) {
    const payload = { name, params };
    return { type: "JUMP_TO", payload };
  }
};
function getRouteHistory(routes, index, arg2, arg3) {
  let diff = index;
  index = arg3;
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
    const findIndexResult = routes.findIndex((name) => name.name === arg3);
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
    index = key;
    history = history.history;
    const found = history.filter((type) => {
      let tmp = "route" === type.type;
      if (tmp) {
        tmp = type.key !== key;
      }
      return tmp;
    });
    let obj = { type: "route", key: history.routes[index].key };
    let combined = found.concat(obj);
  } else {
    combined = getRouteHistory(history.routes, index, arg2, arg3);
  }
  obj = { index, history: combined };
  return Object.assign({}, history, obj);
}
arg5.default = function TabRouter(arg0) {
  let backBehavior;
  ({ initialRouteName: closure_0, backBehavior } = arg0);
  let str = "firstRoute";
  if (undefined !== backBehavior) {
    str = backBehavior;
  }
  const arg2 = str;
  const obj = {
    type: "tab",
    getInitialState(arg0) {
      let routeNames;
      ({ routeNames, routeParamList: closure_0 } = arg0);
      let num = 0;
      if (undefined !== callback) {
        num = 0;
        if (routeNames.includes(callback)) {
          num = routeNames.indexOf(callback);
        }
      }
      const mapped = routeNames.map((name) => {
        const obj = { name, key: "" + name + "-" + callback(closure_2[1]).nanoid(), params: callback[name] };
        return obj;
      });
      const obj = { targetField: "<string:1153327360>", targetAttribute: "name-middle" };
      const tmp4 = callback2(mapped, num, str, callback);
      obj.key = "tab-" + callback(closure_2[1]).nanoid();
      obj.index = num;
      obj.routeNames = routeNames;
      obj.history = tmp4;
      obj.routes = mapped;
      return obj;
    },
    getRehydratedState(stale) {
      let routeNames;
      ({ routeNames, routeParamList: closure_0 } = arg1);
      let str = stale;
      if (false === stale.stale) {
        return stale;
      } else {
        const mapped = routeNames.map((name) => {
          const routes = name.routes;
          const found = routes.find((name) => name.name === name);
          const obj = { name };
          if (found) {
            if (found.name === name) {
              if (found.key) {
                let key = found.key;
              }
              obj.key = key;
              if (undefined !== name[name]) {
                let params;
                if (found) {
                  params = found.params;
                }
                params = Object.assign({}, name[name], params);
              } else if (found) {
                params = found.params;
              }
              obj.params = params;
              return tmp3({}, found, obj);
            }
          }
          key = "" + name + "-" + name(mapped[1]).nanoid();
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
          found = history.filter((arg0) => mapped.find((key) => key.key === key.key));
        }
        if (null == found) {
          found = [];
        }
        const obj = { targetField: "<string:1153327360>", targetAttribute: "name-middle" };
        const _HermesInternal = HermesInternal;
        str = "tab-";
        obj.key = "tab-" + callback(mapped[1]).nanoid();
        obj.index = bound;
        obj.routeNames = routeNames;
        obj.history = found;
        obj.routes = mapped;
        return callback3(obj, bound, str, callback);
      }
    },
    getStateForRouteNamesChange(history) {
      let routeNames;
      ({ routeNames, routeParamList: closure_1, routeKeyChanges: closure_2 } = arg1);
      const mapped = routeNames.map((name) => {
        const routes = name.routes;
        let found = routes.find((name) => {
          let tmp = name.name === name;
          if (tmp) {
            tmp = !closure_2.includes(name.name);
          }
          return tmp;
        });
        if (!found) {
          const obj = { name };
          const _HermesInternal = HermesInternal;
          obj.key = "" + name + "-" + name(closure_2[1]).nanoid();
          obj.params = closure_1[name];
          found = obj;
          const obj2 = name(closure_2[1]);
        }
        return found;
      });
      const bound = Math.max(0, routeNames.indexOf(history.routes[history.index].name));
      history = history.history;
      const found = history.filter((type) => {
        let found = "route" !== type.type;
        if (!found) {
          found = mapped.find((key) => key.key === key.key);
        }
        return found;
      });
      let tmp3 = found;
      if (!found.length) {
        tmp3 = callback2(mapped, bound, str, history);
      }
      const obj = { history: tmp3, routeNames, routes: mapped, index: bound };
      return Object.assign({}, history, obj);
    },
    getStateForRouteFocus(routes) {
      routes = routes.routes;
      const findIndexResult = routes.findIndex((key) => key.key === arg1);
      let tmp2 = routes;
      if (-1 !== findIndexResult) {
        tmp2 = routes;
        if (findIndexResult !== routes.index) {
          tmp2 = callback3(routes, findIndexResult, str, arg1);
        }
      }
      return tmp2;
    },
    getStateForAction(history, type) {
      ({ routeParamList: closure_1, routeGetIdList: closure_2 } = arg2);
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
                const _Object = Object;
                let obj = {};
                history = history.history;
                obj.history = history.slice(0, -1);
                obj.index = findIndexResult;
                merged = Object.assign({}, history, obj);
              }
              return merged;
            }
          } else {
            obj = str(closure_2[0]);
            return obj.getStateForAction(history, type);
          }
        }
      }
      let findIndexResult1 = -1;
      if ("NAVIGATE" === type.type) {
        if (type.payload.key) {
          const routes2 = history.routes;
          findIndexResult1 = routes2.findIndex((key) => key.key === arg1.payload.key);
        }
        let tmp7 = null;
        if (-1 !== findIndexResult1) {
          const _Object2 = Object;
          obj = {};
          let routes = history.routes;
          obj.routes = routes.map((params, self) => {
            if (self !== findIndexResult1) {
              return params;
            } else {
              let tmp;
              if (null != closure_2[params.name]) {
                let obj = { params: params.params };
                tmp = tmp27(obj);
              }
              let tmp2;
              if (null != closure_2[params.name]) {
                obj = { params: self.payload.params };
                tmp2 = tmp27(obj);
              }
              if (tmp === tmp2) {
                let key = params.key;
              } else {
                const _HermesInternal = HermesInternal;
                key = "" + params.name + "-" + self(closure_2[1]).nanoid();
                const obj3 = self(closure_2[1]);
              }
              if ("NAVIGATE" === self.type) {
                if (self.payload.merge) {
                  if (tmp4) {
                    if (undefined === self.payload.params) {
                      if (undefined === closure_1[params.name]) {
                        let params2 = params.params;
                      }
                    }
                    const _Object2 = Object;
                    const _Object3 = Object;
                    params2 = Object.assign({}, closure_1[params.name], params.params, self.payload.params);
                  }
                }
              }
              if (undefined !== closure_1[params.name]) {
                const _Object = Object;
                params = Object.assign({}, closure_1[params.name], self.payload.params);
              } else {
                params = self.payload.params;
              }
              if ("NAVIGATE" === self.type) {
                if (null != self.payload.path) {
                  let path = self.payload.path;
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
          tmp7 = callback3(Object.assign({}, history, obj), findIndexResult1, str, type);
        }
        return tmp7;
      }
      routes = history.routes;
      findIndexResult1 = routes.findIndex((name) => name.name === arg1.payload.name);
    },
    shouldActionChangeFocus(type) {
      return "NAVIGATE" === type.type;
    },
    actionCreators: obj
  };
  return Object.assign({}, arg2(arg6[0]), obj);
};
arg5.TabActions = obj;
