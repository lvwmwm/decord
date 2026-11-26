// Module ID: 1541
// Function ID: 1542
// Name: react
// Dependencies: [19, 1542]
// Exports: useRoute

// Module 1541 (react)
import _mod1542 from "module_1542" /* 1542 */;
import react from "react" /* 19 */;


export function useRoute() {
  const context = react.useContext(_mod1542.NavigationRouteContext);
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
