// Module ID: 1542
// Function ID: 1543
// Name: react
// Dependencies: [19, 1543]
// Exports: useRoute

// Module 1542 (react)
import _mod1543 from "module_1543" /* 1543 */;
import react from "react" /* 19 */;


export const useRoute = function useRoute() {
  const context = react.useContext(_mod1543.NavigationRouteContext);
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
