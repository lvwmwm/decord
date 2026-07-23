// Module ID: 1533
// Function ID: 17513
// Name: getStateFromParams
// Dependencies: [31, 27, 1459, 1534, 1535]
// Exports: default

// Module 1533 (getStateFromParams)
import result from "result";
import { Platform } from "get ActivityIndicator";

const require = arg1;
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
  const action = to.action;
  const dependencyMap = React.useContext(to(1459).NavigationContainerRefContext);
  React = React.useContext(to(1459).NavigationHelpersContext);
  const options = React.useContext(action(1534)).options;
  const getStateFromParams = action(1535)();
  let getPathFromState;
  if (null != options) {
    getPathFromState = options.getPathFromState;
  }
  if (null == getPathFromState) {
    getPathFromState = to(1459).getPathFromState;
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
        if (result) {
          result.dispatch(action);
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
