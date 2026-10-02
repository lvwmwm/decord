// Module ID: 1531
// Function ID: 1532
// Name: react
// Dependencies: [19, 1532]
// Exports: useRoute

// Module 1531 (react)
import _mod1532 from "module_1532" /* 1532 */;
import react from "react" /* 19 */;


export const useRoute = function useRoute() {
  const context = react.useContext(_mod1532.NavigationRouteContext);
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
