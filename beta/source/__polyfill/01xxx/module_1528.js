// Module ID: 1528
// Function ID: 1529
// Dependencies: [19, 1529]
// Exports: useRoute

// Module 1528
import _mod1529 from "module_1529" /* 1529 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useRoute = function useRoute() {
  const context = noop.useContext(_mod1529.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
