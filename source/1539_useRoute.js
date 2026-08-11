// Module ID: 1539
// Function ID: 1540
// Name: useRoute
// Dependencies: [19, 1540]
// Exports: useRoute

// Module 1539 (useRoute)
import noop from "noop";

const require = arg1;

export const useRoute = function useRoute() {
  const context = React.useContext(require(1540) /* context */.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
