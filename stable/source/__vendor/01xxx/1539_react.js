// Module ID: 1539
// Function ID: 1540
// Name: react
// Dependencies: [19, 1540]
// Exports: useRoute

// Module 1539 (react)
import _mod1540 from "module_1540" /* 1540 */;
import react from "react" /* 19 */;


export function useRoute() {
  const context = react.useContext(_mod1540.NavigationRouteContext);
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
