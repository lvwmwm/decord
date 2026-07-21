// Module ID: 1489
// Function ID: 17194
// Name: createNormalizedConfigItem
// Dependencies: []
// Exports: default

// Module 1489 (createNormalizedConfigItem)
let closure_0 = importDefault(dependencyMap[0]);
function createNormalizedConfigItem(initialRouteName) {
  if ("object" === typeof initialRouteName) {
    if (null != initialRouteName) {
      const obj = { initialRouteName: initialRouteName.initialRouteName };
      let tmp3;
      if (null != initialRouteName.screens) {
        tmp3 = createNormalizedConfigs(initialRouteName.screens);
      }
      obj.screens = tmp3;
    }
    return {};
  }
}
function createNormalizedConfigs(arg0) {
  const entries = Object.entries(arg0);
  return entries.reduce((arg0, arg1) => {
    const tmp = callback(arg1, 2);
    arg0[tmp[0]] = callback2(tmp[1]);
    return arg0;
  }, {});
}

export default function getActionFromState(stateFromPath, config) {
  let index;
  let routes;
  if (config) {
    let obj = createNormalizedConfigItem(config);
  } else {
    obj = {};
  }
  if (null != stateFromPath.index) {
    routes = stateFromPath.routes;
    let substr = routes.slice(0, stateFromPath.index + 1);
  } else {
    substr = stateFromPath.routes;
  }
  if (0 !== substr.length) {
    if (1 !== substr.length) {
      if (2 === substr.length) {
        if (undefined === substr[0].key) {
          let initialRouteName;
          if (null != obj) {
            initialRouteName = obj.initialRouteName;
          }
        }
      }
      obj = { type: "RESET", payload: stateFromPath };
      return obj;
    }
    ({ index, routes } = stateFromPath);
    if (null == index) {
      index = stateFromPath.routes.length - 1;
    }
    let state;
    if (null != routes[index]) {
      state = tmp3.state;
    }
    if (null != obj) {
      const screens = obj.screens;
      if (null != screens) {
        let name;
        if (null != tmp3) {
          name = tmp3.name;
        }
        let tmp5 = screens[name];
      }
    }
    const _Object = Object;
    const merged = Object.assign({}, tmp3.params);
    let tmp9;
    if (routes[index]) {
      obj = {};
      ({ name: obj3.name, path: obj3.path } = tmp3);
      obj.params = merged;
      tmp9 = obj;
    }
    let tmp10 = merged;
    if (state) {
      while (0 !== state.routes.length) {
        if (null != state.index) {
          let routes1 = state.routes;
          let substr1 = routes1.slice(0, state.index + 1);
        } else {
          substr1 = state.routes;
        }
        let tmp12 = substr1[substr1.length - 1];
        let _Object2 = Object;
        let obj1 = { initial: undefined, screen: undefined, params: undefined, state: undefined };
        let merged1 = Object.assign(tmp10, obj1);
        if (1 === substr1.length) {
          if (undefined === substr1[0].key) {
            tmp10.initial = true;
            tmp10.screen = tmp12.name;
            let tmp15 = tmp11;
            if (tmp12.state) {
              let _Object3 = Object;
              tmp10.params = Object.assign({}, tmp12.params);
              let params = tmp10.params;
            } else {
              ({ path: tmp10.path, params: tmp10.params } = tmp12);
              params = tmp10;
            }
            let tmp16;
            if (null != tmp5) {
              let screens2 = tmp5.screens;
              if (null != screens2) {
                tmp16 = screens2[tmp12.name];
              }
            }
            tmp5 = tmp16;
            tmp10 = params;
            let tmp11 = tmp15;
          }
        }
        if (2 === substr1.length) {
          if (undefined === substr1[0].key) {
            let initialRouteName1;
            if (null != tmp5) {
              initialRouteName1 = tmp5.initialRouteName;
            }
            if (substr1[0].name === initialRouteName1) {
              if (undefined === substr1[1].key) {
                tmp10.initial = false;
                tmp10.screen = tmp12.name;
                tmp15 = tmp5;
              }
            }
          }
        }
        tmp10.state = state;
      }
    }
    if (tmp9) {
      const obj2 = { type: "NAVIGATE", payload: tmp9 };
      return obj2;
    }
  }
};
