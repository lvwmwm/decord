// Module ID: 1533
// Function ID: 17507
// Name: getStateFromParams
// Dependencies: []
// Exports: default

// Module 1533 (getStateFromParams)
let closure_3 = importAll(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;
function getStateFromParams(params) {
  if (null != params) {
    if (params.state) {
      let state = params.state;
    }
    return state;
  }
  if (null != params) {
    if (params.screen) {
      let obj = {};
      obj = {};
      ({ screen: obj2.name, params: obj2.params } = params);
      let tmp;
      if (params.screen) {
        tmp = getStateFromParams(params.params);
      }
      obj.state = tmp;
      const items = [obj];
      obj.routes = items;
      state = obj;
    }
  }
}

export default function useLinkProps(to) {
  to = to.to;
  const arg1 = to;
  const importDefault = to.action;
  closure_2 = React.useContext(arg1(closure_2[2]).NavigationContainerRefContext);
  const React = React.useContext(arg1(closure_2[2]).NavigationHelpersContext);
  const options = React.useContext(importDefault(closure_2[3])).options;
  const getStateFromParams = importDefault(closure_2[4])();
  let getPathFromState;
  if (null != options) {
    getPathFromState = options.getPathFromState;
  }
  if (null == getPathFromState) {
    getPathFromState = arg1(closure_2[2]).getPathFromState;
  }
  let obj = {};
  let pathFromState = to;
  if ("string" !== typeof to) {
    obj = {};
    obj = {};
    ({ screen: obj3.name, params: obj3.params } = to);
    obj.state = getStateFromParams(to.params);
    const items = [obj];
    obj.routes = items;
    let config;
    if (null != options) {
      config = options.config;
    }
    pathFromState = getPathFromState(obj, config);
  }
  obj.href = pathFromState;
  obj.accessibilityRole = "link";
  obj.onPress = function onPress(defaultPrevented) {
    if (!defaultPrevented) {
      if (action) {
        if (closure_3) {
          closure_3.dispatch(action);
        } else if (closure_2) {
          closure_2.dispatch(action);
        } else {
          const _Error = Error;
          const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
          throw error;
        }
      } else {
        callback(to);
      }
    }
  };
  return obj;
};
