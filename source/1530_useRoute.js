// Module ID: 1530
// Function ID: 17506
// Name: useRoute
// Dependencies: [31, 1483]
// Exports: default

// Module 1530 (useRoute)
import result from "result";


export default function useRoute() {
  const context = React.useContext(importDefault(1483));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
