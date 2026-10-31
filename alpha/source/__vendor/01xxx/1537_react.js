// Module ID: 1537
// Function ID: 1538
// Name: react
// Dependencies: [19, 1538]
// Exports: useRoute

// Module 1537 (react)
import _mod1538 from "module_1538" /* 1538 */;
import react from "react" /* 19 */;


export function useRoute() {
  const context = react.useContext(_mod1538.NavigationRouteContext);
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
