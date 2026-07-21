// Module ID: 1464
// Function ID: 17001
// Dependencies: []

// Module 1464
arg5.default = {
  getStateForAction(routes, type) {
    type = routes;
    const arg6 = type;
    type = type.type;
    if ("SET_PARAMS" === type) {
      if (type.source) {
        routes = routes.routes;
        let index = routes.findIndex((key) => key.key === arg1.source);
      } else {
        index = routes.index;
      }
      let merged = null;
      if (-1 !== index) {
        const _Object2 = Object;
        let obj = {};
        routes = routes.routes;
        obj.routes = routes.map((params) => {
          let merged = params;
          if (arg1 === index) {
            const _Object = Object;
            const obj = {};
            const _Object2 = Object;
            obj.params = Object.assign({}, params.params, arg1.payload.params);
            merged = Object.assign({}, params, obj);
          }
          return merged;
        });
        merged = Object.assign({}, routes, obj);
      }
      return merged;
    } else if ("RESET" === type) {
      const payload = type.payload;
      let tmp2 = null;
      if (0 !== payload.routes.length) {
        const routes2 = payload.routes;
        tmp2 = null;
        if (!routes2.some((name) => {
          const routeNames = name.routeNames;
          return !routeNames.includes(name.name);
        })) {
          let tmp3 = payload;
          if (false === payload.stale) {
            let merged1 = null;
            if (routes.routeNames.length === payload.routeNames.length) {
              const routeNames = payload.routeNames;
              merged1 = null;
              if (!routeNames.some((arg0) => {
                const routeNames = arg0.routeNames;
                return !routeNames.includes(arg0);
              })) {
                const _Object = Object;
                obj = {};
                const routes1 = payload.routes;
                obj.routes = routes1.map((key) => {
                  let merged = key;
                  if (!key.key) {
                    const _Object = Object;
                    const obj = {};
                    const _HermesInternal = HermesInternal;
                    obj.key = "" + key.name + "-" + key(arg1[0]).nanoid();
                    merged = Object.assign({}, key, obj);
                    const obj2 = key(arg1[0]);
                  }
                  return merged;
                });
                merged1 = Object.assign({}, payload, obj);
              }
            }
            tmp3 = merged1;
          }
          tmp2 = tmp3;
        }
      }
      return tmp2;
    } else {
      return null;
    }
  },
  shouldActionChangeFocus(type) {
    return "NAVIGATE" === type.type;
  }
};
