// Module ID: 1556
// Function ID: 1557
// Name: CHILD_STATE
// Dependencies: [1557]
// Exports: getFocusedRouteNameFromRoute

// Module 1556 (CHILD_STATE)
import _mod1557 from "module_1557" /* 1557 */;


export const getFocusedRouteNameFromRoute = function getFocusedRouteNameFromRoute(state) {
  let index;
  let routes;
  let screen;
  state = state[_mod1557.CHILD_STATE];
  if (state == null) {
    state = state.state;
  }
  const params = state.params;
  if (state) {
    ({ index, routes } = state);
    if (index == null) {
      let num2;
      if (typeof state.type !== "string") {
        num2 = state.routes.length - 1;
      } else {
        num2 = 0;
      }
      index = num2;
    }
    screen = routes[index].name;
  } else {
    let screen1;
    if (params != null) {
      screen1 = params.screen;
    }
    if (typeof screen1 === "string") {
      screen = params.screen;
    }
  }
  return screen;
};
