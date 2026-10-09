// Module ID: 1543
// Function ID: 1544
// Name: react
// Dependencies: [19, 1544]
// Exports: useRoute

// Module 1543 (react)
import _mod1544 from "module_1544" /* 1544 */;
import react from "react" /* 19 */;


export const useRoute = function useRoute() {
  const context = react.useContext(_mod1544.NavigationRouteContext);
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
