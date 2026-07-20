// Module ID: 1549
// Function ID: 17571
// Name: getRootStateForNavigate
// Dependencies: []
// Exports: default

// Module 1549 (getRootStateForNavigate)
let closure_3 = importAll(dependencyMap[0]);
function getRootStateForNavigate(parent, state) {
  parent = parent.getParent();
  if (parent) {
    state = parent.getState();
    let obj = { index: 0 };
    const _Object = Object;
    obj = { state };
    const items = [Object.assign({}, state.routes[state.index], obj)];
    obj.routes = items;
    return getRootStateForNavigate(parent, obj);
  } else {
    return state;
  }
}

export default function useLinkBuilder() {
  const context = React.useContext(arg1(dependencyMap[1]).NavigationHelpersContext);
  const arg1 = context;
  const context1 = React.useContext(importDefault(dependencyMap[2]));
  const importDefault = context1;
  const items = [context1, context];
  return React.useCallback((name, params) => {
    const options = context1.options;
    let enabled;
    if (null != options) {
      enabled = options.enabled;
    }
    if (false !== enabled) {
      let obj = {};
      if (context) {
        obj.index = 0;
        obj = { name, params };
        const items = [obj];
        obj.routes = items;
        let tmp3 = callback(context, obj);
      } else {
        obj.index = 0;
        obj = { name, params };
        const items1 = [obj];
        obj.routes = items1;
        tmp3 = obj;
      }
      if (null != options) {
        if (options.getPathFromState) {
          let config;
          if (null != options) {
            config = options.config;
          }
          let pathFromState = options.getPathFromState(tmp3, config);
        }
        return pathFromState;
      }
      let config1;
      if (null != options) {
        config1 = options.config;
      }
      pathFromState = context(closure_2[1]).getPathFromState(tmp3, config1);
      const obj4 = context(closure_2[1]);
    }
  }, items);
};
