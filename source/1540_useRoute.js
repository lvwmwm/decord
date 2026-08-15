// Module ID: 1540
// Function ID: 1541
// Name: useRoute
// Dependencies: [19, 1541]
// Exports: useRoute

// Module 1540 (useRoute)
import noop from "noop";

const require = arg1;

export const useRoute = function useRoute() {
  const context = React.useContext(require(1541) /* context */.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
