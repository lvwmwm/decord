// Module ID: 1549
// Function ID: 1550
// Name: CHILD_STATE
// Dependencies: [1550]
// Exports: getFocusedRouteNameFromRoute

// Module 1549 (CHILD_STATE)
import _mod1550 from "module_1550" /* 1550 */;


export function getFocusedRouteNameFromRoute(state) {
  let index;
  let routes;
  let screen;
  state = state[_mod1550.CHILD_STATE];
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
}
