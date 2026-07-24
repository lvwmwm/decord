// Module ID: 1490
// Function ID: 17201
// Name: getFocusedRouteNameFromRoute
// Dependencies: [1491]

// Module 1490 (getFocusedRouteNameFromRoute)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function getFocusedRouteNameFromRoute(state) {
  let index;
  let routes;
  state = state[require(undefined, 1491) /* useRouteCache */.CHILD_STATE];
  if (null == state) {
    state = state.state;
  }
  const params = state.params;
  if (state) {
    ({ index, routes } = state);
    if (null == index) {
      if ("string" !== typeof state.type) {
        let num = state.routes.length - 1;
      } else {
        num = 0;
      }
      index = num;
    }
    let screen = routes[index].name;
  } else {
    screen = undefined;
    if (null != params) {
      screen = params.screen;
    }
    if ("string" === typeof screen) {
      screen = params.screen;
    }
  }
  return screen;
};
