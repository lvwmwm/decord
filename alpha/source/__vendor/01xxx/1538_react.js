// Module ID: 1538
// Function ID: 1539
// Name: react
// Dependencies: [19, 1539]
// Exports: useRoute

// Module 1538 (react)
import _mod1539 from "module_1539" /* 1539 */;
import react from "react" /* 19 */;


export function useRoute() {
  const context = react.useContext(_mod1539.NavigationRouteContext);
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
