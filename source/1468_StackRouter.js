// Module ID: 1468
// Function ID: 17050
// Name: StackRouter
// Dependencies: []
// Exports: default

// Module 1468 (StackRouter)
let closure_3 = importDefault(dependencyMap[0]);
const obj = {
  replace(name, params) {
    const payload = { name, params };
    return { type: "REPLACE", payload };
  },
  push(name, params) {
    const payload = { name, params };
    return { type: "PUSH", payload };
  },
  pop() {
    let obj = { type: "POP" };
    obj = {};
    let num = 1;
    if (arguments.length > 0) {
      num = 1;
      if (undefined !== arguments[0]) {
        num = arguments[0];
      }
    }
    obj.count = num;
    obj.payload = obj;
    return obj;
  },
  popToTop() {
    return { type: "POP_TO_TOP" };
  }
};

export default function StackRouter(arg0) {
  const arg1 = arg0;
  const obj = {
    type: "stack",
    getInitialState(routeNames) {
      routeNames = routeNames.routeNames;
      if (undefined !== routeNames.initialRouteName) {
        if (routeNames.includes(routeNames.initialRouteName)) {
          let initialRouteName = routeNames.initialRouteName;
        }
        let obj = {};
        const _HermesInternal = HermesInternal;
        obj.key = "stack-" + routeNames(closure_2[2]).nanoid();
        obj.routeNames = routeNames;
        obj = {};
        const obj2 = routeNames(closure_2[2]);
        const _HermesInternal2 = HermesInternal;
        obj.key = "" + initialRouteName + "-" + routeNames(closure_2[2]).nanoid();
        obj.name = initialRouteName;
        obj.params = tmp[initialRouteName];
        const items = [obj];
        obj.routes = items;
        return obj;
      }
      initialRouteName = routeNames[0];
    },
    getRehydratedState(stale, routeNames) {
      routeNames = routeNames.routeNames;
      stale = routeNames;
      const routeParamList = routeNames.routeParamList;
      const merged = routeParamList;
      if (false === stale.stale) {
        return stale;
      } else {
        const routes = stale.routes;
        const found = routes.filter((name) => routeNames.includes(name.name));
        const mapped = found.map((key) => {
          const obj = {};
          key = key.key;
          if (!key) {
            const _HermesInternal = HermesInternal;
            key = "" + key.name + "-" + routeNames(closure_2[2]).nanoid();
            const obj2 = routeNames(closure_2[2]);
          }
          obj.key = key;
          if (undefined !== routeParamList[key.name]) {
            const _Object = Object;
            let params = Object.assign({}, routeParamList[key.name], key.params);
          } else {
            params = key.params;
          }
          obj.params = params;
          return Object.assign({}, key, obj);
        });
        if (0 !== mapped.length) {
          let obj = {};
          const _HermesInternal2 = HermesInternal;
          obj.key = "stack-" + stale(closure_2[2]).nanoid();
          obj.index = mapped.length - 1;
          obj.routeNames = routeNames;
          obj.routes = mapped;
          return obj;
        } else {
          let concat;
          if (undefined !== stale.initialRouteName) {
            let initialRouteName = stale.initialRouteName;
          } else {
            initialRouteName = routeNames[0];
          }
          obj = {};
          const _HermesInternal = HermesInternal;
          concat = HermesInternal.concat;
          obj.key = concat(initialRouteName, "-", stale(closure_2[2]).nanoid());
          obj.name = initialRouteName;
          obj.params = routeParamList[initialRouteName];
          mapped.push(obj);
          const obj2 = stale(closure_2[2]);
        }
      }
    },
    getStateForRouteNamesChange(routes, routeNames) {
      routeNames = routeNames.routeNames;
      routes = routeNames;
      const merged = routeNames.routeKeyChanges;
      routes = routes.routes;
      const found = routes.filter((name) => {
        let hasItem = routeNames.includes(name.name);
        if (hasItem) {
          hasItem = !routeKeyChanges.includes(name.name);
        }
        return hasItem;
      });
      if (0 !== found.length) {
        const _Object = Object;
        let obj = { routeNames, routes: found };
        const _Math = Math;
        obj.index = Math.min(routes.index, found.length - 1);
        return Object.assign({}, routes, obj);
      } else {
        if (undefined === routes.initialRouteName) {
          let initialRouteName = routeNames[0];
          obj = {};
          const _HermesInternal = HermesInternal;
          obj.key = concat(initialRouteName, "-", routes(closure_2[2]).nanoid());
          obj.name = initialRouteName;
          obj.params = routeNames.routeParamList[initialRouteName];
          found.push(obj);
          const obj2 = routes(closure_2[2]);
        }
        initialRouteName = routes.initialRouteName;
      }
    },
    getStateForRouteFocus(routes) {
      routes = arg1;
      routes = routes.routes;
      const findIndexResult = routes.findIndex((key) => key.key === arg1);
      let merged = routes;
      if (-1 !== findIndexResult) {
        merged = routes;
        if (findIndexResult !== routes.index) {
          const _Object = Object;
          const obj = { index: findIndexResult };
          routes = routes.routes;
          obj.routes = routes.slice(0, findIndexResult + 1);
          merged = Object.assign({}, routes, obj);
        }
      }
      return merged;
    },
    getStateForAction(key, type, routeParamList) {
      key = type;
      let params = routeParamList.routeParamList;
      let merged = params;
      type = type.type;
      if ("REPLACE" === type) {
        if (type.target === key.key) {
          if (type.source) {
            let routes3 = key.routes;
            let index2 = routes3.findIndex((key) => key.key === arg1.source);
          }
          if (-1 === index2) {
            return null;
          } else {
            const payload = type.payload;
            const name = payload.name;
            ({ key: closure_4, params: closure_5 } = payload);
            const routeNames3 = key.routeNames;
            merged = null;
            if (routeNames3.includes(name)) {
              const _Object10 = Object;
              let obj = {};
              let routes = key.routes;
              obj.routes = routes.map((arg0, arg1) => {
                if (arg1 !== index2) {
                  return arg0;
                } else {
                  let obj = {};
                  if (undefined !== closure_4) {
                    let combined = closure_4;
                  } else {
                    obj = arg1(index2[2]);
                    const _HermesInternal = HermesInternal;
                    combined = "" + name + "-" + obj.nanoid();
                  }
                  obj.key = combined;
                  obj.name = name;
                  if (undefined !== params[closure_3]) {
                    const _Object = Object;
                    let merged = Object.assign({}, params[closure_3], closure_5);
                  } else {
                    merged = closure_5;
                  }
                  obj.params = merged;
                }
              });
              merged = Object.assign({}, key, obj);
            }
            return merged;
          }
        }
        index2 = key.index;
      } else if ("PUSH" === type) {
        const routeNames2 = key.routeNames;
        if (routeNames2.includes(type.payload.name)) {
          const tmp31 = routeParamList.routeGetIdList[type.payload.name];
          let tmp31Result;
          if (null != tmp31) {
            obj = { params: type.payload.params };
            tmp31Result = tmp31(obj);
          }
          let found;
          if (tmp31Result) {
            const routes1 = key.routes;
            found = routes1.find((name) => {
              let tmp = name.name === arg1.payload.name;
              if (tmp) {
                let tmp5;
                if (null != tmp31) {
                  const obj = { params: name.params };
                  tmp5 = tmp31(obj);
                }
                tmp = tmp31Result === tmp5;
                const tmp2 = tmp31Result;
              }
              return tmp;
            });
          }
          if (found) {
            let routes2 = key.routes;
            const found1 = routes2.filter((key) => key.key !== found.key);
            let obj2 = globalThis;
            const obj1 = {};
            if (undefined !== params[type.payload.name]) {
              const _Object8 = obj2.Object;
              params = type.payload.params;
              obj2 = {};
              let params6 = _Object8.assign(obj2, params[type.payload.name], params);
            } else {
              params6 = type.payload.params;
            }
            obj1.params = params6;
            found1.push(Object.assign({}, found, obj1));
          } else {
            const items = [];
            const obj3 = {};
            const tmp36 = name(key.routes);
            const _HermesInternal2 = HermesInternal;
            obj3.key = "" + type.payload.name + "-" + key(index2[2]).nanoid();
            obj3.name = type.payload.name;
            if (undefined !== params[type.payload.name]) {
              const _Object7 = Object;
              let params5 = Object.assign({}, params[type.payload.name], type.payload.params);
            } else {
              params5 = type.payload.params;
            }
            obj3.params = params5;
            const items1 = [obj3];
            const combined = items.concat(tmp36, items1);
            const _Object9 = Object;
            const obj4 = { index: combined.length - 1, routes: combined };
            return Object.assign({}, key, obj4);
          }
        } else {
          return null;
        }
      } else if ("POP" === type) {
        if (type.target === key.key) {
          if (type.source) {
            routes2 = key.routes;
            let index = routes2.findIndex((key) => key.key === arg1.source);
          }
          if (index > 0) {
            const _Math = Math;
            routes3 = key.routes;
            const substr = routes3.slice(0, Math.max(index - type.payload.count + 1, 1));
            const routes4 = key.routes;
            const combined1 = substr.concat(routes4.slice(index + 1));
            const _Object6 = Object;
            const obj5 = { index: combined1.length - 1, routes: combined1 };
            return Object.assign({}, key, obj5);
          } else {
            return null;
          }
        }
        index = key.index;
      } else if ("POP_TO_TOP" === type) {
        const obj6 = { type: "POP" };
        let obj7 = { count: key.routes.length - 1 };
        obj6.payload = obj7;
        return merged.getStateForAction(key, obj6, routeParamList);
      } else if ("NAVIGATE" === type) {
        if (undefined !== type.payload.name) {
          const routeNames = key.routeNames;
          if (!routeNames.includes(type.payload.name)) {
            return null;
          }
        }
        if (!type.payload.key) {
          if (!type.payload.name) {
            return null;
          }
        }
        let tmp7;
        if (undefined === type.payload.key) {
          if (undefined !== type.payload.name) {
            tmp7 = routeParamList.routeGetIdList[type.payload.name];
          }
        }
        let tmp7Result;
        if (null != tmp7) {
          const obj8 = { params: type.payload.params };
          tmp7Result = tmp7(obj8);
        }
        routes = key.routes;
        if (tmp7Result) {
          let num4 = routes.findIndex((name) => {
            let tmp = name.name === arg1.payload.name;
            if (tmp) {
              let tmp5;
              if (null != tmp7) {
                const obj = { params: name.params };
                tmp5 = tmp7(obj);
              }
              tmp = tmp7Result === tmp5;
              const tmp2 = tmp7Result;
            }
            return tmp;
          });
        } else {
          if (routes[key.index].name !== type.payload.name) {
            if (key.routes[key.index].key !== type.payload.key) {
              let diff = key.routes.length - 1;
              num4 = -1;
              if (diff >= 0) {
                while (true) {
                  if (key.routes[diff].name !== type.payload.name) {
                    num4 = diff;
                    if (key.routes[diff].key === type.payload.key) {
                      break;
                    } else {
                      diff = diff - 1;
                      num4 = -1;
                      break;
                    }
                  } else {
                    num4 = diff;
                    if (undefined === type.payload.key) {
                      break;
                    }
                  }
                  break;
                }
              }
            }
          }
          num4 = key.index;
        }
        if (-1 === num4) {
          if (type.payload.key) {
            if (undefined === type.payload.name) {
              return null;
            }
          }
        }
        if (-1 === num4) {
          if (undefined !== type.payload.name) {
            const items2 = [];
            const obj9 = {};
            key = type.payload.key;
            if (null == key) {
              obj7 = key(index2[2]);
              const _HermesInternal = HermesInternal;
              key = "" + type.payload.name + "-" + obj7.nanoid();
            }
            obj9.key = key;
            obj9.name = type.payload.name;
            obj9.path = type.payload.path;
            if (undefined !== params[type.payload.name]) {
              const _Object4 = Object;
              let params4 = Object.assign({}, params[type.payload.name], type.payload.params);
            } else {
              params4 = type.payload.params;
            }
            obj9.params = params4;
            const items3 = [obj9];
            const combined2 = items2.concat(name(key.routes), items3);
            const _Object5 = Object;
            const obj10 = { routes: combined2, index: combined2.length - 1 };
            return Object.assign({}, key, obj10);
          }
        }
        if (type.payload.merge) {
          if (undefined === type.payload.params) {
            if (undefined === params[tmp12.name]) {
              let params3 = tmp12.params;
            }
          }
          const _Object2 = Object;
          const _Object3 = Object;
          params3 = Object.assign({}, params[tmp12.name], tmp12.params, type.payload.params);
        } else {
          if (undefined !== params[tmp12.name]) {
            const _Object = Object;
            let params2 = Object.assign({}, params[tmp12.name], type.payload.params);
          } else {
            params2 = type.payload.params;
          }
          const obj11 = { index: num4 };
          const items4 = [];
          const routes5 = key.routes;
          if (params2 !== tmp12.params) {
            const obj12 = {};
            let path = type.payload.path;
            if (null == path) {
              path = tmp12.path;
            }
            obj12.path = path;
            obj12.params = params2;
            let merged1 = Object.assign({}, tmp12, obj12);
          } else {
            merged1 = key.routes[num4];
          }
          const items5 = [merged1];
          obj11.routes = items4.concat(name(routes5.slice(0, num4)), items5);
          return Object.assign({}, key, obj11);
        }
      } else if ("GO_BACK" === type) {
        let stateForAction = null;
        if (key.index > 0) {
          const obj13 = { type: "POP" };
          const obj14 = { count: 1 };
          obj13.payload = obj14;
          ({ target: obj2.target, source: obj2.source } = type);
          stateForAction = merged.getStateForAction(key, obj13, routeParamList);
        }
        return stateForAction;
      } else {
        obj = merged(index2[1]);
        return obj.getStateForAction(key, type);
      }
    },
    actionCreators: obj
  };
  const merged = Object.assign({}, importDefault(dependencyMap[1]), obj);
  const importDefault = merged;
  return merged;
};
export const StackActions = obj;
