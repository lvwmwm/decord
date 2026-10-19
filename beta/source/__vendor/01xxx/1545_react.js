// Module ID: 1545
// Function ID: 1546
// Name: react
// Dependencies: [19, 1546]
// Exports: useRoute

// Module 1545 (react)
import _mod1546 from "module_1546" /* 1546 */;
import react from "react" /* 19 */;


export const useRoute = function useRoute() {
  const context = react.useContext(_mod1546.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
