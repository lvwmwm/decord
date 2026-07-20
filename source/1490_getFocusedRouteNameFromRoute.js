// Module ID: 1490
// Function ID: 17194
// Name: getFocusedRouteNameFromRoute
// Dependencies: []

// Module 1490 (getFocusedRouteNameFromRoute)
arg5.default = function getFocusedRouteNameFromRoute(state) {
  let index;
  let routes;
  state = state[closure_0(undefined, closure_1[0]).CHILD_STATE];
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
