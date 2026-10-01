// Module ID: 1525
// Function ID: 1526
// Name: react
// Dependencies: [19, 1526]
// Exports: useRoute

// Module 1525 (react)
import _mod1526 from "module_1526" /* 1526 */;
import react from "react" /* 19 */;


export const useRoute = function useRoute() {
  const context = react.useContext(_mod1526.NavigationRouteContext);
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
