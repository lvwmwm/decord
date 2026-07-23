// Module ID: 1508
// Function ID: 17349
// Name: useNavigation
// Dependencies: [31, 1479, 1484]
// Exports: default

// Module 1508 (useNavigation)
import result from "result";


export default function useNavigation() {
  let context = React.useContext(importDefault(1479));
  const context1 = React.useContext(importDefault(1484));
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (null != context1) {
    context = context1;
  }
  return context;
};
