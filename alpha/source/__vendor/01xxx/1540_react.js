// Module ID: 1540
// Function ID: 1541
// Name: react
// Dependencies: [19, 1541]
// Exports: useRoute

// Module 1540 (react)
import _mod1541 from "module_1541" /* 1541 */;
import react from "react" /* 19 */;


export function useRoute() {
  const context = react.useContext(_mod1541.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
}
