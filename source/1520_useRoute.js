// Module ID: 1520
// Function ID: 1521
// Name: useRoute
// Dependencies: [19, 1521]
// Exports: useRoute

// Module 1520 (useRoute)
import noop from "noop";

const require = arg1;

export const useRoute = function useRoute() {
  const context = React.useContext(require(1521) /* context */.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
